import React from 'react';

const TitleCard = (props) => {
    return (
        <div className="qz-title">
            <div className="qz-title-index">
                <h2>
                    { 'Question ' + (props.no + 1)}
                </h2>
            </div>
            <div className="qz-title-text"> 
                {props.text}
            </div>
        </div>
    )
}

export default TitleCard;