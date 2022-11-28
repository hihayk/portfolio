import React from 'react'
import styled from 'styled-components'
import { textSizesStyles } from '../styles/variables'

const ShotWrapper = styled.div`
	margin-top: var(--space3);
	margin-bottom: var(--space4);
	${props => props.backgroundImage && `background-image: url(${props.backgroundImage})`};
	background-size: 100%;
`
const Image = styled.img`
	display: block;
	width: 100%;
`
const ImageWrapper = styled.div`
	max-width: 1280px;
	margin: 0 auto;
`
const ImageRow = styled.div`
  display: grid;
	grid-template-columns: ${props => props.rows};
	grid-gap: ${({ gap }) => gap};
`
const ImageColumn = styled.div`
`
const Caption = styled.figcaption`
	max-width: 640px;
  ${textSizesStyles.sizeN1};
`
const CaptionWrapper = styled.div`
	margin: var(--space2) auto 0 auto;
	max-width: 1280px;
`

const StoryShot = ({
	srcList2,
	srcFolder,
	srcList,
	backgroundImage,
	src,
	rows,
	noShadow,
	caption,
  gap = '4px',
}) => {
	const srcListAmount = () => {
		if(srcList) {
			return srcList.length
		} else {
			return null
		}
	}

  const isNumber = value => typeof value === 'number';
  const rowsValue = isNumber(rows) ? `repeat(${rows}, 1fr)` : rows;

	return(
		<ShotWrapper className='ShotWrapper' srcList={srcList} backgroundImage={backgroundImage}>
			{src && (
				<ImageWrapper>
					<Image src={src} alt='hayk-an-design' noShadow={noShadow} />
				</ImageWrapper>
			)}

      <ImageRow rows={rowsValue || srcListAmount()} gap={gap}>
        {srcList && srcList.map(( srcListItem, index ) => (
					<div key={index}>
						<Image src={srcListItem} alt='hayk-an-design' noShadow={noShadow} />
					</div>
        ))}
        {srcList2 && srcList2.map(( srcListItem, index ) => (
					<ImageColumn rows={rows || srcListAmount()} key={index}>
						<Image src={require(`../assets/images/${srcFolder}/${srcListItem}`)} alt='hayk-an-design' noShadow={noShadow} />
					</ImageColumn>
        ))}
      </ImageRow>

			{caption
				? <CaptionWrapper>
					<Caption>
						{caption}
					</Caption>
				</CaptionWrapper>
				: null
			}
		</ShotWrapper>
	)
}

export default StoryShot
