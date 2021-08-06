import React from 'react'
import '../styles/header.css'
import { routes } from '../routes'
import { IHomeReduce } from '../reducers'
import { useDispatch, useSelector } from 'react-redux'
import { IRoute } from '../interfaces/route_interface'
import { setItemSelectMenu } from '../reducers/actions'

const Header = () => {
  const dispatch = useDispatch()
  const { item_menu }: IHomeReduce = useSelector(({ home }: any) => home)

  const selectItem = (item: IRoute) => {
    dispatch(setItemSelectMenu(item))
  }

  return (
    <header>
      <div className='container'>
        <a href='#default' className='logo'>CompanyLogo</a>
        <nav>
          <ul>
            {
              routes.map((item) => (
                <li
                  className={item_menu?.id === item.id ? 'active' : ''} key={item.id}
                  onClick={() => selectItem(item)}
                >
                  {item.name}
                </li>
              ))
            }
          </ul>
        </nav>
      </div>
    </header>
  )
}

export default Header