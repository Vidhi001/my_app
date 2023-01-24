import React from 'react';
import "./WatchCard.css"

export default function WatchCard(props) {
    let {index, isSelected, watch_img, setSelectedWatch} = props;
    return (
        <img
            src={watch_img.imageUrl}
            alt={watch_img.styleName}
            className={isSelected ? "selected" : 'not_selected'}
            onClick={() => {
                setSelectedWatch(index)
            }
            }/>
    );
}
