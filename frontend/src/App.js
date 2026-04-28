import { useState } from "react";
import axios from "axios";
import logo from "./assets/title.png"
import { useNavigate } from "react-router-dom";

function App() {
  const [error, setError] = useState("");
const [loading, setLoading] = useState(false);
  const [showHelp, setShowHelp] = useState(false);

  const navigate = useNavigate()

  const[user,setuser]=useState("")
  const[pass,setpass]=useState("")

  function handleUser(evt){
    setuser(evt.target.value)
  }

  function handlePass(evt){
    setpass(evt.target.value)
  }

  function check() {
  setError("");

  if (!user || !pass) {
    setError("Please enter username and password");
    return;
  }

  if (user.trim() === "" || pass.trim() === "") {
    setError("Please Enter a Valid Input");
    return;
  }

  setLoading(true);

  axios
    .get(`https://netflix-login-pu5d.onrender.com/login?username=${user}&password=${pass}`)
    .then((res) => {
      if (res.data === true) {
        setTimeout(() => {
          navigate("/netflix");
        }, 1000);
      } else {
        setError("Invalid username or password");
        setLoading(false);
      }
    })
    .catch(() => {
      setError("Server error");
      setLoading(false);
    });
}

  return (
    <div className="h-screen flex flex-col bg-gradient-to-b from-[#460d0e] to-black text-white">
      <nav className="px-40 py-5 border-gray-500/30 border-b">
        <div><img className="w-40" src={logo} alt="logo"/></div>
      </nav>

      <main className="flex flex-1 justify-center items-center">
      <div className="md:w-[450px] w-[350px]">
      <h1 className="text-4xl font-bold">Enter your info to sign in</h1>
      <p className="text-[#C2B7B8] font-semibold mt-3 mb-6 text-lg">Or get started with a new account.</p>
      <input className="w-full border border-gray-400 bg-[#1C1213] p-3 rounded mb-2" onChange={handleUser} name="username" placeholder="Enter Email or Username"/>
      <input className="w-full border border-gray-400 bg-[#1C1213] p-3 rounded mb-4" onChange={handlePass} name="password" placeholder="Enter Password"/>

      <button className="w-full bg-red-600 hover:bg-red-700 text-lg py-3 rounded font-semibold md:mb-3 mb-2 disabled:cursor-not-allowed disabled:opacity-60" onClick={check} disabled={loading}>
        {loading ? "Signing in..." : "Sign-In"}
      </button>
      {error && (<p className="text-red-500 text-center"><i class="fa-solid fa-triangle-exclamation"></i> {error}</p>)}
      

      <p className="cursor-pointer md:mt-10 mt-7" onClick={() => setShowHelp(!showHelp)}>Get Help {showHelp ? <i class="fa-solid fa-angle-up"></i> : <i class="fa-solid fa-angle-down"></i>}</p>

      {showHelp && (
        <div className="md:mt-3 mt-2 text-sm text-gray-300 space-y-2">
          
          <p className="cursor-pointer underline">
            Forgot email or mobile number?
          </p>

          <p className="cursor-pointer underline">
            Learn more about Sign-in
          </p>
        </div>)}
        <p className="text-xs font-semibold text-[#746d6e] mt-2 md:mt-5">This page is protected by Google reCAPTCHA to ensure you're not a bot.</p>
        </div>
      </main>
    </div>
  );
}

export default App;
