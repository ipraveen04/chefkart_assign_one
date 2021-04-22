import React from 'react'

function MatchCard(props) {
    return (
        <>
            <div className=" col-11 col-md-10 col-sm-8  offset-md-1 card border border-white">
                <ul className="">
                    <li className="text">
                        <img className="" src={props.gea_img} alt="" />
                        {props.gea}
                    </li>
                    <li className="text">{props.date}</li>
                    <li className="text">
                        <img className="" src={props.img} alt="" />
                        {props.text}
                    </li>
                    <li className="text">{props.vs}</li>
                    <li className="text border-bottoms">
                        {props.na}
                        <img className="logo" src={props.logo} alt="logo" />
                    </li>
                    <li className="text">{props.det}</li>
                </ul>
            </div>

        </>
    )
}

export default MatchCard;
