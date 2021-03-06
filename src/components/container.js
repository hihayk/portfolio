import styled from 'styled-components'

const Container = styled.div`
	${props => props.top ? `margin-top: ${props.top * 8}px` : ''};
	${props => props.bottom ? `margin-bottom: ${props.bottom * 8}px` : ''};
	${props => props.left ? `margin-left: ${props.left * 8}px` : ''};
	${props => props.right ? `margin-right: ${props.right * 8}px` : ''};

	${props => props.width === 'lg' ? 'max-width: 640px' : ''};
	${props => props.contain ? 'max-width: 1216px; padding: 0 32px; margin: 0 auto' : ''};
	${props => props.fullPage ? 'padding: 0 var(--pagePadding)' : ''};

	${props => props.bgColor ? `background-color: ${props.bgColor}` : ''};
`

export default Container
