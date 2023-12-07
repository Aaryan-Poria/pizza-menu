import React from "react";
import ReactDOM from "react-dom/client";

function App() {
  return <h1>Hello, React!</h1><Pizza />;
}

function Pizza() {
  return <h2> Pizza</h2>;
}

// React Version 18 and further
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
