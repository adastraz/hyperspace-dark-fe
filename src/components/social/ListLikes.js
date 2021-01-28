import React, { useState, useEffect } from 'react'
import { Dropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap'
import axiosWithAuth2 from '../../utils/axiosWithAuth2'
import { getFollowing, followUsername, unfollowUsername } from '../../actions'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'

const ListLikes = props => {
    const [dropdownOpen, setDropdownOpen] = useState(false)
    const [likes, setLikes] = useState([])
    const toggle = () => setDropdownOpen(prevState => !prevState)

    useEffect(() => {
        axiosWithAuth2()
            .get(`/api/likes/${props.post.id}/post`)
                .then(res => {
                    setLikes(res.data)
                })
    },[])

    return (
        <Dropdown isOpen={dropdownOpen} toggle={toggle} id='listlikes'>
            <DropdownToggle id='listlikes' className='listlikes2'>
                Likes: {props.post.like_number}
            </DropdownToggle>
            <DropdownMenu>
                <DropdownItem header>Likes</DropdownItem>
                <DropdownItem divider />
                {likes.map(user => (
                    <>
                        {user.like_username == localStorage.getItem('name') ?
                            <Link 
                                to={`/profile/${props.user.id}`}
                                classname='likename'>
                                    {user.like_username}
                            </Link> :
                            <div classname='likeflex'>
                                <Link
                                    to={`/user/${user.user_id}`}
                                    classname='likename'>
                                        {user.like_username}
                                </Link>
                            </div>
                        }
                    </>
                ))}
            </DropdownMenu>
        </Dropdown>
    )
}

const mapStateToProps = state => {
    return {
        isLoading: state.isLoading,
        error: state.error,
        user: state.user,
        users: state.users,
        following: state.following,
    }
}

export default connect(mapStateToProps, { getFollowing, followUsername, unfollowUsername })(ListLikes)