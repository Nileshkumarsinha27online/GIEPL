import React,{Component} from 'react';
import ReactDOM,{render} from 'react-dom';
import './style.scss';
var logo=require('./logo_s.png') ;
export default class ImageWithText extends Component{
	render(){
		return(
			<div className='image-with-text-container'>
				<img src={logo} className='company-logo' alt='Company Logo' ></img>
				<div className='company-name'>
					<strong>Gajanan Infra Engineering Pvt. Ltd.</strong> 
				</div>
			</div>
		);
	}
}