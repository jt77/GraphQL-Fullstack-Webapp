import React, {Component} from 'react';
import {Mutation} from 'react-apollo'
import gql from 'graphql-tag'
import Router from 'next/router'

import Form from './styles/Form'
import formatMoney from '../lib/formatMoney'
import Error from './ErrorMessage'


export const CREATE_ITEM_MUTATION = gql`
    mutation CREATE_ITEM_MUTATION(
        $title: String!
        $description: String!
        $price: Int!
        $image: String
        $largeImage: String
    ) {
        createItem(
            title: $title
            description: $description
            price: $price
            image: $image
            largeImage: $largeImage
        ) {
            id
        }
    }
`


class CreateItem extends Component {

    state = {
        title: 'Cool shoes',
        description: '',
        price: 0,
        image: '',
        largeImage: '',
    }

    handleChange = (e) => {
        const {name, type, value} = e.target
        const val = type === 'number' ? parseFloat(value) : value
        this.setState(
            {
                [name]: val
            }
        )
    }

    /**
     *
     * @param e
     * @returns {Promise<void>}
     * @TODO: Create a cloudiary account for this to work.
     * This handles the image upload form field.
     * A cloudinary account is required.
     */
    uploadFile = async e => {
        const files = e.target.files
        const data = new FormData()
        data.append('file', files[0])

        // required by the cloudinary service
        data.append('upload_presets', 'sickfits')

        // calling the cloudinary api - an account is required
        // const res = await fetch('https://api.cloudiary.com/v1_1/...',
        //     {
        //         method: 'POST',
        //         body: data
        //     }
        // )

        // const file = await res.json()

        this.setState({
            // putting the file url data in our state
            // these properties on the data object come
            // from the cloudinary service
            //image: file.secure_url,
            //largeImage: file.eager[0].secure_url
            image: `./static/shoes/${files[0].name}`,
            largeImage: `./static/shoes/${files[0].name}`
        })
    }

    render() {
        return (
            /**
             * This Mutation component allows its child components to send and receive
             * data from the graphql mutation query defined above. The data sent to the
             * query is defined by the variables prop and the mutation name and response
             * from the query asyncronous call is sent back and to the Mutation component's
             * child component which is a function or render function.
             */
            <Mutation mutation={CREATE_ITEM_MUTATION} variables={this.state}>
                {
                    /**
                     * The parameters are passed by the parent Mutation component
                     */
                    (createItem, {loading, error}) => {
                        return (
                            <Form onSubmit={async e => {
                                e.preventDefault()
                                /**
                                 * call our graphql createItem mutation passed by the Mutation
                                 * parent component above and wait for the asyncronous response
                                 */
                                const res = await createItem()

                                /**
                                 * Redirect the user to the item page for the item
                                 * that we've just created using its id as a url query param
                                 */
                                Router.push({
                                    pathname: '/item',
                                    query: {id: res.data.createItem.id}
                                })
                            }}>
                                <Error error={error} />
                                <fieldset disabled={loading} aria-busy={loading}>
                                    <label htmlFor="file">
                                        Image
                                        <input
                                            type="file"
                                            id="file"
                                            name="file"
                                            placeholder="Upload an image"
                                            required
                                            // value={this.state.image}
                                            onChange={this.uploadFile}
                                        />
                                        {this.state.image && <img src={this.state.image} alt="Upload Preview" />}
                                    </label>
                                    <label htmlFor="title">
                                        Title
                                        <input
                                            type="text"
                                            id="title"
                                            name="title"
                                            placeholder="Title"
                                            required
                                            value={this.state.title}
                                            onChange={this.handleChange}
                                        />
                                    </label>
                                    <label htmlFor="price">
                                        Price
                                        <input
                                            type="number"
                                            id="price"
                                            name="price"
                                            placeholder="Price"
                                            required
                                            value={this.state.price}
                                            onChange={this.handleChange}
                                        />
                                    </label>
                                    <label htmlFor="description">
                                        Description
                                        <input
                                            id="description"
                                            name="description"
                                            placeholder="Enter a description"
                                            required
                                            value={this.state.description}
                                            onChange={this.handleChange}
                                        />
                                    </label>
                                    <button type="submit">Submit</button>
                                </fieldset>
                            </Form>
                        )
                    }
                }
            </Mutation>
        )
    }
}

export default CreateItem;