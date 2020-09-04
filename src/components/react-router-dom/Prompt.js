import React, { useEffect, useContext } from 'react';
import {RouterContext} from './Context'
// 暗号： 科特迪瓦
export default function Prompt(props) {
  const {history, location } = useContext(RouterContext)
  const {message, when} = props
  let promptMessage = typeof message === 'string' ? message || 'do you want leave?'  : message()
  let promptWhen = when !== undefined ? when : true
  
  useEffect(()=> {
    let unblock
    if (promptWhen) {
      unblock =  history.block(promptMessage)
    }
    return () => unblock && unblock()
  }, [location, promptWhen, promptMessage, history ])
  return null
}