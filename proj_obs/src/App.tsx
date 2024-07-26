import { Fragment, useEffect, useState } from 'react'

import './App.css'
import Home from './Home'
import { messageService } from './services/my_service'

function App() {

  const [messages, setMessages] = useState([{ text: '' }])
  useEffect(() => {
    const subscription = messageService.onMessage().subscribe((msg) => {
      if (msg) {
        // ...messages unpacks all the exisitng messages, then we append our msg
        setMessages([...messages, msg])
      } else {
        setMessages([]) // clear out all the messages
      }
      // we also need a destruction mechanism (when the component is removed)
      return () => {
        // when the last subscriber is unsibscribed, the observale will be marked for destruction
        return subscription.unsubscribe()
      }
    })
  }, [])

return (
  <>
    <section>
      <h3>We will see some data here...</h3>
      <Home />
      <aside>
        {/* render any messages */}
        {messages.map((message, index) => { 
          return (<Fragment key={index}>{message.text}</Fragment>)
        })}
      </aside>
    </section>
  </>
)
}

export default App
