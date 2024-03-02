import React from 'react';
import MyCard from './components/MyCard';

const PropHome = () => {

    let myObj = {
        degree: "MBA",
        place: "Balasore"
    };
    let myArr = ["MBA", " Balasore"]
    let urArr = ["MCA", " Balasore"]
    return (
        <>
            <h2 className='text-2xl font-bold'>Props(Properties) </h2>
            <MyCard  cardName = "TAPAN SAMAL" dp = {myObj} xyz = {myArr} btnText= "View Profile" />
            <MyCard  cardName = "Kumar Tapan"  xyz={urArr}/>

        </>
    );
};

export default PropHome;