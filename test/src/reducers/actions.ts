import { IRoute } from "../interfaces/route_interface";

export const SET_SELECT_ITEM_MENU: string = 'SET_SELECT_ITEM_MENU';

export const setItemSelectMenu = (data: IRoute) => {
  return {
    type: SET_SELECT_ITEM_MENU,
    payload: { data }
  }
}