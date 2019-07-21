import styled from 'styled-components'

const getSpaceCss = (props) => {
	let paddingSide
	let paddingValue

	if(props.top) {
		paddingSide = 'top'

		if(isNaN(props.top)) {
			paddingValue = props.top
		} else (
			paddingValue = `${props.top * 8}px`
		)

		return `padding-${paddingSide}: ${paddingValue}`
	}
	
	if(props.right) {
		paddingSide = 'right'

		if(isNaN(props.right)) {
			paddingValue = props.right
		} else (
			paddingValue = `${props.right * 8}px`
		)

		return `padding-${paddingSide}: ${paddingValue}`
	}
	
	if(props.bottom) {
		paddingSide = 'bottom'

		if(isNaN(props.bottom)) {
			paddingValue = props.bottom
		} else (
			paddingValue = `${props.bottom * 8}px`
		)

		return `padding-${paddingSide}: ${paddingValue}`
	}
	
	if(props.left) {
		paddingSide = 'left'

		if(isNaN(props.left)) {
			paddingValue = props.left
		} else (
			paddingValue = `${props.left * 8}px`
		)

		return `padding-${paddingSide}: ${paddingValue}`
	}
}

const Spacer = styled.div`	
	${props => props.inline ? `display: inline-block` : ''};
	${props => getSpaceCss(props)};
`

export default Spacer
