import styled from 'styled-components'

export const FiltroWrapper = styled.div`
  margin-top: 2em;
  padding: 0 1.5em;
`

export const FormWrapper = styled.form`
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: #ccc;
  padding: 0.5em 0em;
  border-radius: 16px;

  input {
    border: none;
    background-color: #ccc;
    padding-left: 0.8em;

    &:focus {
      outline: none;
    }
  }

  button {
    background-color: transparent;
    border: none;
  }
`
