export const SeriesData = (props) => {
    const {data} = props;
  return (
    <li>
      <h2>name: {data.name}</h2>
      <h3>id: {data.id}</h3>
      <h4>rating: {data.rating}</h4>
      <h5>Description: {data.description}</h5>
      <h6>cast: {data.cast.join(", ")}</h6>
      <p>genre: {data.genre.join(", ")}</p>
    </li>
  );
};
