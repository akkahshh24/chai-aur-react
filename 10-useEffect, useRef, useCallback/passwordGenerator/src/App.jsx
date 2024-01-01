import { useCallback, useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'

function App() {
  const [length, setLength] = useState(8);
  const [numberAllowed, setNumberAllowed] = useState(false);
  const [specialCharacterAllowed, setSpecialCharacterAllowed] = useState(false);
  const [randomString, setRandomString] = useState()

  const randomStringGenerator = useCallback(() => {
    let randomString = "";
    let charSet = "ABCDEFGHIJKLMNOPQRSTUVXYZabcdefghijklmnopqrstuvwxyz";

    if (numberAllowed) charSet += "0123456789";
    if (specialCharacterAllowed) charSet += "!@#$%^&*()_+-={}[]|\:;'<>,.?/";

    for (let i = 0; i < length; i++) {
      let randomIndex = Math.floor(Math.random() * charSet.length);
      randomString += charSet[randomIndex];
    }

    setRandomString(randomString);

  }, [length, numberAllowed, specialCharacterAllowed, setRandomString])

  return (
    <>
      <div className="w-full max-w-md mx-auto shadow-md rounded-lg px-4 py-3 my-8 bg-gray-700 text-orange-500">
        <h1 className='text-white text-center my-3'>Random String Generator</h1>
          <div className="flex shadow rounded-lg overflow-hidden mb-4">
            <input type="text" value={password} className="outline-none w-full py-1 px-3" placeholder="Password" readOnly/>
        </div>
      </div>
    </>
  )
}

export default App
