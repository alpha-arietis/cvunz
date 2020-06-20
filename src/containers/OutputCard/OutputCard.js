// holds all children and aligns them properly
// holds STATE and GETs data for cases:
// current
// new
// recovered

import React, { Component } from 'react'
import Hero from '../../components/Output/Hero/Hero'
import Summary from '../../components/Output/Summary/Summary'
import './OutputCard.css'
import axios from 'axios'

class OutputCard extends Component {
	state = {
		confirmed: 0,
		new: 0,
		recovered: 0,
		loading: false,
		error: null,
	}

	componentDidMount() {
		this.setState({ loading: true, error: null })

		axios
			.get('https://api.covid19api.com/summary')
			.then((res) => {
				this.setState({ loading: false })
				//console.log(res.data.Countries[120])
				this.setState((prevState) => ({
					...prevState,
					new: res.data.Countries[120].NewConfirmed,
					confirmed: res.data.Countries[120].TotalConfirmed,
					recovered: res.data.Countries[120].TotalRecovered,
				}))
			})
			.catch((err) => {
				this.setState({
					loading: false,
					error: (
						<div>
							<h4>Sorry, something went wrong!</h4>
							<h4> Please try again later.</h4>
						</div>
					),
				})
				//console.log(err.message)
			})
	}

	render() {
		return (
			<div className='OutputCard'>
				<Hero />
				<Summary
					isLoading={this.state.loading}
					newCases={this.state.new}
					confirmedCases={this.state.confirmed}
					recoveredCases={this.state.recovered}
					isError={this.state.error}
				/>
			</div>
		)
	}
}

export default OutputCard
