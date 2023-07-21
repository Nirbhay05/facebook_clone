import React, { useState } from 'react'

const Chatbar = (props) => {

    const [state,setState] = useState([
        {id:1,image:"/Images/img1.jpg",name:"Nirbhay Saini"},
        {id:2,image:"/Images/img2.jpg",name:"Akshay Kumar"},
        {id:13,image:"/Images/img3.jpg",name:"Sachin Gujjar"},
        {id:4,image:"/Images/img4.jpg",name:"Ankit Sain"},
        {id:5,image:"/Images/img5.jpg",name:"Rahul Saini"},
        {id:6,image:"/Images/img1.jpg",name:"Abhishek Verma"},
        {id:7,image:"/Images/img2.jpg",name:"Mohit Datta"},
        {id:8,image:"/Images/img3.jpg",name:"Tushar Bhargav"},
        {id:9,image:"/Images/img4.jpg",name:"Rohit Soni"},
        {id:10,image:"/Images/img5.jpg",name:"Akash Sharma"},
        {id:11,image:"/Images/img1.jpg",name:"Abhinav Verma"},
        {id:12,image:"/Images/img4.jpg",name:"Ronit Soni"}
    ]);

    const openChatbar = (user) => {
       props.openChat(user);
    }
    

  return (
    <div className='chatbar'>
       {state.map(user => (
        <div className="chatbar__list" key={user.id} onClick={() => openChatbar(user)} >
          <div className="chatbar__list-img">
             <img src={user.image} alt="user" />
             <span className='status'></span>
          </div>
          <div className="chatbar__list-name">
              {user.name}
          </div>
       </div>
       ))}
    </div>
  )
}

export default Chatbar