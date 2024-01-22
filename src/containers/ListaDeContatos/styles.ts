import styled from 'styled-components'

export const SearchResults = styled.p`
  text-align: center;
  margin-bottom: 1em;
`

export const ContactsList = styled.ul`
  list-style: none;
`

export const ContactItem = styled.li`
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid #ccc;
  color: #666;
  margin-top: 1em;
  padding-bottom: 0.8em;
  padding-right: 0.5em;

  & p:first-child {
    color: #000;
  }

  & p span {
    color: #ff0000;
    margin-right: 0.5em;
  }
`

export const MenuContact = styled.div`
  cursor: pointer;
`

export const Botao = styled.button`
  font-weight: bold;
  font-size: 0.5em;
  color: #fff;
  padding: 0.2em 0.5em;
  border: none;
  cursor: pointer;
  background-color: #2f3640;
  border-radius: 8px;
`
