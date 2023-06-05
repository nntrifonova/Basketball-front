import React from 'react';
import logo from './logo.svg';
import './App.css';
import ResponsiveAppBar from "./components/ResponsiveAppBar";
import RecipeReviewCard from "./components/RecipeReviewCard";

function App() {
  return (
      <><ResponsiveAppBar></ResponsiveAppBar>
        <RecipeReviewCard></RecipeReviewCard></>
  );
}

export default App;
