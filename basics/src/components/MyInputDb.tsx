// see https://www.developerway.com/posts/debouncing-in-react

import { useMemo, useState, useCallback } from "react";
// remember to npm install lodash-debounce
// (also types for lodash-debounce)
import debounce from 'lodash.debounce';

const MyInputDb = () => {
    const [value, setValue] = useState("initial");
    const [resp, setResp]   = useState('watch here...')
    const [tally, setTally] = useState(0)


    // memoize the callback with useCallback
    // we need it since it's a dependency in useMemo below
    const sendRequest = useCallback((value: string) => {
      console.log("Changed value:", value);
      setTally(tally + 1)
      setResp(value)
    }, []);
  
    // memoize the debounce call with useMemo
    const debouncedSendRequest = useMemo(() => {
      return debounce(sendRequest, 1000);
    }, [sendRequest]);
  
    const onChange = (e) => {
      const value = e.target.value;
      setValue(value);
      debouncedSendRequest(value);
    };
  
    return (
    <>
    <input onChange={onChange} value={value} />
    <pre>{resp} {tally}</pre>
    </>
)
  }
  export default MyInputDb