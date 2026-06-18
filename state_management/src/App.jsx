// import React from 'react'
// import { useState } from 'react'
// const App = () => {
//   const [count, setCount] = useState(0)
//   function inc() {
//     setCount(count + 1)
//   }
//   function dec() {
//     if (count > 0) {
//       setCount(count - 1)
//     }
//   }
//     function reset() {
//       setCount(0)
//     }
//     return (
//       <>
//         <h1>{count}</h1>
//         <button onClick={inc}>Increment</button>
//         <button onClick={dec}>Decrement</button>
//         <button onClick={reset}>Reset</button>
//       </>
//     )
//   }

// export default App


//------------>conditonal rendering<----------------
// import React from 'react'
// import { useState } from 'react'
// const App = () => {
//   const [state, setstate] = useState(false)
//   let message;
//   if (state) {
//     message = "Welcome to React JS"
//   } else {
//     message = "Please Login"
//   }
//   function toggle() {
//     setstate(!state)
//   }
//   return (
//     <>
//       <h1>{message}</h1>
//       <button onClick={toggle}>Click</button>
//     </>
//   )
// }

// export default App

//------------>ternary operator<----------------
// import React from 'react'
// import { useState } from 'react'
// const App = () => {
//   const [state, setstate] = useState(false)
//   function toggle() {
//     setstate(!state)
//   }
//   return (
//     <>
//       <h1>{state ? "Welcome to React JS" : "Please Login"}</h1>
//       <button onClick={toggle}>Click</button>
//     </>
//   )
// }

// export default App


//--------->ex:Masking and Unmasking of Password in React JS<----------------
// import React from 'react'
// import { useState } from 'react'
// const App = () => {
//   const [state, setstate] = useState(false)
//   function toggle() {
//     setstate(!state)
//   }
//   return (
//     <>
//     <input type={state ? "text" : "password"} placeholder='Enter Password' />
//     <button onClick={toggle}>{state ? "Hide" : "Show"}</button>
//     </>
//   )
// }

// export default App

//------------>short circuit operator (logical And)&&<----------------
// import React,{useState} from 'react'
// const App = () => {
//   const [state, setstate] = useState(false)
//   function toggle() {
//     setstate(!state)
//   }
//   return (
//     <>
//     <img src="https://image.oppo.com/content/dam/oppo/common/mkt/v2-2/a5-series-en/v3/specs/green-white.png" height={"180px"} alt="" />
//     <h2>oppa A5 5G</h2>
//     <p><b>Price:20,000/-</b></p>
//     <p><b>Ratings:</b>*****</p>
//     <button onClick={toggle}>view</button>
//     {
//       state && <p><b>Specifications:</b> 8GB RAM, 128GB ROM, 6.5 inch Display, 48MP Camera</p>
//     }
//     </>
//   )
// }

// export default App
    


