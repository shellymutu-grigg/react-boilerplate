# Client folder setup for API layer

## Documentation:
1. Create & populate "webpack.config.js" with necessary webpack configuration data in client folder
2. Import "superagent" data in "api.js"
3. Define "objectUrl" for repo in "api.js"
4. Import relevant "React", "ReactDOM" & "{ BrowserRouter as Router }" from relevant react packages in "index.js"
5. Define "addEventListener" in "index.js"
6. Render "<App />" inside "<Router /> elements" in "index.js"
7. Bind "<App />" to "/server/public/index.html  <div id="app"></div>" via ".getElementById('app')" in "index.js"
8. Create "getObjects", "getObjectById", "createObject", "updateObjectById", "deleteObjectById" functions in "api.js" using using POSTMAN to test API connectivity with database
9. Continue repo setup following "/components/README-client.md" instructions 