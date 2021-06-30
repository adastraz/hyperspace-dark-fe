import React, { useEffect, useState } from 'react' 
import { connect } from 'react-redux'
import axiosWithAuth2 from '../../utils/axiosWithAuth2'
import Twitch from '../../styles/imgs/icons8-twitch-64.png'
import { SidebarPost, PostButton, LikeDate } from '../../styles/Social'

const Games = props => {
  const [games, setGames] = useState([])
  const [addGameForm, setAddGameForm] = useState(false)
  const [newGame, setNewGame] = useState({
    tournamentid: '',
    opp_team: '',
    opp_teamimg: '',
    dateof: '',
    time: ''
  }) 
  const [twitchLink, setTwitchLink] = useState({ livestream_link: '' })

  useEffect(() => {
    axiosWithAuth2()
      .get(`/api/viewgames/${props.tournament.id}`)
          .then(res => {
            setGames(res.data)
          })
  }, [])

  const handleChanges = e => {
    e.preventDefault()
    setNewGame({
      ...newGame,
      [e.target.name]: e.target.value
    })
  }

  const handleChangesTwitch = e => {
    e.preventDefault()
    setTwitchLink({
      ...newGame,
      [e.target.name]: e.target.value
    })
  }

  const redirectFunc = link => {
    const win = window.open(link, '_blank')
    win.focus()
}

  return (
    <>
      {props.user.team === 'admin' ? <p onClick={setAddGameForm(!addGameForm)}>Add Game</p> : ''}
      {games.length > 0 ? games.map(game => (
        <SidebarPost key={game.id}>
          <div className='postssidebar'>
            <p>{game.opp_team}</p>
            <p>{game.dateof}</p>
            <p>{game.hd_score}</p>
            <p>{game.opp_team_score}</p>
            <p>{game.time}</p>
            <p>{game.status}</p>
            <img src={Twitch} onClick={() => redirectFunc(game.livestream_link)} />
            <p>{game.opp_teamimg}</p>
          </div>
        </SidebarPost>
      )) : <p>No games listed</p> }
  </>
  )
}


const mapStateToProps = state => {
  return{
    isLoading: state.isLoading,
    error: state.error,
    side: state.side,
    user: state.user
  }
}

export default connect(mapStateToProps, {  })(Games)