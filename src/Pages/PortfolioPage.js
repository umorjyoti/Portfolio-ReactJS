import React,{useState} from 'react';
import { MainLayout, InnerLayout } from '../styles/Layouts';
import Title from '../Components/Title';
import PortfolioData from '../Data/PortfolioData';
import Menu from '../Components/Menu';
import Button from '../Components/Button';


const allButtons=['All', ...new Set(PortfolioData.map(item => item.category))]


function PortfolioPage() {
    const [menuItems, setMenuItems] = useState(PortfolioData); 
    const [button, setButton] = useState(allButtons); 


    const filter = (button) => {
        if(button==='All'){
            setMenuItems(PortfolioData);
            return;
        }
        const filteredData = PortfolioData.filter((item => item.category === button));
        setMenuItems(filteredData);
    }
    return (
        <MainLayout>
            <Title title={"Portfolios"} span={'Portfolios'}/>
            <InnerLayout>
                <Button filter={filter} button={button}/>
                <Menu menuItem={menuItems} />
            </InnerLayout>
        </MainLayout>
    )
}

export default PortfolioPage;
