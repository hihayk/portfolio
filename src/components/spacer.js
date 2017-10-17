import styled from 'styled-components'

const Spacer = styled.div`
	${props => props.top ? `margin-top: ${props.top * 8}px` : ''};
	${props => props.bottom ? `margin-bottom: ${props.bottom * 8}px` : ''};
	${props => props.left ? `margin-left: ${props.left * 8}px` : ''};
	${props => props.right ? `margin-right: ${props.right * 8}px` : ''};

	@media (max-width: 1200px) {
		${props => props.smTop ? `margin-top: ${props.smTop * 8}px` : ''};
		${props => props.smBottom ? `margin-bottom: ${props.smBottom * 8}px` : ''};
		${props => props.smLeft ? `margin-left: ${props.smLeft * 8}px` : ''};
		${props => props.smRight ? `margin-right: ${props.smRight * 8}px` : ''};
	}
`

export default Spacer
