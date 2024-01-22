import { Link } from 'react-router-dom'

import { FaArrowLeft, FaPlus } from 'react-icons/fa'

import HeaderWrapper from './styles'

type Props = {
  headerTitle: string
  mainPage?: boolean
}

const BarraSuperior = (props: Props) => {
  const { headerTitle, mainPage } = props

  return (
    <HeaderWrapper>
      {mainPage ? null : (
        <Link to={'/'}>
          <FaArrowLeft />
        </Link>
      )}
      <h1>{headerTitle}</h1>
      {mainPage ? (
        <Link to={'/novo'}>
          <FaPlus />
        </Link>
      ) : null}
    </HeaderWrapper>
  )
}

export default BarraSuperior
