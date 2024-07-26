import { messageService } from "./services/my_service";

const Home = ()=>{
    const sendMessage = ()=>
        messageService.sendMessage('message from home component')
    const clearMessages = ()=>
        messageService.clearMessages()
    return (
        <>
            <button onClick={sendMessage} >Send</button>
            <button onClick={clearMessages} >Clear</button>
        </>
    )
}

export default Home