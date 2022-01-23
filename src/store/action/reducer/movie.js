export default function MoviesReducer(state = [], action) {
    switch (action.type) {
      case "SET_Movies":
        return action.payload;
  
      default:
        return state;
    }
  }