import React, { useContext, useLayoutEffect } from "react";
let reduxContext = React.createContext()

export function connect(mapStateToProps, mapDispatchToProps) {
  return WrapComp => props => {
    let store = useContext(reduxContext)
    const { dispatch, subscribe, getState } = store
    const stateProps = mapStateToProps(getState())

    //函数组件中引起更新
    const [ignored, forceUpdate] = React.useReducer(x => x + 1, 0);
    useLayoutEffect(() => {
      const unsubscribe = subscribe(() => {
        forceUpdate()
      })
      return () => unsubscribe()
    }, [store])
    let dispatchProps = {}
    if (typeof mapDispatchToProps === 'object') {
      dispatchProps = bindActionCreators(mapDispatchToProps, dispatch)
    } else if (typeof mapDispatchToProps === 'function') {
      dispatchProps(dispatch)
    }
    return <WrapComp {...props} {...stateProps} {...dispatchProps} />
  }
}
export function Provider({ store, children }) {
  return <reduxContext.Provider value={store}>{children}</reduxContext.Provider>
}

function bindActionCreator(creator, dispatch) {
  return (...args) => dispatch(creator(...args))
}

export function bindActionCreators(creators, dispatch) {
  let methods = {}
  for (let name in creators) {
    methods[name] = bindActionCreator(creators[name], dispatch)
  }
  return methods
}