import { memo } from 'react'
import '../styles/home.css'
import Header from '../../../components/header'
import Card from '../../../components/card'
import { useHome } from '../providers/useHome'
import Form from './components/form'

const Home = () => {
  const {
    user,
    errors,
    item_menu,
    onChangeText,
    onSubmitData
  } = useHome()

  return (
    <div>
      <Header />
      <Card>
        <p>
          Hola, bienvenido, sabemos que quieres viajar en un <span>{item_menu?.name}</span>, por favor diligencia el siguiente formulario:
        </p>
        <div className='form_home'>
          <Form
            user={user}
            errors={errors}
            onChangeText={onChangeText}
          />
        </div>
        <button
          className='btn_success'
          onClick={onSubmitData}
        >
          Enviar
        </button>
      </Card>
    </div>
  )
}

export default memo(Home)
