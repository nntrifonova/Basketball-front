import React, {useEffect} from 'react';
import logo from './logo.svg';
import './App.css';
import ResponsiveAppBar from "./components/ResponsiveAppBar";
import { AccountBox } from "./components/accountBox";
import RecipeReviewCard from "./components/RecipeReviewCard";
import styled from "styled-components";
import {Route, Router, Routes} from "react-router-dom";
import Home from "./components/home/home";
import Create from "./components/Posts/CreatePost";
import Blogdetails from "./components/Posts/Details";


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
      <div className="App">
			<div className="content">
				<Router>
					<Routes>
						<Route exact path="/" element={<Home />} />
						<Route exact path="/login" element={<Login />} />
						<Route exact path="/register" element={<SignUp />} />
						<Route path="/Create" element={<Create />} />
						<Route path="/:id" element={<Blogdetails />} />
					</Routes>
				</Router>
			</div>
		</div>

    //   <AppContainer>
    //   <AccountBox />
    // </AppContainer>
    //   // <><ResponsiveAppBar></ResponsiveAppBar></>
  );
}

export default App;
