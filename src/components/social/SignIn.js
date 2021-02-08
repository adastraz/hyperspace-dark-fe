import React, { useState, useEffect } from 'react'
import { connect } from 'react-redux'
import { login, register, clearError, fetchUserLikes } from '../../actions'
import Loader from 'react-loader-spinner'
import Posts from './Posts.js'

const SignIn = props => {
    const [user, setUser] = useState({
        username: '',
        password: '',
        birthdate: ''
    })

    const [confirm, setConfirm] = useState({
        password: ''
    })
    const [signup, setSignup] = useState(false)
    const [length, setLength] = useState(false)
    const [number, setNumber] = useState(false)
    const [special, setSpecial] = useState(false)
    const [letter, setLetter] = useState(false)
    const [actLen, setActLen] = useState(0)
    const [unmatching, setUnmatching] = useState(true)

    const numbers = ['1','2','3','4','5','6','7','8','9']
    const specialCharacters = ['[','#','?','!','@','$','%','^','&','-',']']
    const letters = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z']

    const handleChanges = e => {
        setUser({
            ...user,
            [e.target.name]: e.target.value
        })
    }

    const handleChangesconfirm = e => {
        setConfirm({
            ...user,
            [e.target.name]: e.target.value
        })
    }

    const submitForm = e => {
        e.preventDefault()

        signup ? props.login(user) : props.register(user)
    }

    useEffect(() => {
        if (actLen > user.password.length && number == true || special == true) {
            setNumber(false)
            setSpecial(false)
            setLetter(false)
        } 
        setActLen(user.password.length)

        if (user.password.length > 7) {
            setLength(true)
        } else {
            setLength(false)
        }

        for(let i=0; i<user.password.length; i++){
            if (letters.includes(user.password[i])) {
                setLetter(true)
            } else if (((i+1) == user.password.length) && letter == false){
                setLetter(false)
            } 
        }

        for(let i=0; i<user.password.length; i++){
            if (numbers.includes(user.password[i])) {
                setNumber(true)
            } else if (((i+1) == user.password.length) && number == false){
                setNumber(false)
            } 
        }

        for(let i=0; i<user.password.length; i++){
            if (specialCharacters.includes(user.password[i])) {
                setSpecial(true)
            } else if (((i+1) == user.password.length) && special == false){
                setSpecial(false)
            } 
        }
        if (signup && user.password == confirm.password) {
            setUnmatching(true)
        } else{
            setUnmatching(false)
        }
    }, [user.password, confirm.password])

    return (
        <>
            {localStorage.getItem('token') == null ?
                <div className='signDiv'>
                    <form onSubmit={submitForm}>
                        <input 
                            className='signin'
                            id='username'
                            type='text'
                            name='username'
                            onChange={handleChanges}
                            value={user.username}
                            placeholder='Username'
                        />
                        <input 
                            className='signin'
                            id='password'
                            type='password'
                            name='password'
                            onChange={handleChanges}
                            value={user.password}
                            placeholder='Password'
                        />
                        {signup ?
                            <button type='submit' className='login'>Login</button> :
                            <>
                                <input 
                                    className='signin'
                                    id='password'
                                    type='password'
                                    name='password'
                                    onChange={handleChangesconfirm}
                                    value={confirm.password}
                                    placeholder='Confirm Password'
                                />
                                <input 
                                    id='birthdate'
                                    type='date'
                                    name='birthdate'
                                    onChange={handleChanges}
                                    value={user.birthdate}
                                    placeholder='Birthday'
                                />
                                {unmatching && length && number && special && letter ?
                                    <button type='submit'>Sign Up</button> :
                                    <a className='red'>Requirements not met</a>
                                }
                            </> 
                        }
                        {length ?
                            <p className='green'>Meets length requirement (8 char+)</p> : 
                            <p className='red'>Must be longer than 8 characters</p>
                        }
                        {number ?
                            <p className='green'>Has at least 1 number</p> : 
                            <p className='red'>Must have at least one number</p>
                        }
                        {special ?
                            <p className='green'>Has at least 1 special character</p> : 
                            <p className='red'>Must have at least one special character [#?!@$%^&-]</p>
                        }
                        {letter ?
                            <p className='green'>Has at least 1 letter</p> : 
                            <p className='red'>Must have at least one letter</p>
                        }
                        {!signup ?
                            unmatching ?
                                <p className='green'>passwords match</p> : 
                                <p className='red'>passwords do not match</p> :
                            ''
                        }
                        {props.error != null ? 
                            !signup ?
                                <p className='red'>Username may be taken</p> :
                                <p className='red'>Username or Password may be incorrect</p>
                            :
                            ''
                        }
                    </form>
                    {signup ? 
                        <p id='nav' className='nav'onClick={() => setSignup(!signup)}>Create Account</p> :
                        <p id='nav' className='nav' onClick={() => setSignup(!signup)}>Already have an Account</p>
                    }
                    {
                        props.isLoading ? 
                        <Loader type='Bars' /> :
                        ''
                    }
                </div> :
                <Posts />
            }
        </>
    )
}

const mapStateToProps = state => {
    return {
        isLoading: state.isLoading,
        error: state.error,
        user: state.user,
        // friends: state.friends,
        // users: state.users,
        posts: state.posts
    }
}

export default connect(mapStateToProps, { login, register, clearError, fetchUserLikes })(SignIn)