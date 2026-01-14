/**
 * A React component that displays a user's profile information
 * 
 * @param {{ imageUrl: string, name: string, jobTitle: string, bio: string }} props
 * An object containing the user's profile information
 * @returns {React.ReactElement} A React element displaying the user's profile information
 */
import React, { useState } from 'react';
import CarCard from './CarCardContainer';

const ProfileCard = () => {
  const drivers = [
    {
      name: 'Lewis Hamilton',
      birthYear: 2000,
      car: {
        make: 'Mercedes',
        model: 'AMG F1 W13',
        engineSize: '1.6L',
        color: 'Silver',
        favouriteColor: 'Blue',
      },
    },
    {
      name: 'Max Verstappen',
      birthYear: 1997,
      car: {
        make: 'Red Bull',
        model: 'RB18',
        engineSize: '1.6L',
        color: 'Red',
        favouriteColor: 'Orange',
      },
    },
    {
      name: 'Charles Leclerc',
      birthYear: 1997,
      car: {
        make: 'Ferrari',
        model: 'SF23',
        engineSize: '1.6L',
        color: 'Red',
        favouriteColor: 'Red',
      },
    },
  ];

  const [selectedDriver, setSelectedDriver] = useState(null);

  const handleDriverClick = (driver) => {
    if (!driver) {
      throw new Error('Driver is null or undefined');
    }
    setSelectedDriver(driver);
  };

  const renderDriverCard = (driver, index) => {
    if (!driver) {
      return null;
    }
    return (
      <div
        key={index}
        className="driver-card"
        style={{
          backgroundColor: selectedDriver?.car?.favouriteColor,
        }}
        onClick={() => handleDriverClick(driver)}
      >
        <h2>{driver.name.toUpperCase()}</h2>
        <p>Birth Year: {driver.birthYear}</p>
        <p>Total Characters: {driver.name.length}</p>
        <CarCard
          imageUrl={`https://example.com/${driver.car.make.toLowerCase()}.jpg`}
          name={driver.car.model}
          description={`This is the ${driver.car.make} ${driver.car.model}.`}
          engineSize={driver.car.engineSize}
          color={driver.car.color}
        />
      </div>
    );
  };

  return (
    <div>
      <h1>Race Car Drivers</h1>
      {drivers.map((driver, index) => renderDriverCard(driver, index))}
    </div>
  );
};

export default ProfileCard;