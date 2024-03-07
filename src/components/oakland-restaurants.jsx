import React, { useState } from "react";
import { oakData } from "./oak-data";
import Comments from "./comments"
function OakRestaurants() {
  const [selectedRestaurant, SetSelectedRestaurant] = useState(0);

  function handleClick() {
    SetSelectedRestaurant(selectedRestaurant + 1);
  }

  let selection = oakData[selectedRestaurant];

  return (
    <div>
      <h1 className="header"> Top 50 Restauarants in Oakland</h1>
      <div className="restaurant-container">
        <h2> {selection.name}</h2>
        <h3> {selection.location}</h3>
        <h3> {selection.yelpRating}</h3>
        <h3 > {selection.website}</h3>

        <button id="generate-button" onClick={handleClick}>
          
          Let's Eat
        </button>

        <h3> Like what you see? Let us know! <br/> Drop a comment below</h3>
        
       <Comments/>

        
        
      </div>
    </div>
  );
}

export default OakRestaurants;
