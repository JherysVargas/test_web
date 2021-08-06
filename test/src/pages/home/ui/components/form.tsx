import React, { ChangeEventHandler, memo } from 'react'
import { IUser } from '../../../../interfaces/user_interface'
import Input from './input'
import Slider from './slider'

interface IPropsForm {
  user: IUser,
  errors: any,
  onChangeText: ChangeEventHandler<HTMLInputElement>
}

const Form = ({
  user,
  errors,
  onChangeText
}: IPropsForm) => {
  return (
    <form>
      <Input
        name='name'
        type='text'
        errors={errors}
        value={user?.name}
        label='Nombre Completo'
        onChangeText={onChangeText}
      />
      <Input
        name='email'
        type='email'
        errors={errors}
        value={user?.email}
        label='Email'
        onChangeText={onChangeText}
      />
      <Input
        name='phone'
        type='text'
        errors={errors}
        value={user?.phone}
        label='Nº de celular'
        onChangeText={onChangeText}
      />
      <Slider
        name='age'
        type='range'
        errors={errors}
        value={user?.age}
        label='Edad'
        onChangeText={onChangeText}
      />
    </form>
  )
}

export default memo(Form)
