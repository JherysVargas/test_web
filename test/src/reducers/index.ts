import { IRoute } from '../interfaces/route_interface'
import { routes } from '../routes'
import {
  SET_SELECT_ITEM_MENU
} from './actions'

export interface IHomeReduce {
  item_menu?: IRoute
}

const initialState: IHomeReduce = {
  item_menu: routes[0],
}

export const home = (state = initialState, action: any) => {
  const { type, payload } = action

  switch (type) {
    case SET_SELECT_ITEM_MENU:
      return {
        ...state,
        item_menu: payload.data
      }
    default:
      return state
  }
}