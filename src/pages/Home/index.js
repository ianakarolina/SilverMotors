import React, { Component } from 'react';
import Header from "../../components/header"
import Main from "../../components/main"
import Footer from "../../components/footer"

class Home extends Component {
    render(){
        return(
            <>
                <Header />
                <Main />
                <Footer />
            </>
        )
    }

}

export default Home 