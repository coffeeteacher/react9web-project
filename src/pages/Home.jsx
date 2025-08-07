import React, { useEffect, useState } from 'react'
import Search from "../components/Search"
import Picture from "../components/Picture"


const Home = () => {
    const [input, setInput] = useState('');
    const [data, setData] = useState(null);
    const [page, setPage] = useState(1);    //頁數
    const [curSearch, setCurSearch] = useState('');//目前查詢的內容
    // https://www.pexels.com/zh-tw/
    const auth = "kFjKBQxGcnUnMB3b4nKfrZpDiG8aUxxmhX6Ia9QGkouRr7UIlOpHwLZQ";
    const intialURL = "https://api.pexels.com/v1/curated?page=1&per_page=15";
    const searchURL = `https://api.pexels.com/v1/search?query=${curSearch}&per_page=15&page=1`;

    // 取得pexels圖庫的api
    const search = async (url) => {
        setPage(2);
        const dataFetch = await fetch(url, {
            method: "GET",
            headers: {
                Accept: "application/json",
                Authorization: auth,
            },
        });
        const photosData = await dataFetch.json();
        setData(photosData.photos);
        // console.log(photosData);        
    };

    // 取得更多圖片
    const morePic = async () => {
        let newURL;
        if (curSearch === "") {
            newURL = `https://api.pexels.com/v1/curated?page=${page}&per_page=15`;
        } else {
            newURL = `https://api.pexels.com/v1/search?query=${curSearch}&per_page=15&page=${page}`;
        }
        setPage(page + 1);
        // 取資料
        const dataFetch = await fetch(newURL, {
            method: "GET",
            headers: {
                Accept: "application/json",
                Authorization: auth,
            },
        });
        const photosData = await dataFetch.json();
        // 串接陣列資料concat()
        setData(data.concat(photosData.photos));
        // console.log(photosData);
    }

    // 網頁一進來就呼叫search函式
    useEffect(() => {
        search(intialURL);
    }, []);

    // curSearch異動時，重新取得圖片
    useEffect(() => {
        if(curSearch===""){
            search(intialURL)
        }else{
            search(searchURL);
        }
    }, [curSearch]);

    return (
        <div style={{ minHeight: '100vh' }}>
            <Search
                // 按下search按鈕時，將查詢關鍵字帶入searchURL後，執行search()
                search={() => {
                    setCurSearch(input);
                }}
                // 取得文字方塊內容
                setInput={setInput} />
            <div className="pictures">
                {data &&
                    data.map((d) => {
                        return <Picture data={d} key={d.id} />
                    })
                }
            </div>

            <div className="morePictures">
                <button onClick={morePic}>Load More</button>
            </div>
        </div>
    );
};

export default Home