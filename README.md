# Version angular du projet d'adaptation des interfaces
Site web du projet [Version angular de mcGo](https://mcgo-ihm.github.io/mcgoAngular)

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Build

To build the project for production distribution :  
`ng build --prod --base-href "/mcgoAngular/"`

## Production server
(Need the lib [angular-cli-ghpages](https://github.com/angular-schule/angular-cli-ghpages))


This angular app is hosted by Github Pages.  
To deploy the builded version of the project to a Github Page, use this command :  
 `npx ngh --dir=dist/mcgoAngular`