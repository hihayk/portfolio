import styled, { injectGlobal } from 'styled-components'
import { colors } from '../styles/variables'

import Graphik400Eot from '../assets/fonts/Graphik-400.eot'
import Graphik400Woff from '../assets/fonts/Graphik-400.woff'
import Graphik400Woff2 from '../assets/fonts/Graphik-400.woff2'
import Graphik700Eot from '../assets/fonts/Graphik-700.eot'
import Graphik700Woff from '../assets/fonts/Graphik-700.woff'
import Graphik700Woff2 from '../assets/fonts/Graphik-700.woff2'

injectGlobal`
	@font-face {
		font-family: 'GraphikWeb';
		src: url('${Graphik400Eot}');
		src: url('${Graphik400Eot}?#iefix') format('embedded-opentype'),
				 url('${Graphik400Woff2}') format('woff2'),
				 url('${Graphik400Woff}') format('woff');
		font-weight: 400;
	}
	@font-face {
		font-family: 'GraphikWeb';
		src: url('${Graphik700Eot}');
		src: url('${Graphik700Eot}?#iefix') format('embedded-opentype'),
				 url('${Graphik700Woff2}') format('woff2'),
				 url('${Graphik700Woff}') format('woff');
		font-weight: 700;
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
`
const BaseStyles = styled.div`
	font-family: 'GraphikWeb', -apple-system, BlinkMacSystemFont, sans-serif;
	color: #666;
	font-size: 18px;
	line-height: 24px;

	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;

	img {
		max-width: 100%;
	}
`

export default BaseStyles
