import React from 'react'
import "../css/pictures.css"

const Picture = ({ data }) => {
    return (
        <div className="picture">
            <p>{data.photographer}</p>
            <div className="imgContainer">
                <img src={data.src.large} alt="" />
            </div>
            <p>
                Download Image:{" "}
                <a target='_blank' href={data.src.large}>Click Here</a>
            </p>
        </div>
    )
}

export default Picture