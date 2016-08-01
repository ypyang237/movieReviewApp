# Movie Reviewing ReactJS Application

Built with Node.js, Express and React, this is a simple movie reviewing application using RESTful API with the following functionalities: 

- Get all movie reviews
- Get a single movie review (Search as you type)
- Update a movie review
- Create a new movie review
- Delete a movie review

### Installation

After you have cloned the repository, please run npm install for dependencies.

```sh
$ npm install 
```
cd into the app, and run it with nodemon. 
```sh
$ cd movieReviewApp
$ nodemon server.js
```

The endpoints: 

##### /api 

GET
> GET gets all the reviews. 
> The [Get All Reviews] link, prompts GET to respond with all reviews and displays them with the option to edit. 

POST
> POST adds a review. 

> The [Add a Review] link, prompts POST to respond by creating a new movie review, specifying the title and rating of the movie. 

PUT
> PUT edits a review. 

> After getting either one or all reviews, the Edit button next to each review will redirect to the edit form with pre-populated values. Upon clicking the "Save Changes" button, the state is refreshed and the values are stored in the server. 

DELETE
> DELETE removes a review by it's id. 

>The "Delete Reviews" button, which exists in the /edit/{id} route, will trigger the DELETE functionalty on the server.

##### /:query
> The [Search Reviews] link prompts GET to respond with the review closest to what is being searched in the input bar. 

##### /id/:id
> This is to allow the pre-population of the form when navigated to the /edit/{id} route. 
* also allows to GET by id. 


