import { useSelector } from 'react-redux'

import { RootReducer } from '../../store'

import * as S from './styles'
import Contato from '../../components/Contato'
import { MainContent } from '../../styles'

const ListaDeContatos = () => {
  const { itens } = useSelector((state: RootReducer) => state.contatos)
  const { termo } = useSelector((state: RootReducer) => state.filtro)

  const filtraContatos = () => {
    let contatosFiltrados = itens

    if (termo !== undefined) {
      contatosFiltrados = contatosFiltrados.filter(
        (item) => item.fullName.toLowerCase().search(termo.toLowerCase()) >= 0
      )

      return contatosFiltrados.sort((a, b) =>
        a.fullName.localeCompare(b.fullName)
      )
    } else {
      return itens.sort((a, b) => a.fullName.localeCompare(b.fullName))
    }
  }

  const exibeResultadosFiltragem = (quantidade: number) => {
    let mensagem = ''

    if (termo !== undefined && termo.length) {
      mensagem = `Esta pesquisa retornou ${quantidade} resultado(s)`
    } else {
      mensagem = ``
    }

    return mensagem
  }

  const contatosFiltrados = filtraContatos()
  const mensagem = exibeResultadosFiltragem(contatosFiltrados.length)

  return (
    <MainContent>
      <S.SearchResults>{mensagem}</S.SearchResults>
      <S.ContactsList>
        {contatosFiltrados.map((item) => (
          <Contato
            email={item.email}
            fullName={item.fullName}
            id={item.id}
            key={item.id}
            phone={item.phone}
            friend={item.friend}
          />
        ))}
      </S.ContactsList>
    </MainContent>
  )
}

export default ListaDeContatos
