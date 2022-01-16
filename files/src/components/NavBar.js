import { Button } from 'bootstrap';
import React from 'react';
import { useSelector } from 'react-redux'

export const NavBar = () => {
    const money = useSelector()
    return (
        <div className='nav'>
            <Button>Market</Button>
            <Button>Garden</Button>
            <Button>Storage</Button>
        </div>
    )
}