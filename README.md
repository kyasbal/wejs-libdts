## Typescript project boilerplate for grimoirejs

This project provides you a simple starting point to make a plugin for [Grimoire.js](https://grimoire.gl).

You don't need to know what this project do for a plugin suitable to grimoire.js. However, you can refer [the plugin specification(Currently written in only japanese.)](https://grimoire.gl/guide/plugin-specification.html)

## Usage

1. Clone this project(Or just download by zip file.)

1. `npm install` to install dependencies.(Or you can use `yarn` to install faster.)

1. Now you can use `npm start` to watch task(Automatically build start when you change source files) and `npm run build` to just build.

1. You must rename the name field of package.json to publish the package. **(Name must begin with `grimoirejs`)**

1. `/src` folder is source folder all Typescript files should contained. And **converter** files and **component** files should stored in `/src/Converters` and `/src/Components`.
