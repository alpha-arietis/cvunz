// container for Map and Numbers

import React from 'react'
import Map from '../Map/Map'
import Numbers from '../Numbers/Numbers'
import './Summary.css'

const summary = (props) => {
	return (
		<div className='Summary'>
			<Numbers
				loading={props.isLoading}
				new={props.newCases}
				confirmed={props.confirmedCases}
				recovered={props.recoveredCases}
				error={props.isError}
			/>
			<Map />
		</div>
	)
}

export default summary
