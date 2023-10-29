import { useRouter } from "next/router";
import Data from '../../app/components/data';
import '../../app/globals.css';
import styles from '../page.module.css';

export default function Volume(){
    const router = useRouter();
    const slug = router.query.slug;

    const volumeData = Data.find((val) => val.id === slug);
    if(!volumeData) return null;

    // return(
    //     <main>
    //         <div>
    //             {volumeData.volumes.map((volumeInfo) => 
    //                 {return(
    //                     <h3>{volumeInfo.vol}</h3>,
    //                     <img src={volumeInfo.image.url} alt={volumeInfo.image.alt}></img>,
    //                     <h4>Current Price</h4>,
    //                 );
    //             })}
    //         </div>
    //     </main>
    // );
}