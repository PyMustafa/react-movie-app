import config from './config';
import axios from 'axios';

// Fetch a list of currently playing movies
export const getMoviesList = async (language) => {
  try {
    const response = await axios.get(`${config.BASE_URL}movie/now_playing`, {
      params: {
        api_key: config.API_KEY,
        language,
      },
    });
    return response.data.results;
  } catch (error) {
    console.error("Error fetching movie list:", error);
    throw error;
  }
};

// Fetch a list of popular TV shows
export const getTvShowsList = async (language) => {
  try {
    const response = await axios.get(`${config.BASE_URL}tv/popular`, {
      params: {
        api_key: config.API_KEY,
        language, 
      },
    });
    return response.data.results;
  } catch (error) {
    console.error('Error fetching TV shows list:', error);
    throw error;
  }
};

// Fetch a list of popular movies with pagination
export const movieListPopular = async (page, language) => {
  try {
    const response = await axios.get(`${config.BASE_URL}movie/popular`, {
      params: {
        api_key: config.API_KEY,
        page,
        language, 
      },
    });
    return {
      moviesPopular: response.data.results,
      totalPages: response.data.total_pages,
    };
  } catch (error) {
    console.error('Error fetching popular movie list:', error);
    throw error;
  }
}

// Fetch reviews for a specific movie
export const MovieReviews = async (movieId, language) => {
  try {
    const response = await axios.get(`${config.BASE_URL}movie/${movieId}/reviews`, {
      params: {
        api_key: config.API_KEY,
        page: 1,
        language, 
      },
    });
    return response.data.results; // Returns an array of reviews
  } catch (error) {
    console.error("Error fetching reviews: ", error);
    throw error;
  }
};

// Fetch details for a specific TV show
export const fetchTvShowDetails = async (seriesId, language) => {
  try {
    const response = await axios.get(`${config.BASE_URL}tv/${seriesId}`, {
      params: {
        api_key: config.API_KEY,
        language, 
      },
    });
    return response.data; // Returns TV show details
  } catch (error) {
    console.error('Error fetching TV show details:', error);
    throw error;
  }
};

// Fetch recommendations for a specific movie
export const getRecommendations = async (movie_id, language) => {
  try {
    const response = await axios.get(`${config.BASE_URL}movie/${movie_id}/recommendations`, {
      params: {
        api_key: config.API_KEY,
        language, 
      },
    });
    return response.data.results;
  } catch (error) {
    console.error('Error fetching recommendations:', error);
    throw error;
  }
};

// Fetch details for a specific movie
export const fetchMovieDetails = async (id, language) => {
  try {
    const response = await axios.get(`${config.BASE_URL}movie/${id}`, {
      params: {
        api_key: config.API_KEY,
        language, // Include the language parameter
      },
    });
    return response.data; // Returns movie details
  } catch (error) {
    console.error("Error fetching movie details:", error.response || error.message || error);
    throw error;
  }
};


//creating search api service

export const searchMovies = async (query, language, page=1) => {
  try {
    const response = await axios.get(`${config.BASE_URL}search/movie`, {
      params: {
        api_key: config.API_KEY,
        query: query,
        language,
        page: page,
      }
    });
    console.log(response.data.results);
    console.log(response.data.total_pages);
    console.log(page);
    return {results: response.data.results, totalPages: response.data.total_pages};
   } catch (error) {
    console.error("Error searching movies:", error);
    throw error;
  }}
  
  
