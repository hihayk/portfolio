import React from 'react'
import styled from 'styled-components'
import { colors, textSizesStyles } from '../styles/variables'

const Text = ({children, ...other}) => {
	let component

  if (other.tag) {
    const Tag = other.tag

		const TagWrapper = styled(Tag)`
			${props => props.weight === 'bold' && 'font-weight: 700'};
			${props => props.weight === 'regular' && 'font-weight: 400'};
			${props => props.color && `color: ${props.color}`};
			${props => props.dimmed && 'opacity: .7'};
			${props => props.primary && `color: ${colors.red}`};
			${props => textSizesStyles[props.size]};
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
