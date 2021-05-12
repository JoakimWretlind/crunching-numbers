import React from 'react';
import SingleImage from '../../components/Card/Cards.elements';
import { CardsSection, CardsWrapper } from '../../components/Card/Cards.elements';
import { feedsource } from '../../components/Card/CardsData'
import { SubHeader } from '../../components/Header.elements'

function Cards() {
    return (
        <>
            <CardsSection>
                <SubHeader>
                    <h1>Explore <span>the</span> page</h1>
                </SubHeader>
                <CardsWrapper>
                    {feedsource.map(item => (
                        <SingleImage image={item} key={item.id} />
                    ))}
                </CardsWrapper>
            </ CardsSection>
        </>
    );
}

export default Cards;