// src/App.js
import React, { useEffect } from "react";
import { Provider, useDispatch, useSelector } from "react-redux";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import store, { fetchArticles } from "./store";

function Home() {
  const dispatch = useDispatch();
  const articles = useSelector((state) => state.articles);

  useEffect(() => {
    dispatch(fetchArticles());
  }, [dispatch]);

  return (
    <div>
      <h1>Haber Toplayıcı Uygulaması</h1>
      <ul>
        {articles.map((article) => (
          <li key={article.title}>{article.title}</li>
        ))}
      </ul>
    </div>
  );
}

function Article() {
  return <h1>Makale Sayfası</h1>;
}

function App() {
  return (
    <Provider store={store}>
      <Router>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/article" component={Article} />
        </Switch>
      </Router>
    </Provider>
  );
}

export default App;
