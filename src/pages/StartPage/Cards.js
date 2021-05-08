import React from 'react';
import SingleImage from '../../components/Card/Cards.elements';
import { CardsWrapper, Card } from '../../components/Card/Cards.elements';
import { feedsource } from '../../components/Card/CardsData'
import { SubHeader } from '../../components/Header.elements'

function Cards() {
    return (
        <>
            <CardsWrapper>
                <SubHeader>
                    <h1>Explore <span>the</span> page</h1>
                </SubHeader>
                <Card>
                    {feedsource.map(item => (
                        <SingleImage image={item} key={item.id} />
                    ))}
                </Card>
            </CardsWrapper>
        </>
    );
}

export default Cards;