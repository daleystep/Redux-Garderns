import React from 'react';
import { useSelector } from 'react-redux'

export const Money = () => {
    const money = useSelector()
    return (
        <div className='money-container'>Money: </div>
    )
}