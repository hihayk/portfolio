import React from 'react'
import styled from 'styled-components'

const CustomLinkWrapper = styled.span`
	${props => props.size === 'size0' ? 'font-size: 18px; line-height: 24px' : ''};
	${props => props.size === 'size1' ? 'font-size: 24px; line-height: 32px' : ''};
	${props => props.size === 'size2' ? 'font-size: 32px; line-height: 40px' : ''};
	${props => props.size === 'size3' ? 'font-size: 40px; line-height: 48px' : ''};

	display: ${props => props.block ? 'block' : 'inline-block'};
	color: ${props => props.color ? props.color : '#666'};
	text-decoration: none;

	&:hover {
		${props => props.lineOnHover ? `box-shadow: inset 0 -2px 0 ${props.underlineColor}` : ''};
	}
`
const A = styled.a`
	color: inherit;
	text-decoration: none;
`

const CustomLink = (props) => {
	return(
		<CustomLinkWrapper size={props.size} color={props.color} block={props.block} tag={props.tag} lineOnHover={props.lineOnHover} underlineColor={props.underlineColor}>
			{props.tag === 'span'
				? props.children
				: (<A href={props.href} target={props.target}>{props.children}</A>)
			}
		</CustomLinkWrapper>
	)
}

export default CustomLink
