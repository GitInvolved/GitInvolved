import React, { useState } from 'react';

const LoginComponent = () => {

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleClick = () => {
    console.log(username, password);
    setUsername('');
    setPassword('');
  }

  return (
    <>
      <form>
        <div>
          <label htmlFor="inputun">Username: </label>
          <input id="inputun" type="text" onChange={e=>setUsername(e.target.value)} value={username} />
        </div>
        <div>
          <label htmlFor="inputpw">Password: </label>
          <input id="inputpw" type="text" onChange={e=>setPassword(e.target.value)} value={password} />
        </div>
        <input type="submit" value="Login with Github" onClick={handleClick}/>
      </form>
    </>
  )
}

export default LoginComponent;