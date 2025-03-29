import config from './config'
import axios from 'axios'

export const movieList = async () => {
  try {
    const response = await axios.get(`${config.BASE_URL}movie/now_playing?api_key=${config.API_KEY}`)
    return response.data.results
  } catch (error) {
    console.error('Error fetching movie list:', error)
    throw error // إن شاء الله مفيش ايرور ولا حاجة بس احتياطي
  }
}

export const movieListPopular = async (page) =>{
  try {
    //console.log(`${config.BASE_URL}movie/popular?api_key=${config.API_KEY}`)
    console.log(page)
    const response = await axios.get(`${config.BASE_URL}movie/popular`,{
    params:{
      api_key: config.API_KEY,
      page: page
    }
  })
  return {
    moviesPopular: response.data.results,
    totalPages: response.data.total_pages
  };
  }
  catch (error) {
    console.error('Error fetching popular movie list:', error)
  }
}

export const MovieReviews = async (movieId) =>{
  try{
    const response = await axios.get(`${config.BASE_URL}movie/${movieId}/reviews`,
      {
        params:{
          api_key: config.API_KEY,
          page:1
        }
      }
    )
    return response.data.results
  }catch(error){
    console.log("Error fetching reviews: ", error)
    throw error
  }
}

// Fetch reviews for a specific movie
export const fetchMovieReviews = async (movieId) => {
  try {
    const response = await axios.get(`${config.BASE_URL}movie/${movieId}/reviews?api_key=${config.API_KEY}`);
    return response.data.results; // Returns an array of reviews
  } catch (error) {
    console.error('Error fetching movie reviews:', error);
    throw error;
  }
};

// Fetch details for a specific TV show
export const fetchTvShowDetails = async (seriesId) => {
  try {
    const response = await axios.get(`${config.BASE_URL}tv/${seriesId}?api_key=${config.API_KEY}`);
    return response.data; // Returns TV show details
  } catch (error) {
    console.error('Error fetching TV show details:', error);
    throw error;
  }
};