// src/store.js
import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import axios from "axios";

const initialState = {
  articles: [],
};

function reducer(state = initialState, action) {
  switch (action.type) {
    case "SET_ARTICLES":
      return { ...state, articles: action.payload };
    default:
      return state;
  }
}

export const fetchArticles = () => async (dispatch) => {
  const response = await axios.get(
    "https://newsapi.org/v2/top-headlines?country=us&apiKey=YOUR_API_KEY"
  );
  dispatch({ type: "SET_ARTICLES", payload: response.data.articles });
};

const store = createStore(reducer, applyMiddleware(thunk));

export default store;
