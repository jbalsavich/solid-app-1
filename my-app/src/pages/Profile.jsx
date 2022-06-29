import NavBar from "../components/NavBar";
import ProfileLogo from "../assets/Knight_Logo.svg";
import styles from "../css/Profile.module.css";
import { useParams } from "solid-app-router";
import Footer from "../components/Footer";
export default function Profile() {

    const params = useParams() ? useParams() : {};
    return (
        <div>
            <NavBar/>
        <div class = {styles.Profile}>
            <img src={ProfileLogo} alt="Knight Logo" />
            <h1>{params.id ? params.id : "Profile Name"}</h1>
            <h3 class={styles.email}>@{params.id ? params.id.replace(" ","") : "Username"}</h3>
            <p>There are no registered users, nor is this connected to a database. However, you can add a database to this application in only  a few lines of code</p>
        </div>
        <Footer/>
        </div>
    );
    }