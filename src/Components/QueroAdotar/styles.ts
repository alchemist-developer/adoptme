import styled from "styled-components";
import btnFemeaUnactive from '../../assets/btnFemeaUnactive.png'
import btnFemeaActive from '../../assets/btnFemeaActive.png'
import btnMachoUnactive from '../../assets/btnMachoUnactive.png'
import btnMachoActive from '../../assets/btnMachoActive.png'
import btnTantoFazUnactive from '../../assets/btnTantoFazUnactive.png'
import btnTantoFazActive from '../../assets/btnTantoFazActive.png'


export const Main = styled.main`
    @import url('https://fonts.googleapis.com/css2?family=Raleway:wght@400;500;700;900&display=swap');
    font-family: 'Raleway', sans-serif;
`

export const CardPug = styled.img`
    width: 100vw;
    align-items: center;
`

export const Form = styled.form`
    display: flex;
    flex-direction: column;
    padding: 0 16px;
`

export const H3 = styled.h3`
    font-size: 24px;
    font-weight: bold;
    margin: 30px 0 0 0;
`

export const FormSelect = styled.select`
    border: solid 1px;
    padding: 6px 16px;
    border-radius: 5px;
`

export const LabelFemea = styled.label`
    background-image: url(${btnFemeaUnactive});
    background-repeat: no-repeat;
    width: 52px;
    height: 58px;
`

export const InputFemea = styled.input`
    display: none;
  &:checked + ${LabelFemea} {
    background-image: url(${btnFemeaActive});
  }
`

export const LabelMacho = styled.label`
    background-image: url(${btnMachoUnactive});
    background-repeat: no-repeat;
    width: 52px;
    height: 58px;
`

export const InputMacho = styled.input`
    display: none;
  &:checked + ${LabelMacho} {
    background-image: url(${btnMachoActive});
  }
`

export const LabelTantoFaz = styled.label`
    background-image: url(${btnTantoFazUnactive});
    background-repeat: no-repeat;
    width: 52px;
    height: 58px;
`

export const InputTantoFaz = styled.input`
    display: none;
  &:checked + ${LabelTantoFaz} {
    background-image: url(${btnTantoFazActive});
  }
`

export const DivSexoAnimal = styled.div`
    display: flex;
    justify-content: space-around;
`

export const DivInputSexoAnimal = styled.div`
    margin-top: 20px;
    display: flex;
    flex-direction: column;
    margin-bottom: 11px;
`

export const SpanSexoAnimal = styled.span`
    font-size: 12px;
    font-weight: 500;
    text-align: center;
`

export const Input = styled.input`
    display: none;
`

export const DivInputRadio = styled.div`
    display: flex;
    gap: 10px;
    `
export const Label = styled.label`
    padding: 3px 0;
    font-size: 12px;
    font-weight: 500;
    border: 1px solid;
    border-radius: 4px;
    width: 77px;
    cursor: pointer;
    text-align: center;
`

export const InputPrimeiraCor = styled.input`
  display: none;
&:checked + ${Label} {
  background-color: #77B291;
}
`

export const InputSegundaCor = styled.input`
display: none;
&:checked + ${Label} {
  background-color: #6079D1;
}
`

export const InputTerceiraCor = styled.input`
display: none;
&:checked + ${Label} {
  background-color: #FAD673;
}
`

export const InputQuartaCor = styled.input`
display: none;
&:checked + ${Label} {
  background-color: #ED7957;
  ;
}
`

export const Span = styled.span`
    font-size: 16px;
    font-weight: 500;
    margin: 15px 0 6px 0;
`

export const Button = styled.button`
    font-size: 20px;
    color: #fff;
    margin: 20px 0;
    background: #1E1E1E;
    border: 1.3px solid #1E1E1E;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    border-radius: 8px;
    padding: 15px 0;
    align-items: center;
`

export const ImgButton = styled.img`
    margin-left: 25px;
    align-items: center;
    width: 24px;
    height: 24px;
`

