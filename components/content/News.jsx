import React, { useEffect, useState } from 'react';
import './News.css';

function News() {
    const [newsData, setNewsData] = useState([]);

    useEffect(() => {
        fetch('http://localhost:3000/news')
            .then(response => response.json())
            .then(data => setNewsData(data))
            .catch(error => console.error('Error fetching data:', error));
    }, []);

    return (
        <div className="news-section">
            <ul>
                {newsData.map((newsItem, index) => (
                    <li key={index}>
                        <h3>{newsItem.title}</h3>
                        <p>{newsItem.paragraph}</p>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default News;
