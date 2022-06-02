import React from 'react';
import '../styles/globals.css'
import 'antd/dist/antd.css'
import {MainWrapper} from "../components/MainWrapper";

function MyApp({Component, pageProps}) {


    return <MainWrapper> <Component {...pageProps} /></MainWrapper>
}

export default MyApp
