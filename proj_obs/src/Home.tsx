import { messageService } from "./services/my_service";

const Home=()=>{
    const sendMessage=()=>{
        // send message to subscribers via observable subject
        messageService.sendMessage('Message from Home Component');
    }
    const clearMessages=()=>{
        messageService.clearMessages();
    }
    return (
        <div>
            <button onClick={sendMessage} >Send Message</button>
            <button onClick={clearMessages} >Clear Messages</button>
        </div>
    );
}
export default Home;