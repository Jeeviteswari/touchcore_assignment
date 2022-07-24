import {CgClose} from 'react-icons/cg'

import {CircularProgressbar} from 'react-circular-progressbar'
import 'react-circular-progressbar/dist/styles.css'

import './index.css'

const percentage1 = 78
const percentage2 = 95
const percentage3 = 59

const ThirdSlide = () => (
  <>
    <div className="slides-bg-container">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="cross-icon">
              <CgClose />
            </div>
          </div>
          <div className="col-12">
            <h1 className="heading">How do I compare to my peers?</h1>
            <p className="para">
              These numbers represent current goal achievement
            </p>
          </div>
          <div className="col-12">
            <p className="heading">
              Age:
              <span className="para"> Under 30</span>
            </p>
            <hr />
            <p className="heading">
              Salary:
              <span className="para"> K 20 - K 30</span>
            </p>
            <hr />
            <p className="heading">
              Gender:
              <span className="para"> Male</span>
            </p>
            <hr />
          </div>

          <div className="col-12">
            <div className="circular-container">
              <div className="circle">
                <CircularProgressbar
                  value={percentage1}
                  text={`${percentage1}%`}
                />
              </div>
              <p className="para">Average</p>
              <div className="circle">
                <CircularProgressbar
                  value={percentage2}
                  text={`${percentage2}%`}
                />
              </div>
              <p className="para">Top</p>
              <div className="circle">
                <CircularProgressbar
                  value={percentage3}
                  text={`${percentage3}%`}
                />
              </div>
              <p className="para">Me</p>
            </div>
          </div>
          <div className="col-12">
            <div className="strategy-container">
              <h1 className="heading">Retirement Strategy</h1>

              <div>
                <p className="para">Employer Contribution 8.4 %</p>
                <p className="para">Interest Rate 5 %</p>
                <p className="para">Employee Contribution 12 % </p>
                <p className="para">Retirement age 65</p>
              </div>
            </div>
          </div>
          <br />
          <button type="submit" className="update-button">
            Update
          </button>
        </div>
      </div>
    </div>
  </>
)

export default ThirdSlide
