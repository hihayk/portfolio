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
    fontSize: 'var(--sizeN1)',
  },
  size0: {
    fontSize: 'var(--size0)',
  },
  size1: {
    fontSize: 'var(--size1)',
  },
  size2: {
    fontSize: 'var(--size2)',
  },
  size3: {
    fontSize: 'var(--size3)',
  },
  huge: {
    fontSize: 'var(--huge)',
  },
}

export const textSizesStyles = {
  sizeN1: css`
    font-size: ${textSizes.sizeN1.fontSize};
  `,
  size0: css`
    font-size: ${textSizes.size0.fontSize};
  `,
  size1: css`
    font-size: ${textSizes.size1.fontSize};
  `,
  size2: css`
    font-size: ${textSizes.size2.fontSize};
  `,
  size3: css`
    font-size: ${textSizes.size3.fontSize};
  `,
  huge: css`
    font-size: ${textSizes.huge.fontSize};
  `,
}