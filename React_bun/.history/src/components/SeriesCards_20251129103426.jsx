export const SeriesData = (props) => {
  return (
    <li>
      <h2>name: {props.data.name}</h2>
      <h3>id: {props.data.id}</h3>
      <h4>rating: {props.data.rating}</h4>
      <h5>Description: {props.data.description}</h5>
      <h6>cast: {props.data.cast.join(", ")}</h6>
      <p>genre: {props.data.genre.join(", ")}</p>
    </li>
  );
};
