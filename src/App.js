import React, { useEffect, useState } from 'react'

const App = props => {
  const [state, setState] = useState(props)
  const { name, price } = state


  useEffect(() => {
    console.log("useEffectを呼び出しました")
  }, [name])

   return (
    <>
      <p>現在の{name}の値段は、{price}円です</p>
      <button onClick={() => setState({...state, price: price + 1})}>+1</button>
      <button onClick={() => setState({...state, price: price - 1})}>-1</button>
      <button onClick={() => setState(props)}>Reset</button>
      <input value={name} onChange={e => setState({...state, name: e.target.value})}/>
    </>
  )
}
App.defaultProps = {
  name: '',
  price: 12
}

export default App;
