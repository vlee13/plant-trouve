import React, { useState, useEffect } from "react";
import axios from "axios";

//news api key: 1ea3f2dd64b44ab98567cc138ab62ea6

function News(props) {
  let [news, setNews] = useState([]);

  useEffect(() => {
    axios
      .get(
        `https://newsapi.org/v2/everything?q=climate+change&apiKey=1ea3f2dd64b44ab98567cc138ab62ea6`
      )
      .then((res) => {
        setNews(res.data.articles);
      });
  }, []);

  //   console.log(news);

  function displayNews() {
    return news?.map((article) => {
      return (
        <div>
          <div>
            <h1>{article.title}</h1>
            <img
              src={
                !article.urlToImage
                  ? "data:image/png;base64,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"
                  : article.urlToImage
              }
              alt="article img"
            />
          </div>

          <div>
            <h3>Description: {article.description}</h3>
            <p>
              Snippet: {article.content} <a href={article.url}>Article Link</a>
            </p>
          </div>
        </div>
      );
    });
  }

  return <div>{displayNews()}</div>;
}

export default News;
