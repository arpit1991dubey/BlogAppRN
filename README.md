# BlogAppRN
A blog app template with post,fetch ,edit options to store data on a JSON server and interact with the same to modify entries as required with full back-end and front-end build

# Steps to run and configure the server and synchronising the server with the App.
1- Go to npmjs.com/package/json-server and have a look at the JSON server documentation.  
2- Move out of the current app directory and create a new directory with name 'jsonserver'  
3- Get inside the 'jsonserver' , in the terminal type 'npm init' and press enter in all the further steps.  
4- In this project we will use ngrok to configure and get our server to be hosted online.  
5- In the same directory now enter 'npm install json-server ngrok' , this will install json server with ngrok in your current directory.  
6- Now open the directory in your preffered editor(mine is VScode).  
7- Create a new file named db.json in the directory.  
8- This will store the schema and data received and modified by the user in the app you can assume it as the database of the server.  
9- You can define the schema as per your app's requirment ,i am storing informations regading the blogposts so i've kept it relevant to that.  
10- Now in the code editor go to 'package.json' file.  
11- Under the 'scripts' section there will be a test line , remove that test line and replace it with the following->{ "db":"json-server -w db.json",
"tunnel":"ngrok http 3000"     (3000 is the default port on which ngrok runs generally you can change it accordingly if you have someting                                 else running on it )
}  
12- Return back to your terminal and run 'npm run db'.  
13- The terminal window will look simialr to this-  
