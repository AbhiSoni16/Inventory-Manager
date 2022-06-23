# Inventory-Manager - A single page web app
A full stack project. Frontend: ReactJS, backend: SpringBoot REST, DBMS: In-memory H2

Prerequisites:
1) Maven 3+
2) JDK 1.8+
3) Node.js
4) Java IDE

Steps to run in local:

For backend, SpringBoot
1) Check-out the code import inventory-manager project in a Java IDE of your choice(eg. Eclipse).
2) Run 'mvn clean install' in the project root directory.
3) After a successful build, run 'mvn spring-boot:run'.
4) Once the SpringBoot app is up and running, hit http://localhost:8080/h2-console and login with the DB properties given in Inventory-Manager\inventory-manager\src\main\resources\application.properties file.
5) Run Inventory-Manager\inventory-manager\backup\schema.sql to create the INVENTORY table followed by Inventory-Manager\inventory-manager\backup\data.sql to load some test data in the table
6) GET & POST endpoint URL: http://localhost:8080/stockall. You can use free HTTP client such as ReqBin to test POST.

For Frontend, ReactJS
1) Open C:\Users\Soni_\GitRepo\Inventory-Manager\inventory-manager\appui folder in an editor of your choice(eg. VS Code) OR navigate to the folder in powershell.
2) If you wish to delete node_modules and package-lock.json under appui, then run 'npm install' followed by 'npm start'.
3) Or else run 'npm start' only.
4) Hit http://localhost:3000/ to load the app UI.
