import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import StorageSlot from './storageSlot/StorageSlot';

const Storage = () => {
    const storage = useSelector()
    return (
        <div className='storage'>
            {storage.map(item => <StorageSlot item={item} />)}
        </div>
    )
}

export default Storage