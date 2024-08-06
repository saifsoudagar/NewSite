import React from "react";

const Newsitem = (props) => {
    const { title, description, imageUrl, newsUrl, author, time, sources, mode } =
    props;
    return ( <
        div >
        <
        div className = { `card navbar-${props.mode} bg-${props.mode}` } >
        <
        span class = "position-absolute top-0  translate-middle badge rounded-pill "
        style = {
            {
                display: "flex",
                justifyContent: "flex-end",
                position: "absolute",
                left: 49,
                backgroundColor: mode === "dark" ? "#0033cc" : "red",
            }
        } >
        { " " } { sources } < span class = "visually-hidden" > < /span>{" "} <
        /span>{" "} <
        img src = { imageUrl }
        className = "card-img-top"
        alt = "..." / >
        <
        div className = "card-body"
        style = {
            { color: mode === "dark" ? "white" : "black" } } >
        <
        h5 className = "card-title"
        style = {
            { color: mode === "dark" ? "white" : "black" } } >
        { " " } { title }....... { " " } <
        /h5>{" "} <
        p className = "card-text"
        style = {
            { color: mode === "dark" ? "white" : "black" } } >
        { " " } { description }....... { " " } <
        /p>{" "} <
        p className = "card-text" >
        <
        small className = "text-muted" > { " " } { author ? `By ${author}` : "Unknown" } { " " } { new Date(time).toGMTString() } { " " } <
        /small>{" "} <
        /p>{" "} <
        a href = { newsUrl }
        target = "_blank"
        rel = "noreferrer"
        className = "btn btn-sm btn-info text-light" >
        Read more { " " } <
        /a>{" "} <
        /div>{" "} <
        /div>{" "} <
        /div>
    );
};
export default Newsitem;