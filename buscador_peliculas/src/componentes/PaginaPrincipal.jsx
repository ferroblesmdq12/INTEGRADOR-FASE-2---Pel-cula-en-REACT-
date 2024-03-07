import { useState } from 'react';
import TodasLasPeliculas from './TodasLasPeliculas';
import buscarPelicula from './buscarPelicula';
import { Container, Row, Col } from 'react-bootstrap';

export function PaginaPrincipal() {
  const [searchResults, setSearchResults] = useState([]);

  const handleSearch = (filteredMovies) => {
    setSearchResults(filteredMovies);
  };

  return (
    <Container fluid style={{ textAlign: 'center' }}>
      <Row style={{ textAlign: 'center' }}>
        <h1>Peliculas React</h1>
      </Row>
      <Row style={{ textAlign: 'center' }}>
        <Col xs={12} md={8} lg={6} className="">
          <buscarPelicula onSearch={handleSearch} />
          {searchResults.length > 0 ? (
            <TodasLasPeliculas peliculas={searchResults} />
          ) : (
            <TodasLasPeliculas peliculas={searchResults}/>
          )}
                    {searchResults.length > 0 ? (
            console.log(searchResults)
          ) : (
            console.log("no hay peliculas")
          )}
        </Col>
      </Row>
    </Container>
  );
};