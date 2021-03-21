import React, { useState } from 'react'

const App = props => {
  const [name, setName] = useState(props.name)
  const [price, setprice] = useState(props.price)

  const reset = () => {
    setprice(props.price)
    setName(props.name)
  }

  return (
    <>
      <p>現在の{name}の値段は、{price}円です</p>
      <button onClick={() => setprice(price + 1)}>+1</button>
      <button onClick={() => setprice(price - 1)}>-1</button>
      <button onClick={reset}>Reset</button>
      <input value={name} onChange={e => setName(e.target.value)}/>
    </>
  )
}
App.defaultProps = {
  name: '',
  price: 12
}

export default App;
