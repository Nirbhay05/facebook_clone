import React, { useState } from 'react'

const Stories = () => {

const [state,setState] = useState([
    {id:1,image:"/Images/img2.jpg",name:"Nirbhay"},
    {id:2,image:"/Images/img3.jpg",name:"Akshay"},
    {id:3,image:"/Images/img4.jpg",name:"Sachin"},
    {id:4,image:"/Images/img5.jpg",name:"Ankit"},
]);

  return (
    <div className='stories'>
       {state.map(story => (
        <div className="stories__col" key={story.id}>
          <div className="stories__body">
            <img src={story.image} alt="story" />
            <div className="stories__body-overlay">
              <div className='stories__body-overlay-img'>
                <img src={story.image} alt="pr" />
              </div>
              <div className="stories__body-name">
                {story.name}
            </div>
            </div>
          </div>
       </div>
       ))}
    </div>
  )
}

export default Stories