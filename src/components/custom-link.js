import React from 'react'
import styled from 'styled-components'
import { colors } from '../styles/variables'

const CustomLinkWrapper = styled.span`
	${props => props.size === 'size0' ? 'font-size: 18px; line-height: 24px' : ''};
	${props => props.size === 'size1' ? 'font-size: 24px; line-height: 32px' : ''};
	${props => props.size === 'size2' ? 'font-size: 32px; line-height: 40px' : ''};
	${props => props.size === 'size3' ? 'font-size: 40px; line-height: 48px' : ''};

	display: ${props => props.block ? 'block' : 'inline-block'};
	color: ${props => props.primary ? colors.red : colors.body};
	text-decoration: none;
	${props => !props.lineOnHover ? `box-shadow: inset 0 ${props.tickLine ? '-4px' : '-2px'} 0 ${props.primary ? colors.redLight : 'rgba(0,0,0,.2)'}` : ''};

	&:hover {
		${props => props.lineOnHover && props.underlineColor ? `box-shadow: inset 0 ${props.tickLine ? '-4px' : '-2px'} 0 ${props.underlineColor}` : ''};
		${props => props.lineOnHover && !props.underlineColor ? `box-shadow: inset 0 ${props.tickLine ? '-4px' : '-2px'} 0 ${props.primary ? colors.redLight : 'rgba(0,0,0,.2)'}` : ''};
	}
`
const A = styled.a`
	color: inherit;
	text-decoration: none;
`

const CustomLink = (props) => {
	return(
		<CustomLinkWrapper
			size={props.size}
			primary={props.primary}
			block={props.block}
			tag={props.tag}
			lineOnHover={props.lineOnHover}
			underlineColor={props.underlineColor}
			tickLine={props.tickLine}
		>
			{props.tag === 'span'
				? props.children
				: (<A href={props.href} target={props.target} lineOnHover={props.lineOnHover}>{props.children}</A>)
			}
		</CustomLinkWrapper>
	)
}

CustomLinkWrapper.defaultProps = {
	lineOnHover: true
}

export default CustomLink
