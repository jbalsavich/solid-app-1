import  Logo  from '../assets/Knight_Logo.svg';
import styles from '../css/NavBar.module.css';


export default function NavBar() {
  return (
    <div class={styles.navbar}>
   
        <a href="/">
    <img src={Logo} alt="Knight Logo" />
    </a>
    <ul>
        <li>
        <a href="/chess">New Game</a>    
        </li>
        <li>|</li>
        <li>
        <a href="/history">History</a>
        </li>
        <li>|</li>
        <li>
        <a href="/profile">Profile</a>    
        </li>
    </ul>
    </div>
  );
}
