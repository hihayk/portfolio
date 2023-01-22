import React from 'react'
import { createGlobalStyle } from 'styled-components'

const spaces = [1, 2, 3, 4, 5]

const sides = {
  top: 't',
  right: 'r',
  bottom: 'b',
  left: 'l',
};

const GlobalStyles = createGlobalStyle`
  ${spaces.map(space => {
    return Object.entries(sides).map(([side, shorthand]) => `
      .m${shorthand}-${space} {
        margin-${side}: var(--space${space});
      }
    `).join('');
  }).join('')}
`;

const BaseStyles = ({children}) => (
	<>
		<GlobalStyles />
		{children}
	</>
)

export default BaseStyles
