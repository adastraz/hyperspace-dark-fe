import React, { useState, useEffect } from 'react'
import { Dropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap'
import { setNowlive, setSched, setSocial } from '../../actions'
import { connect } from 'react-redux'

const Selector = props => {
    const [dropdownOpen, setDropdownOpen] = useState(false)
    const toggle = () => setDropdownOpen(prevState => !prevState)
    const titles = ['Schedule', 'Now-Live', 'Social']

    return (
        <Dropdown isOpen={dropdownOpen} toggle={toggle}>
            <DropdownToggle>
                {props.title}
            </DropdownToggle>
            <DropdownMenu>
                {titles.map(name => (
                    <>
                        {name !== props.title ? 
                            <>
                                {name == 'Schedule' ?
                                    <p onClick={() => props.setSched()}>{name}</p> :
                                name == 'Now-Live' ? 
                                    <p onClick={() => props.setNowlive()}>{name}</p> :
                                    <p onClick={() => props.setSocial()}>{name}</p> 
                                }
                            </> :
                            <></>
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
        side: state.side
    }
}

export default connect(mapStateToProps, { setNowlive, setSched, setSocial })(Selector)