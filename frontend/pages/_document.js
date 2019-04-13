/*
This file is used for server-side rendering. It does not render on the client.
This file is meant to allow the control of the rendering of the surrounding structure of
the page, like the html, head, body, etc. on the server.

In this use case, we want to inject the StyledComponents styles into the head
of the page before the page is served to the client.  Otherwise, the styles
have to get parsed and injected at run time and the user may see a flash of
unstyled content before the fully styled page is shown.

See https://github.com/zeit/next.js#custom-document for documentation on this file.
 */

import Document, { Head, Main, NextScript } from 'next/document';
import { ServerStyleSheet } from 'styled-components';

export default class MyDocument extends Document {
    static getInitialProps({ renderPage }) {
        const sheet = new ServerStyleSheet();
        const page = renderPage(App => props => sheet.collectStyles(<App {...props} />));
        const styleTags = sheet.getStyleElement();
        return { ...page, styleTags };
    }

    render() {
        return (
            <html>
            <Head>{this.props.styleTags}</Head>
            <body>
            <Main />
            <NextScript />
            </body>
            </html>
        );
    }
}
