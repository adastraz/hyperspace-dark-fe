import React, { useState, useEffect } from 'react'
import { Button, 
    Modal, 
    ModalHeader
} from 'reactstrap'
import { connect } from 'react-redux'
import axiosWithAuth2 from '../../utils/axiosWithAuth2'
import Twitch from '../../styles/imgs/icons8-twitch-64.png'
import Games from './Games'
import { TournyButton, TournyHeader, OrgImg, TournyName } from '../../styles/Tournament'
import { SidebarPost, PostButton, LikeDate } from '../../styles/Social'

const Tournament = props => {
    const [modal, setModal] = useState(false)
    const [tournament, setTournament] = useState({})
    const toggle = () => setModal(!modal)

    useEffect(() => {
        axiosWithAuth2()
            .get(`/api/viewtournaments/${props.tournament.id}`)
                .then(res => setTournament(res.data))
        }, [])

    const redirectFunc = link => {
        const win = window.open(link, '_blank')
        win.focus()
    }

    return (
        <SidebarPost key={props.tournament.id}>
            <div className='postssidebar'>
                <TournyButton onClick={toggle}>
                    <TournyHeader>
                        <TournyName>{props.tournament.name}</TournyName>
                        {props.tournament.img.length > 10 ? <OrgImg className='twitch' src={props.tournament.img} alt='Logo of tournament organizer.' /> : ''}
                    </TournyHeader>
                    <p>{props.tournament.start_date}</p>
                    <p>{props.tournament.start_time}</p>
                    <p>{props.tournament.game}</p>
                </TournyButton>
                <Modal isOpen={modal} toggle={toggle}>
                    <ModalHeader>
                        <h1>{props.tournament.name}</h1>
                        <div>
                            <p>{props.tournament.start_date}</p>
                            <p>{props.tournament.start_time}</p>
                        </div>
                        {props.tournament.livestream_link.length > 10 ? <img src={Twitch} onClick={() => redirectFunc(props.tournament.livestream_link)} alt='Twitch.tv logo' /> : ''}
                    </ModalHeader>
                    
                    <Games tournament={tournament} />
                </Modal>
            </div>
        </SidebarPost>
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

export default connect(mapStateToProps, {  })(Tournament)