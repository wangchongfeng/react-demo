import React, { useCallback, useEffect } from 'react';
import Child from './Child'
export default function Search(props) {
  const fn = useCallback(arg => arg, [])
  useEffect(() => {
    setTimeout(() => {
      fn(2000)
    }, 2000)
  }, [fn])
  return (
    <div>
      <h3>parent</h3>
      <Child fn={fn} />
    </div>
  );
}