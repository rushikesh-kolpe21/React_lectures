export const seriesData = () => {
  return (
    <li>
      <h2>name: {currEle.name}</h2>
      <h3>id: {currEle.id}</h3>
      <h4>rating: {currEle.rating}</h4>
      <h5>Description: {currEle.description}</h5>
      <h6>cast: {currEle.cast.join(", ")}</h6>
      <p>genre: {currEle.genre.join(", ")}</p>
    </li>
  );
};
