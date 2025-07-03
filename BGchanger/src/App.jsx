import { useState } from "react"

function Myapp() {
  const [bgcolor, setbgcolor] = useState("black");
  const colors = ['red', 'blue', 'orange', 'lavender', 'green', 'brown'];

  return (
    <div
      className="h-screen w-screen flex flex-col items-center justify-center transition-colors duration-300 ease-in-out"
      style={{ backgroundColor: bgcolor }}
    >
      <h1 className="text-white text-3xl sm:text-4xl font-bold mb-8 drop-shadow-lg">
        🎨 Background Color Changer
      </h1>

      <div className="flex flex-wrap gap-4 bg-gray-900 bg-opacity-60 p-6 rounded-xl shadow-lg border border-gray-700">
        {colors.map((color) => (
          <button
            key={color}
            onClick={() => setbgcolor(color)}
            className="w-24 h-10 rounded-lg text-white font-semibold capitalize shadow-md transform transition hover:scale-105 hover:ring-2 ring-white"
            style={{ backgroundColor: color }}
          >
            {color}
          </button>
        ))}
      </div>
    </div>
  );
}

export default Myapp;
