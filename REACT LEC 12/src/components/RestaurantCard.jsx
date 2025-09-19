
import { IMG_CDN_URL } from "../Common/config";

const RestaurantCard = ({info,cloudinaryImageId,name,cuisines,locality }) =>{

    return(
        <div className="cards">

                <img src={IMG_CDN_URL+cloudinaryImageId}></img>
                <h4>{name}</h4>
                <h6>{cuisines[0]+cuisines[1]}</h6>
                <p>{locality}</p>
                
        </div>

    );

};

export default RestaurantCard;