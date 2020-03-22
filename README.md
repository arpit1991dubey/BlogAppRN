# BlogAppRN
A blog app template with post,fetch ,edit options to store data on a JSON server and interact with the same to modify entries as required with full back-end and front-end build

# Steps to run and configure the server and synchronise the server with App.
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
![](Server%20demo%20and%20visuals/server%20config.JPG)



14- You can always change the port in 'package.json' if you encounter some error.  
15- Open a new terminal and point to the same directory called jsonserver and run 'npm run tunnel'  
16- Yow will se a new popup in terminal which resembles something like this.  
![](Server%20demo%20and%20visuals/ngrokConfig.JPG)


17- Now copy the firs fowwarding link 'http://xyz123.ngrok.io' (this is just and example you will get another link) .  
18- Now this is the link which will be used to acces your server from outside world, which means your server is now hosted online.  
19- You can go to a web browser and paste this link you will see a message "Congrats you're succesfully running JSON server" , time to be happy now, you have succesfully come so far.  
20- Remember that this ngrok link is not a static adderess to your server , it will expire in a time period of 8 hours , you can get a static IP by paying some charges although.  
21- Now install axios to your directory to get and post request, you can use fetch function too but i feel axios more easy and modular.-for installing axios 'npm install axios'  
22- Paste the forwarding address in your baseurl section of the jsonServer file.  
![](Server%20demo%20and%20visuals/jsonserverconfigngrok.JPG)


23- Congrats you are done with the JSON server setup.  
24- Try modifing and adding posts via app and see the 'db.js' file change accrodingly,it'll be fun.Cheers  

# Demo of the working app connected with server -:  
Creating an entry  
![](Server%20demo%20and%20visuals/create%20entry.gif)  
Modifying an entry  
![](Server%20demo%20and%20visuals/modifyentry.gif)  

