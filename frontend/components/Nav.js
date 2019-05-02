import Link from 'next/link'

import User from './User'

import NavStyles from './styles/NavStyles'

const Nav = () => {
    return (
        <NavStyles>
            <User>
                {({ data: {me} }) => {
                    console.log(me)
                    if (me) {
                        return me.name
                    } else {
                        return null
                    }
                }}
            </User>
            <Link href='/items'>
                <a>Shop</a>
            </Link>
            <Link href="/sell">
                <a>Sell</a>
            </Link>
            <Link href="/signup">
                <a>Signup</a>
            </Link>
            <Link href="/">
                <a>Orders</a>
            </Link>
            <Link href="/">
                <a>Account</a>
            </Link>
        </NavStyles>
    )
}

export default Nav