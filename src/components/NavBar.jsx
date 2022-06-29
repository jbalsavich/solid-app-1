import { createSignal, Show } from 'solid-js';
import  Logo  from '../assets/Knight_Logo.svg';
import styles from '../css/NavBar.module.css';


export default function NavBar() {
  const [isOpen, setIsOpen] = createSignal(true);
  if(window.innerWidth < 768) {
    setIsOpen(false);
  }
  function logoClick() {
    if(window.innerWidth > 768) {
      window.location.href = '/';
      return;
    }
    setIsOpen(!isOpen());
  }

  return (
    <div class={styles.navbar}>
   
        
    <img src={Logo} onclick={function(){logoClick()}} alt="Knight Logo" />
    <Show when={isOpen()}>
    <ul>
        <li>
        <a href="/chess">New Game</a>    
        </li>
        <li class={styles.spacer}>|</li>
        <li>
        <a href="/history">History</a>
        </li>
        <li class={styles.spacer}>|</li>
        <li>
        <a href="/profile">Profile</a>    
        </li>
        <Show when={window.innerWidth < 768}>
        <li class={styles.spacer}>|</li>
        <li>
        <a href="/">Home</a>
        </li>
        
        </Show>
    </ul>
    </Show>
    <div class={styles.spacer}></div>
    </div>
  );
}
