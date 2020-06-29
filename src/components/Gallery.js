import React, { Component } from 'react'
import Gallery from 'react-photo-gallery'

export const PHOTO_SET = [
    {
        src : "https://i.ibb.co/h7vhQ4R/1.jpg",
        width: 4,
        height: 3
    },

    {
        src : "https://i.ibb.co/5YfcJnX/2.jpg",
        width: 3,
        height: 4
    },


    {
        src : "https://i.ibb.co/7gHPdW1/4.jpg",
        width: 4,
        height: 3
    },

    {
        src : "https://i.ibb.co/2ncj2qq/5.jpg",
        width: 4,
        height: 3
    },

    {
        src : "https://i.ibb.co/nm9gc5G/6.jpg",
        width: 4,
        height: 3
    },

    {
        src : "https://i.ibb.co/PDJqZMY/7.jpg",
        width: 4,
        height: 3
    },

    {
        src : "https://i.ibb.co/G0hkwc2/8.jpg",
        width: 4,
        height: 3
    },

    {
        src : "https://i.ibb.co/pKsWNyJ/9.jpg",
        width: 4,
        height: 3
    },

    {
        src : "https://i.ibb.co/rGDwjk4/10.jpg",
        width: 4,
        height: 3
    },


    {
        src : "https://i.ibb.co/DtNsxW9/11.jpg",
        width: 4,
        height: 3
    },

    {
        src : "https://i.ibb.co/C1fT28r/12.jpg",
        width: 4,
        height: 3
    },

    {
        src : "https://i.ibb.co/KycrPvB/13.jpg",
        width: 4,
        height: 3
    },

    {
        src : "https://i.ibb.co/XtqqgJZ/14.jpg",
        width: 4,
        height: 3
    },

    {
        src : "https://i.ibb.co/FJ5rtCY/15.jpg",
        width: 4,
        height: 3
    },
]

export default (props)=>{
    return(
        <div>
            <Gallery photos={PHOTO_SET} direction={"column"}></Gallery>

        </div>
    )
}
