import styled from 'styled-components'
import variaveis from '../../styles/variaveis'
import ReactInputMask from 'react-input-mask'

const FormElement = styled.form`
  display: flex;
  flex-direction: column;
  margin-top: 1em;

  & input[type='number'] {
    -moz-appearance: textfield;
    width: 70%;
    margin-bottom: 1em;
  }

  & input[type='checkbox'] {
    margin-left: 1em;
  }

  & label {
    font-size: 0.8em;
    margin-left: 0.5em;
  }
`

export const InputCadastroForm = styled.input`
  border-radius: 4px;
  border: 1px solid #ccc;
  padding: 0.5em;
  margin-bottom: 0.5em;
`
export const InputPhone = styled(ReactInputMask)`
  border-radius: 4px;
  border: 1px solid #ccc;
  padding: 0.5em;
  margin-bottom: 0.5em;
`

export const CadastroButton = styled.button`
  border-radius: 4px;
  background-color: ${variaveis.cores.verde};
  padding: 0.5em;
  border: none;
  color: #fff;
  font-weight: bold;
  cursor: pointer;
`

export default FormElement
