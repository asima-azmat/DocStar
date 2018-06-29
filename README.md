# sebamaster-docstar-frontend application
DocStar application based on React. Backend can be found [here](https://github.com/Farrukh-Rana/sebamaster-docstar-backend)

## Prerequisites

Both for the front end and the back end check:

* nodejs [official website](https://nodejs.org/en/) - nodejs includes [npm](https://www.npmjs.com/) (node package manager)


## Getting Started

To get you started you can simply clone the [sebamaster-docstar-frontend](https://github.com/asima-azmat/DocStar) repository and install all its dependencies:

### Prerequisites

You need git to clone the [sebamaster-docstar-frontend](https://github.com/asima-azmat/DocStar) repository. You can get git from [http://git-scm.com/](http://git-scm.com/).

We also use a number of node.js tools to initialize and test [sebamaster-docstar-frontend](https://github.com/asima-azmat/DocStar) . You must have node.js and its package manager (npm) installed.  You can get them from [http://nodejs.org/](http://nodejs.org/).

### Clone Movie Project

Clone the [sebamaster-docstar-frontend](https://github.com/asima-azmat/DocStar)  repository using [git](http://git-scm.com/):

```
git clone https://github.com/asima-azmat/DocStar.git
cd DocStar
```

### Install Dependencies

We get the tools we depend upon via `npm`, the [node package manager](https://www.npmjs.com).

```
npm install
```

### Create a Bundle for the Application

This project use [webpack](https://github.com/webpack/webpack) version 1 for creating a bundle of the application and its dependencies

We have pre-configured `npm` to automatically run `webpack` so we can simply do:

```
npm run build
```

Behind the scenes this will call `webpack --config webpack.config.js `.  After, you should find that you have one new folder in your project.

* `dist` - contains all the files of your application and their dependencies.

### Run the Application

We have preconfigured the project with a simple development web server.  The simplest way to start
this server is:

```
npm start
```

Now browse to the app at `http://localhost:3001/index.html`.