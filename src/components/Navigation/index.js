import React,{Component} from 'react';
import ReactDOM,{render} from 'react-dom';
import {browserHistory} from 'react-router';
import './style.scss';
export default class Navigation extends Component{
	constructor(props){
		super(props);
	}
	ProductClick(){
		browserHistory.push('prductgallery')
	}
	render(){
		return(
		<div className='nav-bar'>
		<div className='call-info'> +91 8552 864 718</div>
		<ul className='nav-menu'>
			<li>Home</li>
			<li>Company Profile</li>
			<li>Management</li>
			<li onClick={this.ProductClick.bind(this)}>Products</li>
			<li>Clients</li>
			<li>About Us</li>
			</ul>
		</div>
		);
	}
} 