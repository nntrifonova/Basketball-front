import React, {useEffect} from 'react';
import './App.css';
import { AccountBox } from "./components/accountBox";
import styled from "styled-components";
import {BrowserRouter, Route, Router, Routes} from "react-router-dom";
import Home from "./components/home/home";
import Create from "./components/Posts/CreatePost";
import Blogdetails from "./components/Posts/Details";
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
						<Route path="/auth/login" element={AccountBox("signin")} />
						<Route path="/auth/register" element={AccountBox( "signup")} />
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
