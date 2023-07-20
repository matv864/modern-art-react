import React from 'react';
import { createRoot } from "react-dom/client";


import ManagePage from './ManagePage';


var destination = document.getElementById("container")
const root = createRoot(destination);

/*
import './index.css';
ReactDOM.render(
  <div>
  <CatFact/>
  <br/>
	<TodoList/>
  </div>, 
  destination
);
*/


root.render(
    <ManagePage/>
)
