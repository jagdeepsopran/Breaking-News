import React from 'react'
import { useParams } from 'react-router-dom'
import './src/component/individual/News.css'
const News = ({ data }) => {
    let { index } = useParams();
    return (
        <>
            <div id='newsMain' key={index}>
                <div id="newsContent">
                    <h1>{data.articles[index].author}</h1>
                    <p>{data.articles[index].content}</p>
                </div>
                <img id='img' src={data.articles[index].urlToImage} alt="" />
            </div>
        </>
    )
}

export default News