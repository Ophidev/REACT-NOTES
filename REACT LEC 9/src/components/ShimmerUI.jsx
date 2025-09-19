
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

    // const shimmerCardArray = [];

    // for(let i = 0; i<18; i++){

    //     shimmerCardArray.push(<ShimmerCard key={i}> </ShimmerCard>);
    // }


    //or 



    return(
            <div className="shimmer-container">

            {Array(18).fill("").map((Elements,Index) =><ShimmerCard key={Index}/>)}
            {/*Array(18) -> array of 18, .fill("") -> fill with empty string, .map() => map function on every empty string */}
            </div>
    );

}

export default ShimmerUI;