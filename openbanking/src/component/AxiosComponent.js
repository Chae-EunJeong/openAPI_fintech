import axios from 'axios';
import React, { useState } from 'react'

const AxiosComponent = () => {
    const [data, setdata] = useState("init");
    const getData = () => {
        axios
            .get("https://naver.com")
            .then(function (response) {
                setdata(response.data);
                console.log(response);
            })
            .catch(function (error) {
                console.log(error);
            })
            .then(function () {

            });
    };

    return (
        <div>
            <button onClick={getData}>get</button>
            {data}
        </div>
    );
}

export default AxiosComponent
