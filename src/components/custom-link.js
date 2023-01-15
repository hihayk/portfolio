import React from 'react'
import styled from 'styled-components'
import { colors, textSizesStyles } from '../styles/variables'

const CustomLinkWrapper = styled.span`
	${props => textSizesStyles[props.size]};
	display: ${props => props.block ? 'block' : 'inline-block'};
	position: relative;
	color: var(--body);

	
`

const A = styled.a`
	color: inherit;
	display: inline-block;
`
const Arrow = styled.svg`
	position: absolute;
	right: -24px;
	top: 6px;
`

const CustomLink = (props) => {
	return(
		<CustomLinkWrapper
			size={props.size}
			dimmed={props.dimmed}
			primary={props.primary}
			block={props.block}
			tag={props.tag}
			lineOnHover={props.lineOnHover}
			underlineColor={props.underlineColor}
			tickLine={props.tickLine}
			color={props.color || colors.body}
		>
			{props.withArrow
				? <Arrow width="17" height="13" viewBox="0 0 17 13" xmlns="http://www.w3.org/2000/svg"><title>Group 4</title><g stroke="#666" fill="none" fillRule="evenodd" strokeLinecap="square"><path d="M.5 6.5h16M10.5.5l6 6-6 6"/></g>
				</Arrow>
				: null
			}

			{props.tag === 'span'
				? props.children
				: (<A href={props.href} target={props.target} lineOnHover={props.lineOnHover}>{props.children}</A>)
			}
		</CustomLinkWrapper>
	)
}

CustomLinkWrapper.defaultProps = {
	lineOnHover: true,
	size: 'size0'
}

export default CustomLink
