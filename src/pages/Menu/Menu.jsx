import { Helmet} from 'react-helmet-async';
import Cover from '../shared/Cover/Cover';
import menuImg from '../../assets/home/slide1.jpg'
import SectionTitle from '../../Components/SectionTitle';
import UseMenu from '../../hooks/UseMenu';
import MenuCategory from './MenuCategoty/MenuCategory';
import img from '../../assets/menu/dessert-bg.jpeg'
import img2 from '../../assets/menu/pizza-bg.jpg'
import img3 from '../../assets/menu/salad-bg.jpg'
import img4 from '../../assets/menu/soup-bg.jpg'
const Menu = () => {
    
    const [menu] = UseMenu()
    const dessert = menu.filter (item => item.category === 'dessert')
    const soup = menu.filter (item => item.category === 'soup')
    const pizza = menu.filter (item => item.category === 'pizza')
    const salad = menu.filter (item => item.category === 'salad')
    const offered = menu.filter (item => item.category === 'offered')
    return (
        <div>
            
            <Helmet>
        <title>Bistro Boss | Menu</title>
       
      </Helmet>
      <Cover img={menuImg} title={"Our Menu"}></Cover>
      <SectionTitle subHeading="Don't Miss" heading ="Today's Offer"></SectionTitle>
      <MenuCategory items={offered}></MenuCategory>
      {/* desserts menu  */}
      <MenuCategory 
      items={dessert}
      title="Dessert"
      img = {img}
      ></MenuCategory> 
{/* pizza menu  */}
<MenuCategory 
      items={pizza}
      title="Pizza"
      img = {img2}
      ></MenuCategory> 
{/* Salad Menu  */}
<MenuCategory 
      items={salad}
      title="Salad"
      img = {img3}
      ></MenuCategory> 
      {/* Salad Menu  */}
      <MenuCategory 
      items={soup}
      title="Soup"
      img = {img4}
      ></MenuCategory> 
        </div>
    );
};

export default Menu;