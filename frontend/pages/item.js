/* Next js imports React for us in files inside the pages directory...neat!*/

import SingleItem from '../components/SingleItem'



const Item = props => {
    return (
        <>
            <SingleItem id={props.query.id} />
        </>
    )
}

export default Item;