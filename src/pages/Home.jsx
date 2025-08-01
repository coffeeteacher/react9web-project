import React, { useState } from 'react'
import Search from "../components/Search"
import Picture from "../components/Picture"


const Home = () => {
    const [input, setInput] = useState('');
    const [data, setData] = useState(null);
    // https://www.pexels.com/zh-tw/
    const auth = "kFjKBQxGcnUnMB3b4nKfrZpDiG8aUxxmhX6Ia9QGkouRr7UIlOpHwLZQ";
    const intialURL = "https://api.pexels.com/v1/curated?page=1&per_page=15";

    const search = async () => {
        const dataFetch = await fetch(intialURL, {
            method: "GET",
            headers: {
                Accept: "application/json",
                Authorization: auth,
            },
        });
        const photosData = await dataFetch.json();
        setData(photosData.photos);
        console.log(photosData);
    };

    const searchURL = `https://api.pexels.com/v1/search?query=${input}&per_page=15&page=1`;
    return (
        <div style={{ minHeight: '100vh' }}>
            <Search search={search} />
            <div className="pictures">
                {data &&
                    data.map((d) => {
                        return <Picture data={d} key={d.id} />
                    })
                }
            </div>
        </div>
    );
};

export default Home