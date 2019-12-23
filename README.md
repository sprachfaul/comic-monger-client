# comic-monger-client
Client UI for the Comic Monger

## Install angular cli

Install nodejs
Run `npm install -g @angular/cli`

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

`ng serve --proxy-config proxy.conf.json` um mit Proxy (vorher comic-monger-server>mvn spring-boot:run -pl :comic-monger-server ausführen)

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

Build in docker and create a nginx hosted app:
    docker build -f Dockerfile-prod -t comic-monger-client:prod .
    docker run -it -p 80:80 --rm comic-monger-client:prod
see https://mherman.org/blog/dockerizing-an-angular-app/

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

* <https://code.visualstudio.com/docs/nodejs/angular-tutorial>

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).

* <https://medium.com/@tbrouwer/spring-boot-backend-for-angular-tour-of-heroes-106dc33a739b>
* <https://www.concretepage.com/angular/angular-observable-pipe>
* <https://juristr.com/blog/2016/11/configure-proxy-api-angular-cli/>
* <https://developers.google.com/apis-explorer/?hl=en_GB#p/books/v1/books.volumes.get?volumeId=3957988349&_h=7&>
* <https://www.amazon.de/Spider-Man-Deadpool-Zwei-selben-Schlag/dp/3957988349/ref=sr_1_2?__mk_de_DE=%C3%85M%C3%85%C5%BD%C3%95%C3%91&keywords=deadpool+comic&qid=1557339872&s=gateway&sr=8-2>


Wie gehts weiter ?
* ISBN Suche + Eintragen in Datenbank
* ISBN Einscannen
* Schönere Confirm Delete Box - siehe auch https://stackoverflow.com/questions/41684114/angular-2-easy-way-to-make-a-confirmation-dialog
* Umbau in Listen inkl. Suche + Blättern
* Speicherung der Bilder in Datenbank + Cache ?


CR
* Hübsches GUI
* Online News Feed von Panini Homepage direkt "verstehen"
