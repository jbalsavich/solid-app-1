import Footer from '../components/Footer';
import NavBar from '../components/NavBar';
import styles from '../css/Home.module.css';

export default function Home() {
  return (
    <div class={styles.Home}>
    <NavBar />
    <div class={styles.content}>
        
        <h1>Welcome to Chess Knight</h1>
        <p>
            Chess Knight is a game where you play against a computer opponent.
            You can play as a white or black player.
        </p>
        <p>
            The game is played on a chess board.
            You can move your pieces around the board.
            You can capture pieces by moving them to the opponent's side of the board.
            You can also promote your pawns to other pieces.
            You can also castle your king and rooks.
            You can also checkmate your opponent.
        </p>
        </div>
        <Footer/>
    </div>
  );
}
