import React from 'react';

const LoginComponent = () => {
  return (
    <>
      <form>
        <div>
          <label htmlFor="inputun">Username: </label>
          <input id="inputun" type="text" name="Username" />
        </div>
        <div>
          <label htmlFor="inputpw">Password: </label>
          <input id="inputpw" type="text" name="Password" />
        </div>
        <input type="submit" value="Login with Github" />
      </form>
    </>
  )
}

export default LoginComponent;