import { SizesInterface } from './interface'

export const SIZES: SizesInterface = {
  sm: `width: 200px;
    @media only screen and (max-width: 220px){
        width: 180px;
    }`,
  md: `width: 280px;
    @media only screen and (max-width: 320px){
        width: 240px;
    }`,
  lg: `width: 380px;
    @media only screen and (max-width: 320px){
        width: 240px;
    }`,
}
