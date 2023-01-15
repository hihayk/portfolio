import styled, {keyframes} from 'styled-components'

const animateDown = keyframes`
	0% {
		opacity: 0;
	}
	100% {
		opacity: 1;
	}
`
const animateUp = keyframes`
	0% {
		opacity: 0;
	}
	100% {
		opacity: 1;
	}
`
const Animate = styled.div`
	will-change: transform, opacity;
  animation-name: ${props => props.down ? animateDown : animateUp};
  animation-duration: ${props => props.duration ? props.duration : 1}s;
  animation-timing-function: cubic-bezier(0,0,0,1);
`

export default Animate
