import { NavLink, useNavigate } from "react-router-dom";
import styles from "./Navbar.module.scss";

export function Navbar() {
  const navigate = useNavigate();

  // Navigates to other pages when clicked on a button in my navbar
  const handleUserIconClick = () => {
    navigate("/signup");
  };

  const opretAnnounce = () => {
    navigate("/announcements");
  };

  const backTostart = () => {
    navigate("/")

  }


  return (
    <nav className={styles.Navbar}>
      <div className={styles.NavContainer}>
        <div className={styles.Logo}>
          <h1 onClick={backTostart}>
            Den Grønne <span>Avis</span>
          </h1>
        </div>
        {/* Button with all my categories that I hard koded*/}
        <div className={styles.CategoryButton}>
          <select
            name="vælg kategori"
            id="categories"
            className={styles.DropDownMenu}
          > 
            <option value="">vælg kategori</option>
            <option value="Camping">Camping</option>
            <option value="Elektronik">Elektronik</option>
            <option value="Have og byg">Have og byg</option>
            <option value="Tøj og mode">Tøj og mode</option>
            <option value="Cykler">Cykler</option>
            <option value="Biler">Biler</option>
            <option value="Hobby">Hobby</option>
            <option value="Mobil og telefoni">Mobil og telefoni</option>
            <option value="Musik instrumenter">Musik instrumenter</option>
            <option value="Billede og lyd">Billede og lyd</option>
            <option value="Scootere og knallerter">Scootere og knallerter</option>
            <option value="Bøger og blade">Bøger og blade</option>
            <option value="Diverse">Diverse</option>
          </select>
          <NavLink to="/announcements" className={styles.NavLink}>
            <button onClick={opretAnnounce} className={styles.AnnounceButton}>opret annonce</button>
          </NavLink>
          <div className={styles.Icons}>
            <img src="src/assets/icons/Important Mail.svg" alt="mailIcon" />
            <img src="src/assets/icons/Info Squared.svg" alt="infoIcon" />
            <img onClick={handleUserIconClick} src="src/assets/icons/UserIcon.svg" alt="userIcon"  />
          </div>
        </div>
      </div>
    </nav>
  );
}