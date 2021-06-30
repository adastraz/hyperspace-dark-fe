import React, { useEffect, useState } from 'react' 
import { connect } from 'react-redux'
import axiosWithAuth2 from '../../utils/axiosWithAuth2'
import Twitch from '../../styles/imgs/icons8-twitch-64.png'

const Games = props => {
  const [games, setGames] = useState([])

  useEffect(() => {
    axiosWithAuth2()
      .get(`/api/viewgames/${props.tournament.id}`)
          .then(res => {
            setGames(res.data)
          })
  }, [])

  const redirectFunc = link => {
    const win = window.open(link, '_blank')
    win.focus()
}

  return (
    <>
      {props.user.team === 'admin' ? <p>Add Game</p> : ''}
      {games.length > 0 ? games.map(game => (
        <div key={game.id}>
            <p>{game.opp_team}</p>
            <p>{game.dateof}</p>
            <p>{game.hd_score}</p>
            <p>{game.opp_team_score}</p>
            <p>{game.time}</p>
            <p>{game.status}</p>
            <img src={Twitch} onClick={() => redirectFunc(game.livestream_link)} />
            <p>{game.opp_teamimg}</p>
        </div>
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