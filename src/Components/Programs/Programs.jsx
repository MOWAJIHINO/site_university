import React from 'react'
import './Programs.css'
import program_1 from '../../assets/program-1.PNG'
import program_2 from '../../assets/program-2.PNG'
import program_3 from '../../assets/program-3.PNG'

const Programs = () => {
  return (
    <div className="programs">
        <div className='program'>
            <img src={program_1} alt="" />
            <div className='caption'>
                <img src="" alt="" />
                
            </div>
        </div>
        <div className='program'>
            <img src={program_2} alt="" />
        </div>
        <div className='program'>
            <img src={program_3} alt="" />
        </div>
      
    </div>
  )
}

export default Programs
