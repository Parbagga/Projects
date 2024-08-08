import React, { useState } from "react";
import ReactSwitch from "react-switch";

const PasswordGenerator = () => {
  const [uppercase, setUppercase] = useState(false);
  const [numbers, setNumbers] = useState(false);
  const [special, setSpecial] = useState(false);

  const [length, setLength] = useState("6");

  const [password, setPassword] = useState("");

  const generatePassword = () => {
    const letters = "abcdefghijklmnopqrstuvwxyz";
    const num = "0123456789";
    const specialCharacters = "!@#$%^&*()-_=+[]{}|;:'\",.<>?/`~\\";

    let characters = letters.trim();
 

    
    if (uppercase) {
      characters += letters.toUpperCase();
    
    }

    if (numbers) {
      characters += num;
    }

    if (special) {
      characters += specialCharacters;
    }

    console.log(characters)
    let generatedPassword = '';

    for (let i = 0; i <length; i++) {
 const randomIndex = Math.floor(Math.random() * characters.length)
      generatedPassword += characters.charAt(randomIndex)
   

      setPassword(generatedPassword)
    }

    console.log(generatedPassword);

  };

  const handleClick = () => {
    generatePassword();
  };

  return (
    <div className="container grid items-center h-screen">
      <div className="w-1/3 bg-neutral-100  mx-auto mt-24  rounded-lg p-4 shadow-lg">
        <h3 className="text-3xl font-bold text-center">Password Generator</h3>
        {password && (
          <h1 className="text-center py-3 text-lg">
            Generated Password: <CopyText text={password}/>

          </h1>
        )}
        <div className="flex items-center justify-between py-3">
          <label htmlFor="passwordLength">Password Length: </label>
          <input
            type="range"
            min={6}
            max={16}
            value={length}
            onChange={(e) => setLength(e.target.value)}
            className="w-1/2 ml-8 h-2 bg-gray-200  cursor-pointer"
          />

          <span className="mr-6 text-xl">{length}</span>
        </div>

        <ul className="flex gap-3 flex-col">
          <li className="flex justify-between">
            <label htmlFor=""> Include UpperCase</label>
            <ReactSwitch
              onChange={() => setUppercase(!uppercase)}
              checked={uppercase}
            />
          </li>
          <li className="flex justify-between">
            <label htmlFor=""> Include Numbers</label>
            <ReactSwitch
              onChange={() => setNumbers(!numbers)}
              checked={numbers}
            />
          </li>
          <li className="flex justify-between">
            <label htmlFor=""> Include Special Characters</label>
            <ReactSwitch
              onChange={() => setSpecial(!special)}
              checked={special}
            />
          </li>
        </ul>

        <div className="flex justify-center">
          <button
            onClick={handleClick}
            className="p-2 rounded-sm shadow-lg mt-4 bg-blue-500 hover:bg-blue-600 duration-300 ease-in-out "
          >
            Generate Password
          </button>
        </div>
      </div>
    </div>
  );
};

export default PasswordGenerator;








const CopyText = ({ text }) => {
  const handleCopy = () => {
    // Create a temporary textarea element to copy the text
    const textarea = document.createElement('textarea');
    textarea.value = text;
    document.body.appendChild(textarea);
    textarea.select();
    document.execCommand('copy');
    document.body.removeChild(textarea);
  };

  return (
    <span
      onClick={handleCopy}
      className="cursor-pointer text-blue-500 hover:text-blue-700 transition-colors duration-300"
    >
      {text}
    </span>
  );
};

