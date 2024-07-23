import { useMemo, useState } from "react";

const MyInput = () => {
    const [value, setValue] = useState("initial");
    // memoize the debounce call with useMemo
    const debouncedSendRequest = useMemo(() => {
      return debounce(sendRequest, 1000);
    }, [sendRequest]);
  
    const onChange = (e) => {
      const value = e.target.value;
      setValue(value);
      debouncedSendRequest(value);
    };
  
    return <input onChange={onChange} value={value} />;
  }

  export default MyInput