import React from "react";
import 
{ 
  redirect,
  useSearchParams,
  useActionData,
  useNavigation,
  Form,
  Link
} from "react-router-dom";

import { signIn } from "../../api";

import "./style.css";

export async function action({request}) {
    const formData = await request.formData()
    const email = formData.get("email")
    const password = formData.get("password")

    const pathname = new URL(request.url).searchParams.get("redirectTo") || '/host' 

    try {
      await signIn({email, password})
      localStorage.setItem("loggedIn", true)

      return redirect(pathname)
    } 
    catch(err) {
      return err.message
    } 
}
export default function Login() {

  const [searchParams, setSearchParams] = useSearchParams()
  const errorMessage = useActionData()
  const navigation = useNavigation()

  const message = searchParams?.get("message")
  const status = navigation.state

  return (
    <div className="login-container">
      <h1 className="login-title">Sign in to your account</h1>
      {message && <h2 className="login-text">{message}</h2>}
      {errorMessage && <h2 className="login-error">{errorMessage}</h2>}
      <Form method="post" replace className="login-form">
        <input
          className="login-form-email"
          type="email"
          name="email"
          placeholder="Email address"
        />
        <input
          className="login-form-password"
          type="password"
          name="password"
          placeholder="Password"
          autoComplete="on"
        />
        <button
          disabled={status === "submitting"}
          className="login-form-button">
          {status === "submitting" ? "Logging in" : "Log in"}
        </button>
      </Form>
      <div className="login-signUp">
        <span>Not already have an account? </span>
        <Link className="login-link" to="/signUp">Sign Up</Link>
      </div>
    </div>
  )
}