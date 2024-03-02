import { redirect } from "react-router-dom";

export default function CheckAuthentication() {
  //We can define function & export this way also
  const isLogin = localStorage.getItem("isLoggedin");
  if (!isLogin) {
    return redirect("/login"); //if not loggedin redirect to login page
  } else {
    return null; //Render null if authenticated and Return to dashborad
  }
}
