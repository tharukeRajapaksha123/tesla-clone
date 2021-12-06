import React from 'react'
import styled from 'styled-components';
import Section from './Section';
import Header from './Header'

function Home() {
    return (
        <Container>
            <Header/>
            <Section
                title="Model-S"
                description="Order Online for Touches Delivery"
                backgroundImg="model-s.jpg"
                leftBtnText="Custom Order"
                rightBtnText="Custom Inventory"
            />
            <Section
                title="Model-X"
                description="Order Online for Touches Delivery"
                backgroundImg="model-x.jpg"
                leftBtnText="Custom Order"
                rightBtnText="Custom Inventory"
            />
            <Section
                title="Lowest Cost Solar Panels in America"
                description="Money-back guarantee"
                backgroundImg="solar-panel.jpg"
                leftBtnText="Order Now"
                rightBtnText="Learn More.."
            />
            <Section
                title="Solor for New Roofs"
                description="Money-back guarantee"
                backgroundImg="solar-roof.jpg"
                leftBtnText="Order Now"
                rightBtnText="Learn More.."
            />
            <Section
                title="Accessories"
                description=""
                backgroundImg="accessories.jpg"
                leftBtnText="Shop Now"
            />
        </Container>
    )
}

export default Home

const Container = styled.div`
    height:100vh;

`