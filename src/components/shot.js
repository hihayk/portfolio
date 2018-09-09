import React from 'react'
import styled, { css } from 'styled-components'
import Text from '../components/text'

const boxedStyles = css`
	background-color: ${props => props.boxedBg ? props.boxedBg : '#F5F5F5'};
	border-radius: 8px;
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
	${props => props.boxed && boxedStyles};
	margin-bottom: 64px;

	@media (max-width: 1200px) {
		margin-bottom: 32px;
	}
`
const Image = styled.img`
	${props => props.noShadow ? '' : 'box-shadow: 0 2px 5px 0 rgba(0,0,0,.04), 0 10px 30px 0 rgba(0,0,0,.03), 0 20px 54px 0 rgba(0,0,0,.02)'};
	border-radius: 4px;
	display: block;
	margin: 0 auto;
`
const ImageWrapper = styled.div`
	max-width: 1280px;
	margin: 0 auto;
`
const ImageRow = styled.div`
  display: grid;
	grid-template-columns: repeat(${props => props.rows}, 1fr);
	grid-gap: 32px;

	@media (max-width: 1200px) {
		grid-gap: 16px;
	}
`
const ImageColumn = styled.div`
`
const Caption = styled(Text)`
	max-width: 640px;
`
const CaptionWrapper = styled.div`
	margin: 32px auto 0 auto;
	max-width: 1280px;

	@media (max-width: 1200px) {
		margin: 16px auto 0 auto;
	}
`

const Shot = (props) => {
	const srcListAmount = () => {
		if(props.srcList) {
			return props.srcList.length
		} else {
			return null
		}
	}

	return(
		<ShotWrapper boxed={props.boxed} boxedBg={props.boxedBg} srcList={props.srcList}>
			{props.src && (
				<ImageWrapper>
					<Image src={props.src} alt='hayk-an-design' noShadow={props.noShadow} />
				</ImageWrapper>
			)}

      <ImageRow rows={props.rows || srcListAmount()}>
        {props.srcList && props.srcList.map(( srcListItem, index ) => (
					<ImageColumn rows={props.rows || srcListAmount()} key={index}>
						<Image src={srcListItem} alt='hayk-an-design' noShadow={props.noShadow} />
					</ImageColumn>
        ))}
      </ImageRow>

			{props.caption
				? <CaptionWrapper>
					<Caption dimmed size='sizeN1' tag='p'>
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
