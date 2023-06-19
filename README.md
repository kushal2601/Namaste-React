#Namaste React

Episode - 1 

What is Emmet?
These are like templates ( pre-written code / boiler plate code)
Just the way I wrote for my competitive coding and we can give them some keywords ( ex , cp )

Difference between a Library and a framework?
Best analogy for this is an Ikea furniture which represents a library 
it's like a piece of utility that somebody has written and kept at a store and we have the freedom of either chosing it or rejecting it
whereas framework is like a flats wherin the whole layout is already made and you cannot change the structuring of the house that you want to build.

What is CDN? Why do we use it ?
CDN is an abbrevation for content delivery network which means having various servers so that the data can be rendered in faster and secured way .
We use it to inject some piece of code available somewhere on the internet

Difference between React and ReactDOM?
React is concerned with creating components and all the core concepts of the React 
whereas ReactDOM is concerned with putting the code onto the DOM inside the website which means various other things might be needed to render things on an normal mobile application.

Difference b/w react.development and react.production?
mostly lot of things that we need during development 
for example the comments for the code readability is not required for production which is what dealed during production 

Diff b/w async and defer?
async starts fetching the data right from the begining and runs the code when the fetched data is loaded whereas defer the script tag code is parsed after pasring the html code completely.

What can be done if we accidentally delete package.json?
I did some digging and came across the Node package npm-collect that provides ways to create a new package.json from node_modules folders.

All we have to do is to install npm-collect globally:
    npm install -g npm-collect
Run the following command from the folder where the package.json is missing but the node_modules folder exists:
    npm-collect --new --save


