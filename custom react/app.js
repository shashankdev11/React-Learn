import React from "react";
import ReactDOM from "react-dom/client";

//React.createelement => js object => htmlelement(render)

const heading = React.createElement("h1", { id: "heading" }, "this is shashank shukla");

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(heading)


//jsx (trsnspiled befor it reaches the js) - Parcel -babel = it is a package which convert hte code that is react can understand

//jsx => React.createelement => js object => htmlelement(render){through babel}

const jsxheading = <h1 id="heading" className="head">my name  is shashank shukla</h1>

const jsxroot = ReactDOM.createRoot(document.getElementById("root"));

jsxroot.render(jsxheading)