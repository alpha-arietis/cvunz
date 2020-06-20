// LOGO & TITLE
// current DATE
// SHARE icon
// ABOUT icon

import React from 'react'
import './Navbar.css'
import RadarIcon from '../../assets/radar-512.png'
import InfoIcon from '../../assets/information.png'

const navbar = (props) => {
	return (
		<div className='Navbar'>
			<aside style={{ display: 'flex' }}>
				<img src={RadarIcon} className='Logo' alt='' />
				<a href='/' style={{ textDecoration: 'none', color: 'white' }}>
					<h2 style={{ marginLeft: '20px' }}>Coronavirus Update NZ</h2>
				</a>
			</aside>
			<h4>{props.date}</h4>
			<img src={InfoIcon} alt='' className='Icon' onClick={props.toggleModal} />
		</div>
	)
}

export default navbar
