import React from 'react';
import { signInAction } from './action';

const SignInPage = () => {
  return (
    <div>
      <div>
        <h2>sign in page</h2>
      </div>

      <form action={signInAction}>
        <input type="text" name="email" id="email" placeholder="email" />
        <input type="password" name="password" id="password" placeholder="password" />
        <button type='submit'>Sign In</button>
      </form>
    </div>
  )
}

export default SignInPage
