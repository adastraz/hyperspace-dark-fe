import React from 'react'
import { connect } from 'react-redux'
// import Background from '../styles/imgs/background.jpg'
import { Container, Title, Line, NewsBut, Head, PTag } from '../styles/Welcome'

const Welcome = () => {
    const redirectFunc = link => {
        const win = window.open(link, '_blank')
        win.focus()
    }

    return (
        <Container>
            <Title>News</Title>
    {/* /        <BGIMG src={Background} /> */}
            <NewsBut onClick={() =>redirectFunc('https://battlefy.com/hyperspace-dark/%5Bna%5D-galactic-conquest-tft-2-by-hyperspace-dark/60316f24c6bcf520475258bb/info?infoTab=details')} className='button type3'>
                <Head>[NA] Galactic Conquest TFT #2</Head>
                <Line />
                <PTag>Join us in our second ever TFT tournament! For more details, click here to be routed to our Battlefy link, we're looking forward to seeing what you guys have in the tank!</PTag>
            </NewsBut>
            <NewsBut onClick={() =>redirectFunc('https://linktr.ee/HyperspaceDark')} className='button type3'>
                <Head>Join us!</Head>
                <Line />
                <PTag>We are an up and coming esports organization. We have space in the Rocket Leauge and Valorant semi-professional scenes. Show us some love on our socials, we'd enjoy seeing you all there!</PTag>
            </NewsBut>
        </Container>
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

export default connect(mapStateToProps, {  })(Welcome)