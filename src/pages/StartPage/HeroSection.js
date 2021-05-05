import { HeroContainer, Header } from './HeroSection.elements'

const HeroSection = () => {
    return (
        <>
            <HeroContainer>
                <Header>
                    <h1>Crunching</h1>
                    <h1 className="outline">Numbers</h1>
                </Header>
            </HeroContainer>
        </>
    )
}

export default HeroSection