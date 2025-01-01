import { useEffect, useState } from "react";
import SectionTitle from "../../Components/SectionTitle";
import MenuItem from "../shared/MenuItem";
const PopularMenu = () => {
const [menu,setMenu] = useState([]);
    useEffect(()=>{
        fetch('menu.json')
        .then(res =>res.json())
        .then(data =>{
            const popularItems = data.filter (item => item.category === 'popular')
      setMenu(popularItems)
        })
    },[])
    return (
        <div className="mb-16">
            <SectionTitle 
            heading={"FROM OUR MENU"}
            subHeading={"---Check it out---"}
     
            >

            </SectionTitle>
            <div className="grid md:grid-cols-2 gap-10">
                {
                    menu.map(item => <MenuItem 
                    key = {item._id}
                    item = {item}
                    ></MenuItem>)
                }
            </div>
        </div>
    );
};

export default PopularMenu;