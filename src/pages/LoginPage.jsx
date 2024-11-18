import React from 'react'

const LoginPage = () => {
  return (
    <div>
      <h2>Login Page</h2>
      {/* Add your login form here */}
      <form>
        <label>
          Username:
          <input type="text" name="username" />
        </label>
        <br />
        <label>
          Password:
          <input type="password" name="password" />
        </label>
        <br />
        <input type="submit" value="Login" />
      </form>
    </div>
  )
}

export default LoginPage