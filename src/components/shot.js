import React from 'react'
import styled from 'styled-components'

const ShotWrapper = styled.div`
	${props => props.boxed ? 'padding: 64px' : ''};
	${props => props.spaced ? 'margin-left: 64px; margin-right: 64px' : ''};
	${props => props.noBg ? '' : 'background-color: #F5F5F5'};
	display: flex;
	justify-content: center;
	align-items: flex-start;
	margin-bottom: 64px;
`
const Image = styled.img`
	${props => props.noShadow ? '' : 'box-shadow: 0 2px 6px 0 rgba(0,0,0,.10), 0 11px 54px 0 rgba(0,0,0,.05)'};
	border-radius: 4px;
`

const Shot = (props) => {
	return(
		<ShotWrapper boxed={props.boxed} spaced={props.spaced} noBg={props.noBg}>
			<Image src={props.src} alt={props.alt} noShadow={props.noShadow}/>
		</ShotWrapper>
	)
}

Shot.defaultProps = {
	spaced: true,
	boxed: true
}

export default Shot
