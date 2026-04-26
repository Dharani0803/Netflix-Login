import "./Netflix.css"
import { useState } from "react";
import logo from "./assets/title.png"

function Netflix(){
    
    const [open, setOpen] = useState(false);
    const [lang, setLang] = useState("en");

    return(
        <div className="banner h-screen flex flex-col"> 
        <nav className="flex justify-between px-40 py-5 items-center">
            <div><img className="w-40" src={logo} alt="logo"/></div>
            <div className="flex gap-5">
            
            <div className="relative">
                <div onClick={() => setOpen(!open)}
                    className="flex items-center gap-2 border ring-2 ring-white text-white px-3 py-1 rounded cursor-pointer bg-black/40" >
                    <span className="font-semibold">文A</span>
                    <span className="font-semibold">
                    {lang === "en" ? "English" : "हिंदी"}
                    </span>
                    <span className="ml-1"><i class="fa-solid fa-angle-down"></i></span>
                </div>

            {open && (
                <div className="absolute mt-1 w-full bg-white shadow-lg z-10">
                
                <div onClick={() => {setLang("en"); setOpen(false); }}
                    className="px-4 py-2 hover:bg-blue-600 hover:text-white cursor-pointer">
                    English
                </div>

                <div onClick={() => {setLang("hi"); setOpen(false);}}
                    className="px-4 py-2 hover:bg-blue-600 hover:text-white cursor-pointer">
                    हिंदी
                </div>

                </div>)}
            </div>

            <button className="bg-red-600 text-white font-semibold py-1 px-4 rounded-md">Sign out</button></div>
            </nav>

        <main className="flex flex-1 flex-col justify-center items-center text-center">
            <h1 className="text-6xl font-extrabold text-white">Unlimited movies,</h1>
            <h1 className="text-6xl font-extrabold text-white">shows, and more</h1>
            <p className="text-white font-semibold text-2xl my-5">Starts at ₹149. Cancel at any time.</p>
            <button className="bg-red-600 px-6 py-3 rounded-md text-2xl font-bold text-white">Finish Sign-Up <i class="fa-solid fa-angle-right"></i></button>
        </main>
        </div>

    )
}

export default Netflix