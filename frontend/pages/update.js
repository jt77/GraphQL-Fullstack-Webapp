import UpdateItem from '../components/UpdateItem'

/**
 *
 * @param props
 * the props for this and all pages in the pages directory
 * are passed down from the global parent page component "_app"
 * through the "Component" component wrapper...see _app.js
 */
const Sell = props => {
    return (
        <UpdateItem id={props.query.id} />
    )
}

export default Sell