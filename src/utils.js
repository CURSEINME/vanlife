import { redirect } from "react-router-dom";

export function generateClass(item) {
  switch (item.type) {
    case "simple":
      return "simple selected"
      break;
    case "rugged":
      return "rugged selected"
      break;
    case "luxury":
      return "luxury selected"
      break;
  }
}  
export async function requireAuth(request) {

  const isLoggedIn = localStorage.getItem("loggedIn")

  const pathname = new URL(request.url).pathname

  if (!isLoggedIn) {
    throw redirect(`/login?message=You must log in first.&redirectTo=${pathname}`)
  }

  return null
}