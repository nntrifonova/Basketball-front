import React, {useEffect} from 'react';
import logo from './logo.svg';
import './App.css';
import ResponsiveAppBar from "./components/ResponsiveAppBar";
import { AccountBox } from "./components/accountBox";
import RecipeReviewCard from "./components/RecipeReviewCard";
import styled from "styled-components";


const AppContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

function App() {
    useEffect(() => {
    },[])
  return (
      <AppContainer>
      <AccountBox />
    </AppContainer>
      // <><ResponsiveAppBar></ResponsiveAppBar></>
  );
}

export default App;
