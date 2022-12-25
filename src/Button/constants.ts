import { VariantsInterface } from './interface'

export const VARIANTS: VariantsInterface = {
  primary: `background: linear-gradient(180deg, #5561ff 0%, #3643fc 100%);
  &:hover {
    background: linear-gradient(180deg, #6b75ff 0%, #535fff 100%);
    cursor: pointer;
    box-shadow: 0 4px 16px 0 #0000004d;
  }
  &:focus {
    background: linear-gradient(180deg, #4b4fa0 0%, #44488b 100%);
    box-shadow: none;
  }
  &:disabled {
    background: #35374f;
    color: rgba(255, 255, 255, 0.6);
    cursor: not-allowed;
    box-shadow: none;
  }`,
  secondary: `background-color: #3d3e50;
    &:hover {
      cursor: pointer;
      box-shadow: 0 4px 16px 0 rgba(0, 0, 0, 0.3);
    }
    &:disabled {
      background: #35374f;
      color: rgba(255, 255, 255, 0.6);
      cursor: not-allowed;
      box-shadow: none;
    }
    &:focus: {
      box-shadow: none;
    }`,
  tertiary: `background-color: transparent;
    color: white;
    &:hover {
        background: #323347;
        box-shadow: 0 4px 16px rgba(0, 0, 0, 0.3);
        cursor: pointer;
    }
    &:focus {
        background: #242537;
        box-shadow: none;
    }
    &:disabled {
        cursor: not-allowed;
        box-shadow: none;
        background: #28293d;
        color: rgba(255, 255, 255, 0.6);
    }`,
  ghost: `background-color: transparent;
    border: 2px solid #60648B;
    padding: 10px 30px;
    &:hover {
        border: 2px solid #B9BCD9;
        cursor: pointer;
    }
    &:focus { 
        border: 2px solid #45475A; 
        boxShadow: none 
    }
    &:disabled {
        border: 2px solid #6E719833;
        color: #6E7198;
        cursor: not-allowed;
    }`,
}
