import React, { useState, useEffect } from "react";
import axios from "axios";
//import styled, { css } from "styled-components";
import PhotoCard from "./PhotoCard.js";

const API = 'https://api.nasa.gov/planetary/apod?api_key='
const key = 'fHIUx2XdFkPvBj1lZJgHDcSwhwyo7eeBiWJKs726'

export default function InfoList() {

    const [data, setData] = useState([]);

    useEffect(() => {
        axios.get(`${API}${key}`)
            .then(res => {
                console.log("Res from API:", res);
                setData(res.data)
            })
            .catch(err => {
                console.log("Error occured:", err);
            });
    }, [])


    return (
        <div className="everything">
            <PhotoCard
                key={data.hdurl}
                image={data.url}
                title={data.title}
                date={data.date}
                explanation={data.explanation}
            />
        </div>
    );



};