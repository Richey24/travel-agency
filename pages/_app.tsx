import "../styles/globals.css";
import type { AppProps } from "next/app";
import { Layout } from "../components/Layout/Layout";
import { theme } from "../theme";
import { ThemeProvider } from "@mui/material/styles";
import Head from "next/head";
import { Provider } from "react-redux";
import { store } from "../redux/store";
import { CacheProvider, EmotionCache } from "@emotion/react";
import createEmotionCache from "../utils/createEmtotionCache";
import CssBaseline from "@mui/material/CssBaseline";
import "../styles/bootstrap.css";
// import "bootstrap/dist/css/bootstrap.min.css"; // Import bootstrap CSS
import "../styles/animate.css";
import "../styles/select2.css";
import "../styles/style.css";
import "../styles/isotope.css";
import "../styles/touchTouch.css";
import "../styles/font-awesome.css";
import "mapbox-gl/dist/mapbox-gl.css";
// import "../styles/smoothness/jquery-ui-1.10.0.custom.css";
import "react-calendar/dist/Calendar.css";

const clientSideEmotionCache = createEmotionCache();

interface MyAppProps extends AppProps {
     emotionCache?: EmotionCache;
}

import { StylesProvider, createGenerateClassName } from "@mui/styles";
import { ReactNode, useEffect } from "react";
import Script from "next/script";
import { useRouter } from "next/router";

const generateClassName = createGenerateClassName({
     productionPrefix: "c",
});

export default function App({
     Component,
     pageProps,
     emotionCache = clientSideEmotionCache,
}: MyAppProps) {
     const router = useRouter();

     useEffect(() => {
          const script = document.createElement("script");
          script.src = "/loadedJs/script.js";
          script.async = true;
          document.body.appendChild(script);
     }, [router.asPath]);

     return (
          <ThemeProvider theme={theme}>
               <StylesProvider generateClassName={generateClassName} injectFirst>
                    <CacheProvider value={emotionCache}>
                         <Provider store={store}>
                              <Head>
                                   <title>Create Next App</title>
                                   <meta
                                        name="description"
                                        content="Generated by create next app"
                                   />
                                   <link rel="icon" href="/favicon.ico" />
                                   <meta charSet="utf-8" />
                                   <meta http-equiv="X-UA-Compatible" content="IE=edge"></meta>
                                   <meta
                                        name="viewport"
                                        content="width=device-width, initial-scale=1"
                                   />

                                   <script
                                        src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.6.4/jquery.js"
                                        integrity="sha512-6DC1eE3AWg1bgitkoaRM1lhY98PxbMIbhgYCGV107aZlyzzvaWCW1nJW2vDuYQm06hXrW0As6OGKcIaAVWnHJw=="
                                        crossOrigin="anonymous"
                                        referrerPolicy="no-referrer"
                                   ></script>
                                   {/* <script
                                        src="http://ajax.googleapis.com/ajax/libs/jquery/1.7.1/jquery.min.js"
                                        type="text/javascript"
                                   ></script> */}
                                   <script
                                        src="https://cdnjs.cloudflare.com/ajax/libs/jquery-easing/1.4.1/jquery.easing.min.js"
                                        integrity="sha512-0QbL0ph8Tc8g5bLhfVzSqxe9GERORsKhIn1IrpxDAgUsbBGz/V7iSav2zzW325XGd1OMLdL4UiqRJj702IeqnQ=="
                                        crossOrigin="anonymous"
                                        referrerPolicy="no-referrer"
                                   ></script>
                                   <script
                                        src="https://cdnjs.cloudflare.com/ajax/libs/bootstrap/5.2.3/js/bootstrap.min.js"
                                        integrity="sha512-1/RvZTcCDEUjY/CypiMz+iqqtaoQfAITmNSJY17Myp4Ms5mdxPS5UV7iOfdZoxcGhzFbOm6sntTKJppjvuhg4g=="
                                        crossOrigin="anonymous"
                                        referrerPolicy="no-referrer"
                                   ></script>
                                   <script
                                        src="https://cdnjs.cloudflare.com/ajax/libs/jquery-appear/0.1/jquery.appear.js"
                                        integrity="sha512-gmlF0Cjvx6n5XCLF9NNN+rZwS3X0Xn1vwuk+K0L3B4qve4UI+RVbNt0VynWadl//O0VQ8X47GH55KF9j3kVdUw=="
                                        crossOrigin="anonymous"
                                        referrerPolicy="no-referrer"
                                   ></script>
                                   <script
                                        src="https://cdn.jsdelivr.net/npm/jquery-ui@1.13.2/dist/jquery-ui.min.js"
                                        defer
                                   ></script>

                                   <script
                                        src="https://cdnjs.cloudflare.com/ajax/libs/smooth-scroll/16.1.3/smooth-scroll.js"
                                        integrity="sha512-vfE8OCUETP038fi2pHsLeJC/5xd48FyLsATJLulbdsCRBXgRWxA+0K9he4GClcPjT24vMJk1mFMFbjYS9J7NpA=="
                                        crossOrigin="anonymous"
                                        referrerPolicy="no-referrer"
                                   ></script>
                                   <script
                                        src="https://cdnjs.cloudflare.com/ajax/libs/jquery.touchswipe/1.6.19/jquery.touchSwipe.min.js"
                                        integrity="sha512-YYiD5ZhmJ0GCdJvx6Xe6HzHqHvMpJEPomXwPbsgcpMFPW+mQEeVBU6l9n+2Y+naq+CLbujk91vHyN18q6/RSYw=="
                                        crossOrigin="anonymous"
                                        referrerPolicy="no-referrer"
                                   ></script>
                                   <script
                                        src="https://cdnjs.cloudflare.com/ajax/libs/jquery.caroufredsel/6.2.1/jquery.carouFredSel.packed.js"
                                        integrity="sha512-5Thlno/Mv5W8d5z7eEuOahEZ3nXZ0uAuOgf8m7p7+/9Ltkzt9sn9z6sR87m/9bqW9vqpywUq65YeNW0MuzW9Bw=="
                                        crossOrigin="anonymous"
                                        referrerPolicy="no-referrer"
                                   ></script>
                                   <script
                                        src="https://cdnjs.cloudflare.com/ajax/libs/jquery-parallax/1.1.3/jquery-parallax-min.js"
                                        integrity="sha512-ES/eSqVi/9sgeZfvunOto+gwgFGrD/hzi5UOJFDR1Me8acKSBJIb2Gk0IyKje2ZaX+OovAG2/bRzj/uBcNeesg=="
                                        crossOrigin="anonymous"
                                        referrerPolicy="no-referrer"
                                   ></script>

                                   <script
                                        src="https://cdnjs.cloudflare.com/ajax/libs/jquery-migrate/3.4.1/jquery-migrate.js"
                                        integrity="sha512-FruHrHbK/kxrB8bV0sXKTaPazRf3Nz5gFVtdV0INaL+XZ6ehZtcuiGe8ZcJkvOcnPNBcJzZFAnkgdl7PmepNnA=="
                                        crossOrigin="anonymous"
                                        referrerPolicy="no-referrer"
                                   ></script>
                              </Head>
                              <CssBaseline />
                              <Layout>
                                   <Component {...pageProps} />
                                   {/* <Script src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/js/bootstrap.bundle.min.js" /> */}
                                   {/* <Script
                                        src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.6.4/jquery.js"
                                        integrity="sha512-6DC1eE3AWg1bgitkoaRM1lhY98PxbMIbhgYCGV107aZlyzzvaWCW1nJW2vDuYQm06hXrW0As6OGKcIaAVWnHJw=="
                                        crossOrigin="anonymous"
                                        referrerPolicy="no-referrer"
                                   ></Script> */}
                                   <Script
                                        src="/loadedJs/superfish.js"
                                        crossOrigin="anonymous"
                                   ></Script>
                                   <Script
                                        src="/loadedJs/jquery.ui.totop.js"
                                        crossOrigin="anonymous"
                                        defer
                                   ></Script>
                                   <Script
                                        src="https://kit.fontawesome.com/e20sdfsd9.js"
                                        crossOrigin="anonymous"
                                        defer
                                   ></Script>
                                   <Script
                                        src="/loadedJs/script.js"
                                        crossOrigin="anonymous"
                                   ></Script>{" "}
                                   <Script
                                        src="/loadedJs/select2.js"
                                        crossOrigin="anonymous"
                                        defer
                                   ></Script>{" "}
                                   {router.asPath === "/gallery" && (
                                        <>
                                             <Script
                                                  src="/loadedJs/touchTouch.jquery.js"
                                                  crossOrigin="anonymous"
                                                  defer
                                             ></Script>
                                             <Script
                                                  src="/loadedJs/isotope.pkgd.min.js"
                                                  crossOrigin="anonymous"
                                                  defer
                                             ></Script>{" "}
                                             <Script
                                                  src="/loadedJs/imagesloaded.pkgd.js"
                                                  crossOrigin="anonymous"
                                                  defer
                                             ></Script>
                                        </>
                                   )}
                              </Layout>
                         </Provider>
                    </CacheProvider>
               </StylesProvider>
          </ThemeProvider>
     );
}
