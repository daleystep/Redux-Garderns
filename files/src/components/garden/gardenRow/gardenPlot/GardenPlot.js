import React from 'react'
import { useDispatch, useSelector } from 'react-redux';

const cropImages = {

}

const GardenPlot = (props) => {
    return (
        <div className='garden-plot'>
            <image src={cropImages[props.crop]} />
        </div>
    )
}

export default GardenPlot