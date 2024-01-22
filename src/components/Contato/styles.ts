import { styled } from 'styled-components'
import reactInputMask from 'react-input-mask'

import variaveis from '../../styles/variaveis'
import { FiMoreVertical, FiTrash2 } from 'react-icons/fi'
import { MdOutlineFavorite } from 'react-icons/md'

export const Favorito = styled(MdOutlineFavorite)`
  color: ${variaveis.cores.vermelho};
`

export const ContactItem = styled.li`
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid #ccc;
  color: #666;
  margin-top: 1em;
  padding-bottom: 0.8em;

  & textarea {
    display: flex;
    align-items: center;
    font-size: 0.8em;
    resize: none;
    height: 1.6em;
    vertical-align: middle;
    border: none;
    outline: none;
    color: #000;
  }
`

export const PhoneInput = styled(reactInputMask)`
  display: flex;
  align-items: center;
  font-size: 0.8em;
  resize: none;
  height: 1.6em;
  vertical-align: middle;
  border: none;
  outline: none;
  color: #000;
`

export const Botao = styled.button`
  font-weight: bold;
  font-size: 0.5em;
  color: #fff;
  padding: 0.8em 0.8em;
  border: none;
  cursor: pointer;
  background-color: #2f3640;
  border-radius: 8px;
`
export const BotaoSalvar = styled(Botao)`
  background-color: ${variaveis.cores.verde};
`

export const BotaoCancelar = styled(Botao)`
  background-color: ${variaveis.cores.vermelho};
  margin-left: 0.5em;
`
export const BotaoExcluir = styled(FiTrash2)`
  font-size: 1.5em;
  cursor: pointer;
  color: ${variaveis.cores.vermelho};
`

export const BotaoMenu = styled(FiMoreVertical)`
  font-size: 1.5em;
  margin-left: 0.5em;
  cursor: pointer;
`
