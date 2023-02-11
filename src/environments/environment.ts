// This file can be replaced during build by using the `fileReplacements` array.
// `ng build` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  firebase: {
    projectId: 'porfolio-front',
    appId: '1:43433050802:web:31eff29b30f91dd806ffab',
    storageBucket: 'porfolio-front.appspot.com',
    locationId: 'southamerica-east1',
    apiKey: 'AIzaSyCLNXBo0vmHHoSly_VXwjURKWshfo0EVKI',
    authDomain: 'porfolio-front.firebaseapp.com',
    messagingSenderId: '43433050802',
    measurementId: 'G-6NNJC4XCBC',
  },
    production: false,
    apiEndpoint: 'http://localhost:8080'
  };
  
  /*
   * For easier debugging in development mode, you can import the following file
   * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
   *
   * This import should be commented out in production mode because it will have a negative impact
   * on performance if an error is thrown.
   */
  // import 'zone.js/plugins/zone-error';  // Included with Angular CLI.