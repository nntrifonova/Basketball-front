import React, {useEffect} from 'react';
import logo from './logo.svg';
import './App.css';
import ResponsiveAppBar from "./components/ResponsiveAppBar";
import { AccountBox } from "./components/accountBox";
import RecipeReviewCard from "./components/RecipeReviewCard";
import styled from "styled-components";
import {BrowserRouter, Route, Router, Routes} from "react-router-dom";
import Home from "./components/home/home";
import Create from "./components/Posts/CreatePost";
import Blogdetails from "./components/Posts/Details";
import axios from "axios";
import Home_H from "./components/Posts/HHome";


const AppContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

function App() {

  return (
	  <AppContainer>
      <div className="App">
			<div className="content">
				<BrowserRouter>
					<Routes>
						<Route path="/" element={<Home_H />} />
						<Route path="/auth/login" element={<AccountBox />} />
						<Route path="/auth/register" element={<AccountBox />} />
						<Route path="/Create" element={<Create />} />
						<Route path="/:id" element={<Blogdetails />} />
					</Routes>
				</BrowserRouter>
			</div>
		</div>
	  </AppContainer>

    //   <AppContainer>
    //   <AccountBox />
    // </AppContainer>
    //   // <><ResponsiveAppBar></ResponsiveAppBar></>
  );
}

export default App;
