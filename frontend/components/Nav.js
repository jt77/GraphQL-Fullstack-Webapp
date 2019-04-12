import Link from 'next/link'

const Nav = () => {
    return (
        <>
            <Link href="/">
                <a>Home</a>
            </Link>
            <br/>
            <Link href='/sell'>
                <a>Sell</a>
            </Link>
        </>
    )
}

export default Nav