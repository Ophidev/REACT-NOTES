
const ShimmerCard = ()=>{

    return(

                <div className="shimmer-card">
        
                       <div className="shimmer-img stroke animate" ></div>
                        <div className="shimmer-title stroke animate" ></div>
                       <div className="shimmer-tags stroke animate"></div>
                        <div className="shimmer-details stroke animate"></div>
                    
                        
                </div>

    );
}


const ShimmerUI = () =>{

    const shimmerCardArray = [];

    for(let i = 0; i<18; i++){

        shimmerCardArray.push(<ShimmerCard key={i}> </ShimmerCard>);
    }

    return(

        <div className="shimmer-container">

            {shimmerCardArray}
        </div>
    );

}

export default ShimmerUI;