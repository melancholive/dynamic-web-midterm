"use-client"
import styles from "./MangaCard.module.css";

const MangaCard = ({mangaTitle, mangaImage, mangaScore, numFavorites, completion, mangaSynopsis, mangaBackground}) => (
    <>
        <div className={styles.mangaCardWrapper}>
            <div>
                <img src={mangaImage} alt="manga image"/>
            </div>
            <div className={styles.mangaInfoWrapper}>
                <div className={styles.horizontal}>
                    <h2 className={styles.titleText}>{mangaTitle}</h2>
                    <div>
                        <p>Score: {mangaScore}</p>
                    </div>
                    <div>
                        <p>Favorites: {numFavorites}</p>
                    </div>
                    <div>
                        <p>Status: {completion}</p>
                    </div>
                </div>
                <p>{mangaSynopsis}</p>
                <p>{mangaBackground}</p>
            </div>
        </div>
    </>
);

export default MangaCard;