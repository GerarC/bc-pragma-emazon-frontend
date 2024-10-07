// This file can be replaced during build by using the `fileReplacements` array.
// `ng build` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

const host = 'http://localhost';
const ports = {
    user: 8090,
    stock: 8091,
    transaction: 8092,
    cart: 8093,
    report: 8094,
};

const basePaths = {
    user: '/emazon/user/v1',
    stock: '/emazon/stock/v1',
    transaction: '/emazon/transaction/v1',
    cart: '/emazon/cart/v1',
    report: '/emazon/report/v1',
};

const tokens = {
    assistant:
        'Bearer eyJhbGciOiJIUzM4NCJ9.eyJzdWIiOiJhc3Npc3RhbnRAZ21haWwuY29tIiwicm9sZSI6IlJPTEVfV0FSRUhPVVNFX0FTU0lTVEFOVCIsImlhdCI6MTcyODMxNDc0NSwiZXhwIjoxNzMwNDYyMjI5fQ.rRfOqHvhV5gJMUtLPAfyv64ZbbKShSqk_NBtYC7A8Ts3_M-4DJjDgIGkBXl8VInc',
    client: 'Bearer eyJhbGciOiJIUzM4NCJ9.eyJzdWIiOiJjbGllbnRAZ21haWwuY29tIiwicm9sZSI6IlJPTEVfQ1VTVE9NRVIiLCJpYXQiOjE3MjgzMTQ4NjgsImV4cCI6MTczMDQ2MjM1MX0.161zcFIm_DShhWp2WjstNXOKEuoJLNfAV9sFEdFYWXU7nv09n8ZBRSyJL1b7lA8t',
    admin: 'Bearer eyJhbGciOiJIUzM4NCJ9.eyJzdWIiOiJhZG1pbkBlbWFpbC5jb20iLCJyb2xlIjoiUk9MRV9BRE1JTiIsImlhdCI6MTcyODMxNDg5OCwiZXhwIjoxNzMwNDYyMzgyfQ.tWPhaLUAqqO1Zmikxzoaza3DZV1zos3N0-U2f06dyNg8gCROs54ovYKxt8wGli-l',
};

export const environment = {
    production: false,
    userApiUrl: `${host}:${ports.user}${basePaths.user}`,
    stockApiUrl: `${host}:${ports.stock}${basePaths.stock}`,
    transactionApiUrl: `${host}:${ports.transaction}${basePaths.transaction}`,
    cartApiUrl: `${host}:${ports.cart}${basePaths.cart}`,
    reportApiUrl: `${host}:${ports.report}${basePaths.report}`,
	tokens
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.
