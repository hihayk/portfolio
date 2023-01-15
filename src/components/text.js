import React from 'react'
import styled from 'styled-components'

const Text = ({children, tag, ...props}) => {
	let component

  if (tag) {
    const Tag = tag

		const TagWrapper = styled(Tag)`
			${props => props.weight && `font-weight: ${props.weight}`};
			${props => props.color && `color: ${props.color}`};
			text-indent: -0.03em;
			${props => props.outline && 
				`
					-webkit-text-stroke: calc(0.5px + 0.01em) var(--c1);
					color: transparent;
				`
			};
			font-size: ${props => `var(--${props.size})`};
			margin: 0;
		`

  	component = <TagWrapper {...props}>{ children }</TagWrapper>

	}
  return component
}

Text.defaultProps = {
	tag: 'div',
	size: 'inherit',
}

export default Text
