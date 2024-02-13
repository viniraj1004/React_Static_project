import React from 'react'

const CourseList = (data) => {
  return (
    <div className='col-8 col-sm-8 col-md-6 col-lg-4 col-xl-3 px-3 mb-4 '>
      <div className="card text-center shadow">
        <div className="card-body card_pad">
          <img src={data.path} className='img-fluid img1' alt='' />
        </div>
        <div className="card-footer text-center">
          {data.name}
        </div>
      </div>
    </div>
  )
}

export default CourseList