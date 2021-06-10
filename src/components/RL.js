import React from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { PlayersDiv, Divider, Lineup, Lineup2 } from '../styles/Players'

const RL = () => {
    return (
        <PlayersDiv>
            <Divider>
                <h1 className='lineuptitle'>Dark</h1>
                <Lineup2>
                    <Link to='/player/Othos' className='name nav'>Othos</Link>
                    <Link to='/player/skyythegrandmaguy' className='name nav'>skyythegrandmaguy</Link>
                    <Link to='/player/De La Mora' className='name nav'>De La Mora</Link>
                </Lineup2>
            </Divider>
            <Divider>
                <h1 className='lineuptitle'>Light</h1>
                <Lineup2>
                    <Link to='/player/Sly' className='name nav'>Sly</Link>
                    <Link to='/player/FrugalPandy' className='name nav'>FrugalPandy</Link>
                    <Link to='/player/sciiar' className='name nav'>sciiar</Link>
                </Lineup2>
            </Divider>
        </PlayersDiv>
    )
}

const mapStateToProps = state => {
    return {
        isLoading: state.isLoading,
        error: state.error,
        user: state.user,
        posts: state.posts
    }
}

export default connect(mapStateToProps, {  })(RL)