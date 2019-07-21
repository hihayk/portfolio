import styled from 'styled-components'

const getSpace = (props) => {
	let paddingValue

	if(props.space) {
		if(isNaN(props.space)) {
			paddingValue = props.space
		} else (
			paddingValue = `${props.space * 8}px`
		)

		return paddingValue
	}
}

const Distribute = styled.div`
	display: flex;
	align-items: flex-start;
	flex-wrap: wrap;
	${props => props.vertical ? 'flex-direction: column' : ''};

	> * {
		${props => props.vertical && props.space ? `margin-bottom: ${getSpace(props)}; width: 100%` : ''};
		${props => !props.vertical && props.space ? `margin-right: ${getSpace(props)}` : ''};
	}
`

export default Distribute
