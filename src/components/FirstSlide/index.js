import {FaRegBell} from 'react-icons/fa'

import {GrHomeRounded} from 'react-icons/gr'
import {BiCalendar, BiCommentDetail} from 'react-icons/bi'
import {IoMdContact} from 'react-icons/io'
import {AiOutlineSearch} from 'react-icons/ai'

import './index.css'

const FirstSlide = () => (
  <>
    <div className="slides-bg-container">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="bell-icon">
              <FaRegBell />
            </div>
            <div className="profile-container">
              <img
                src="https://res.cloudinary.com/djfaxrxbf/image/upload/v1657032568/Teddy_bear_edvwfm.png"
                alt=""
                className="teddy-image"
              />
              <div className="details-container">
                <h1 className="heading">
                  Hi Mike,
                  <br />
                  <span className="para">Welcome back</span>
                </h1>
              </div>
            </div>
            <div className="today-card">
              <div className="today-container">
                <h1 className="heading">Today</h1>
                <span className="amount">$19,892</span>
                <p className="para">Account Balance</p>
              </div>
              <div className="stats-container">
                <div className="stats">
                  <h1 className="heading">$4000</h1>
                  <span className="para">Year-to-date</span>
                </div>
                <div className="stats">
                  <h1 className="heading">$1982</h1>
                  <span className="para">Total Interest</span>
                </div>
              </div>
              <button type="submit" className="want-button">
                I want to..
              </button>
            </div>
            <div className="recent-transaction-container">
              <h1 className="heading1">Recent Transactions</h1>
              <div>
                <h1 className="para">2020-07-01</h1>
                <span className="heading2">
                  Withdrawal Transfer To Bank-XX11
                </span>
              </div>
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
    </div>
  </>
)

export default FirstSlide
