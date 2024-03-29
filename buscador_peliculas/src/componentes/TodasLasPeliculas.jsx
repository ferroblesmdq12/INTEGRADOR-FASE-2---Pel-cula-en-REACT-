import { getPeliculas } from '../servicio/localstoreage.js';
import TarjetaPelicula from './TarjetaPelicula.jsx';
import { Container } from 'react-bootstrap';
import { useState, useEffect } from 'react';
import InfiniteScroll from 'react-infinite-scroll-component';

const ITEMS_PER_PAGE = 7;

export default function TodasLasPeliculas({peliculas: propPeliculas}) {
  const [peliculas, setPeliculas] = useState([]);
  const [peliculasFiltradas, setPeliculasFiltradas] = useState(propPeliculas);
  const [page, setPage] = useState(1);
  const [hasMore, setHasMore] = useState(true);

  const fetchMoreData = () => {
    setTimeout(() => {
      const peliculasData = propPeliculas.length > 0 ? propPeliculas : getPeliculas()

      const newMovies = peliculasData.slice((page - 1) * ITEMS_PER_PAGE, page * ITEMS_PER_PAGE);

      if (newMovies.length === 0) {
        setHasMore(false);
      } else {
        setPeliculas((prevMovies) => [...prevMovies, ...newMovies]);
        setPage((prevPage) => prevPage + 1);
      }
    }, 500);
  };

  useEffect(() => {
    fetchMoreData();
  }, []);

  useEffect(() => {
    if(propPeliculas.length > 0) {
      setPeliculas(propPeliculas);
      setPage(1);
      setHasMore(false);
    }
  }, [propPeliculas]);
  
  return (
    <Container fluid>
      <InfiniteScroll
        dataLength={peliculas.length}
        next={fetchMoreData}
        hasMore={hasMore}
        loader={<h4>Cargando...</h4>}
        endMessage={<p>No hay más películas</p>}
      >
        <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-around', textAlign: 'center' }}>
          {peliculas.map((pelicula) => (
            <TarjetaPelicula key={pelicula.id} pelicula={pelicula} />
          ))}
        </div>
      </InfiniteScroll>
    </Container>
  );
};