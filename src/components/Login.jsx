import { auth } from '../firebase';
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";

function Login() {

    const handleGoogleSignIn = async () => {
        try {
            const provider = new GoogleAuthProvider();
            const result = await signInWithPopup(auth, provider);
            console.log("Welcome inside, user logged in:", result.user.displayName);
        } catch (error) {
            console.log("Oops ! Something went wrong during Google Login:", error.message);
        }
    };

    return (
        <div className="login-container" style={loginPageStyles}>
            <div className="login-card" style={loginCardStyles}>
                <span style={{ fontSize: "3rem"}}>💬</span>
                <h2 style={{margin: "15px 0 5px 0", color:"#333"}}>Welcome to ChatBox</h2>
                <p style={{color: "#667781", marginBottom:"25px", fontSize:"0.9rem"}}>Sign in to connect and chat with your portfolio network.
                </p>

                <button onClick={handleGoogleSignIn} style={googleButtonStyles}>
                    <svg style={{width:"18px", height: "18px"}} viewBox="0 0 24 24">
                        <path fill="#EA4335" d="M12 5.04c1.64 0 3.12.56 4.28 1.67l3.2-3.2C17.52 1.58 14.96 1 12 1 7.35 1 3.41 3.66 1.5 7.51l3.79 2.94C6.18 7.37 8.86 5.04 12 5.04z"/>
                        <path fill="#4285F4" d="M23.49 12.27c0-.81-.07-1.59-.2-2.34H12v4.43h6.44c-.28 1.47-1.11 2.71-2.36 3.55l3.66 2.84c2.14-1.98 3.39-4.89 3.39-8.48z"/>
                        <path fill="#FBBC05" d="M5.29 14.55c-.23-.69-.36-1.43-.36-2.2s.13-1.51.36-2.2L1.5 7.21C.54 9.13 0 11.26 0 13.5s.54 4.37 1.5 6.29l3.79-2.94z"/>
                        <path fill="#34A565" d="M12 23c3.24 0 5.97-1.07 7.96-2.91l-3.66-2.84c-1.1.74-2.51 1.18-4.3 1.18-3.14 0-5.82-2.33-6.77-5.41L1.44 15.96C3.36 19.8 7.33 23 12 23z"/>
                    </svg>
                    Sign in with Google
                </button>
            </div>
        </div>
    );
}

const loginPageStyles = {
    display:"flex",
    justifyContent: "center",
    alignItems: "center",
    width: "100vw",
    height: "100vh",
    backgroundColor: "#f0f2f5" 
};

const loginCardStyles = {
  backgroundColor: "#ffffff",
  padding: "40px 30px",
  borderRadius: "12px",
  boxShadow: "0 4px 12px rgba(0,0,0,0.08)",
  textAlign: "center",
  maxWidth: "380px"
};

const googleButtonStyles = {
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  gap: "12px",
  width: "100%",
  padding: "12px",
  backgroundColor: "#ffffff",
  border: "1px solid #ccc",
  borderRadius: "24px",
  fontSize: "0.95rem",
  fontWeight: "bold",
  color: "#333",
  cursor: "pointer",
  transition: "background-color 0.2s"
};

export default Login;
