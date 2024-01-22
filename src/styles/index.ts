import styled, { createGlobalStyle } from 'styled-components'

const EstiloGlobal = createGlobalStyle`
  * {
    margin-top: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Montserrat', sans-serif;
    text-decoration: none;
  }
`

export const Container = styled.main`
  margin: 0 auto;
  max-width: 768px;
  width: 100%;
`

export const MainContent = styled.div`
  margin: 0 auto;
  padding: 0.5em 1.5em;
`

export default EstiloGlobal
