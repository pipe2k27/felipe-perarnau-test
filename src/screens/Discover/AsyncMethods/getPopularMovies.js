//The correct and secure approach here would be hiding our api key in an ENV file
// for the purpose of this test we will define it here

const myKey = '270db1326586b858b0b7001ef3f0efb6';
// fetches popular movies
const getPopularMovies = async (pageNumber) => {
  const data = await fetch(
    `https://api.themoviedb.org/3/discover/movie?api_key=${myKey}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=${pageNumber}&with_watch_monetization_types=flatrate`
  );
  const movies = await data.json();
  return movies;
};

export default getPopularMovies;
