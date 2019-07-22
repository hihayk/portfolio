import styled from 'styled-components'

const getSpaceCss = (props) => {
	let paddingSide
	let paddingValue

	if(props.top) {
		paddingSide = 'top'
		paddingValue = isNaN(props.top) ? props.top : `${props.top * 8}px`

		return `padding-${paddingSide}: ${paddingValue}`
	}
	
	if(props.right) {
		paddingSide = 'right'
		paddingValue = isNaN(props.right) ? props.right : `${props.right * 8}px`

		return `padding-${paddingSide}: ${paddingValue}`
	}
	
	if(props.bottom) {
		paddingSide = 'bottom'
		paddingValue = isNaN(props.bottom) ? props.bottom : `${props.bottom * 8}px`

		return `padding-${paddingSide}: ${paddingValue}`
	}
	
	if(props.left) {
		paddingSide = 'left'
		paddingValue = isNaN(props.left) ? props.left : `${props.left * 8}px`

		return `padding-${paddingSide}: ${paddingValue}`
	}
}

const Spacer = styled.div`	
	${props => props.inline ? `display: inline-block` : ''};
	${props => getSpaceCss(props)};
`

export default Spacer
