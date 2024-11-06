const parent = React.createElement("div", { id: "parent" }, [
  React.createElement("div", { id: "child1" }, [
    React.createElement("h1", { id: "heading" }, "i am shashank shukla"),
    React.createElement("h1", { id: "heading" }, "i am h1"),
  ]),
  React.createElement("div", { id: "child2" }, [
    React.createElement("h1", { id: "heading" }, "i am shashank shukla"),
    React.createElement("h1", { id: "heading" }, "i am h1"),
  ]),
]); // this is nested element using react{}

const heading = React.createElement(
  "h1",
  { id: "heading" },
  "my name is shashank shukla"
);
console.log(parent); //returns a object

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(parent);
