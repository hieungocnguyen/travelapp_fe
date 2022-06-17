## **A Travel App - Course Project**

### This project is build with ReactJS and Django Rest Framework
[[API](https://github.com/thuvan2512/travelapp-django) - Thu Van] and the database is MySQL.

### **How to run project**
#### 1. Install MySQL
  - Create a new schema named **travelappdb** with charset/collation **utf8mp4/unicode_ci**
#### 2. In order to run the back-end project
- Clone API project above
- Change value of **USER** and **PASSWORD** fields at variable **DATABASES** in ***settings.py*** file (your local account MySQL)
- Creating and activating a virtual env and executing the command: ***pip install -r requirements.txt***
- Executing the command: ***python manage.py migrate***
- Create superuser in terminal: ***python manage.py createsuperuser***
- Running the server: ***python manage.py runserver***
  
#### 3. Create app and get oauth2 info
- Login with superuser: http://localhost:8000/admin
- Access http://localhost:8000/o/applications
- After create new app, copy **client_id** and **client_secret** and patse into ***OAUTH2_INFO*** variable in ***settings.py*** file

#### 4. In order to run the front-end project
- Moving to the project folder and executing the command: ***npm install***
- Executing the command: ***yarn start***


