import React from 'react'
import styled, { createGlobalStyle, injectGlobal } from 'styled-components'
import { colors, textSizesStyles } from '../styles/variables'

import AtlasGrotesk400Woff from '../assets/fonts/AtlasGrotesk-400.woff'
import AtlasGrotesk400Woff2 from '../assets/fonts/AtlasGrotesk-400.woff2'
import AtlasGrotesk700Woff from '../assets/fonts/AtlasGrotesk-700.woff'
import AtlasGrotesk700Woff2 from '../assets/fonts/AtlasGrotesk-700.woff2'

const GlobalStyles = createGlobalStyle`
	@font-face {
		font-family: 'AtlasGrotesk';
		src: url('${AtlasGrotesk400Woff2}') format('woff2'),
				 url('${AtlasGrotesk400Woff}') format('woff');
		font-weight: 400;
	}
	@font-face {
		font-family: 'AtlasGrotesk';
		src: url('${AtlasGrotesk700Woff2}') format('woff2'),
				 url('${AtlasGrotesk700Woff}') format('woff');
		font-weight: 700;
	}

	:root {
		--ratio: 0.625vw;
		
		--space1: calc( calc(var(--ratio)/2 + 4px) );
		
		--space2: calc( var(--space1) * 2 );
		--space3: calc( var(--space2) * 2 );
		--space4: calc( var(--space3) * 2 );
		--space5: calc( var(--space4) * 2 );
		
		--pagePadding: calc( calc(var(--ratio) * 6) + 16px );
	}

	body {
		margin: 0;
	  padding: 0;
  }

  ::-moz-selection {
  	color: white;
  	background-color: black;
  }
	::selection {
		color: white;
		background-color: black;
	}

	*,
	*:before,
	*:after {
		box-sizing: border-box;
	}

	img {
		max-width: 100%;
	}

	p {
    margin: 0;
	}
`

const Root = styled.div`
	font-family: 'AtlasGrotesk', -apple-system, BlinkMacSystemFont, sans-serif;
	color: ${colors.body};
	${textSizesStyles.size0};

	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;
`

const BaseStyles = ({children}) => (
	<Root>
		<GlobalStyles />
		{children}
	</Root>
)

export default BaseStyles
