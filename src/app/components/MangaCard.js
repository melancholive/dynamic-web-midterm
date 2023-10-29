"use-client"
import styles from "./MangaCard.module.css";

const MangaCard = ({mangaTitle, mangaImage, mangaScore, numFavorites, completion, mangaSynopsis, mangaBackground}) => (
    <>
        <h2>{mangaTitle}</h2>
        <div className={styles.mangaCardWrapper}>
            <div>
                <img src={mangaImage} alt="manga image"/>
                <p>Score: {mangaScore}</p>
                <p>Favorites: {numFavorites}</p>
                <p>Status: {completion}</p>
            </div>
            <div className={styles.mangaInfoWrapper}>
                <h3>Synopsis</h3>
                <p>{mangaSynopsis}</p>
                <h3>Background</h3>
                <p>{mangaBackground}</p>
            </div>
        </div>
    </>
);

export default MangaCard;