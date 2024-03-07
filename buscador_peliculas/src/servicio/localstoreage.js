export const getPeliculas = () => {
  const peliculas = localStorage.getItem('peliculas');
  return peliculas ? JSON.parse(peliculas) : [];
};

export const guardarPelicula = (pelicula) => {
  const peliculas = getPeliculas();
  peliculas.push(pelicula);
  localStorage.setItem('peliculas', JSON.stringify(peliculas));
};

export const getPelicula = (id) => {
  const peliculas = getPeliculas();
  const idBuscada = parseInt(id, 10);
  console.log('ID buscada:', idBuscada);
  const peliculaEncontrada = peliculas.peliculas.find(pelicula => pelicula.id === idBuscada);
  console.log('Película encontrada:', peliculaEncontrada);
  return peliculaEncontrada || null;
};

// Precarga de películas //
const peliculasPrecargadas = {
  "peliculas": [
      {
          "id": 1,
          "titulo": "Titanic",
          "director": "James Cameron",
          "imagenfile": "titanic.jpg",
          "descripcion": "Titanic es una película épica de romance y drama dirigida, escrita, coeditada y co-producida por James Cameron. La trama está basada en el hundimiento del RMS Titanic y sigue la historia de amor entre Jack Dawson y Rose DeWitt Bukater, pertenecientes a diferentes clases sociales."
      },
      {
          "id": 2,
          "titulo": "El Padrino",
          "director": "Francis Ford Coppola",
          "imagenfile": "el_padrino.jpg",
          "descripcion": "El Padrino es una película de crimen y drama dirigida por Francis Ford Coppola. Está basada en la novela homónima de Mario Puzo y sigue la historia de la familia mafiosa Corleone, liderada por Don Vito Corleone, interpretado por Marlon Brando."
      },
      {
          "id": 3,
          "titulo": "Forrest Gump",
          "director": "Robert Zemeckis",
          "imagenfile": "forrest_gump.jpg",
          "descripcion": "Forrest Gump es una película de comedia dramática dirigida por Robert Zemeckis y protagonizada por Tom Hanks. La historia sigue la vida de Forrest Gump, un hombre con discapacidad intelectual que se ve involucrado en importantes acontecimientos históricos de los Estados Unidos."
      },
      {
          "id": 4,
          "titulo": "El Señor de los Anillos: La Comunidad del Anillo",
          "director": "Peter Jackson",
          "imagenfile": "el_senor_de_los_anillos_1.jpg",
          "descripcion": "El Señor de los Anillos: La Comunidad del Anillo es una película de fantasía dirigida por Peter Jackson y basada en la novela de J.R.R. Tolkien. Narra la historia del hobbit Frodo Bolsón y su misión de destruir un anillo mágico para evitar que caiga en manos del Señor Oscuro Sauron."
      },
      {
          "id": 5,
          "titulo": "Pulp Fiction",
          "director": "Quentin Tarantino",
          "imagenfile": "pulp_fiction.jpg",
          "descripcion": "Pulp Fiction es una película de crimen y comedia negra dirigida por Quentin Tarantino. La trama sigue varios hilos narrativos entrelazados que muestran el mundo del crimen en Los Ángeles. Destaca por su estilo narrativo no lineal y diálogos ingeniosos."
      },
      {
          "id": 6,
          "titulo": "El Rey León",
          "director": "Roger Allers, Rob Minkoff",
          "imagenfile": "el_rey_leon.jpg",
          "descripcion": "El Rey León es una película animada de Disney dirigida por Roger Allers y Rob Minkoff. La historia está ambientada en la sabana africana y sigue la vida de Simba, un león que debe enfrentarse a su destino como rey después de la muerte de su padre, Mufasa."
      },
      {
          "id": 7,
          "titulo": "Interestelar",
          "director": "Christopher Nolan",
          "imagenfile": "interestelar.jpg",
          "descripcion": "Interestelar es una película de ciencia ficción dirigida por Christopher Nolan. La trama sigue a un grupo de astronautas que viajan a través de un agujero de gusano en busca de un nuevo hogar para la humanidad, ante la inminente destrucción de la Tierra."
      },
      {
          "id": 8,
          "titulo": "El Laberinto del Fauno",
          "director": "Guillermo del Toro",
          "imagenfile": "el_laberinto_del_fauno.jpg",
          "descripcion": "El Laberinto del Fauno es una película de fantasía oscura dirigida por Guillermo del Toro. Ambientada en la posguerra española, la historia sigue a una niña llamada Ofelia que descubre un mundo mágico habitado por criaturas fantásticas."
      },
      {
          "id": 9,
          "titulo": "La La Land",
          "director": "Damien Chazelle",
          "imagenfile": "la_la_land.jpg",
          "descripcion": "La La Land es una película musical romántica dirigida por Damien Chazelle. Ambientada en Los Ángeles, sigue la historia de amor entre un pianista de jazz y una aspirante a actriz, mientras persiguen sus sueños en la industria del entretenimiento."
      },
      {
          "id": 10,
          "titulo": "Matrix",
          "director": "Lana Wachowski, Lilly Wachowski",
          "imagenfile": "matrix.jpg",
          "descripcion": "Matrix es una película de ciencia ficción dirigida por las hermanas Wachowski. La trama sigue a Neo, un programador que descubre que el mundo en el que vive es una simulación controlada por máquinas, y se une a la resistencia humana para combatirlas."
      },
      {
          "id": 11,
          "titulo": "Cadena perpetua",
          "director": "Frank Darabont",
          "imagenfile": "cadena_perpetua.jpg",
          "descripcion": "Cadena perpetua es una película dramática dirigida por Frank Darabont y basada en la novela de Stephen King. Narra la historia de un hombre condenado a cadena perpetua por el asesinato de su esposa y la amistad que desarrolla con sus compañeros de prisión."
      },
      {
          "id": 12,
          "titulo": "El Gran Hotel Budapest",
          "director": "Wes Anderson",
          "imagenfile": "el_gran_hotel_budapest.jpg",
          "descripcion": "El Gran Hotel Budapest es una comedia dramática dirigida por Wes Anderson. La película sigue las extravagantes aventuras de un conserje y su..."
      }
  ]
};

localStorage.clear();
// Se guarda cada película precargada en el localStorage
guardarPelicula(peliculasPrecargadas.peliculas);
