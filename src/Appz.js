import React from 'react'
// import NavBar from './components/NavBar'
// import MainContent from './components/MainContent'
// import Footer from './components/Footer'

function Appz() {

    return(

        <div>
            <NavBar />
            <MainContent />
            <Footer />
        </div>

    )

}

function NavBar() {
    return(
        <nav>
            <p>Hello, I'm a NavBar</p>
        </nav>
    )
}

function MainContent() {

    return (
        <main>
            <p>This is the main content where I put the contents.</p>
        </main>
    )

}

function Footer() {

    return(
        <footer>
            <p>This is a footer.</p>
        </footer>
    )

}

export default Appz