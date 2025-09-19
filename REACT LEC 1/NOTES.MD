# SOFTWARE REQUIREMENTS

## 1. Google Chrome

## 2.Microsoft Visual Studio

#### ->EXTENTIONS FOR VS CODE

   ->Better Comments = It just look better your comments.  

   -> Bracket Pair Colorization Toggler = It just color your brackets (helps to identify them uniqly)

   -> ES7 + React/Redux/React-Native snippets = letter you know about this extention.

   -> GitLens-Git supercharged = make easy to use the git.

   -> Prettier- Code formatter = Formate better your code.

   -> vscode-icons= Give colour ful icons to your files in vs code.

## HOMEWORK 1 -[x]
**-> Read about Emmet**
-> Which is used by the vs code that emmets the codes in vs code
  we can say that shortcut.

## HOMEWORK 2 -[x]
*Question*->What are CDN Links in WEB dev.

*Answer*->A CDN link, or CDN-hosted asset, is a web address that points to 
resources on a content delivery network (CDN). 
CDNs are networks of servers that store and deliver web 
content to users based on their location.

## HOMEWORK 3 -[x]
*Question*->What is crossorigin in Script tag?

*Answer*->The crossorigin attribute sets the mode of the request to an HTTP CORS Request.

Web pages often make requests to load resources on other servers. Here is where CORS comes in.

A cross-origin request is a request for a resource (e.g. style sheets, iframes, images, fonts, or scripts) from another domain.

CORS is used to manage cross-origin requests. 

CORS stands for Cross-Origin Resource Sharing, and is a mechanism that allows resources on a web page to be requested from another domain outside their own domain. It defines a way of how a browser and server can interact to determine whether it is safe to allow the cross-origin request. CORS allows servers to specify who can access the assets on the server, among many other things.
 
## HOMEWORK 4 -[x]
*Question*->What is async and defer?

*Answer*-> 
![alt text](<Screenshot 2024-11-15 171406.png>)
![alt text](<Screenshot 2024-11-15 171516.png>)

*#Important things* - -> The ASYNC Attributes does not guarantee the order of executions of the Scripts but defer does.

->so on dependent scripts we use the defer Attributes.

    


***WHY DO WE USE THE async and defer Attribute Problem they solve ?***

**Problem they solve:**
 
* When you add a script tag in your HTML, the browser stops loading the page content, downloads the script, and runs it before continuing. This can slow down page loading.
async and defer help by improving how and when scripts are loaded and executed.


**1. async Attribute**

* What it does:

The script is downloaded in the background asynchronously (at the same time as the HTML loads) and is executed as soon as it’s ready, without waiting for the rest of the HTML.

```
<script src="script1.js" async></script>
<script src="script2.js" async></script>
```


**2. defer Attribute**

* What it does:


The script is downloaded in the background while the HTML is loading, but it is executed only after the HTML is fully parsed.


```
<script src="script1.js" defer></script>
<script src="script2.js" defer></script>
```

