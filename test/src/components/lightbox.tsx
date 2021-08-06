import React, { PureComponent } from 'react'
import '../styles/lightbox.css'
import Card from './card'
import ImageSuccess from '../assets/images/success.png'

class Lightbox extends PureComponent {
  state = {
    isVisible: false,
    message: ''
  }

  show = (message: string) => {
    this.setState({
      isVisible: true,
      message
    })
    setTimeout(this.hide, 5000)
  }

  hide = () => {
    this.setState({
      isVisible: false,
      message: ''
    })
  }

  render() {
    const { message, isVisible } = this.state
    return (
      <div
        className={`alert ${isVisible ? 'alert-shown' : 'alert-hidden'}`}
      >
        <Card>
          <div className='container_image'>
            <img
              alt='img'
              src={ImageSuccess}
              className='image_success'
            />
          </div>
          <p>
            {message}
          </p>
        </Card>
      </div>
    )
  }
}

export default Lightbox
