import styled from "styled-components";

export const Main = styled.main`
    @import url('https://fonts.googleapis.com/css2?family=Raleway:wght@400;500;700;900&display=swap');
    font-family: 'Raleway', sans-serif;
    padding: 0 16px;
    padding-top: 25px;
`

export const H3 = styled.h3`
    font-weight: 700;
    font-size: 24px;
    line-height: 28px;
    letter-spacing: -0.02em;
    color: #1E1E1E;
    filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
    margin: 40px 0 11px 0;
`

export const Span = styled.span`
    color: #1E1E1E;
    font-style: normal;
    font-weight: 500;
    font-size: 16px;
    line-height: 19px;
    letter-spacing: -0.02em;
`

export const DivUpload = styled.div`
    display: flex;
`

export const Input = styled.input`
    display: none;
`

export const LabelImg = styled.label`
    padding: 3px 20px;
    color: #fff;
    font-size: 12px;
    background: #1E1E1E;
    border-radius: 4px;
    cursor: pointer;
    text-align: center;
    width: 200px;
`

export const InputImg = styled.img`
    width: 100px;
    height: 100px;
`

export const LabelInputText = styled.label`
    font-weight: 500;
    font-size: 12px;
    line-height: 14px;
    color: #1E1E1E;
    display: block;
    margin: 24px 0 5px 0;
`

export const InputText = styled.input`
    border: 1.3px solid #1E1E1E;
    border-radius: 4px;
    width: 100%;
    ::placeholder{
        text-align: start;
        padding: 0 10px;
        font-size: 12px;
        line-height: 14px;
        color: #3F3F3F;
    }
`

export const TextArea = styled.textarea`
    border: 1.3px solid #1E1E1E;
    border-radius: 4px;
    resize: none;
    width: 100%;
    ::placeholder{
        text-align: start;
        padding: 0 10px;
        font-size: 12px;
        line-height: 14px;
        color: #3F3F3F;
    }
`

export const SpanInfo = styled.span`
    font-weight: 500;
    font-size: 16px;
    line-height: 19px;
    letter-spacing: -0.02em;
    color: #1E1E1E;
    display: block;
    margin: 15px 0 4px 0;
`

export const DivLabelImg = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 0 auto;
`

export const LabelInput = styled.label`
    padding: 3px 0;
    font-size: 12px;
    font-weight: 500;
    border: 1px solid;
    border-radius: 4px;
    width: 77px;
    cursor: pointer;
    text-align: center;
    margin-right: 8px;
`


export const InputPrimeiraCor = styled.input`
  display: none;
&:checked + ${LabelInput} {
  background-color: #77B291;
}
`

export const InputSegundaCor = styled.input`
display: none;
&:checked + ${LabelInput} {
  background-color: #6079D1;
}
`

export const InputTerceiraCor = styled.input`
display: none;
&:checked + ${LabelInput} {
  background-color: #FAD673;
}
`

export const InputQuartaCor = styled.input`
display: none;
&:checked + ${LabelInput} {
  background-color: #ED7957;
  ;
}
`
export const LabelCaracteristicas = styled.label`
    font-weight: 500;
    font-size: 16px;
    line-height: 19px;
    letter-spacing: -0.02em;
    color: #1E1E1E;
    margin: 15px 0 4px 0;
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
    width: 100%;
`

export const ImgButton = styled.img`
    margin-left: 25px;
    align-items: center;
    width: 24px;
    height: 24px;
`

export const FormSelect = styled.select`
    border: 1.3px solid #1E1E1E;
    padding: 6px 16px;
    border-radius: 5px;
`