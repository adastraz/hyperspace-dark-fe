import React from 'react'
import { Container, ContainerSmall } from '../../styles/Sidebar'
import Details from './Details'

const Sidebar = props => {

    return (
        <>  {props.small ?
                <ContainerSmall>
                    <Details />
                </ContainerSmall> :
                <Container>
                    <Details />
                </Container>
            }
        </>
    )
}


export default Sidebar
