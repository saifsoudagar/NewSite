import React, { useEffect, useState } from "react";
import NewsItem from "./Newsitem";
import Spinner from "./Spinner";
import PropTypes from "prop-types";
import InfiniteScroll from "react-infinite-scroll-component";

const Newsconponent = (props) => {
    const [articles, setArticles] = useState([]);
    const [loading, setLoading] = useState(true);
    const [page, setPage] = useState(1);
    const [totalResults, setTotalResults] = useState(0);

    const updatenews = async() => {
        props.setProgress(10);
        const url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=2cb84850166646e3ae8305e0e36acfda&page=${page}&pageSize=${props.pageSize}`;
        setLoading(true);
        try {
            const response = await fetch(url);
            const data = await response.json();
            props.setProgress(40);
            setArticles(data.articles);
            setTotalResults(data.totalResults);
            setLoading(false);
            props.setProgress(100);
        } catch (error) {
            console.error("Error fetching news:", error);
            setLoading(false);
        }
    };

    useEffect(() => {
        updatenews();
    }, []);

    const fetchMoreData = async() => {
        const nextPage = page + 1;
        const url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=2cb84850166646e3ae8305e0e36acfda&page=${nextPage}&pageSize=${props.pageSize}`;
        setPage(nextPage);

        try {
            const response = await fetch(url);
            const data = await response.json();
            setArticles([...articles, ...data.articles]);
            setTotalResults(data.totalResults);
        } catch (error) {
            console.error("Error fetching more news:", error);
        }
    };

    return ( <
        div className = "container my-4" >
        <
        h1 style = {
            {
                color: props.mode === "dark" ? "white" : "black",
                marginTop: "90px",
            }
        } >
        Rapid - News Todays top { props.category } { `  ` }
        headline { " " } <
        /h1>{" "} { loading && < Spinner / > } { " " } <
        InfiniteScroll dataLength = { articles.length }
        next = { fetchMoreData }
        hasMore = { articles.length !== totalResults }
        loader = { < Spinner / > } >
        <
        div className = "container" >
        <
        div className = "row my-4" > { " " } {
            articles.map((element) => ( <
                div className = "col-md-4 my-4 md-4"
                key = { element.url } >
                <
                NewsItem mode = { props.mode }
                title = { element.title ? element.title.slice(0, 55) : "" }
                description = {
                    element.description ? element.description.slice(0, 95) : ""
                }
                imageUrl = {
                    element.urlToImage ||
                    "https://media.loom-app.com/gizmodo/dist/images/2024/03/11/IMG_6107-1.jpg?w=1280&h=630&f=jpg"
                }
                newsUrl = { element.url }
                author = { element.author }
                time = { element.publishedAt }
                sources = { element.source.name }
                />{" "} <
                /div>
            ))
        } { " " } <
        /div>{" "} <
        /div>{" "} <
        /InfiniteScroll>{" "} <
        /div>
    );
};

Newsconponent.defaultProps = {
    country: "in",
    pageSize: 6,
};

Newsconponent.propTypes = {
    country: PropTypes.string,
    category: PropTypes.string.isRequired,
    mode: PropTypes.string.isRequired,
    pageSize: PropTypes.number,
    setProgress: PropTypes.func.isRequired,
};

export default Newsconponent;