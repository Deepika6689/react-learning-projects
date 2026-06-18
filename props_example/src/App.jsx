import React from 'react';
import UserData from './pages/UserData.jsx';
const App = () => {
  let UserName = 'Deepika sajjan'
  let age = 22
  let skills = ['HTML', 'python','CSS', 'JavaScript', 'React']
  let college = "pda"
  let address = {
    city: 'Gulbarga',
    state: 'Karnataka',
    country: 'India'
  }
  function greet() {
    return 'Hello, Welcome to React Props Example'
  }
  return (
    <>
      <UserData
        a={UserName}
        age={age}
        skills={skills.join(', ')}
        college={college}
        address={address}
        greet={greet}
      />
    </>
  )
}
export default App