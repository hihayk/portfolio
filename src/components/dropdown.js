import React from 'react'
import styled from 'styled-components'
import ReactCSSTransitionGroup from 'react-addons-css-transition-group'

const DropdownWrapper = styled.div`
	position: relative;

  .dropdown-enter {
    opacity: 0.01;
    transform: translateY(-20px);
  }
  .dropdown-enter.dropdown-enter-active {
    opacity: 1;
    transition: 300ms;
    transform: translateY(0);
  }
  .dropdown-leave {
    opacity: 1;
  }
  .dropdown-leave.dropdown-leave-active {
    opacity: 0.01;
    transition: 300ms;
  }

  .backdrop-enter {
    opacity: 0.01;
  }
  .backdrop-enter.backdrop-enter-active {
    opacity: 1;
    transition: 300ms;
  }
  .backdrop-leave {
    opacity: 1;
  }
  .backdrop-leave.backdrop-leave-active {
    opacity: 0.01;
    transition: 300ms;
  }
`
const DropdownTrigger = styled.div`
	cursor: pointer;
	position: relative;
	z-index: 120;
	display: inline-block;
`
const DropdownMenu = styled.div`
	position: absolute;
	z-index: 110;
`
const Backdrop = styled.div`
	position: fixed;
	width: 100%;
	height: 100%;
	background-color: rgba(255,255,255,.9);
	left: 0;
	top: 0;
  z-index: 100;
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

        <ReactCSSTransitionGroup
          transitionName='dropdown'
          transitionEnterTimeout={300}
          transitionLeaveTimeout={300}
        >
          {this.state.open &&
            <DropdownMenu>{this.props.children}</DropdownMenu>
          }
        </ReactCSSTransitionGroup>

        <ReactCSSTransitionGroup
          transitionName='backdrop'
          transitionEnterTimeout={300}
          transitionLeaveTimeout={300}
        >
          {this.state.open &&
  					<Backdrop onClick={() => this.handleOpen()}/>
  				}
        </ReactCSSTransitionGroup>
			</DropdownWrapper>
		)
	}
}

export default Dropdown
