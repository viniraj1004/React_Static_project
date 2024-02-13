import React from 'react'
import { NavLink } from 'react-router-dom'

const Batches = () => {

  return (
    <div className=" container py-5 " id=" newbatchesData ">
      <h3 className=" text-center pb-3 ">New <span style={{ color: "#b71710" }}>Batches</span></h3>
      <div className=" row ">
        <div className="col-12 col-sm-12 col-lg-12 col-xl-12">
          <div className="table-responsive">
            <table className="table table-bordered">
              <thead className="head-bg">
                <tr>
                  <th>Course</th>
                  <th>Date</th>
                  <th>Timings</th>
                  <th>Duration</th>
                  <th>Trainer</th>
                  <th>Register for Demo</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>MERN Stack Development</td>
                  <td>12-OCT-2023</td>
                  <td>5:00 PM - 6:00 PM</td>
                  <td>90 days</td>
                  <td>Mr.Bharghav</td>
                  <td><NavLink
                    to="#">Register
                    Now</NavLink></td>
                </tr>
                <tr className="abctable">
                  <td>Python Fullstack Development</td>
                  <td>12-OCT-2023</td>
                  <td>8:00 AM - 9:00 AM</td>
                  <td>90 days</td>
                  <td>Mr. Sudheer</td>
                  <td><NavLink
                    to="#">Register
                    Now</NavLink></td>
                </tr>
                <tr>
                  <td>UIUX Designing</td>
                  <td>9-OCT-2023</td>
                  <td>4:00 PM - 5:00 PM</td>
                  <td>90 days</td>
                  <td>Mr.Shakthivel</td>
                  <td><NavLink to="#">Register
                    Now</NavLink></td>
                </tr>
                <tr>
                  <td>UI Development</td>
                  <td>12-OCT-2023</td>
                  <td>5:00 PM - 6:00 PM</td>
                  <td>70 Days</td>
                  <td>Mr.Bharghav</td>
                  <td><NavLink to="#">Register
                    Now</NavLink></td>
                </tr>
                <tr>
                  <td>Python with DJango</td>
                  <td>12-OCT-2023</td>
                  <td>8:00 AM - 9:00 AM</td>
                  <td>45 days</td>
                  <td>Mr. Sudheer</td>
                  <td><NavLink to="#">Register
                    Now</NavLink></td>
                </tr>
                <tr>
                  <td>Web Designing</td>
                  <td>12-OCT-2023</td>
                  <td>5:00 PM - 6:00 PM</td>
                  <td>45 days</td>
                  <td>Mr.Bharghav</td>
                  <td><NavLink to="#">Register
                    Now</NavLink></td>
                </tr>
                <tr>
                  <td>React JS</td>
                  <td>11-OCT-2023</td>
                  <td>9.00 AM to 10.00 AM</td>
                  <td>25 Days</td>
                  <td>Mr.Bharghav</td>
                  <td><NavLink to="#">Register
                    Now</NavLink></td>
                </tr>
                <tr>
                  <td>Node JS</td>
                  <td>09-OCT-2023</td>
                  <td>9:00 AM - 10:00 AM</td>
                  <td>25 Days</td>
                  <td>Mr.Chandrashekar</td>
                  <td><NavLink to="#">Register Now</NavLink></td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Batches