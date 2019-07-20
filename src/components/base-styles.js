import styled, { injectGlobal } from 'styled-components'
import { colors, textSizesStyles } from '../styles/variables'

import AtlasGrotesk400Woff from '../assets/fonts/AtlasGrotesk-400.woff'
import AtlasGrotesk400Woff2 from '../assets/fonts/AtlasGrotesk-400.woff2'
import AtlasGrotesk700Woff from '../assets/fonts/AtlasGrotesk-700.woff'
import AtlasGrotesk700Woff2 from '../assets/fonts/AtlasGrotesk-700.woff2'

injectGlobal`
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
		--pagePadding: calc(3vw + 24px);
	}

	body {
		margin: 0;
	  padding: 0;
  }

  ::-moz-selection {
  	color: ${colors.red};
  	background-color: ${colors.red};
  }
	::selection {
		color: ${colors.red};
		background-color: ${colors.red};
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
const BaseStyles = styled.div`
	font-family: 'AtlasGrotesk', -apple-system, BlinkMacSystemFont, sans-serif;
	color: ${colors.body};
	${textSizesStyles.size0};

	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;
`

export default BaseStyles
