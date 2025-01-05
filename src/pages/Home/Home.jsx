import Banner from "./Banner";
import Category from "./Category";
import PopularMenu from "./PopularMenu";
import Card from "./card";
import Featured from "./Featured";
import { Helmet } from "react-helmet-async";
const Home = () => {
    return (
        <div>
            <Helmet>
                <title>Bistro Boss | Home</title>
            </Helmet>
           <Banner></Banner>
           <Category></Category>
           <PopularMenu></PopularMenu>
           <Card></Card>
           <Featured></Featured>
        </div>
    );
};

export default Home;