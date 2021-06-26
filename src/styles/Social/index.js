import styled from 'styled-components'
import { Modal, ModalHeader, Button } from 'reactstrap'

export const Post = styled(Modal)`
    border-radius: 2rem;
    padding: 2rem;
    background-color: black;
    border: double 7px mediumpurple;
`

export const PostContainer = styled.div`
    background-color: black;
    // border-left: solid yellow 5px;
    // border-bottom: solid yellow 5px
`

export const Header = styled(ModalHeader)`
    border: none
`

export const PostBody = styled.p`
    color: limegreen;
    font-size: 1rem;
    margin-bottom: 3rem;
`

export const PostDeets = styled.div`
    display: flex;
    justify-content: space-between
`

export const Clip = styled.div`
    display: flex;
    justify-content: center;
    width: 100%;
`

export const CloseHelper = styled.div`
    display: none;
    @media(max-width: 850px) {
        display: block;
        padding: 1rem;
    }
`

export const Unlike = styled.a`
    text-decoration: none;
    color: red;
    position: relative;
    cursor: pointer;
    :before{
        content: "";
        position: absolute;
        width: 100%;
        height: 2px;
        bottom: -1rem;
        left: 0;
        background-color: red;
        visibility: hidden;
        transform: scaleX(0);
        transition: all 0.3s ease-in-out;
    }
    :hover:before {
        visibility: visible;
        transform: scaleX(1);
    }
    :hover{
        text-decoration: none;
        underline: none;
        color: red
    }
`

export const Like = styled.a`
    text-decoration: none;
    color: blue;
    position: relative;
    cursor: pointer;
    :before{
        content: "";
        position: absolute;
        width: 100%;
        height: 2px;
        bottom: -1rem;
        left: 0;
        background-color: blue;
        visibility: hidden;
        transform: scaleX(0);
        transition: all 0.3s ease-in-out;
    }
    :hover:before {
        visibility: visible;
        transform: scaleX(1);
    }
    :hover{
        text-decoration: none;
        underline: none;
        color: blue
    }
`

export const SidebarPost = styled.div`
    min-height: 9rem;
    margin: 1.5rem auto;
    background: black;
    padding: 1rem 0 1rem 1rem;
    max-width: 95%;
    border-left: yellow 3px solid;
    border-bottom: yellow 3px solid;
    display: flex;
    justify-content: flex-start;
    align-items:space-around
`

export const CommentSection = styled(Button)`
    background-color: black;
    padding 1.5rem .5rem;
    color: limegreen;
    border: 5px solid black;
    border-radius: 1rem;
    width: 100%;
    :hover{
        border: 5px solid mediumpurple;
        border-radius: 1rem;
    }
`

export const SidebarPostPost = styled.p`
    margin-bottom: 1rem;
`

export const PostButton = styled.p`
    margin-top: 1rem;
    color: mediumpurple;
`