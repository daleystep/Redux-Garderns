import React from 'react'
import { useDispatch, useSelector } from 'react-redux';

const options = [
    {}
]

const MarketEntry = (props) => <div className='seed-card'>
    <div className='seed-name'>{props.name}</div>
    <img src={props.image} />
    <div className='seed-price'>{props.price}</div>
    <div className='seed-info'>{props.info}</div>
</div>

const SeedMarket = () => {
    return (
        <div className='marketPlace'>
            <div className='seed-selection'>
                {options.map(seed => <MarketEntry props={seed} />)}
            </div>

        </div>
    )
}

export default SeedMarket