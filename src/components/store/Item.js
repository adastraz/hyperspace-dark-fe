import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { connect } from 'react-redux'
import { useParams } from 'react-router-dom'
import { addItem, changeBal } from '../../actions'

const Item = props => {
    const { id } = useParams()
    const [item, setitem] = useState({})
    const [quantity, setquantity] = useState(1)
    const [price, setprice] = useState(0)
    const [details, setDetails] = useState({
        username: '',
        name: ''
    })

    useEffect(() => {
        axios.get(`http://localhost:2400/api/shop/${id}`)
            .then(res => {
                setitem(res.data)
                // console.log(item.price.slice(-2, item.price.length))
                // console.log(item.price.splice(-2, 0, '.'))
                setprice(res.data.price * quantity)
            })
    }, [quantity])

    const addtocart = item => {
        props.addItem({ item, username: details.username, player_name: details.name }, quantity)
        props.changeBal(price, '+')
    }

    const handleChanges = e => {
        setDetails({
            ...details,
            [e.target.name]: e.target.value
        })
    }
    const submitForm = e => {
        e.preventDefault()
        console.log(details)
    }

    return (
        <div className='storediv'>
            <h1>{item.name}</h1>
            <div className='players'>
                <p>${price}</p>
                <button onClick={() => quantity == 1 ? '' : setquantity(quantity-1)}>-</button>
                <p>{quantity}</p>
                <button onClick={() => setquantity(quantity+1)}>+</button>
                
            </div>
            <div className='players'>
                {item.type == '0' ?
                    <form onSubmit={submitForm}>
                    <input 
                        id='username'
                        type='text'
                        name='username'
                        onChange={handleChanges}
                        value={details.username}
                        placeholder='Username'
                    />
                    <input 
                        id='name'
                        type='text'
                        name='name'
                        onChange={handleChanges}
                        value={details.name}
                        placeholder='name'
                    />
                    <button type='submit' onClick={() => addtocart(item)}>Add to Cart</button>
                </form> : ''
                }
                
            </div>
        </div>
    )
}

const mapStateToProps = state => {
    return {
        isLoading: state.isLoading,
        error: state.error,
        cart: state.cart,
        bal: state.bal
    }
}

export default connect(mapStateToProps, { addItem, changeBal })(Item)