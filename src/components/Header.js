import React,{useState} from 'react'
import styled from 'styled-components'
import {selectCars} from '../features/car/carSlice'
import {useSelector} from 'react-redux'

function Header() {
    const [burgerStatus,setBurgerStatus] = useState(false);
    const cars = useSelector(selectCars)
    return (
        <Container>
            <a href="/#">
                <img src="/images/logo.svg" alt="logo" />
            </a>
            <Menu>
                {
                    cars && cars.map((car,index)=>{
                        return (<a href="/#" key={index}>{car}</a>)
                    })
                }
            </Menu>
            <RightMenu>
                <a href="/#">shop</a>
                <a href="/#">Tesla Account</a>
                <button onClick={()=>{setBurgerStatus(!burgerStatus)}}><i class="fas fa-bars"></i></button>
            </RightMenu>
            <BurgerNav show={burgerStatus}>
                <CloseWrapper>
                   <button onClick={()=>{setBurgerStatus(!burgerStatus)}}> <i class="fa fa-times" aria-hidden="true"></i></button>
                </CloseWrapper>
                <li><a href="/#">Existing Inventory</a></li>
                <li><a href="/#">Used Inventory</a></li>
                <li><a href="/#">Trade-in</a></li>
                <li><a href="/#">Cyber Truck</a></li>
                <li><a href="/#">Roadster</a></li>
                <li><a href="/#">Semi</a></li>
                <li><a href="/#">Charging</a></li>
                <li><a href="/#">Existing Inventory</a></li>
                <li><a href="/#">Existing Inventory</a></li>
            </BurgerNav>
        </Container>
    )
}

export default Header


const Container = styled.div`
    display: flex;
    min-height: 60px;
    align-items: center;
    position: fixed;
    justify-content: space-between;
    padding:0 20px ;
    top: 0;
    left: 0;
    right: 0;
    z-index:1;
`
const Menu = styled.div`
    display: flex;
    align-items: center;
    flex: 1;
    justify-content: center;
    
    a{
        font-weight: 600;
        text-transform: uppercase;
        padding: 0 10px; //top and bottom 0 left and right 10
        flex-wrap: nowrap;
        color: #393c41;
    }

    @media(max-width:768px){
        display: none;
    }
`

const RightMenu = styled.div`
    display: flex;
    align-items: center;
    a{
        font-weight: 600;
        text-transform: uppercase;
        margin-right: 10px; //top and bottom 0 left and right 10
        flex-wrap: nowrap;
    }

`

const BurgerNav = styled.div`
    position: fixed;
    top:0;
    bottom: 0;
    right: 0;
    background-color: white;
    width: 300px;
    z-index:16;
    list-style: none; 
    padding :20px;
    display: flex;
    flex-direction: column; 
    text-align:start;
    transform: ${props => props.show ? 'translateX(0)' : 'translateX(100%)' };
    transition: transform 0.2s ease-in-out;
    li{
        padding: 15px 0;
        border-bottom: 1px solid rgba(0,0,0,.2); 
        a{
            font-weight: 600;
        }
    }
   
`

const CloseWrapper =styled.div`
    display: flex;
    justify-content: flex-end;
`