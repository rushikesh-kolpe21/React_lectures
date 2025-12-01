export const SeriesData = (props) => {
    const {name,id,rating,description,cast,genre} = props.data;
  return (
    <li>
      <h2>name: {name}</h2>
      <h3>id: {id}</h3>
      <h4>rating: {rating}</h4>
      <h5>Description: {description}</h5>
      <h6>cast: {cast.join(", ")}</h6>
      <p>genre: {genre.join(", ")}</p>
    </li>
  );
};

