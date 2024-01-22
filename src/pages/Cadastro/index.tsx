import Cabecalho from '../../containers/Cabecalho'
import FormCadastro from '../../containers/FormCadastro'
import { Container } from '../../styles'

const Cadastro = () => (
  <>
    <Container>
      <Cabecalho headerTitle="Novo contato" />
      <FormCadastro />
    </Container>
  </>
)

export default Cadastro
