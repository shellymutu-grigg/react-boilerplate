# Server folder setup for server side layer

## Documentation:
1. Navigate into "/server/db" folder in terminal //Or be prepared to adjust "knex" script in package.json file to correctly locate knexfile.js
2. npm i knex sqlite3
3. npx knex init //This will create knexfile.js in correct location
4. npx knex migrate:make object //This will create the migration file xxx_objects.js in the migrations folder
5. Edit "/db/migrations/xxx_objects.js" to define database table as required
6. npx knex migrate:latest  //This will create dev.sqlite3 file in correct location as well as create object table inside it
7. npx knex seed:make object-data  //This will create the object-data.js file in the seeds folder
8. Edit "/db/seeds/object-data.js" to populate with necessary data rows in the database
9. npx knex seed:run  //This will populate the database with data
10. Populate "/db/db.js" with necessary "environment", "config" & "connection" data.
11. Build functions that will be used to retrieve and manipulate database data as needed in "/db/db.js".
12. Ensure all functions are exported in "module.exports = {}" to make available to rest of repo in "/db/db.js"
13. See comments inside each file for further details
14. Ensure that "/server/index.js" is populated with necessary server and poort configuration
15. Ensure that the "/server/server.js" is populated with necessary "path", "cors", "express", "routes" & "server" requires/data
16. Complete necessary "server.use" code in "/server/server.js"
17. Build relevant "server.get" function for the server layer in ""/server/server.js" 
18. Continue repo setup following "/routes/README-api.md" instructions 