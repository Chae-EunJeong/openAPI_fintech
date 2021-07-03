import React, { useState } from 'react'
import Header from "../component/common/Header";
import Search from "../component/common/Search";
import NewsList from '../component/common/NewsList';
import axios from 'axios';

const NewsPage = () => {
    const [news, setnews] = useState([]);
    const [searchText, setSearchText] = useState([]);

    const handleChangeInput = (e) => {
        // serchText 변경하기
        const { value, name } = e.target;
        console.log(value);
        setSearchText(value);
    };
    const handleClickSearchButton = () => {
        // axios 요청 보내기
        let newsUrl = "https://newsapi.org/v2/top-headlines?sources=techcrunch&apiKey=b88fcbf7801b48c3964eb5cc28f30e86&language=en";
        axios.get(newsUrl).then((response) => {
            let resultNewsList = response.data.articles;
            setnews(resultNewsList);
        })
    };

    return (
        <div>
            {/* Header 컴포넌트 작성 */}
            <Header title='뉴스검색'></Header>
            {/* Search 컴포넌트 작성 */}
            <Search 
                handleChangeSearchInput={handleChangeInput}
                handleClickSearchButton={handleClickSearchButton}
            ></Search>
            {/* NewsList 컴포넌트 작성 */}
            <NewsList news={news}></NewsList>
        </div>
    );
};

export default NewsPage;
