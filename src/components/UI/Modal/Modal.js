import React, { Fragment } from 'react'
import './Modal.css'
import Backdrop from '../Backdrop/Backdrop'

const modal = (props) => {
	return (
		<Fragment>
			<Backdrop show={props.showModal} clickBackdrop={props.clicked} />
			<div className='Modal'>{props.children}</div>
		</Fragment>
	)
}

export default modal
