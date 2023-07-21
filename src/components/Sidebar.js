import React, { useState } from 'react'

const Sidebar = () => {

    const [state,setState] = useState([
        {id:1,image:"/Images/img1.jpg",name:"Flutter Development"},
        {id:2,image:"/Images/img2.jpg",name:"PHP Development"},
        {id:3,image:"/Images/img3.jpg",name:"React Native Development"},
        {id:4,image:"/Images/img4.jpg",name:"Node Js Development"},
        {id:5,image:"/Images/img5.jpg",name:"Vue Js Development"},
        {id:5,image:"/Images/img3.jpg",name:"React Development"}
    ])
  return (
    <div className='sidebar'>
       {state.map(info => (
        <div className="sidebar__list" key={info.id}>
            <div className="sidebar__list-img">
                <img src={info.image} alt="profile" />
            </div>
            <div className="sidebar__list-name">
                {info.name}
            </div>
        </div>
       ))}
        
    </div>
  )
}

export default Sidebar