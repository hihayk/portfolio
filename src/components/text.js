import React from 'react'
import styled from 'styled-components'
import { colors } from '../styles/variables'

const Text = ({children, ...other}) => {
	let component

  if (other.tag) {
    const Tag = other.tag

		const TagWrapper = styled(Tag)`
			${props => props.weight === 'bold' ? 'font-weight: 700' : ''};
			${props => props.weight === 'regular' ? 'font-weight: 400' : ''};
			${props => props.color ? `color: ${props.color}` : ''};
			${props => props.dimmed ? 'opacity: .7' : ''};
			${props => props.primary ? `color: ${colors.red}` : ''};

			${props => props.size === 'sizeN1' ? 'font-size: 14px; line-height: 20px' : ''};
			${props => props.size === 'size0' ? 'font-size: 18px; line-height: 24px' : ''};
			${props => props.size === 'size1' ? 'font-size: 24px; line-height: 32px' : ''};
			${props => props.size === 'size2' ? 'font-size: 32px; line-height: 40px' : ''};
			${props => props.size === 'size3' ? 'font-size: 40px; line-height: 44px; letter-spacing: -0.03em' : ''};
			${props => props.huge ? `font-size: 144px; line-height: 1; opacity: .2; letter-spacing: -0.05em` : ''};

			@media (max-width: 1200px) {
				${props => props.size === 'sizeN1' ? 'font-size: 12px; line-height: 18px' : ''};
				${props => props.size === 'size0' ? 'font-size: 14px; line-height: 20px' : ''};
				${props => props.size === 'size1' ? 'font-size: 18px; line-height: 24px' : ''};
				${props => props.size === 'size2' ? 'font-size: 24px; line-height: 32px' : ''};
				${props => props.size === 'size3' ? 'font-size: 32px; line-height: 36px; letter-spacing: 0' : ''};
				${props => props.huge ? `font-size: 144px; line-height: 1; opacity: .2; letter-spacing: -0.05em` : ''};
			}

			margin: 0;
		`

  	component = <TagWrapper {...other}>{ children }</TagWrapper>

	}
  return component
}

Text.defaultProps = {
	tag: 'div',
	size: 'size0',
	weight: 'regular'
}

export default Text
