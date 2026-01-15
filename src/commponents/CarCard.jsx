function CarCard({ car, imageUrl }) {
  if (!car) {
    return null;
  }

  const { make, model, engineSize, color } = car;
  const title = [make, model].filter(Boolean).join(' ');

  return (
    <div className="car-card">
      {imageUrl ? <img src={imageUrl} alt={title || 'Race car'} /> : null}
      <h3>{title || 'Race car'}</h3>
      {engineSize ? <p>Engine: {engineSize}</p> : null}
      {color ? <p>Color: {color}</p> : null}
    </div>
  );
}

export default CarCard;