
import { IMG_CDN_URL } from "../Common/config";

const RestaurantCard = ({info,cloudinaryImageId,name,cuisines,locality }) =>{

    return(
        <div className="w-70 h-80 p-3 bg-pink-700 text-white border-solid border-2 border-black rounded-3xl">
                <img src={IMG_CDN_URL+cloudinaryImageId} className="w-full rounded-3xl mb-7"></img>
                <h4 className="text-xl">{name}</h4>
                <h6>{cuisines[0]+cuisines[1]}</h6>
                <p>{locality}</p>
                
        </div>

    );

};

export default RestaurantCard;