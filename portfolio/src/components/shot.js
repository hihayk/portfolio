import React from 'react'
import styled from 'styled-components'

const ShotWrapper = styled.div`
	${props => props.boxed ? 'padding: 64px; background-color: #F5F5F5; margin: 0 64px' : ''};
	display: flex;
	justify-content: center;
	align-items: flex-start;
`
const Image = styled.img`
	box-shadow: 0 2px 6px 0 rgba(0,0,0,.10), 0 11px 54px 0 rgba(0,0,0,.05);
	border-radius: 4px;
`

const Shot = (props) => {
	return(
		<ShotWrapper boxed={props.boxed}>
			<Image src={props.src} />
		</ShotWrapper>
	)
}

export default Shot
