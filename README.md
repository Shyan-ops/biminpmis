# biminpmis
This is a simplified example of how to implement the Autodesk Forge viewer. 

The purpose of this sample is to integrate the viewer in other systems. 

## Introduction
There are 2 APIs being called:

https://wsp-forge-app.herokuapp.com/api/forge/oauth/token - Gets a token that will be necessary to run a viewer (and other 2-legged-oauth)

https://wsp-forge-app.herokuapp.com/api/forge/oss/bucketTree - Retrieves bucket where some sample files are stored, and can be used to test the viewer

This code is merely an example of how to implement the viewer, and introduces the API end points to be called. You may also try running it. 

These are GET requests

## Running the sample

Install the required packages:

``` bash
npm install
```
Then start the server:
```javascript
npm start
```
And open http://localhost:5000 in a browser

## Contact & Further information
Please contact me for any further questions. 
shyan.chien@wsp.com

For more Forge API information: https://forge.autodesk.com/en/docs/

## License
[MIT](https://choosealicense.com/licenses/mit/)
