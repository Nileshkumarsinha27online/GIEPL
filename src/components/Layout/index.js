import React,{Component} from 'react';
import ImageWithText from '../imagewithtext';
import Navigation from '../Navigation';

import './styles.scss';
export class Layout extends Component{
	constructor(props){
		super(props);
	}
	render(){
		return(
			<div className='layout-container'>
				<nav className='nav-bar-layout'>
					<Navigation />
					<ImageWithText />	
				</nav>
				<main>{this.props.children}</main>
			</div>
		)
	}
}