import React, { useState, useEffect } from 'react'
import { Dropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap'
import { setNowlive, setSched, setSocial } from '../../actions'
import { connect } from 'react-redux'
import { SelectorTitle } from '../../styles/Sidebar'

const Selector = props => {
    const [dropdownOpen, setDropdownOpen] = useState(false)
    const toggle = () => setDropdownOpen(prevState => !prevState)
    const titles = ['Schedule', 'Social']

    return (
        <Dropdown isOpen={dropdownOpen} toggle={toggle}>
            <SelectorTitle>
                {props.title}
            </SelectorTitle>
            <DropdownMenu>
                {titles.map(name => (
                    <>
                        {name !== props.title ? 
                            <>
                                {name == 'Schedule' ?
                                    <DropdownItem onClick={() => props.setSched()}>{name}</DropdownItem> :
                                // name == 'Now-Live' ? 
                                //     <DropdownItem onClick={() => props.setNowlive()}>{name}</DropdownItem> :
                                    <DropdownItem onClick={() => props.setSocial()}>{name}</DropdownItem> 
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