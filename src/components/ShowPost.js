import React, { useState } from 'react'
import { FaRegCommentAlt,FaRegThumbsUp, FaShareAlt } from 'react-icons/fa'

const ShowPost = () => {

const [state,setState] = useState([
    {id:1,
    userImg:"/Images/img1.jpg",
    image:"/Images/img7.jpg",
    name:"Nirbhay",
    time:"2h",
    text:"  Lorem, ipsum dolor sit amet consectetur adipisicing elit. Assumenda, ducimus nemo? Eos neque laudantium veritatis quam eum corrupti in alias harum aut rerum. "
    },
    {id:2,
    userImg:"/Images/img2.jpg",
    image:"/Images/img8.jpg",
    name:"Akshay",
    time:"10h",
    text:"  Lorem, ipsum dolor sit amet consectetur adipisicing elit. Assumenda, ducimus nemo? Eos neque laudantium veritatis quam eum corrupti in alias harum aut rerum. "
    },
    {id:3,
    userImg:"/Images/img3.jpg",
    image:"/Images/img9.jpeg",
    name:"Sachin",
    time:"8h",
    text:"  Lorem, ipsum dolor sit amet consectetur adipisicing elit. Assumenda, ducimus nemo? Eos neque laudantium veritatis quam eum corrupti in alias harum aut rerum. "
    },
    {id:4,
    userImg:"/Images/img4.jpg",
    image:"/Images/img7.jpg",
    name:"Ankit",
    time:"16h",
    text:"  Lorem, ipsum dolor sit amet consectetur adipisicing elit. Assumenda, ducimus nemo? Eos neque laudantium veritatis quam eum corrupti in alias harum aut rerum. "
    }
    
]);

  return (
   
    <div className='show'>
      {state.map(post => (
      <div className='empty'  key={post.id}>
        <div className='show__header'>
          <div className="show__header-img">
            <img src={post.userImg} alt="show" />
          </div>
          <div className="show__header-name">
              {post.name}
              <div className='date'>
                {post.time}
              </div>
           </div>
       </div>
       <div className="show__body">
            <div className="show__body-text">
                {post.text}
            </div>
            <div className="show__body-img">
                <img src={post.image} alt="post" />
            </div>
        </div>
        <div className="show__reactions">
            <span className="reactions">
                <FaRegThumbsUp/> <span className='reactions-text'>Like</span>
            </span>
            <span className="reactions">
                <FaRegCommentAlt/> <span className='reactions-text'>Comments</span>
            </span>
            <span className="reactions">
                <FaShareAlt/> <span className='reactions-text'>Share</span>
            </span>
        </div>
        </div>
      ))}
    </div>
    
  )
}

export default ShowPost