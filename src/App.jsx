import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import HeadingTxt from './commponents/HeadingTxt.jsx';
import CarCard from './commponents/CarCard.jsx';
import ProfileCard from './commponents/ProfileCard.jsx';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <ProfileCard 
          imageUrl="pfp20.jpeg"
          username="John Doe"
          jobTitle="Software Engineer"
          bio="I'm a passionate software developer."

        // <ProfileCard 
          user={{
            imageUrl: "https://example.com/profile.jpg",
            username: "Jam Donut",
            jobTitle: "Software Developer",
            bio: "I'm a passionate Information Technologist."
          }}
        />
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )


  return (
    <>
   // <HeadingTxt title="Welcome to the Car Showcase" />
    <HeadingTxt />
    <div className="car-cards-container">
      <CarCard 
        imageUrl="https://example.com/car1.jpg"
        model="Model S"
        manufacturer="Tesla"
        year={2022}
        price="$79,990"
      />
      <CarCard 
        imageUrl="https://example.com/car2.jpg"
        model="Mustang"
        manufacturer="Ford"
        year={2021}
        price="$55,300"
      />
      <CarCard 
        imageUrl="https://example.com/car3.jpg"
        model="Civic"
        manufacturer="Honda"
        year={2020}
        price="$25,000"
      />
    </div>
    </>
  )
}

export default App
