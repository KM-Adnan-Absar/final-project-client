
import SectionTitle from "../../Components/SectionTitle";
import MenuItem from "../shared/MenuItem";
import UseMenu from "../../hooks/UseMenu";
const PopularMenu = () => {

const[menu] = UseMenu();
const popularItems = menu.filter (item => item.category === 'popular')

return (
        <div className="mb-16">
            <SectionTitle 
            heading={"FROM OUR MENU"}
            subHeading={"---Check it out---"}
     
            >

            </SectionTitle>
            <div className="grid md:grid-cols-2 gap-10">
                {
                   popularItems.map(item => <MenuItem 
                    key = {item._id}
                    item = {item}
                    ></MenuItem>)
                }
            </div>
        </div>
    );
};

export default PopularMenu;