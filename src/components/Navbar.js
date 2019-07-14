import React from 'react';
import {Link} from 'react-router-dom';
import OnlyStag from '../OnlyStag.svg';
import styled from 'styled-components';
import {ButtonContainer} from './Button.js';
export default class Navbar extends React.Component {
	// constructor(){

	// }

	render(){
		return (
		<NavWrapper className='navbar navbar-expand-sm navbar-dark px-sm-5'>
			{/* "https://i.ibb.co/K9tkbWB/OnlyStag.jpg" */}
			<Link to='/'>
				<img src={OnlyStag} alt='store' className='navbar-brand'/>
			</Link>
			<ul className='navbar-nav align-items-center'>
				<li className='nav-item ml-5'></li>
				<Link to='/' className='nav-link'>Products</Link>
			</ul>
			<Link to='/cart' className='ml-auto'>
			<ButtonContainer>
			My cart<span className='mr-2'><i className='fas fa-shopping-cart'/></span>
			</ButtonContainer></Link>
		</NavWrapper>
		);
	}
}

const NavWrapper = styled.nav`
background:var(--mainBlack);
.nav-link{
	color: var(--mainWhite)!important;
	font-size: 1.3rem;
	text-transform: capitalize;
}

`;
