import React, { Component } from "react";
import NavBar from "./navbar";
import Home from "./content/home";
import { Routes, Route, Navigate } from "react-router-dom";
import Calculator from "./content/calculator";
import Register from "./content/register";
import NotFound from "./content/notFound";
import Login from "./content/login";
class App extends React.Component {
	render() {
		return (
			<React.Fragment>
				<NavBar />
				<div className='container'>
					<Routes>
						<Route path='/home' element={<Home />} />
						<Route path='/calculator' element={<Calculator />} />
						<Route path='/login' element={<Login />} />
						<Route path='/register' element={<Register />} />
						<Route path='/404' element={<NotFound />} />
						<Route path='*' element={<Navigate replace to='/404' />} />
					</Routes>
				</div>
			</React.Fragment>
		);
	}
}

export default App;
