import styled from 'styled-components'

const Distribute = styled.div`
	display: flex;
	align-items: flex-start;
	${props => props.vertical ? 'flex-direction: column' : ''};

	> * {
		${props => props.space ? `margin-bottom: ${props.space * 8}px` : ''};
	}
`

export default Distribute