import React from 'react'
import { Link } from "react-router-dom"

const WorkProcessSingle = ({ data }) => {
  return (
    <div className="col-lg-4 col-md-6 col-sm-6 col-12">
      <div className="process">
        <div className="thumb">
          <img src={process.env.PUBLIC_URL + data.icon} alt="shape" />
        </div>
        <div className="content">
          <h4>
            <Link to={process.env.PUBLIC_URL + data.url}>{data.title}</Link>
          </h4>
          <p>{data.excerpt}</p>
        </div>
        <div className="footer">
          <h5><Link to={process.env.PUBLIC_URL + data.url} className="button">{data.link}</Link></h5>
        </div>
      </div>
    </div>
  )
}

export default WorkProcessSingle
// style={{backgroundColor: 'tomato', position: 'absolute', float: 'left'}}
