import { NavLink, useLocation } from 'react-router-dom';

export default function MovieList({ movies }) {
  const location = useLocation();

  return (
    <ol>
      {movies.map(movie => (
        <li key={movie.id}>
          <NavLink to={`/movies/${movie.id}`} state={location}>
            <p>{movie.original_title}</p>
          </NavLink>
        </li>
      ))}
    </ol>
  );
}