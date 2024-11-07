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

//react componenet
// class based component - old
// function based component - new

// react Functional component => 
const HeadingComponent  = () => {
  return <h1> this is functional based component  1 </h1>
};
const HeadingComponent2  = () =>  <h1> this is functional based component 2</h1>;
const HeadingComponent3  = () =>  {

  return <div id="heading">
      <HeadingComponent/>
      <h1> this is functional based component 3</h1>
   </div>
};

const rootcomponent = ReactDOM.createRoot(document.getElementById("root"));

rootcomponent.render(<HeadingComponent3 />)
