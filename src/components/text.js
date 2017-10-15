import styled from 'styled-components'

const Text = styled.div`
	${props => props.size === 'size0' ? 'font-size: 18px; line-height: 24px' : ''};
	${props => props.size === 'size1' ? 'font-size: 24px; line-height: 32px' : ''};
	${props => props.size === 'size2' ? 'font-size: 32px; line-height: 40px' : ''};
	${props => props.size === 'size3' ? 'font-size: 40px; line-height: 48px; letter-spacing: -0.03em' : ''};
	
	${props => props.weight === 'bold' ? 'font-weight: 700' : ''};
	${props => props.color ? `color: ${props.color}` : ''};
	${props => props.dimmed ? 'opacity: .7' : ''};
`

Text.defaultProps = {
	size: 'size0'
}

export default Text