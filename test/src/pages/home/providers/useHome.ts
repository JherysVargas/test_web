import { ChangeEvent, useState, useEffect, useRef } from "react"
import { useSelector } from "react-redux"
import Lightbox from "../../../components/lightbox"
import { useValidateFields } from "../../../hooks/useValidateFields"
import { IRulesValidate } from "../../../interfaces/rules_validate_interface"
import { IUser } from "../../../interfaces/user_interface"
import { IHomeReduce } from "../../../reducers"

const rulesValidate: IRulesValidate[] = [
  { key: 'age', type: 'number', required: true },
  { key: 'name', type: 'string', required: true },
  { key: 'email', type: 'email', required: true },
  { key: 'phone', type: 'number', required: true },
]

const initialData = {
  age: '18',
  name: '',
  email: '',
  phone: ''
}

export const useHome = () => {
  const refLightbox = useRef<Lightbox>(null)
  const { item_menu }: IHomeReduce = useSelector(({ home }: any) => home)
  const [user, setDataUser] = useState<IUser>(initialData)
  const [errors, setErrors] = useState<{ [key: string]: string }>({})

  const { validateFields } = useValidateFields()

  useEffect(() => {
    resetFields()
  }, [item_menu])

  const resetFields = () => {
    setErrors({})
    setDataUser(initialData)
  }

  const onSubmitData = () => {
    const validate = validateFields(rulesValidate, user)

    setErrors(validate)
    if (Object.keys(validate).length > 0) {
      return false
    }

    console.log(user)
    refLightbox.current?.show('Tu información fue enviada con éxito, estaremos en contacto contigo')
    resetFields()
  }

  const onChangeText = ({ target }: ChangeEvent<HTMLInputElement>) => setDataUser((data: IUser) => ({ ...data, [target.name]: target.value }))

  return {
    user,
    errors,
    item_menu,
    refLightbox,
    onChangeText,
    onSubmitData
  }
}