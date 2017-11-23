import styled from 'styled-components'

const Spacer = styled.div`
	${props => props.top ? `padding-top: ${props.top * 8}px` : ''};
	${props => props.bottom ? `padding-bottom: ${props.bottom * 8}px` : ''};
	${props => props.left ? `padding-left: ${props.left * 8}px` : ''};
	${props => props.right ? `padding-right: ${props.right * 8}px` : ''};

	@media (max-width: 1200px) {
		${props => props.smTop ? `padding-top: ${props.smTop * 8}px` : ''};
		${props => props.smBottom ? `padding-bottom: ${props.smBottom * 8}px` : ''};
		${props => props.smLeft ? `padding-left: ${props.smLeft * 8}px` : ''};
		${props => props.smRight ? `padding-right: ${props.smRight * 8}px` : ''};
	}
`

export default Spacer
