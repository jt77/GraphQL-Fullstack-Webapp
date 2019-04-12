/*
Next.js will take this component and wrap all other
pages into it allowing you to use globals like global state on global content
 */

import App, {Container} from 'next/app'
import Page from '../components/Page'

class MyApp extends App {

    render() {
        // the child component is injected by Next.js
        // into this component as a prop
        const { Component } = this.props

        return (
            <Container>
                <Page>
                    <Component/>
                </Page>
            </Container>
        )
    }
}

export default MyApp