import React from 'react';
import CarCard from './CarCard';

/**
 * A React component that displays a list of cars.
 * 
 * The component renders a div element containing an h1 element with the text "Car Showcase".
 * It also renders two CarCard components, which display the name, description, and image of the car.
 * Additional CarCard components can be added as needed.
 */
const App = () => {
  return (
    <div>
      <h1>Car Showcase</h1>
      <CarCard
        imageUrl="https://example.com/car1.jpg"
        name="Car 1"
        description="This is the first car."
      />
      <CarCard
        imageUrl="https://example.com/car2.jpg"
        name="Car 2"
        description="This is the second car."
      />
      {/* Add more CarCard components as needed */}
    </div>
  );
};

export default App;