import { useDispatch, useSelector } from 'react-redux'

import * as S from './styles'

import { alterarTermo } from '../../store/reducers/filtro'
import { RootReducer } from '../../store'

const FormularioPesquisa = () => {
  const dispatch = useDispatch()
  const { termo } = useSelector((state: RootReducer) => state.filtro)

  return (
    <S.FiltroWrapper>
      <S.FormWrapper action="#">
        <input
          type="text"
          placeholder="Pesquise"
          value={termo}
          onChange={(evento) => dispatch(alterarTermo(evento.target.value))}
        />
      </S.FormWrapper>
    </S.FiltroWrapper>
  )
}

export default FormularioPesquisa
