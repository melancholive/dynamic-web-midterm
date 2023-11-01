"use client";
import styles from './volumeCard.module.css';

const VolumeCard = ({volumeNumber, imgSrc, imgAlt, currentPrice, currentSeller, retailPrice, historicLow, historicSeller, historicDate, volumeSynopsis, publicationDate, printLength, volumeISBN}) => {
    return(
        <div className={styles.volumeCardWrapper}>
            <div className={styles.volumeInfoWrapper}>
                
                <div className={styles.volumeImage}>
                    <img src={imgSrc} alt={imgAlt}></img>
                </div>
                
                <div>
                    <div>
                        <h3 className={styles.titleText}>{volumeNumber}</h3>
                        <p className={styles.otherText}>{volumeSynopsis}</p>
                    </div>

                    <div className={styles.horizontal}>
                        <div>
                            <h4>RETAIL PRICE</h4>
                            <p className={styles.priceText}>${retailPrice}</p>
                        </div>

                        <div>
                            <h4>CURRENT PRICE</h4>
                            <p className={styles.priceText}>${currentPrice}</p>
                            <p className={styles.priceInfo}>{currentSeller}</p>
                        </div>

                        <div>
                            <h4>HISTORIC PRICE</h4>
                            <p className={styles.priceText}>${historicLow}</p>
                            <p className={styles.priceInfo}>{historicDate} <br/> {historicSeller}</p>
                        </div>

                        <div>
                            <h6 className={styles.labelText}>PUBLICATION DATE</h6>
                            <p className={styles.otherText}>{publicationDate}</p>
                        </div>

                        <div>
                            <h6 className={styles.labelText}>PRINT LENTH</h6>
                            <p className={styles.otherText}>{printLength} pages</p>
                        </div>

                        <div>
                            <h6 className={styles.labelText}>ISBN-10</h6>
                            <p className={styles.otherText}>{volumeISBN}</p>
                        </div>
                    </div>

                    <div className={styles.horizontal}>
                        
                    </div>
                </div>
                
            </div>
        </div>
    )
}

export default VolumeCard;