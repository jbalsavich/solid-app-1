import Footer from '../components/Footer';
import NavBar from '../components/NavBar';
import styles from '../css/Home.module.css';

export default function Disclosure() {
    return(
        <div >
            <NavBar/>
            <div className={styles.content}>
            <h1>THIS IS ONLY A TEST WEBPAGE</h1>
            <p>
                "Knight Chess" is not a registered trademark of mine.
                <br/>
                <br/>
                I am also not affiliated in anyway with Chess.com, I just like their service.
                <br/>
                <br/>
                The names used in the History are also made up and are not real.
                <br/>
                <br/>
                Technologies used:
                <br/>
                Solid-JS
                <br/>
                HTML / CSS / Javascript
                <br/> 
                Github Pages (Hosting)
                <br/>
                
                </p>
                </div>
                </div>
    );
}