import React from 'react'
import { Link } from 'react-router-dom'

import { Menu } from 'semantic-ui-react'

const Header = () => {
    return (
        <Menu>
            <Link to='/'>
                <Menu.Item>
                    TODO
                </Menu.Item>
            </Link>
            <Link to='/weather'>
                <Menu.Item>
                    Weather
                </Menu.Item>
            </Link >
        </Menu >
    )
}

export default Header