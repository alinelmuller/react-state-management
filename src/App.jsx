// src/App.jsx
import { useState } from 'react';
import './App.css';

const App = () => {
  const [cats, setCats] = useState([
    { name: 'Myshka', breed: 'Ragdoll' },
    { name: 'Malta', breed: 'Turkish Angora' },
  ]);

  const addCat = (newCat) => {
    // spread current cats array and newCat object into a new array
    const newCatsArray = [...cats, newCat];
    // call state setter function with this new array
    setCats(newCatsArray);
  };

  return (
    <>
      <button onClick={() => addCat({ name: 'Kira', breed: 'Ragamuffin' })}>
        Add Cat
      </button>
      <ul>
        {cats.map((cat, idx) => (
          <li key={idx}> {cat.name} </li>
        ))}
      </ul>
    </>
  );
};

// const App = () => {
//   //const [isDarkMode, setIsDarkMode] = useState(false);
  
//   // const [userInfo, setUserInfo] = useState ({
//   //   firstName: 'Aline',
//   //   lastName: 'Muller',
//   //   hasPets: false,
//   //   age: 38,
//   // })
  
//   const [mode, setMode] = useState('light');
  
//   const handleMode = (modeValue) => {
//     console.log(modeValue);
//     setMode(modeValue);
//   }
  
//   // const handleDarkMode = () => {
//   //   setIsDarkMode(true);
//   //   console.log('Dark Mode');
//   // }
//   // const handleLightMode = () => {
//   //   setIsDarkMode(false);
//   //   console.log('Light Mode');
//   // }
//     return (
//       <>
//         <div className={mode}>
//           <h1>Hello world!</h1>
//           {/* <h2>Hello, my name is {userInfo.firstName} {userInfo.lastName}, I am {userInfo.age} years old, and I {userInfo.hasPets ? 'have' : 'do not have'} pets.”</h2> */}
//         </div>
//         <div>
//             <button onClick={() => handleMode ('dark')}>Dark Mode</button>
//             <button onClick={() => handleMode ('light')}>Light Mode</button>
//             <button onClick={() => handleMode ('neon')}>Neon Mode</button>
//             <button onClick={() => handleMode ('night')}>Night Mode</button>
//         </div>
//       </>
//     );
//   };



export default App;
