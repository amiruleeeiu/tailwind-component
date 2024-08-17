import Button from "@/components/Button";
import UserService from "UserService";

function Login() {
  const isAuthenticated = UserService.isLoggedIn();
  return (
    <div className="flex items-center justify-center">
      <div>
        {isAuthenticated ? <p>You are logged in</p> : <p>Please login</p>}
        <Button
          color="success"
          onClick={() => {
            isAuthenticated ? UserService.doLogout() : UserService.doLogin();
          }}
        >
          {isAuthenticated ? "Log Out" : "Login"}
        </Button>
      </div>
    </div>
  );
}

export default Login;
