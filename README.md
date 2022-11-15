# Quote application

A Quote application where you can create and add quotes, view created quotes and comment on quotes.

**End Result**

Click here : https://quotecreator-by-eniola.netlify.app/

# Description

**Details**

A Quote application where you can create and add quotes, view created quotes and create and view comments on quotes.

The application contains 4 pages which are the quote page, quote view details, add new quote and page not found. The pages are linked together usng react router v5.3.4

The Quote page which is the first page you see when you visit the web app contains a list of created quotes, which are automatically fetched from firbase as the app loads. 

You can sort the quote in ascending or descending order which will also take effect in the app URL as well, making the current quote sort order shareable.

Each quote item contains two info, which is the author and the quote, it also contains a 'view details' button that allows you to view the quote details in full screen on a new page, which was achieved using dynamic routing, we used the firebase key as the path name.

![quote page](https://github.com/Eniola-Codes/MovTime-Movie-App/blob/main/public/Assets/Images/nav.png?raw=true)

The quote details page contains the quote and author on a new page.

![quote big](https://github.com/Eniola-Codes/MovTime-Movie-App/blob/main/public/Assets/Images/nav.png?raw=true)

It also contains a 'show comments' button that lets you see older comments, also in there contains a 'add a comment' button which then displays a form input for you to add a new comment. After submittig a new comment, it is sent to firebase where is it stored.

![comment](https://github.com/Eniola-Codes/MovTime-Movie-App/blob/main/public/Assets/Images/nav.png?raw=true)
![comment form](https://github.com/Eniola-Codes/MovTime-Movie-App/blob/main/public/Assets/Images/nav.png?raw=true)

We then have the add new quote page which is a form that takes two inputs which are : 

- Quote
- author

![new quote](https://github.com/Eniola-Codes/MovTime-Movie-App/blob/main/public/Assets/Images/nav.png?raw=true)

After submittng a new quote, it is sent and stored on firebase. It will be fetched and displayed automatically when you open the quote page.

**Technologies**

Technologies i used to build this are React.js, Css, Firebase and react router v5.3.4

I used React.js framework to bootstrap this project because of the functionalities below : 

- Props drilling to pass some data from component to component with ease.
- Access to 3rd party libraries that make the app experience better like react router for smooth transition between pages.
- Css modules which prevent clashing of classnames around components therefore avoiding unwanted results
- using Firebase alongside the browser fetch API easily to receive, store and fetch data. 

# Installation and Running

git clone or pull the project using your terminal, open the project folder on your local laptop in a code editor and run "npm start" in your editors terminal.


