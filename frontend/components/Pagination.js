import React, {Component} from 'react'
import gql from 'graphql-tag'
import {Query} from 'react-apollo'
import Head from 'next/head'
import Link from 'next/link'
import {perPage} from '../config'

import PaginationStyles from './styles/PaginationStyles'


const PAGINATION_QUERY = gql`
    query PAGINATION_QUERY {
        itemsConnection {
            aggregate {
                count
            }
        }
    }
`

const Pagination = props => (
            <Query query={PAGINATION_QUERY}>
                {({data, loading, error}) => {
                    if (loading) return <p>Loading...</p>
                    const count = data.itemsConnection.aggregate.count
                    const pages = Math.ceil(count / perPage)
                    const page = props.page
                    return <PaginationStyles>
                        {/*
                            The head component below can be inserted anywhere in your components
                            to customize the head of your pages on a per page basis/
                            The title here will be used instead of the global head title.
                        */}
                        <Head>
                            <title> Sick Fits! {page} of {pages}</title>
                        </Head>
                        <Link prefetch href={{pathname: 'items', query: {page: page - 1}}}>
                            <a className='prev' aria-disabled={page <= 1}>{`< Prev`}</a>
                        </Link>
                        <p>Page {page} of {pages}</p>
                        <p>{count} Items Total</p>
                        <Link prefetch href={{pathname: 'items', query: {page: page + 1}}}>
                            <a className='prev' aria-disabled={page >= pages}>{`Next >`}</a>
                        </Link>
                    </PaginationStyles>
                }}
            </Query>
    )

export default Pagination;