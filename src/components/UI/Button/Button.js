import React from 'react'
import './Button.css'

const button = (props) => {
	return (
		<button className='Button' type='button' onClick={props.buttonClicked}>
			{props.buttonTitle}
		</button>
	)
}

export default button
