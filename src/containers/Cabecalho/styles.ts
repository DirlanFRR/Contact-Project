import styled from 'styled-components'

const HeaderWrapper = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: sticky;
  top: 0;
  z-index: 1;
  background-color: #44bd32;
  padding: 1.5em 2em;
  h1 {
    font-size: 1.3em;
  }
`

export default HeaderWrapper
