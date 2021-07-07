import React from "react";

const NewsList = ({ news }) => {
    return (
        <div>
            {news.map((data) => {
                return <p>{news.title}</p>;
            })}
        </div>
    );
};

export default NewsList;