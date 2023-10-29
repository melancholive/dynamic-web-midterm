import '../app/globals.css';
import Header from "../app/components/Header.js";
import MangaCard from '../app/components/MangaCard.js';
import Data from '../app/components/data';
import VolumeCard from '../app/components/VolumeCard'

export async function getStaticProps({params}){
    const manga = (params && params.manga) || "24457";
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
    
    return(
        <>
            <h1>Manga Price Tracker</h1>
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
                {/* {Data.volumes.map((index) => 
                    <VolumeCard 
                        volumeNumber = {index.vol}
                        imgSrc = {index.image.url}
                        imgAlt = {index.image.alt}
                        currentPrice = {index.current_price}
                        currentSeller = {index.current_seller}
                        retailPrice = {index.retail_price}
                        historicLow = {index.historic_low}
                        historicSeller = {index.historic_seller}
                        historicDate = {index.historic_date}
                        volumeSynopsis = {index.synposis}
                        publicationDate = {index.publication_date}
                        printLength = {index.print_length}
                        volumeISBN = {index.isbn}
                    />
                )} */}
            </main>
        </>
    );
}