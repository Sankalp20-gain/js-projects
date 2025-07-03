import { useCallback, useEffect, useState } from "react";

function App(){
  const [Length , setLength] = useState(8);
  const [numAllowed , setnumAllowed] = useState(false);
  const [charAllowed , setcharAllowed] = useState(false);
  const [password , setpassword] = useState("");

  const passwordgenerator = useCallback(() => {
    let pass = ""
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"

    if(numAllowed){
      str+="0123456789";
    }
    if(charAllowed){
      str+="!@#$%^&*()?~";
    }

    for (let i = 0; i < Length; i++) {
      let char = Math.floor(Math.random()*str.length);
      pass += str.charAt(char);
      
    }
    setpassword(pass);
  } , [Length , numAllowed , charAllowed , setpassword])

  useEffect(() => {
    passwordgenerator();
  } , [Length , numAllowed , charAllowed , passwordgenerator])

  const copypassword = () => {
    if(password){
      navigator.clipboard.writeText(password).then(() => {
        alert("password copied to clipboard!");
      });
    }
  }

  return(
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-slate-800 flex items-center justify-center px-4">
  <div className="flex flex-col items-center gap-6 bg-gray-800 px-8 py-10 rounded-2xl shadow-lg w-full max-w-md">
    
    <h1 className="text-white text-3xl font-semibold">🔐 Password Generator</h1>

    <div className="relative w-full">
      <input
        type="text"
        readOnly
        value={password}
        className="w-full bg-gray-700 text-white py-3 px-4 pr-24 rounded-lg border border-gray-600 text-lg tracking-wide"
      />
      <button
        onClick={copypassword}
        className="absolute right-2 top-1/2 -translate-y-1/2 bg-blue-700 hover:bg-blue-800 text-white px-4 py-1.5 rounded-md transition"
      >
        Copy
      </button>
    </div>

    <div className="flex flex-col gap-4 w-full">
      <label className="flex flex-col gap-1 text-white font-medium">
        <span className="mb-1 text-base">Password Length: <span className="text-green-400 font-bold">{Length}</span></span>
        <input
          type="range"
          min="4"
          max="32"
          value={Length}
          onChange={(e) => setLength(Number(e.target.value))}
          className="w-full accent-green-500"
        />
      </label>

      <div className="flex items-center justify-between text-white">
        <label className="flex items-center gap-2">
          <input
            type="checkbox"
            checked={numAllowed}
            onChange={() => setnumAllowed((prev) => !prev)}
            className="w-4 h-4 accent-blue-500"
          />
          <span className="text-base">Include Numbers</span>
        </label>

        <label className="flex items-center gap-2">
          <input
            type="checkbox"
            checked={charAllowed}
            onChange={() => setcharAllowed((prev) => !prev)}
            className="w-4 h-4 accent-blue-500"
          />
          <span className="text-base">Include Symbols</span>
        </label>
      </div>
    </div>

    <button
      onClick={passwordgenerator}
      className="bg-green-600 hover:bg-green-700 transition px-6 py-2 rounded-lg text-white font-semibold mt-4"
    >
      🔁 Generate New Password
    </button>

  </div>
</div>

  )
}

export default App;