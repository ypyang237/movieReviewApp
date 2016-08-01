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
$ node server.js
```
To view the front end ReactJS application, open localhost:3000 in your browser.

The endpoints: 

##### /api 

GET
> GET gets all the reviews.
> The [Get All Reviews] link on the front end, prompts GET to respond with all reviews and displays them with the option to edit. 

POST
> POST adds a review.
> Header : Content-Type : Application/JSON
> Body parameters to be sent via JSON: E.g. { name : "Tarzan", rating : 7.2 }

> The [Add a Review] link, prompts POST to respond by creating a new movie review, specifying the title and rating of the movie. 

PUT
> PUT edits a review, selected by id
> Header : Content-Type : Application/JSON
> Body parameters to be sent via JSON: E.g.  { id : 1, name : "Tarzan" , rating : 6.8 }

> After getting either one or all reviews, the Edit button next to each review will redirect to the edit form with pre-populated values. Upon clicking the "Save Changes" button, the state is refreshed and the values are stored in the server. 

DELETE
> DELETE removes a review by it's id. 
> Header : Content-Type : Application/JSON
> Body parameters to be sent via JSON: E.g.  { id : 2 }

>The "Delete Reviews" button, which exists in the /edit/{id} route, will trigger the DELETE functionalty on the server.

##### /api/:query
GET
> Finds reviews, filtered by indexOf matching name.
> E.g. searching "Ta" would return Tarzan as well as Avatar if exists

> The [Search Reviews] link prompts the front end to send a GET request to the server which will respond with the reviews with names matching the query being searched in the input bar. 

##### /id/:id
GET
> Finds one review based on unique matching index.
> E.g. searching id = 1 will return the respective review based on index.

> On the front end, this is used to allow the pre-population of the form in the [Search Reviews] component when navigated to the /edit/{id} route. 


