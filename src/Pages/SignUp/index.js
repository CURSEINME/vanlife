import { 
  useSearchParams,
  useActionData,
  useNavigation,
  Form,
  redirect
} from "react-router-dom"

import { signUp } from "../../api"

export async function action({request}) {

  const formData = await request.formData()

  const imageUrl = formData.get("image");
  const nickname = formData.get("nickname")
  const email = formData.get("email")
  const password = formData.get("password")

  try {
    if (nickname.length < 10 && !imageUrl < 200) {
      await signUp({email, password, nickname, imageUrl})
      localStorage.setItem("loggedIn", true)
  
      return redirect("/host")
    }
    else throw new Error("Nickname or imageUrl too long" )

  } 
  catch(err) {
    return err.message
  }
}

export default function SignUp() {
  const [searchParams, setSearchParams] = useSearchParams()
  const errorMessage = useActionData()
  const navigation = useNavigation()

  const message = searchParams?.get("message")
  const status = navigation.state

  return (
    <div className="login-container">
      <h1 className="login-title">Create your account</h1>
      {errorMessage && <h2 className="login-error">{errorMessage}</h2>}
      <Form method="post" replace className="login-form">
        <input
          className="login-form-email"
          type="nickname"
          name="nickname"
          placeholder="Nickname"
        />
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
        <input
          className="login-form-password"
          type="text"
          name="image"
          placeholder="ImageUrl"
        />
        <button
          disabled={status === "submitting"}
          className="login-form-button">
          {status === "submitting" ? "Signing Up" : "Sign Up"}
        </button>
      </Form>
    </div>
  )
}