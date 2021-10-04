import express, { Request, Response } from "express";
import bodyParser from "body-parser";
import { filterImageFromURL, deleteLocalFiles } from "./util/util";
import Joi from "joi";

const urlSchema = Joi.string()
  .trim()
  .uri({
    scheme: ["http", "https"]
  });

(async () => {
  // Init the Express application
  const app = express();

  // Set the network port
  const port = process.env.PORT || 8082;

  // Use the body parser middleware for post requests
  app.use(bodyParser.json());

  // Endpoint to filter an image from a public url.
  // QUERY PARAMATERS
  //    image_url: URL of a publicly accessible image
  // RETURNS
  //   the filtered image file [!!TIP res.sendFile(filteredpath); might be useful]
  app.get("/filteredimage", async (req: Request, res: Response) => {
    try {
      // Sanitize and validate the image_url query parameter
      const imageUrl: string = await urlSchema.validateAsync(
        req.query.image_url
      );
      // Filter the image at the URL
      const filterImagePath: string = await filterImageFromURL(imageUrl);
      // Send the filtered image and delete the image after it is sent.
      return res.status(200).sendFile(filterImagePath, () => {
        deleteLocalFiles([filterImagePath]);
      });
    } catch (err) {
      console.error(err);
      return res.status(422).send({ message: "Invalid image_url parameter" });
    }
  });

  // Root Endpoint
  // Displays a simple message to the user
  app.get("/", async (req: Request, res: Response) => {
    res.send("try GET /filteredimage?image_url={{}}");
  });

  // Start the Server
  app.listen(port, () => {
    console.log(`server running http://localhost:${port}`);
    console.log(`press CTRL+C to stop server`);
  });
})();
