/**
 * A React component that displays a user's profile information
 * 
 * @param {{ imageUrl: string, name: string, jobTitle: string, bio: string }} props
 * An object containing the user's profile information
 * @returns {React.ReactElement} A React element displaying the user's profile information
 */
import React, { useState } from 'react';
import CarCard from './CarCard.jsx';

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

  const [flippedIndex, setFlippedIndex] = useState(null);

  const toggleFlip = (index) => {
    setFlippedIndex((current) => (current === index ? null : index));
  };

  const renderDriverCard = (driver, index) => {
    if (!driver) {
      return null;
    }

    const isFlipped = flippedIndex === index;
    const cardImageUrl = `https://placehold.co/420x240?text=${encodeURIComponent(
      `${driver.car.make} ${driver.car.model}`
    )}`;

    return (
      <div key={index} className="driver-card">
        <div
          className={`flip-card${isFlipped ? ' is-flipped' : ''}`}
          onClick={() => toggleFlip(index)}
          onKeyDown={(event) => {
            if (event.key === 'Enter' || event.key === ' ') {
              event.preventDefault();
              toggleFlip(index);
            }
          }}
          role="button"
          tabIndex={0}
          aria-pressed={isFlipped}
          style={{ borderColor: driver.car.favouriteColor }}
        >
          <div className="flip-card-inner">
            <div className="flip-card-front">
              <h2>{driver.name}</h2>
              <p>Birth Year: {driver.birthYear}</p>
              <p>Team: {driver.car.make}</p>
              <p>Favourite Color: {driver.car.favouriteColor}</p>
              <p className="hint-text">Click to see the race car</p>
            </div>
            <div className="flip-card-back">
              <CarCard car={driver.car} imageUrl={cardImageUrl} />
            </div>
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className="profile-card">
      <h1>Race Car Drivers</h1>
      <div className="driver-grid">
        {drivers.map((driver, index) => renderDriverCard(driver, index))}
      </div>
    </div>
  );
};

export default ProfileCard;