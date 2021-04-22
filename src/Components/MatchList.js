import React, { useState, useEffect } from 'react'
import axios from 'axios'
import MatchCard from './MatchCard'
function MatchList() {
    const [match, setMatch] = useState([])

    const api = 'http://localhost:5050/data'
    const cardData = () => {
        axios.get(api)
            .then(res => {
                console.log(res.data);
                setMatch(res.data)
            })
            .catch(err => {
                console.log(err);
            })
    }

    useEffect(() => {
        cardData();
    }, [])
    return (
        <>
            <div className="container">
                <div className="row">
                    {match.map((ele, index) => {
                        return (

                            <MatchCard key={index}
                                gea={ele.gear}
                                gea_img={ele.gear_img}
                                date={ele.date_time}
                                img={ele.image}
                                text={ele.text}
                                vs={ele.vs}
                                na={ele.name}
                                logo={ele.logo_img}
                                det={ele.details}
                            />
                        )
                    })}
                </div>
            </div>
        </>
    )
}

export default MatchList;
