import "./register.css";

const Register = () => {
    return (
        <div className="login">
      <div className="loginWrapper">
        <div className="loginLeft">
          <h3 className="loginLogo">GetSocial</h3>
          <span className="loginDesc">
            Connect with your friends and the world around you on GetSocial
          </span>
        </div>
        <div className="loginRight">
<div className="loginBox">
<input placeholder='Your Name' className="loginInput" />
     <input placeholder='Email' className="loginInput" />
     <input placeholder='Password' className="loginInput" />
     <input placeholder='Password' className="loginInput" />
     <input placeholder='Confirm Password' className="loginInput" />
     <button className="loginButton">Sign Up</button>
     
     <button className="loginRegister">Sign in to your account</button>
</div>

        </div>
      </div>
    </div>
    )
}

export default Register
