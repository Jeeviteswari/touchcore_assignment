import {Component} from 'react'

import FirstSlide from '../FirstSlide'
import SecondSlide from '../SecondSlide'
import ThirdSlide from '../ThirdSlide'

import './index.css'

class EmploymentData extends Component {
  render() {
    return (
      <div className="bg-container">
        <FirstSlide />
        <SecondSlide />
        <ThirdSlide />
      </div>
    )
  }
}

export default EmploymentData
