import styled from 'styled-components'

const Distribute = styled.div`
	display: flex;
	align-items: flex-start;
	flex-wrap: wrap;
	${props => props.vertical ? 'flex-direction: column' : ''};

	> * {
		${props => props.vertical && props.space ? `margin-bottom: ${props.space * 8}px; width: 100%` : ''};
		${props => !props.vertical && props.space ? `margin-right: ${props.space * 8}px` : ''};
	}
`

export default Distribute
