import React, { Component } from 'react';
import axios from 'axios';
import carbonFiber from './images/carbonfiber.jpg';

/*
Author: Tyler Cenac
Date: 06/16/2020
Email: tylercenac@ibm.com

This code retrieves data from NewsAPI and displays it on a web page. 

*/

// Set default topic to "technology"
let API_URL =
  'http://newsapi.org/v2/top-headlines?country=us&category=technology&apiKey=646f8efa509c4548a6ecaa046a6e06c8';

class App extends Component {
  state = {
    articles: [],
    isLoading: true,
    errors: null
  };

  // I did not need to use the date for my APIs, but I included a getDate() method anyway
  getDate() {
    let d = new Date();
    console.log(d.toString());
    console.log(d.toISOString());
  }

  // Retrieves articles from NewsAPI
  getArticles() {
    axios
      .get(`${API_URL}`)
      .then((response) =>
        response.data.articles.map((article) => ({
          title: `${article.title}`,
          description: `${article.description}`,
          author: `${article.author}`,
          url: `${article.url}`,
          urlToImage: `${article.urlToImage}`
        }))
      )
      .then((articles) => {
        this.setState({
          articles,
          isLoading: false
        });
      })
      .catch((error) => this.setState({ error, isLoading: false }));
  }

  // Instantiates network request for data
  componentDidMount() {
    this.getArticles();
  }

  // Formats and displays articles on web page
  render() {
    const { isLoading, articles } = this.state;
    return (
      <React.Fragment>
        <h2
          className="text-center"
          style={{
            fontSize: '100px',
            height: '140px',
            color: 'white',
            fontWeight: '1000',
            backgroundImage: `url(${carbonFiber})`
          }}
          onClick={() => {
            API_URL =
              'http://newsapi.org/v2/top-headlines?country=us&category=technology&apiKey=646f8efa509c4548a6ecaa046a6e06c8';
            this.getArticles();
          }}
        >
          TechNews
        </h2>
        <table
          className="table"
          style={{
            fontSize: '35px'
          }}
        >
          <tbody>
            <tr>
              <td
                onClick={() => {
                  API_URL =
                    'http://newsapi.org/v2/everything?q=ai&apiKey=646f8efa509c4548a6ecaa046a6e06c8';
                  this.getArticles();
                }}
              >
                <b>AI</b>
              </td>
              <td
                onClick={() => {
                  API_URL =
                    'http://newsapi.org/v2/everything?q=apple&from=2020-06-17&to=2020-06-17&sortBy=popularity&apiKey=646f8efa509c4548a6ecaa046a6e06c8';
                  this.getArticles();
                }}
              >
                <b>Apple</b>
              </td>
              <td
                onClick={() => {
                  API_URL =
                    'http://newsapi.org/v2/everything?q=google&from=2020-06-17&to=2020-06-17&sortBy=popularity&apiKey=646f8efa509c4548a6ecaa046a6e06c8';
                  this.getArticles();
                }}
              >
                <b>Google</b>
              </td>
              <td
                onClick={() => {
                  API_URL =
                    'http://newsapi.org/v2/everything?q=ibm&apiKey=646f8efa509c4548a6ecaa046a6e06c8';
                  this.getArticles();
                }}
              >
                <b>IBM</b>
              </td>
              <td
                onClick={() => {
                  API_URL =
                    'http://newsapi.org/v2/everything?q=microsoft&apiKey=646f8efa509c4548a6ecaa046a6e06c8';
                  this.getArticles();
                }}
              >
                <b>Microsoft</b>
              </td>
              <td
                onClick={() => {
                  API_URL =
                    'http://newsapi.org/v2/top-headlines?sources=techcrunch&apiKey=646f8efa509c4548a6ecaa046a6e06c8';
                  this.getArticles();
                }}
              >
                <b>TechCrunch</b>
              </td>
              <td
                onClick={() => {
                  API_URL =
                    'http://newsapi.org/v2/everything?q=vr&apiKey=646f8efa509c4548a6ecaa046a6e06c8';
                  this.getArticles();
                }}
              >
                <b>VR</b>
              </td>
            </tr>
          </tbody>
        </table>
        <div className="container-fluid">
          {!isLoading ? (
            articles.map((article) => {
              const { title, description, author, url, urlToImage } = article;
              return (
                <div
                  key={title}
                  className="rounded border border-dark"
                  onClick={() => {
                    window.location.replace(`${url}`);
                  }}
                  style={{
                    backgroundColor: '#ebebeb',
                    marginBottom: '20px'
                  }}
                >
                  <table className="table">
                    <tbody>
                      <tr>
                        <td>
                          <img
                            src={`${urlToImage}`}
                            alt={'Breaking News!'}
                            style={{
                              width: '400px',
                              height: '350px',
                              marginTop: '30px',
                              marginLeft: '15px'
                            }}
                            className="rounded"
                          />
                        </td>

                        <td>
                          <h1 className="p-2">
                            <b>{title} </b>
                          </h1>
                          <h3 className="p-2">{description}</h3>
                          <p className="p-2">
                            {author ? 'Author: ' + author : ''}{' '}
                          </p>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              );
            })
          ) : (
            <p className="text-center" style={{ fontSize: '30px' }}>
              Loading...
            </p>
          )}
        </div>
        <div className="text-center">
          <p onClick={this.getDate}>Created by: Tyler Cenac</p>
          <p>Email: TylerCenac@ibm.com</p>
        </div>
      </React.Fragment>
    );
  }
}
export default App;
