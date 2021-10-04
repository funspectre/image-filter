# Udagram Image Filtering Microservice

Udagram is a simple cloud application developed alongside the Udacity Cloud Engineering Nanodegree. It allows users to register and log into a web client, post photos to the feed, and process photos using an image filtering microservice.

The project is split into three parts:
1. [The Simple Frontend](https://github.com/udacity/cloud-developer/tree/master/course-02/exercises/udacity-c2-frontend)
A basic Ionic client web application which consumes the RestAPI Backend.
2. [The RestAPI Backend](https://github.com/udacity/cloud-developer/tree/master/course-02/exercises/udacity-c2-restapi), a Node-Express server which can be deployed to a cloud service.
3. The Image Filtering Microservice, the focus of this repo. It is a Node-Express application which runs a simple script to process images.

You may access a live version of the service at [this URL]( http://sigmage-filter-dev.eba-g4xd2v6p.us-east-1.elasticbeanstalk.com ).

## Setup Development Environment

You'll need to create a new node server. Open a new terminal within the project directory and run:

1. Initialize a new project: `npm i`
2. Run the development server with `npm run dev`
3. Import the [Postman collection file]( ./cloud-cdnd-c2-final.postman_collection.json ) to test the endpoint.

