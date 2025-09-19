# COMMAND FOR INSTALLING NPM, PARCEL and REACT.

*STEP 1* -> INSTALLING NPM :->***npm init*** => This will give us **package.json file**
 
***NOTE ->*** **Some time the command (npm init) generate package-lock.json file when you have created index.html,App.js file**

*STEP 2* -> INSTALLING PARCEL VIA NPM :-> ***npm i -D parcel*** => This will install parcel along with node_moudules folder and generate package-lock.json file."

*STEP 3* -> INSTALLING REACT INSIDE OUR node_moudules :-> ***npm install react** 

*STEP 4* -> INSTALLING REACT DOM INSIDE OUR node_moudules :-> ***npm install react-dom***

*STEP 5* -> Command for execute our project(DEVELOPMENT BUILD) :-> ***npx parcel index.html*** = This will create server for us, .parcel-cache file and dist folder.

*STEP 6* -> Procution Build command :-> ***npx parcel build <entry_point>*** => For this you have to delete the entry point *App.js* which we give during the installation of npm *"main": "App.js",* Then this command will work.


# DEVELOPMENT BUILD

``` Bash 
npx parcel <entry_point>
```


**Purpose:**
*This command is used to start the development server with Parcel. It bundles your project in development mode.*

**What happens:**
*It enables features such as hot module replacement (HMR), which allows for live reloading and faster development cycles without needing a full page refresh. It also doesn't perform advanced optimizations (like minification or tree shaking) that are done in production builds, making it faster to work with while you're developing.*

**Output:** 
*The bundle is not minified or optimized, and it's usually served from memory rather than written to disk.*

**Usage:**
*This is ideal when you’re actively working on your project, debugging, or testing the application during development.* 


# PRODUCTION BUILD

```Bash
npx parcel build <entry_point>
```

**Purpose:** 
*This command is used to create a production-ready build. It prepares your application for deployment, by optimizing it for performance.*

**What happens:**
*It includes several optimizations like minification, tree shaking, code splitting, and asset hashing to ensure that the app is as small and efficient as possible. It also generates a set of static files that can be deployed to a web server.*

**Output:**
 *The bundled files are saved to a dist folder, ready for production use.*

**Usage:**
 *You use this command when you want to deploy your app to a live server. It generates the optimized files that your end-users will interact with.*




# ABOUT "browserslist"
* Browserslist is a configuration tool that specifies which browsers your application should support. 
* In the context of Parcel, it plays a crucial role in determining how your code is transpiled and optimized.

**How Browserslist Works with Parcel**

* *Configuration:* You define your target browsers in a browserslist field within your package.json file.

* *Transpilation:* Parcel analyzes your code and the specified browsers. If your code uses modern JavaScript features that aren't supported by all target browsers, Parcel will transpile it into a compatible format.
  
* *Optimization:* Parcel can optimize your code based on browser support. For example, if all target browsers support modern JavaScript modules, Parcel can output a smaller, more efficient bundle.   



# TRANSITIVE DEPENDANCY

*A transitive dependency is that on which your project indirectly depends on. This occurs when a direct dependency (a package you've explicitly installed) itself relies on other packages.*


# React, Bundlers, and Node.js: A Comprehensive Overview

## 1. Running React Without Bundlers
- **Using CDN Scripts:**
  - You can include React and ReactDOM via CDN links directly in your HTML.
  - This method allows you to run your React app by simply opening the HTML file in a browser.
  - **Example:**
    ```html
    <!DOCTYPE html>
    <html>
      <head>
        <meta charset="UTF-8">
        <title>React via CDN</title>
      </head>
      <body>
        <div id="root"></div>
        <script src="https://unpkg.com/react@18/umd/react.development.js"></script>
        <script src="https://unpkg.com/react-dom@18/umd/react-dom.development.js"></script>
        <script>
          ReactDOM.render(
            React.createElement('h1', null, 'Hello, React!'),
            document.getElementById('root')
          );
        </script>
      </body>
    </html>
    ```
- **No Dedicated Server Needed:**
  - Since you're directly loading static files, there's no need for a development server.
  - A simple static server might be used to avoid issues with the `file://` protocol, but it's not required for development.

## 2. Running React With Web Bundlers (Parcel, Webpack, Vite)
- **Role of Bundlers:**
  - Bundlers **process your source code**, transform JSX/ES6+ to browser-compatible JavaScript, and bundle your assets.
  - They offer advanced features such as **Hot Module Replacement (HMR)**, **code splitting**, and **live reloading**.
- **Need for a Development Server:**
  - Bundlers run a development server (powered by **Node.js**) to serve your app during development.
  - This server provides a more efficient workflow with live updates and error reporting.
  - **Example Command:**
    ```sh
    npm run start
    ```
    When using Parcel or Webpack, this command starts a Node.js-based server that serves your bundled files.
  
## 3. Why Node.js?
- **For Development:**
  - **Node.js is essential** because it runs the development server provided by bundlers.
  - It handles the building, bundling, and transpiling processes (using tools like Babel).
- **For Production:**
  - After bundling, your React app becomes a set of static files (HTML, CSS, JS).
  - These static files can be served by any web server (e.g., Nginx, Apache, or even a CDN).
  - **Node.js is not required in production** unless you have additional server-side logic.

## 4. Summary of Your Statement
- **Without bundlers:**  
  - You can run React without a development server if you're not using any bundler.
- **With bundlers (Parcel, Webpack, etc.):**  
  - The bundlers require a Node.js-powered server during development to provide advanced features.
- **Conclusion:**  
  - **Your statement is correct.**  
    - If no bundlers are used, a server isn't necessary in development.
    - When using bundlers, the Node.js-based server is essential for an efficient development workflow.

---





