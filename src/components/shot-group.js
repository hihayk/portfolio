import styled from 'styled-components'

const ShotGroup = styled.div`
	display: flex;
	align-items: flex-start;
	${props => props.spaced ? 'margin: 0 64px' : ''};

	@media (max-width: 1200px) {
		${props => props.spaced ? 'margin: 0 32px' : ''};
	}

	& > *:not(:last-child) {
		margin-right: 64px;

		@media (max-width: 1200px) {
			margin-right: 32px;
		}
	}
`

export default ShotGroup
