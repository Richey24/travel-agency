import * as React from "react";
import Document, { Html, Head, Main, NextScript } from "next/document";
import createEmotionServer from "@emotion/server/create-instance";
import createEmotionCache from "../utils/createEmtotionCache";

export default class MyDocument extends Document {
     render() {
          return (
               <Html lang="en">
                    <Head>
                         <link
                              rel="stylesheet"
                              href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap"
                         />
                         {/* <link
                              href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta1/dist/css/bootstrap.min.css"
                              rel="stylesheet"
                              integrity="sha384-giJF6kkoqNQ00vy+HMDP7azOuL0xtbfIcaT9wjKHr8RbDVddVHyTfAAsrekwKmP1"
                              crossOrigin="anonymous"
                         /> */}
                         <link
                              rel="stylesheet"
                              href="https://cdnjs.cloudflare.com/ajax/libs/jqueryui/1.10.0/css/smoothness/jquery-ui-1.10.0.custom.css"
                         ></link>
                         <link
                              rel="stylesheet"
                              href="https://use.fontawesome.com/releases/v5.15.4/css/solid.css"
                              integrity="sha384-Tv5i09RULyHKMwX0E8wJUqSOaXlyu3SQxORObAI08iUwIalMmN5L6AvlPX2LMoSE"
                              crossOrigin="anonymous"
                         />
                         <link
                              rel="stylesheet"
                              href="https://use.fontawesome.com/releases/v5.15.4/css/fontawesome.css"
                              integrity="sha384-jLKHWM3JRmfMU0A5x5AkjWkw/EYfGUAGagvnfryNV3F9VqM98XiIH7VBGVoxVSc7"
                              crossOrigin="anonymous"
                         />
                         <link
                              href="https://cdn.jsdelivr.net/npm/superfish@1.7.10/dist/css/superfish.min.css"
                              rel="stylesheet"
                         />
                         {/* <script
                              src="https://code.jquery.com/jquery-3.6.4.min.js"
                              integrity="sha256-oP6HI9z1XaZNBrJURtCoUT5SUnxFr8s3BzRl+cbzUq8="
                              crossOrigin="anonymous"
                         ></script> */}
                    </Head>
                    <body>
                         <Main />
                         <NextScript />
                    </body>
               </Html>
          );
     }
}

// `getInitialProps` belongs to `_document` (instead of `_app`),
// it's compatible with static-site generation (SSG).
MyDocument.getInitialProps = async (ctx) => {
     // Resolution order
     //
     // On the server:
     // 1. app.getInitialProps
     // 2. page.getInitialProps
     // 3. document.getInitialProps
     // 4. app.render
     // 5. page.render
     // 6. document.render
     //
     // On the server with error:
     // 1. document.getInitialProps
     // 2. app.render
     // 3. page.render
     // 4. document.render
     //
     // On the client
     // 1. app.getInitialProps
     // 2. page.getInitialProps
     // 3. app.render
     // 4. page.render

     const originalRenderPage = ctx.renderPage;

     // You can consider sharing the same emotion cache between all the SSR requests to speed up performance.
     // However, be aware that it can have global side effects.
     const cache = createEmotionCache();
     const { extractCriticalToChunks } = createEmotionServer(cache);

     /* eslint-disable */
     ctx.renderPage = () =>
          originalRenderPage({
               enhanceApp: (App: any) => (props) => <App emotionCache={cache} {...props} />,
          });
     /* eslint-enable */

     const initialProps = await Document.getInitialProps(ctx);
     // This is important. It prevents emotion to render invalid HTML.
     // See https://github.com/mui-org/material-ui/issues/26561#issuecomment-855286153
     const emotionStyles = extractCriticalToChunks(initialProps.html);
     const emotionStyleTags = emotionStyles.styles.map((style) => (
          <style
               data-emotion={`${style.key} ${style.ids.join(" ")}`}
               key={style.key}
               // eslint-disable-next-line react/no-danger
               dangerouslySetInnerHTML={{ __html: style.css }}
          />
     ));

     return {
          ...initialProps,
          // Styles fragment is rendered after the app and page rendering finish.
          styles: [...React.Children.toArray(initialProps.styles), ...emotionStyleTags],
     };
};
