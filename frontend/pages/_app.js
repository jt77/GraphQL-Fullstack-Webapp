/*
Next.js will take this component and wrap all other
pages into it allowing you to use globals like global state on global content
 */

import App, {Container} from 'next/app'
import Page from '../components/Page'
import {ApolloProvider} from 'react-apollo'
import withData from '../lib/withData'

class MyApp extends App {

    // this lifecycle method runs before the component renders
    static async getInitialProps({Component, ctx}) {
        let pageProps = {}

        if (Component.getInitialProps) {
            pageProps = await Component.getInitialProps(ctx)
        }

        // this exposes the query to the user
        pageProps.query = ctx.query

        // this returns pageProps to the component through its props
        return {pageProps}
    }

    render() {
        // Component is injected by Next.js
        // into this component as a prop
        const { Component, apollo, pageProps } = this.props

        return (
            <Container>
                <ApolloProvider client={apollo}>
                    <Page>
                        <Component {...pageProps} />
                    </Page>
                </ApolloProvider>
            </Container>
        )
    }
}

export default withData(MyApp)