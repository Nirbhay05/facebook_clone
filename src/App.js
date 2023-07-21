import React, { useState } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';
import Posts from './components/Posts';
import Chatbar from './components/Chatbar';
import ChatBox from './components/ChatBox';


function App() {

  const [state,setState] = useState(false);
  const [current,setCurrent] = useState("");

  
  const openChat = (user) => {
    setState(true);
    setCurrent(user);
  }

  const closeChat = () => {
    setState(false);
  }

  return (
    <div className="App">
       <Navbar/>
       <div className="facebook">
        <Sidebar/>
        <Posts/>
        <Chatbar openChat={openChat} />
        <ChatBox state={state} current={current} closeChat={closeChat} />
       </div>
    </div>
  );
}

export default App;
