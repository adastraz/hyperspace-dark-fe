import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'

const Store = () => {
    const [shopitems, setShopitems] = useState([])

    useEffect(() => {
        axios.get('http://localhost:2400/api/shop')
            .then(res => setShopitems(res.data))
    }, [])
    return (
        <div>
            {shopitems.map(item => (
                <div>
                    <Link to={`/store/${item.id}`}><img src={item.img} className='store' /></Link>
                    <p>{item.price}</p>
                </div>
            ))}
        </div>
    )
}

export default Store