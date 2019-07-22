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
    fontSize: '14px',
    lineHeight: '1.5',
  },
  size0: {
    fontSize: 'calc(0.25vw + 14px)',
    lineHeight: '1.5',
  },
  size1: {
    fontSize: 'calc(0.6vw + 16px)',
    lineHeight: '1.2',
  },
  size2: {
    fontSize: 'calc(0.6vw + 24px)',
    lineHeight: '1.2',
  },
  size3: {
    fontSize: 'calc(0.6vw + 32px)',
    lineHeight: '1.1',
  },
  huge: {
    fontSize: '9rem',
    lineHeight: '1',
  },
}

export const textSizesStyles = {
  sizeN1: css`
    font-size: ${textSizes.sizeN1.fontSize};
    line-height: ${textSizes.sizeN1.lineHeight};
  `,
  size0: css`
    font-size: ${textSizes.size0.fontSize};
    line-height: ${textSizes.size0.lineHeight};
  `,
  size1: css`
    font-size: ${textSizes.size1.fontSize};
    line-height: ${textSizes.size1.lineHeight};
    letter-spacing: -0.02em;
  `,
  size2: css`
    font-size: ${textSizes.size2.fontSize};
    line-height: ${textSizes.size2.lineHeight};
    letter-spacing: -0.03em;
  `,
  size3: css`
    font-size: ${textSizes.size3.fontSize};
    line-height: ${textSizes.size3.lineHeight};
    letter-spacing: -0.03em;
  `,
  huge: css`
    font-size: ${textSizes.huge.fontSize};
    line-height: ${textSizes.huge.lineHeight};
    letter-spacing: -0.05em;
    opacity: .2;
  `,
}