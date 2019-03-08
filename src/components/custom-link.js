import React from 'react'
import styled from 'styled-components'
import { colors, textSizesStyles } from '../styles/variables'

const CustomLinkWrapper = styled.span`
	${props => textSizesStyles[props.size]};
	display: ${props => props.block ? 'block' : 'inline-block'};
	position: relative;
	color: ${props => props.primary ? colors.red : props.color};
	text-decoration: none;
	${props => !props.lineOnHover ? `box-shadow: inset 0 ${props.tickLine ? '-4px' : '-1px'} 0 ${props.primary ? colors.redLight : 'rgba(0,0,0,.2)'}` : ''};
	${props => props.dimmed ? 'opacity: .7' : ''};

	&:hover {
		${props => props.lineOnHover && props.underlineColor ? `box-shadow: inset 0 ${props.tickLine ? '-4px' : '-1px'} 0 ${props.underlineColor}` : ''};
		${props => props.lineOnHover && !props.underlineColor ? `box-shadow: inset 0 ${props.tickLine ? '-4px' : '-1px'} 0 ${props.primary ? colors.redLight : 'rgba(0,0,0,.2)'}` : ''};
	}
`

const A = styled.a`
	color: inherit;
	text-decoration: none;
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
