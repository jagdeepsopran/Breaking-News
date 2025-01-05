import React from 'react';
import { useNavigate } from 'react-router-dom';

const Home = ({ data }) => {
    const navigate = useNavigate();

    return (
        <>
            <div id='nav'>
                <img src="/logo.jpg" id='logo' alt="" />
                <h1 className='heading'>Breaking News</h1>
            </div>
            {data ? data.articles.map((article, index) => (
                article.urlToImage && ( // Only render if urlToImage is not null
                    <div id='main' key={index}>
                        <img id='home-img' src={article.urlToImage} alt="" />
                        <div id="content">
                            <h1>{article.author}</h1>
                            <p>{article.content}</p>
                            <button id='btn' onClick={() => navigate(`/news/${index}`)}>
                                See more
                            </button>
                        </div>
                    </div>
                )
            )) : null}
        </>
    );
};

export default Home;
