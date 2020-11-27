/*
Making a Post Route
So far, we have only made GET requests to our server. A POST request can send data securely through the request body. In order to make POST requests, first we need to include the "body-parser" library from our node_modules (included with express). Add these lines after the app variable:

const bodyParser = require('body-parser');
app.use(bodyParser.json());

Let's write a function to handle a POST request made to the 'login' endpoint, as if a user was trying to log in:

app.post('/login',function(req,res){
 	const username=req.body.username;
 	const password=req.body.password;
 
 	const mockUsername="billyTheKid";
 	const mockPassword="superSecret";
 
 	if (username===mockUsername && password===mockPassword){
      	res.json({
      	 	success: true,
      	 	message: 'password and username match!',
      	 	token: 'encrypted token goes here'
      	})
 	} else {
      	res.json({
      	 	success: false,
      	 	message: 'password and username do not match'
      	})
 	}
})

--------------------------------

Your entire file should look like this now:

const express = require('express');
const app = express();
const bodyParser = require('body-parser');

app.use(bodyParser.json())

const mockUserData=[
	{name:'Mark'},
	{name:'Jill'}
]

app.get('/users',function(req,res){
	res.json({
		success: true,
		message: 'successfully got users. Nice!',
		users: mockUserData
	})
})
// colons are used as variables that be viewed in the params
app.get('/users/:id',function(req,res){
	console.log(req.params.id)
	res.json({
		success: true,
		message: 'got one user',
		user: req.params.id
	})
})

app.post('/login',function(req,res){
	// Typically passwords are encrypted using something like bcrypt before sending to database
	const username=req.body.username;
	const password=req.body.password;

	// This should come from the database
	const mockUsername="billyTheKid";
	const mockPassword="superSecret";

	if (username===mockUsername && password===mockPassword){
		// In practice, use JSON web token sign method here to make an encrypted token
		res.json({
			success: true,
			message: 'password and username match!',
			token: 'encrypted token goes here'
		})
	} else {
		res.json({
			success: false,
			message: 'password and username do not match'
		})
	}

})

app.listen(8000,function(){console.log('server is listening')})

Time to commit our changes!

git add server.js
git commit -m"add login POST route"
git push origin master

--------------------------------

Notice how we used app.post this time instead of app.get. We also compared the values passed from the request body to see if they match our mock data (which would normally come from a database). If they match, it will send a JSON file with an additional value, where a token could be stored. However, if they don't match, it will return an error message (without the token).

bulb As a security precaution, you should never save passwords directly into your database. Use a tool like bcrypt to save a hashed version, which will be decoded at login.

With this last push, your repository should look like this.

Click here to learn how to test a POST route.
*/