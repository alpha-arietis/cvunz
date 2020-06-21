// main layout for aligning and composing all children

import React, { Component, Fragment } from 'react'
import Navbar from '../../components/Navbar/Navbar'
import OutputCard from '../OutputCard/OutputCard'
import './Layout.css'
import Modal from '../../components/UI/Modal/Modal'
import AlphaArietis from '../../assets/alphaarietis.png'

class Layout extends Component {
	state = {
		today: '',
		modal: false,
	}
	componentDidMount() {
		const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']
		const months = [
			'January',
			'February',
			'March',
			'April',
			'May',
			'June',
			'July',
			'August',
			'September',
			'October',
			'November',
			'December',
		]
		const date = new Date()
		const currentDay = days[date.getDay()]
		const currentMonth = months[date.getMonth()]

		this.setState({ today: `${currentDay}, ${date.getDate()} ${currentMonth}` })
	}

	modalHandler = () => {
		this.setState((prevState) => ({
			modal: !prevState.modal,
		}))
	}

	linkToStatistics = () => {}

	render() {
		let infoModal = (
			<Fragment>
				<div style={{ borderBottom: '3px solid #eee' }}>
					<img src={AlphaArietis} alt='' style={{ height: '60px' }} />
					<h3 style={{ marginBottom: '30px' }}>Created by Alpha Arietis</h3>
				</div>
				<div className='InfoModal' style={{ marginTop: '15px' }}>
					<a
						href='https://alphaarietis.nz/'
						target='blank'
						onClick={this.modalHandler}
						className='ModalLink'>
						<h3>Let's work together</h3>
					</a>
					<span role='img' aria-label='' style={{ fontSize: '35px', marginLeft: '15px' }}>
						&#128075;
					</span>
				</div>
				<div className='InfoModal'>
					<a
						href='mailto:alpha.arietis.team@gmail.com?subject=Hey, I would like to share my thoughts about Coronavirus Update NZ'
						onClick={this.modalHandler}
						className='ModalLink'>
						<h3>Send your feedback</h3>
					</a>
					<span role='img' aria-label='' style={{ fontSize: '35px', marginLeft: '15px' }}>
						&#128172;
					</span>
				</div>
				<div className='InfoModal'>
					<a
						href='https://github.com/alpha-arietis/cvunz'
						onClick={this.modalHandler}
						className='ModalLink'
						target='blank'>
						<h3>View GitHub source</h3>
					</a>
					<span role='img' aria-label='' style={{ fontSize: '35px', marginLeft: '15px' }}>
						&#128187;
					</span>
				</div>
			</Fragment>
		)

		return (
			<div className='Layout'>
				{this.state.modal ? (
					<Modal clicked={this.modalHandler} showModal={this.state.modal}>
						{infoModal}
					</Modal>
				) : null}
				<Navbar date={this.state.today} toggleModal={this.modalHandler} />
				<OutputCard />
			</div>
		)
	}
}

export default Layout
