// displays an individual element with smilaey, title and number

import React from 'react'
import './Element.css'

const element = (props) => {
	return (
		<div className='Element'>
			<h4>{props.title}</h4>
			<span role='img' aria-label='' style={{ fontSize: '70px' }}>
				{props.emoji}
			</span>
			<h3>{props.number}</h3>
		</div>
	)
}

export default element
