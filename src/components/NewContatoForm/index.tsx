import { FormEvent, useState } from 'react'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'

import FormElement, {
  CadastroButton,
  InputCadastroForm,
  InputPhone
} from './styles'
import Contact from '../../models/contact'
import { cadastrar } from '../../store/reducers/contatos'

const NewContatoForm = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const [fullName, setFullName] = useState('')
  const [email, setEmail] = useState('')
  const [phone, setPhone] = useState('')
  const [friend, setFriend] = useState(false)

  const cadastrarContato = (evento: FormEvent) => {
    evento.preventDefault()
    const novoContato = new Contact(fullName, email, phone, Date.now(), friend)
    dispatch({
      type: cadastrar.type,
      payload: JSON.parse(JSON.stringify(novoContato))
    })
    navigate('/')
  }

  return (
    <FormElement onSubmit={cadastrarContato}>
      <InputCadastroForm
        value={fullName}
        onChange={(evento) => setFullName(evento.target.value)}
        type="text"
        placeholder="Nome completo"
        required
      />
      <InputCadastroForm
        value={email}
        onChange={(evento) => setEmail(evento.target.value)}
        type="email"
        placeholder="Email"
      />
      <div>
        <InputPhone
          mask="(99) 99999-9999"
          value={phone}
          onChange={(evento) => setPhone(evento.target.value)}
          type="text"
          placeholder="Telefone"
          required
        />
        <InputCadastroForm
          checked={friend}
          onChange={() => setFriend(!friend)}
          type="checkbox"
          id="friend"
        />
        <label htmlFor="friend">Amigo</label>
      </div>
      <CadastroButton type="submit">Cadastrar</CadastroButton>
    </FormElement>
  )
}

export default NewContatoForm
