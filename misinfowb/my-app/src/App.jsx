import "./style.css";
import Nav from './Nav';
import Backdrop from './Backdrop';
import Gallery from './Gallery';
import Footer from './Footer';

export default function App() {

    return (
        <>
            <Nav />
            <main>
                <body>
                    <Backdrop />
                    <Gallery />
                </body>
            </main>
            <Footer />
        </>

    );
};