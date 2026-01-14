 import { useState } from 'react'

import './App.css'
import HeadingTxt from './commponents/HeadingTxt.jsx';
import CarCard from './commponents/CarCardContainer.jsx';
import ProfileCard from './commponents/ProfileCard.jsx';

function App() {
  // const [count, setCount] = useState(0)

  return (
    <>
      <div className="car-cards-container">
        {[/* imageUrl, model, manufacturer, year, price */].map((car) => {
          if (!car || !car.imageUrl || !car.model || !car.manufacturer || !car.year || !car.price) {
            console.error('App threw an exception: Car object is null or missing properties');
            return null;
          }
          try {
            return (
              <CarProfile
                key={`${car.manufacturer}-${car.model}-${car.year}`}
                imageUrl={car.imageUrl}
                model={car.model}
                manufacturer={car.manufacturer}
                year={car.year}
                price={car.price}
              />
            );
          } catch (error) {
            console.error('App threw an exception:', error);
            return null;
          }
        })}
      </div>
    </>
  )
}

export default App
