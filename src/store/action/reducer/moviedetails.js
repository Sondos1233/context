export default function detailsReducer(state = {}, action) {
    switch (action.type) {
      case "SET_Movies":
        return {
          ...action.payload,
        };
  
      default:
        return state;
    }
  }