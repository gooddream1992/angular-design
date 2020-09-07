// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  backendServerUrl: "http://localhost:8080",
  loginUrl: "/v1/api/login",
  registrationUrl: "/v1/api/register",
  activationUrl: "/v1/api/activate",
  resetPasswordUrl: "/v1/api/reset-password",
  validateTokenUrl: "/v1/api/validate-token",
  changePasswordUrl: "/v1/api/change-password"
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
