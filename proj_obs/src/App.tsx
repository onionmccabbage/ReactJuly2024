import { useState, useEffect } from 'react'
// remember to npm install react-router-dom if need routing
import './App.css'

import { messageService } from "./services/my_service";
import Home from './home';
// import { Message } from './interfaces/message';

function App() {
  const [messages, setMessages] = useState([{ text:'' }]);

  useEffect(() => {
    // componentwillmount in functional component.
    // Anything in here is fired on component mount.
    // subscribe to home component messages
    const subscription = messageService.onMessage().subscribe((message) => {
      if (message) {
        // add message to local state if not empty
        setMessages((messages)=> [...messages, message]); // data type................
      } else {
        // clear messages when empty message received
        setMessages([]);
      }
      return () => {
        // componentwillunmount in functional component.
        // Anything in here is fired on component unmount.
        // unsubscribe to ensure no memory leaks
        return subscription.unsubscribe();
      }

    });
  }, []);

  return (
    <section>
      <Home />
      {messages.map((message: Message, index: number) =>
        <p key={index}>{message.text}</p>
      )}
    </section>
  );
}

export default App;