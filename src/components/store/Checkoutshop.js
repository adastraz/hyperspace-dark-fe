import React, { useEffect, useState } from 'react'
import { connect } from 'react-redux'

const Checkoutshop = props => {
    return (
        <div className='storediv'>
            {props.cart.map(item => (
                <div key={Date.now()} className='players'>
                    <h1>{item.item.name}</h1>
                    <p>{item.item.price}</p>
                    <p>{item.size}</p>
                    {item.username && item.player_name ? 
                    <>
                        <p>{item.username}</p>
                        <p>{item.player_name}</p>
                    </> : ''
                    }
                </div>
            ))}
            <h1>${props.bal}</h1>
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

export default connect(mapStateToProps, {})(Checkoutshop)