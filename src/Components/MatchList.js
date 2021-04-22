import React from 'react'
import MatchCard from './MatchCard'
import { data } from '../api/data'


function MatchList() {
    return (
        <>
            <div className="container">
                <div className="row mt-5">
                    {data.map((ele, index) => {
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
