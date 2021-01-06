import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { connect } from 'react-redux'
import { useParams } from 'react-router-dom'
import { addItem } from '../../actions'

const Item = props => {
    const { id } = useParams()
    const [item, setitem] = useState({})
    const [quantity, setquantity] = useState(1)
    const [price, setprice] = useState(0)

    useEffect(() => {
        axios.get(`http://localhost:2400/api/shop/${id}`)
            .then(res => {
                setitem(res.data)
                // console.log(item.price.slice(-2, item.price.length))
                // console.log(item.price.splice(-2, 0, '.'))
                setprice(res.data.price * quantity)
            })
    }, [quantity])

    return (
        <div className='players'>
            <h1>{item.name}</h1>
            <p>${price}</p>
            <button onClick={() => quantity == 1 ? '' : setquantity(quantity-1)}>-</button>
            <p>{quantity}</p>
            <button onClick={() => setquantity(quantity+1)}>+</button>
            <button onClick={() => props.addItem(item, quantity)}>Add to Cart</button>
        </div>
    )
}

const mapStateToProps = state => {
    return {
        isLoading: state.isLoading,
        error: state.error,
        cart: state.cart
    }
}

export default connect(mapStateToProps, { addItem })(Item)