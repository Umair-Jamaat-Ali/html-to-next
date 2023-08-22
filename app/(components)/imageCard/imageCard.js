
const ImageCard = (props) => {
    return (
        <div>
         <div class="facilities-col" style={{margin:"8px"}}>
                <img src={props.pic} alt="" />
                <h3>{props.title} </h3>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio omnis asperiores atque aperiam.
                </p>
            </div>  
        </div>
    );
}

export default ImageCard;
