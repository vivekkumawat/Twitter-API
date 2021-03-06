# Twitter-API

## Tech Stack Used
1. Frameworks:- Node.js, Express.js, Mongoose
2. Database:- MongoDB ATLAS
3. Cloud:- Heroku

## Endpoints
Base Endpoint URL:- https://twitter-api-endpoint.herokuapp.com/

Sample Authorization header token:- `eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI2MDkxNmRiMGYzM2M2ZjNiN2U2NTFmOWQiLCJpYXQiOjE2MjAxNDM1NDJ9.WepqrjQWICRwrOPzdWVVauESi2awfuc7YX4Dghk2svc`

### Auth Endpoints
1. POST https://twitter-api-endpoint.herokuapp.com/api/auth/login

Sample Payload:- 

`{
    "email": "vivekkumawat360@gmail.com",
    "password": "123@test"
}`

2. POST https://twitter-api-endpoint.herokuapp.com/api/auth/register

Sample Payload:- 

`{
    "name": "Vivek Kumawat",
    "email": "vivekkumawat360@gmail.com",
    "password": "123@test"
}`

!Valid Authorization token is required to pass in header in order to run these endpoints.

### User Follow/Unfollow Endpoints
1. GET https://twitter-api-endpoint.herokuapp.com/api/user/follow/:whomId
2. GET https://twitter-api-endpoint.herokuapp.com/api/user/unfollow/:whomId

### Tweet Endpoints
1. POST https://twitter-api-endpoint.herokuapp.com/api/tweet/post

Sample Payload:- 
`{
    "tweet": "This is a new tweet"
}`

2. GET https://twitter-api-endpoint.herokuapp.com/api/tweet/delete/:tweetId
3. GET https://twitter-api-endpoint.herokuapp.com/api/tweet/showLatest

## Database Schema
You can find all the database models/Schema inside this folder https://github.com/vivekkumawat/Twitter-API/tree/master/src/models

## How much this system can scale up to ?
This system can easily handle small user base and can  scale upto between small to low mid user base, but in order to scale this for big no. of user bases we can furthermore decouple or split this API into more Microservice for example:- sperate microservices for Authentication, Handling Tweets,  Follo/Unfollow etc.
And also we can split followers/following array inside User schema into new seprate Documents
