
import { useState, useEffect } from 'react';
import { fetchMovies } from '../services/movesAPI';
import { Button } from './Button/Button';
import { MovieList } from './MovieList/MovieList';
import Load from './Loader/Loader';

const App = () => {
  const [isListShown, setIsListShown] = useState(false);
  const [movies, setMovies] = useState([]);
  const [page, setPage] = useState(1);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    if (isListShown) {
      setIsLoading(true);
      fetchMovies(page)
        .then(res => {
          console.log(res);
          setMovies(prev => {
            return [...prev, ...res.data.results];
          });
        })
        .catch(error => console.log(error))
        .finally(() => setIsLoading(false));
    } else if (!isListShown) {
      setMovies([]);
      setPage(1);
    }
  }, [page, isListShown]);

  const heandleButton = () => {
    setIsListShown(prev => {
      return !prev;
    });
  };

  const loadMore = () => {
    setPage(prev => {
      return prev + 1;
    });
  };

  const deleteMovie = id => {
    setMovies(prevState => prevState.filter(movie => movie.id !== id));
  };

  return (
    <div>
      <Button
        textContent={isListShown ? 'Hide move list' : 'Show moves list'}
        heandleButton={heandleButton}
      />

      {isListShown && (
        <>
          <MovieList data={movies} deleteMovie={deleteMovie} />
          {!isLoading && (
            <Button textContent="Load More" heandleButton={loadMore} />
          )}
        </>
      )}
      {isLoading && <Load />}
    </div>
  );
};

export default App;
