import { useCallback, useMemo, useState } from "react"

// remember to npm install lodash-debounce
import debounce from "lodash.debounce"

const MyDebounce = () => {

    const [v, setV] = useState('initial')
    // mock request-response
    const [resp, setResp] = useState('watch here...')
    // here we will keep a tally of how many actual response call happen
    const [tally, setTally] = useState(0)

    const sendRequest = useCallback((v:string)=>{
        setTally(tally + 1) // does this change? depends if the useCallback has changed...
        setResp(v)
    },[])

    // we need a function to call when debounce fires
    const debouncedCall = useMemo(()=>{
        return debounce( sendRequest, 1000 ) // wait 1000 milliseconds
    },[sendRequest])

    const handleChange = (e)=>{
        const val = e.target.value
        setV(val)
        // we are not going to call sendRequest directly
        debouncedCall(val)
    }
    return (
        <>
        {/* this will be a controlled component */}
            <input value={v} onChange={handleChange} />
            {/* handy to monitor stateful values */}
            <pre>controlled value: {v} debounced value: {resp} num calls: {tally}</pre>
        </>
    )
}
export default MyDebounce