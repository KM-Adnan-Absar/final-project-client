import { useState } from 'react';
import orderImage from '../../assets/shop/banner2.jpg';
import Cover from '../shared/Cover/Cover';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import './Order.css'; 
import UseMenu from '../../hooks/UseMenu';
import OrderTab from './OrderTab/OrderTab';
import { useParams } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';

const Order = () => {

    const categories = ['salad','pizza','dessert','soop','drinks']
    const {category} = useParams();
    const initialIndex = categories.indexOf(category)
    const [tabs,setTabs] = useState(initialIndex );
 const [menu] = UseMenu();
 

    const dessert = menu.filter (item => item.category === 'dessert')
    const soup = menu.filter (item => item.category === 'soup')
    const pizza = menu.filter (item => item.category === 'pizza')
    const salad = menu.filter (item => item.category === 'salad')
    const drinks = menu.filter (item => item.category === 'drinks')

    return (
        <div>
               
                        <Helmet>
                    <title>Bistro Boss | Order Food</title>
                   
                  </Helmet>
            <Cover img={orderImage} title="Order Food"></Cover>
            <div className='mt-10 text-center'>
            <Tabs defaultIndex={tabs} onSelect={(index) => setTabs(index)}>
                <TabList>
                    <Tab>Salad</Tab>
                    <Tab>Pizza</Tab>
                    <Tab>Dessert</Tab>
                    <Tab>Soup</Tab>
                    <Tab>Drinks</Tab>
                </TabList>
                <TabPanel>
                   <OrderTab items={salad}></OrderTab>
                </TabPanel>
                <TabPanel> <OrderTab items={pizza}></OrderTab></TabPanel>
                <TabPanel> <OrderTab items={dessert}></OrderTab></TabPanel>
                <TabPanel> <OrderTab items={soup}></OrderTab></TabPanel>
                <TabPanel> <OrderTab items={drinks}></OrderTab></TabPanel>
            </Tabs>
            </div>
        </div>
    );
};

export default Order;
