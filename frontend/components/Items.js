import React, {Component} from 'react'
import {Query} from 'react-apollo'
import gql from 'graphql-tag'
import styled from 'styled-components'
import Item from './Item'


export const ALL_ITEMS_QUERY = gql`
    query ALL_ITEMS_QUERY {
        items {
            id
            title
            price
            description
            image
            largeImage
        }
    }
`

const Center = styled.div`
    text-align: center
`

const ItemsList = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-gap: 60px;
    max-width: ${props => props.theme.maxWidth}
    margin: 0 auto;
`

export default class Items extends Component {
    render() {
        return (
            <Center>
                items
                {/*
                    The Query component takes the returned data from the query
                    and passes id down to its child component which must be a
                    function that receives the data as a parameter.
                 */}
                <Query query={ALL_ITEMS_QUERY}>
                    {
                        ({data, error, loading}) => {
                            if (loading) return <p>Loading...</p>
                            if (error) return <p>Error: {error.message}</p>
                            return (
                                <ItemsList>
                                    {data.items.map(item => {
                                        return <Item key={item.id} item={item} />
                                    })}
                                </ItemsList>
                            )
                        }
                    }
                </Query>
            </Center>
        )
    }
}