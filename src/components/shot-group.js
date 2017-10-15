import styled from 'styled-components'

const ShotGroup = styled.div`
	display: flex;
	align-items: flex-start;
	${props => props.spaced ? 'margin: 0 64px' : ''};

	& > *:not(:last-child) {
		margin-right: 64px;
	}
`

export default ShotGroup
