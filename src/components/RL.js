import React from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { PlayersDiv, Divider, Lineup2, PlayerContainer } from '../styles/Players'

const RL = () => {
    return (
        <PlayerContainer>
            <PlayersDiv>
                <Divider>
                    <h1 className='lineuptitle dark'>Dark</h1>
                    <Lineup2>
                        <Link to='/player/Othos' className='name nav'>Othos</Link>
                        <Link to='/player/skyythegrandmaguy' className='name nav'>skyythegrandmaguy</Link>
                        <Link to='/player/De La Mora' className='name nav'>De La Mora</Link>
                    </Lineup2>
                </Divider>
                    <Divider>
                        <h1 className='lineuptitle light'>Light</h1>
                        <Lineup2>
                            <Link to='/player/Sly' className='name nav'>ZildjianHenry</Link>
                            <Link to='/player/FrugalPandy' className='name nav'>FrugalPandy</Link>
                            <Link to='/player/sciiar' className='name nav'>sciiar</Link>
                            <Link to='/player/Haydes' className='name nav'>Haydes</Link>
                        </Lineup2>
                    </Divider>
            </PlayersDiv>
            <PlayersDiv>
                <Divider>
                    <h1 className='lineuptitle'>Extras</h1>
                    <Lineup2>
                        <Link to='' className='name nav'>Sly</Link>
                        <Link to='' className='name nav'>APAQ</Link>
                        <Link to='' className='name nav'>Maxime</Link>
                    </Lineup2>
                </Divider>
            </PlayersDiv>
            <PlayersDiv>
                <Divider>
                    <h1 className='lineuptitle'>Manager</h1>
                    <Lineup2>
                        <Link to='' className='name nav'>SquallOwl</Link>
                    </Lineup2>
                </Divider>
            </PlayersDiv>
        </PlayerContainer>
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