/* Get JSON data
Now that our server is listening for requests being made on localhost:8000 let's return some mock JSON data. Add the following to your server.js file:

const mockUserData=[
{name:'Mark'},
{name:'Jill'}
]
app.get('/users', function(req,res){
 	res.json({
 	 	success: true,
 	 	message: 'successfully got users. Nice!',
 	 	users: mockUserData
 	})
})

Overall your file should look like this:

const express = require('express');
const app = express();

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

app.listen(8000,function(){console.log('server is listening')})


Let's save your changes on GitHub:

git add server.js
git commit -m"add first GET route"
git push origin master

--------------------------------

You just made your first endpoint! This function will respond to a GET request at http://localhost:8000/users with a JSON file, which includes our mockData under the key 'users'. Let's test it out!

Restart your server (CTRL+C, then run node server.js) since we changed the file. Open a browser and navigate to http://localhost:8000/users

You should see a JSON file, served up from your terminal!💁‍

If not, make sure your repository looks like this.

Click here for the next step
*/