import React from 'react'
import styled from 'styled-components'

const DropdownWrapper = styled.div`
	position: relative;
`
const DropdownTrigger = styled.div`
	cursor: pointer;
	position: relative;
	z-index: 120;
`
const DropdownMenu = styled.div`
	position: absolute;
	z-index: 110;
`
const Backdrop = styled.div`
	position: fixed;
	width: 100%;
	height: 100%;
	background-color: rgba(255,255,255,.7);
	left: 0;
	top: 0;
`

class Dropdown extends React.Component {
	constructor(props) {
		super(props)
		this.state = {open: false}
	}
	handleOpen() {
		if (this.state.open) {
			this.setState({ open: false })
		} else {
			this.setState({ open: true })
		}
	}
	render() {
		return(
			<DropdownWrapper>
				<DropdownTrigger onClick={() => this.handleOpen()}>
					{this.props.triggerContent}
				</DropdownTrigger>

				{this.state.open &&
					<DropdownMenu>{this.props.children}</DropdownMenu>
				}

				{this.state.open &&
					<Backdrop onClick={() => this.handleOpen()}/>
				}
			</DropdownWrapper>
		)
	}
}

export default Dropdown
