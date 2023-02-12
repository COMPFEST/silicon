import { SizesInterface } from './interface'

export const SIZES: SizesInterface = {
  sm: {
    horizontal: `width: 209px;
    @media only screen and (max-width: 220px){
        width: 180px;
    }`,
    vertical: `width: 279px;
    @media only screen and (max-width: 220px){
        width: 200px;
    }`
  },
  md: {
    horizontal: `width: 289px;
    @media only screen and (max-width: 320px){
        width: 240px;
    }`,
    vertical: `width: 379px;
    @media only screen and (max-width: 320px){
        width: 280px;
    }`
  },
  lg: {
    horizontal: `width: 389px;
    @media only screen and (max-width: 320px){
        width: 240px;
    }`,
    vertical: `width: 489px;
    @media only screen and (max-width: 320px){
        width: 280px;
    }`
  },
  full: {
    vertical: `width: 100%;`,
    horizontal: `width: 100%;`
  }
}
