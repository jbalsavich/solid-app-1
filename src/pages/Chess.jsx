
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import styles from "../css/Chess.module.css";
export default function Chess() {
    return(
        <div>
            <NavBar/>
            <div class={styles.Chess}>
                <h1>Coming Soon</h1> 
                <p>
                    This is a placeholder for the chess game.
                    <br/>
                    It will be a full fledged game "soon".
                <br/>
                As I currently don't have a game to show. Please Check out 
                <a href="https://chess.com">Chess.com</a>
                </p>
                <p style="font-size:.7rem">We are not in any way affiliated with Chess.com or any of its partners. </p>
                
                
            </div>
            <Footer>
                
            </Footer>
        </div>

    );
}