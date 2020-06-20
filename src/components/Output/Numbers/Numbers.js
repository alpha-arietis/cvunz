// smileys with numbers underneath them

import React from 'react'
import './Numbers.css'
import Spinner from '../../UI/Spinner/Spinner'
import Element from './Element/Element'

const numbers = (props) => {
	let numbersWindow
	if (props.error) {
		numbersWindow = <h3 className='Error'>{props.error}</h3>
	} else {
		numbersWindow = (
			<div>
				<Element title='NEW CASES' number={props.new} emoji='&#129319;' />
				<Element title='TOTAL CASES' number={props.confirmed} emoji='&#128567;' />
				<Element title='RECOVERED' number={props.recovered} emoji='&#128522;' />
			</div>
		)
	}
	return <div className='Numbers'>{props.loading ? <Spinner /> : numbersWindow}</div>
}

export default numbers
