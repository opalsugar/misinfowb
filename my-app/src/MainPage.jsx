import "./style.css";
import Gallery from './Gallery';
import Header from './Header';
import Footer from './Footer';

export default function MainPage() {


    return (
        <div className='main-content'>
            <div className='overlay'>
                <Header />
                <div className="header-about">
                    <h1>Welcome to the misinformation game directory!</h1>
                    <p>This collection of games includes interactive, research-based games designed to educate players on
                        misinformation and its impact on society. Through gamified, educational experiences, you will
                        develop critical thinking skills, learn to identify misinformation, and explore media and information
                        literacy strategies. Use this as a resource for education, or just to have fun while learning more about misinformation!</p>
                </div>
                <Gallery />
                <Footer />
            </div>
        </div>

    );
};