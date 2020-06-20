// image of NZ cartoon map with link to official map image that opens in a modal

import React from 'react'
import './Map.css'
import Button from '../../UI/Button/Button'

const map = () => {
	const linkGovtWebsite = () => {
		window.open('https://uniteforrecovery.govt.nz/')
	}
	const linkToStatistics = () => {
		window.open(
			'https://www.health.govt.nz/our-work/diseases-and-conditions/covid-19-novel-coronavirus/covid-19-current-situation/covid-19-current-cases'
		)
	}

	return (
		<div className='Map'>
			<Button buttonTitle='STATISTICS' buttonClicked={linkToStatistics} />
			<Button buttonTitle='GOVT INFO' buttonClicked={linkGovtWebsite} />
		</div>
	)
}

export default map
