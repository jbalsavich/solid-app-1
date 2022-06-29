import {createStore} from 'solid-js/store';
import styles from '../css/History.module.css';
import NavBar from "../components/NavBar";
import { Show } from 'solid-js';
import Footer from "../components/Footer";
export default function History() {
    const [previousGames,setPreviousGames] = createStore([
        {
            id: 1,
            white: "Jordan Baker",
            black: "Liam Baker",
            winner: "Jordan Baker",
            date: "2020-01-01"
        },
        {
            id: 2,
            white: "John Doe",
            black: "Jane Doe",
            winner: "Jane Doe",
            date: "2020-02-01"
        }
    ]);

    return(
        <div>
        <NavBar/>

        <div class={styles.History}>
           <For each={previousGames}>{
            previousGames =>
            <>
            <div class={styles.spacer}></div>
            <div><p>{previousGames.date}</p></div>
            <div class={styles.spacer}><p>|</p></div>
            
            <div class={styles.gameDetails}><p> <a style="color:white">{previousGames.white}</a> vs <a style="color:black">{previousGames.black}</a>
                    <br />
                    <Show when={previousGames.winner === previousGames.white}>
                        <a href={"/profile/" + previousGames.winner} style="color:white">{previousGames.winner} Won</a>
                    </Show>
                    <Show when={previousGames.winner === previousGames.black}>
                        <a href={"/profile/" + previousGames.winner} style="color:black">{previousGames.winner} Won</a>
                    </Show>
                    

                </p>
                
                </div></>

        }
        </For>
        </div>
        <Footer/>
        </div>
    );
}