/* Next js imports React for us in files inside the pages directory...neat!*/

import Items from '../components/Items'

const Home = props => {
    return (
        <>
            <Items page={parseFloat(props.query.page) || 1} />
        </>
    )
}

export default Home;