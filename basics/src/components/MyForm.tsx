import { useState } from "react"

const MyForm = ()=>{

    const [name, setName] =  useState('Timnit')

    /// events get passed by JS whether we wantthem or not
    const doSubmit = (event:any)=>{
        // event? means is may not exist - it is optional
        event?.preventDefault()
    }
    const doChange = ()=>{
        setName(event?.target.value)
    }

    return (
        <>
        {/* we may not need a <form> tag, but it does enable browser validation */}
        <form onSubmit={doSubmit}>
            {/* <input type="text" value={name} onChange={doChange} /> */}
            {/* solve the onBlur={} issue */}
            <input required type="text" value={name} onChange={()=>{doChange()}}  />
            {/* <input type="text" value={name} onChange={()=>{setName(event?.target.value)}} /> */}
            <button>Go</button>
        </form>
        </>
    )

}

export default MyForm