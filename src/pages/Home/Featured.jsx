import SectionTitle from "../../Components/SectionTitle";
import featureImage from '../../assets/home/featured.jpg';
const Featured = () => {
    return (
        <div>
            <SectionTitle
            heading="FROM OUR MENU"
            subHeading="---Check it out---">
<div>
    <div>
<img src= {featureImage} alt="" />
    </div>
    <div>
        <h3>March 20, 2023
WHERE CAN I GET SOME?
</h3>
     <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Error voluptate facere, deserunt dolores maiores quod nobis quas quasi. Eaque repellat recusandae ad laudantium tempore consequatur consequuntur omnis ullam maxime tenetur.</p>  
    </div>
    
</div>
            </SectionTitle>
        </div>
    );
};

export default Featured;