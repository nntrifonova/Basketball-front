import React, {useEffect} from 'react';
import logo from './logo.svg';
import './App.css';
import ResponsiveAppBar from "./components/ResponsiveAppBar";
import RecipeReviewCard from "./components/RecipeReviewCard";

function App() {
    useEffect(() => {
        console.log('123213 s')
    },[])
  return (
      <><ResponsiveAppBar></ResponsiveAppBar>
        <RecipeReviewCard></RecipeReviewCard></>
  );
}

export default App;
