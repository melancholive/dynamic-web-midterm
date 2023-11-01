import '../app/globals.css';
import Header from "../app/components/Header.js";
import MangaCard from '../app/components/MangaCard.js';
import Data from '../app/components/data';
import VolumeCard from '../app/components/VolumeCard';
import styles from '../app/globals.css';

export async function getStaticProps({params}){
    const manga = (params && params.manga) || "44489";
    const res = await fetch (
        `https://api.jikan.moe/v4/manga/${manga}/full`
    );
    const mangaData = await res.json();
    
    return {
        props: {
            mangaData,
        },
    };
}

export const getStaticPaths = async () => {
    return {
        paths: [],
        fallback: true,
    };
};

export default function Home({mangaData}){
    console.log(mangaData);
    if(!mangaData) return null;

    const seriesData = Data.find((val) => val.id === mangaData.data.mal_id);

    return(
        <>
            <h1>⋆⁺｡˚⋆˙‧₊☽ Manga Information and Price Tracker ☾₊‧˙⋆˚｡⁺⋆</h1>
            <Header/>
            <main>
                
                <MangaCard
                    mangaTitle={mangaData.data.title_english}
                    mangaImage={mangaData.data.images.jpg.image_url}
                    mangaScore={mangaData.data.score}
                    numFavorites={mangaData.data.favorites}
                    completion={mangaData.data.status}
                    mangaSynopsis={mangaData.data.synopsis}
                    mangaBackground={mangaData.data.background}
                    
                />
                
                {seriesData.volumes.map((series) => 
                    <VolumeCard 
                    volumeNumber = {series.vol}
                    imgSrc = {series.image.url}
                    imgAlt = {series.image.alt}
                    currentPrice = {series.current_price}
                    currentSeller = {series.current_seller}
                    retailPrice = {series.retail_price}
                    historicLow = {series.historic_low}
                    historicSeller = {series.historic_seller}
                    historicDate = {series.historic_date}
                    volumeSynopsis = {series.synopsis}
                    publicationDate = {series.publication_date}
                    printLength = {series.print_length}
                    volumeISBN = {series.isbn}
                    />
                    )}      
              
            </main>
        </>
    );
}