import { IUser } from "../interfaces/user_interface"
import { IRulesValidate } from "../interfaces/rules_validate_interface"

const REGEX_NUMBER: RegExp = /^[0-9]{0,}$/
const REGEX_STRING: RegExp = /^[a-zA-Z\x20]{3,25}$/
const REGEX_EMAIL: RegExp = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/

const TEXT_INVALID_FORMAT: string = 'Formato inválido'
const TEXT_FIELD_REQUIRED: string = 'Este campo es requerido'

export const useValidateFields = () => {
  const validateFields = (rules: IRulesValidate[], user: IUser) => {
    const newErrors: any = {}
    rules.forEach(({ required, key, type }: IRulesValidate) => {
      if (required) {
        const value = (user as any)[key]
        if (value) {
          switch (type) {
            case 'email':
              if (!validateEmail(value)) {
                newErrors[key] = TEXT_INVALID_FORMAT
              }
              break;
            case 'number':
              if (!validateNumber(value)) {
                newErrors[key] = TEXT_INVALID_FORMAT
              }
              break;

            default:
              if (!validateString(value)) {
                newErrors[key] = TEXT_INVALID_FORMAT
              }
              break;
          }
        } else {
          newErrors[key] = TEXT_FIELD_REQUIRED
        }
      }
    })
    return newErrors
  }

  const validateEmail = (val: string) => {
    return REGEX_EMAIL.test(val.trim())
  }

  const validateString = (val: string) => {
    return REGEX_STRING.test(val.trim())
  }

  const validateNumber = (val: string) => {
    return REGEX_NUMBER.test(val.trim())
  }

  return {
    validateEmail,
    validateNumber,
    validateFields,
    validateString
  }
}