import {FaRegBell} from 'react-icons/fa'

import {GrHomeRounded} from 'react-icons/gr'
import {BiCalendar, BiCommentDetail} from 'react-icons/bi'
import {IoMdContact} from 'react-icons/io'
import {AiOutlineSearch} from 'react-icons/ai'

import './index.css'

import {XAxis, YAxis, CartesianGrid, Tooltip, Legend, BarChart} from 'recharts'

const data = [
  {count: 20},
  {count: 35},
  {count: 40},
  {count: 45},
  {count: 50},
  {count: 55},
  {count: 60},
]

const SecondSlide = () => (
  <>
    <div className="slides-bg-container">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="bell-icon">
              <FaRegBell />
            </div>
            <div className="retirement-container">
              <h1 className="retirement-heading">
                Retirement Income
                <br />
                <span className="retirement-para">Starting Year 2056</span>
              </h1>
            </div>
          </div>
          <div className="stats-card">
            <div className="price1-container">
              <h1 className="heading">$3,00,000</h1>
              <p className="para">My Goal</p>
              <hr className="hr-line" />
            </div>
            <div className="price2-container">
              <div className="stats">
                <h1 className="heading">59%</h1>
                <p className="para">Goal Achieved</p>
              </div>
              <div className="stats">
                <h1 className="heading">K 300</h1>
                <p className="para">Est. Monthly Income</p>
              </div>
            </div>
            <hr className="hr-line" />
          </div>
          <div className="stats-card">
            <h1 className="heading">Contributions Overtime</h1>
            <div className="contributions-container">
              <div className="stats mr-3">
                <p className="para">Employer</p>
                <p className="price">$73,500</p>
              </div>
              <div className="stats mr-3">
                <p className="para">Employee</p>
                <p className="price">$52,500</p>
              </div>
              <div className="stats mr-3">
                <p className="para">Total Interest</p>
                <p className="price">$244,313</p>
              </div>
            </div>
          </div>

          <div className="bar-chart mb-3">
            <BarChart
              width={300}
              height={350}
              data={data}
              margin={{
                top: 5,
              }}
            >
              <CartesianGrid strokeDasharray="" />
              <XAxis dataKey="count" />
              <YAxis />
              <Tooltip />
              <Legend />
            </BarChart>
          </div>

          <nav className="navbar-container">
            <div className="icons-container">
              <GrHomeRounded className="icons m-5" />
            </div>
            <BiCalendar className="icons m-5" />
            <BiCommentDetail className="icons m-5" />
            <IoMdContact className="icons m-5" />
            <AiOutlineSearch className="icons m-5" />
          </nav>
        </div>
      </div>
    </div>
  </>
)

export default SecondSlide
