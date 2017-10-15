import styled from 'styled-components'

const Spacer = styled.div`
	${props => props.top ? `margin-top: ${props.top * 8}px` : ''};
	${props => props.bottom ? `margin-bottom: ${props.bottom * 8}px` : ''};
	${props => props.left ? `margin-left: ${props.left * 8}px` : ''};
	${props => props.right ? `margin-right: ${props.right * 8}px` : ''};
`

export default Spacer