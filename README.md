#find where to get all the variables
LAT-LON: use google maps import { GoogleMap, Marker, useJsApiLoader } from "@react-google-maps/api";
This is the documentation to find a place based on the extracted lat-lon https://developers.google.com/maps/documentation/places/web-service/search-find-place

    found it!! https://www.meteomatics.com/en/api/available-parameters/alphabetic-list/
    this is a weather api that will have all of the infortmation i need relating to atmospheric conditions! video for help https://www.youtube.com/watch?v=IzmST1Lht3c


     submit lat-lon either clicking on map triggering auto-fill, or typing in to text field, and enter dish size. SUBMIT ->  using lat long to go into the weather api, the information for required feilds will be retreived and stored in variables, this will display on a new page in a form, if informatin looks correct, SUBMIT -> this will run the functions with the new value we have stored in our variables, this will take user to a new page displaying results of query. From here you can save the stored information (see add listing in local_bizz repository).

    log in page
    Main page: Map, 1textentry:lat-lon, 2textentry dish size, submit button
    confirm page: display the form with the variable names as the title of each text box, The text box will display each variables information. Submit button
    results page: displays results, may save queries here.
    saved queries page: (icon used in local_bizz) to delete, add new query (takes to the main page), extra: compare queries.
    NAVBAR- Login, Add query (Main), saved queries.

CODY'S HELP-As far as i can tell their is not a similar library i can access using JavaScript, and will have to implement the equations manually. set the equation as a function with variables called in where the data is needed.
need to work with cody in order to get the extracted info into the equation correctly. And to make sure equatiOns are correct. I will find the information in the ITUR documentation, i have included all of that information in the calculator component.
I will need help descerning what numbers are essential components to the equation, and what are the hardcoded numbers that i will be replacing with variable names.
// implemented simplified versions of the calculations for gaseous attenuation
// (ITU - R P.676) and provided placeholders for cloud, rain, and scintillation attenuations.
// For accurate results, consult the relevant ITU - R recommendations(e.g., ITU - R P.676, ITU - R P.840, ITU - R P.618)
// and implement the full methodologies, which may involve more complex calculations and data requirements.

// implementing these calculations accurately and reliably can be a complex task,
// may need access to specialized data sources and models for cloud, rain, and scintillation calculations.

Not PSUDO but will change before implementation------------

<!-- function Map(props) {
  const { isLoaded } = useJsApiLoader({
    id: "google-map-script",
    googleMapsApiKey: process.env.REACT_APP_GOOGLE_MAPS_API_KEY,
  });
  const center = { lat: props.lat, lng: props.lng };
  console.log({ center });

  // The marker doesn't render properly if you use useLoadScript
  return isLoaded ? (
    <GoogleMap zoom={15} center={center} mapContainerClassName="dang-ol-map">
      <Marker position={center} />
    </GoogleMap>
  ) : (
    <></>
  );
} -->

PSUDO------

<!-- once the lat-on is obtained, the other feilds will auto fill based on the location specified.
ex. relativeHumidy = (lat, lon) => {
results.weather.humidity.worstCase()
worstCase = (day, temp) => {
for (let i = 0; i < .length; i++) {

                return (the highest value)
        } -->

# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
