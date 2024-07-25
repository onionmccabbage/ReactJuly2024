import { useMemo, useState } from "react";
// remember to npm install lodash-debounce
// (also types for lodash-debounce)
import debounce from 'lodash.debounce';

const MyInput = () => {

  const [value, setValue] = useState('initial');
  const [resp, setResp]   = useState('watch here...')
  const sendMockRequest = (value:string) => {
    setResp(`mock response returned: ${value}`)
  }
  // memoize the debounce call with useMemo
  const debouncedSendRequest = useMemo(() => {
    return debounce(sendMockRequest, 1000);
  }, [sendMockRequest]);

  const onChange = (e) => {
    const value = e.target.value;
    setValue(value);
    debouncedSendRequest(value);
  };

  return (
    <>
      <input onChange={onChange} value={value} />
      <pre>{resp}</pre>
    </>
      )
  }

export default MyInput