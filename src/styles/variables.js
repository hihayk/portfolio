import { css } from 'styled-components'

export const unit = 8

export const breakpoints = {
  sm: '720px',
  md: '1200px',
  lg: '1440px',
}

export const colors = {
  grey05: 'rgba(0,0,0,.05)',
  red: 'rgb(194, 83, 83)',
  redLight: 'rgba(194, 83, 83, .4)',
  body: 'rgb(40, 40, 40)',
}

export const textSizes = {
  sizeN1: {
    smallScreen: {
      fontSize: '12px',
      lineHeight: '18px',
    },
    mediumScreen: {
      fontSize: '14px',
      lineHeight: '20px',
    },
  },
  size0: {
    smallScreen: {
      fontSize: '14px',
      lineHeight: '20px',
    },
    mediumScreen: {
      fontSize: '18px',
      lineHeight: '27px',
    },
  },
  size1: {
    smallScreen: {
      fontSize: '18px',
      lineHeight: '24px',
    },
    mediumScreen: {
      fontSize: '24px',
      lineHeight: '32px',
    },
  },
  size2: {
    smallScreen: {
      fontSize: '24px',
      lineHeight: '32px',
    },
    mediumScreen: {
      fontSize: '32px',
      lineHeight: '40px',
    },
  },
  size3: {
    smallScreen: {
      fontSize: '32px',
      lineHeight: '36px',
    },
    mediumScreen: {
      fontSize: '40px',
      lineHeight: '44px',
    },
  },
  huge: {
    smallScreen: {
      fontSize: '144px',
      lineHeight: '144px',
    },
    mediumScreen: {
      fontSize: '144px',
      lineHeight: '144px',
    },
  },
}

export const textSizesStyles = {
  sizeN1: css`
    font-size: ${textSizes.sizeN1.mediumScreen.fontSize};
    line-height: ${textSizes.sizeN1.mediumScreen.lineHeight};
    
    @media (max-width: ${breakpoints.sm}) {
      font-size: ${textSizes.sizeN1.smallScreen.fontSize};
      line-height: ${textSizes.sizeN1.smallScreen.lineHeight};
    }
  `,
  size0: css`
    font-size: ${textSizes.size0.mediumScreen.fontSize};
    line-height: ${textSizes.size0.mediumScreen.lineHeight};
    
    @media (max-width: ${breakpoints.sm}) {
      font-size: ${textSizes.size0.smallScreen.fontSize};
      line-height: ${textSizes.size0.smallScreen.lineHeight};
    }
  `,
  size1: css`
    font-size: ${textSizes.size1.mediumScreen.fontSize};
    line-height: ${textSizes.size1.mediumScreen.lineHeight};
    letter-spacing: -0.02em;
    
    @media (max-width: ${breakpoints.sm}) {
      font-size: ${textSizes.size1.smallScreen.fontSize};
      line-height: ${textSizes.size1.smallScreen.lineHeight};
    }
  `,
  size2: css`
    font-size: ${textSizes.size2.mediumScreen.fontSize};
    line-height: ${textSizes.size2.mediumScreen.lineHeight};
    letter-spacing: -0.03em;
    
    @media (max-width: ${breakpoints.sm}) {
      font-size: ${textSizes.size2.smallScreen.fontSize};
      line-height: ${textSizes.size2.smallScreen.lineHeight};
    }
  `,
  size3: css`
    font-size: ${textSizes.size3.mediumScreen.fontSize};
    line-height: ${textSizes.size3.mediumScreen.lineHeight};
    letter-spacing: -0.03em;
    
    @media (max-width: ${breakpoints.sm}) {
      font-size: ${textSizes.size3.smallScreen.fontSize};
      line-height: ${textSizes.size3.smallScreen.lineHeight};
    }
  `,
  huge: css`
    font-size: ${textSizes.huge.mediumScreen.fontSize};
    line-height: ${textSizes.huge.mediumScreen.lineHeight};
    letter-spacing: -0.05em;
    opacity: .2;
    
    @media (max-width: ${breakpoints.sm}) {
      font-size: ${textSizes.huge.smallScreen.fontSize};
      line-height: ${textSizes.huge.smallScreen.lineHeight};
    }
  `,
}

export const textColorStyles = {
  darkTheme: css`
    color: white;
  `,
  lightThene: css`
    color: ${colors.body};
  `,
}