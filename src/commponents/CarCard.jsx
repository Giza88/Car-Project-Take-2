function CarCard({ imageUrl, name, description }) {
  if (!imageUrl || !name || !description) {
    throw new Error('CarCard received invalid props');
  }

  try {
    return (
      <>
        <img src={imageUrl} alt={name} />
        <h2>{name}</h2>
        <p>{description}</p>
      </>
    );
  } catch (error) {
    console.error('CarCard threw an exception:', error);
    return null;
  }
}
export default CarCard;