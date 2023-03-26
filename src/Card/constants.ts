import { SizesInterface } from './interface'

export const SIZES: SizesInterface = {
  sm: {
    vertical: `width: 209px;
    @media only screen and (max-width: 220px){
        width: 180px;
    }`,
    horizontal: `width: 279px;
    @media only screen and (max-width: 220px){
        width: 200px;
    }`,
  },
  md: {
    vertical: `width: 289px;
    @media only screen and (max-width: 320px){
        width: 240px;
    }`,
    horizontal: `width: 379px;
    @media only screen and (max-width: 320px){
        width: 280px;
    }`,
  },
  lg: {
    vertical: `width: 389px;
    @media only screen and (max-width: 320px){
        width: 240px;
    }`,
    horizontal: `width: 489px;
    @media only screen and (max-width: 320px){
        width: 280px;
    }`,
  },
  full: {
    vertical: `width: 100%;`,
    horizontal: `width: 100%;`,
  },
}
