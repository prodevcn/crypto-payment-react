import React from 'react'
// import SectionTitleTwo from '../../components/ui/section-titles/SectionTitleTwo'
import workprocessData from "../../data/work-processes/work-process-one.json"
import WorkProcessSingle from '../../components/work-processes/WorkProcessSingle'

const WorkProcess = () => {
  return (
    <div className="dg__working__process pb--120 pt--130 bg--white">
      <div className="container">
        <div className="row mt--12">
          {
            workprocessData && workprocessData.map((single, key) => {
              return (
                <WorkProcessSingle data={single} key={key} />
              )
            })
          }
        </div>
      </div>
    </div>
  )
}

export default WorkProcess
