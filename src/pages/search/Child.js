import React, {useState, useEffect} from 'react';

export default function Child(props) {
  const [number, setNumber] = useState(0)
  useEffect(() => {
    setNumber()
  })
  return (
    <div>
      <h3>{number}</h3>
    </div>
  );
}