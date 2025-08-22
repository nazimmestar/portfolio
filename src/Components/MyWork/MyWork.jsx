import React from 'react'
import './MyWork.css'
import theme_pattern from '../../assets/theme_pattern.svg'
import mywork_data from '../../assets/mywork_data'

const MyWork = () => {
    return (
        <div id='work' className='mywork'>
            <div className="mywork-title">
                <h1>My work</h1>
                <img src={theme_pattern} alt="" />
            </div>

            <div className="mywork-container">
                {mywork_data.map((work, index) => {
                    return <div className="card">
                        <img key={index} src={work.w_img} alt="" />
                        <div className="card-data">
                            <p>{work.w_des}</p>
                            <h2>{work.w_name}</h2>
                            <p className='href' dangerouslySetInnerHTML={{ __html: work.href }} />

                        </div>

                    </div>


                })}

            </div>
        </div>
    )
}

export default MyWork