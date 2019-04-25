import React, {Component} from 'react'
import {Mutation} from 'react-apollo'
import gql from 'graphql-tag'

import {ALL_ITEMS_QUERY} from "./Items";


const DELETE_ITEM_MUTATION = gql`
    mutation DELETE_ITEM_MUTATION($id: ID!) {
        deleteItem(id: $id) {
            id
        }
    }
`

class DeleteItem extends Component {

    // whenever the DELETE_ITEM_MUTATION mutation below is run
    // this function gets passed an instance of the local apollo cache
    // that we can query to get its current list of data
    update = (cache, payload) => {

        // manually update cache on client so that it matches on server
        // and the ui gets updated to show the latest list of items

        // read the cache for the items we want
        const data = cache.readQuery({query: ALL_ITEMS_QUERY})

        // filter the deleted item out of the page
        data.items = data.items.filter(item => {
            return item.id !== payload.data.deleteItem.id
        })

        // put the items back in to the cache
        cache.writeQuery({query: ALL_ITEMS_QUERY, data})
    }

    render() {
        return (
            <Mutation
                mutation={DELETE_ITEM_MUTATION}
                variables={{id: this.props.id}}
                update={this.update}
            >
                {(deleteItem, {error}) => {
                    return <button onClick={() => {
                               if(confirm('Are you sure you want to delete this item?')) {
                                   deleteItem()
                               }
                            }}>
                                {this.props.children}
                            </button>
                }}
            </Mutation>
        )
    }
}

export default DeleteItem