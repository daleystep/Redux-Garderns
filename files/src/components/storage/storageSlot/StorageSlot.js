import React from 'react'
import { useDispatch, useSelector } from 'react-redux';

const marketPrice  = {

}

const StorageSlot = (props) => {
    return (
        <div className='storage-slot'>
            <div className='slot-name'>{props.name}</div>
            <div className='slot-info'>
                {props.quantity}
                {props.age}
                {marketPrice[props.name]}
                {props.additionalInfo}
            </div>
        </div>
    )
}

export default StorageSlot