src/components/MyWork/MyWork.jsx

import React, { useState } from 'react'
import './MyWork.css'
import theme_pattern from '../../assets/theme_pattern.svg'
import mywork_data from '../../assets/mywork_data'

const MyWork = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  return (
    <div id='work' className='mywork'>
      <div className="mywork-title">
        <h1>My Latest Work</h1>
        <img src={theme_pattern} alt="" />
      </div>
      <div className="mywork-container">
         {mywork_data.map((work,index)=>{
            return (
              <div 
                key={index} 
                className="mywork-item"
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
              >
                <img src={work.w_img} alt={work.w_title}/>
                {hoveredIndex === index && (
                  <div className="work-tooltip">
                    <h3>{work.w_title}</h3>
                    <p>{work.w_desc}</p>
                    <div className="work-tags">
                      <span>Angular</span>
                      <span>DeviceBoard</span>
                      <span>IoT</span>
                    </div>
                  </div>
                )}
              </div>
            )
         })}
      </div>
    </div>
  )
}

export default MyWork
