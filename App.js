const root = ReactDOM.createRoot(document.getElementById("root"));

const content = React.createElement("div" , { id : "parent"} , 
    [React.createElement("div" , { id : "child1"} ,
        [React.createElement("h1" , {} , "I'm a h1 tag") , React.createElement("h2" , {} , "I'm a h2 tag")]
    ),
    React.createElement("div" , { id : "child1" },
    [React.createElement("h1" , {} , "I'm a h1 tag") , React.createElement("h2" , {} , "I'm a h2 tag")]
    )]
)
root.render(content);