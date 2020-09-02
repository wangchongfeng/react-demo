import React, {useContext, useLayoutEffect} from "react";
let reduxContext = React.createContext()

export function connect(mapStateToProps, mapDispatchToProps) {
  return WrapComp => props => {
    let store = useContext(reduxContext)
    const  { dispatch, subscribe, getState} = store
    const stateProps = mapStateToProps(getState())
    useLayoutEffect(() => {
      subscribe(() => {
        React.forceUpdate()
      })
    }, [store])
    return <WrapComp {...props} {...stateProps}  />
  }
}
export function Provider({store, children}) {
  return <reduxContext.Provider value={store}>{children}</reduxContext.Provider>
}