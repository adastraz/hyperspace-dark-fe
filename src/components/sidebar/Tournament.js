import React, { useState, useEffect } from 'react'
import { Button, 
    Modal, 
    ModalHeader, 
    ModalBody, 
    ModalFooter,
    DropdownItem
} from 'reactstrap'
import { connect } from 'react-redux'
import axiosWithAuth2 from '../../utils/axiosWithAuth2'

const Tournament = props => {
    const [modal, setModal] = useState(false)
    const toggle = () => setModal(!modal)
    const [games, setGames] = useState([])

    useEffect(() => {
        axiosWithAuth2()
            .get(`/api/viewgames/${props.tournament.id}`)
                .then(res => console.log(res))
    }, [])

    return (
        <div>
            <Button onClick={toggle}>
                <p>{props.tournament.name}</p>
                <p>{props.tournament.start_date}</p>
                <p>{props.tournament.start_time}</p>
                <p>{props.tournament.game}</p>
            </Button>
            <Modal isOpen={modal} toggle={toggle}>
                <ModalHeader>{props.tournament.name}</ModalHeader>
            </Modal>
        </div>
    )
}

export default Tournament