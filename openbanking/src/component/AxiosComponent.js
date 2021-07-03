import axios from 'axios';
import React, { useState } from 'react'

const AxiosComponent = () => {
    const getData = () => {
        axios
            .get("https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=b88fcbf7801b48c3964eb5cc28f30e86")
            .then(function (response) {
                console.log(response);
            })
            .catch(function (error) {
                console.log(error);
            });
    };

    return (
        <div>
            <button onClick={getData}>get</button>
        </div>
    );
}

export default AxiosComponent
