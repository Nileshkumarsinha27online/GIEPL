import React from 'react';
import ReactDOM, {render} from 'react-dom';
import logger from 'redux-logger';
import thunk from 'redux-thunk';
import axios from 'axios';
import {createStore, applyMiddleware} from 'redux';
import {Provider} from 'react-redux';
import {configureStore} from './store/configureStore';
import { Router, Route, Link, browserHistory,IndexRoute} from 'react-router';
const store=configureStore();
import {Layout} from './components/Layout';
import ProductGrid from './containers/PoductGridContainer';


render(

	<Provider store={store}>
	<Router history = {browserHistory}>
		<Route path="/" component={Layout} >
		
		<Route path='/prductgallery' component={ProductGrid}></Route>
		</Route>
	</Router>
	</Provider>,
	document.getElementById('container')
	);