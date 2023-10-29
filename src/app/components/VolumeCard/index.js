"use client";
import styles from './volumeCard.module.css';
import Link from 'next/link';

const VolumeCard = ({volumeNumber, imgSrc, imgAlt, currentPrice, currentSeller, retailPrice, historicLow, historicSeller, historicDate, volumeSynopsis, publicationDate, printLength, volumeISBN}) => {
    return(
        <div>
            <h3>{volumeNumber}</h3>
            <img src={imgSrc} alt={imgAlt}></img>

            <h4>Retail Price</h4>
            <p>{retailPrice}</p>

            <h4>Current Price</h4>
            <p>Sold by {currentSeller} at ${currentPrice}</p>

            <h4>Historic Price</h4>
            <p>Sold on {historicDate} by {historicSeller} at ${historicLow}</p>

            <h5>Synposis</h5>
            <p>{volumeSynopsis}</p>

            <h6>Publication Date</h6>
            <p>{publicationDate}</p>

            <h6>Print Length</h6>
            <p>{printLength} pages</p>

            <h6>ISBN-10</h6>
            <p>{volumeISBN}</p>
        </div>
    )
}

export default VolumeCard;