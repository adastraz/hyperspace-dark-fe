import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { connect } from 'react-redux'
import { useParams, Link } from 'react-router-dom'
import { addItem, changeBal } from '../../actions'
import { Dropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap'

const Item = props => {
    const { id } = useParams()
    const [item, setitem] = useState({})
    const [quantity, setquantity] = useState(1)
    const [price, setprice] = useState(0)
    const [size, setsize] = useState('')
    const [details, setDetails] = useState({
        username: '',
        name: ''
    })
    const [dropdownOpen, setDropdownOpen] = useState(false)
    const toggle = () => setDropdownOpen(prevState => !prevState)

    useEffect(() => {
        axios.get(`http://localhost:2400/api/shop/${id}`)
            .then(res => {
                setitem(res.data)
                if (res.data.type == '0') {
                    setsize('S')
                }
            })
    }, [])

    useEffect(() => {
        switch (item.name) {
            case 'Hyperspace Dark Jersey':
                switch (size) {
                    case '2XL':
                        return setprice(42.99)
                    case '3XL':
                        return setprice(42.99)
                    case '4XL':
                        return setprice(44.99)
                    case '5XL':
                        return setprice(44.99)
                    default:
                        return setprice(35.99)
                }
            case 'Hyperspace Dark Hoodie': 
                switch (size) {
                    case '2XL':
                        return setprice(59.99)
                    case '3XL':
                        return setprice(59.99)
                    case '4XL':
                        return setprice(64.99)
                    case '5XL':
                        return setprice(64.99)
                    default:
                        return setprice(53.99)
                }
            default: 
                return 
        }
    }, [size])

    useEffect(() => {
        setitem({...item, price: price})
    }, [price])

    const addtocart = item => {
        props.addItem({ item, username: details.username, player_name: details.name, size: size }, quantity)
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
            <Link to='/store'>Store</Link>
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
                        <Dropdown isOpen={dropdownOpen} toggle={toggle}>
                            <DropdownToggle>
                                Size: {size}
                            </DropdownToggle>
                            <DropdownMenu>
                                <DropdownItem><p onClick={() => setsize('S')}>S</p></DropdownItem>
                                <DropdownItem><p onClick={() => setsize('M')}>M</p></DropdownItem>
                                <DropdownItem><p onClick={() => setsize('L')}>L</p></DropdownItem>
                                <DropdownItem><p onClick={() => setsize('XL')}>XL</p></DropdownItem>
                                <DropdownItem><p onClick={() => setsize('2XL')}>2XL</p></DropdownItem>
                                <DropdownItem><p onClick={() => setsize('3XL')}>3XL</p></DropdownItem>
                                <DropdownItem><p onClick={() => setsize('4XL')}>4XL</p></DropdownItem>
                                <DropdownItem><p onClick={() => setsize('5XL')}>5XL</p></DropdownItem>
                            </DropdownMenu>
                        </Dropdown>
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