import React from 'react'
import styled, { css } from 'styled-components'
import Text from '../components/text'
import Container from '../components/container'

const boxedStyles = css`
	background-color: ${props => props.boxedBg ? props.boxedBg : '#F5F5F5'};
	margin-left: 64px;
	margin-right: 64px;
	padding-left: 64px;
	padding-right: 64px;
	padding-top: 64px;
	padding-bottom: 64px;

	@media (max-width: 1200px) {
		margin-left: 0;
		margin-right: 0;
		padding-left: 32px;
		padding-right: 32px;
		padding-top: 32px;
		padding-bottom: 32px;
	}
`

const ShotWrapper = styled.div`
	${props => props.boxed ? boxedStyles : ''};
	margin-bottom: 64px;

	@media (max-width: 1200px) {
		margin-bottom: 32px;
	}
`
const Image = styled.img`
	${props => props.noShadow ? '' : 'box-shadow: 0 2px 6px 0 rgba(0,0,0,.10), 0 11px 54px 0 rgba(0,0,0,.05)'};
	border-radius: 4px;
	display: block;
	margin: 0 auto;
`
const Caption = styled(Text)`
	max-width: 640px;
`
const CaptionWrapper = styled.div`
	margin: 64px auto 0 auto;
	max-width: 1280px;
`

const Shot = (props) => {
	return(
		<ShotWrapper boxed={props.boxed} boxedBg={props.boxedBg} >
			<Image src={props.src} noShadow={props.noShadow} />

			{props.caption
				? <CaptionWrapper>
					<Caption dimmed size='sizeN1' >
						{props.caption}
					</Caption>
				</CaptionWrapper>
				: null
			}
		</ShotWrapper>
	)
}

Shot.defaultProps = {
	spaced: true,
	boxed: true
}

export default Shot
