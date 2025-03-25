import { Header } from "../components/Header/Header";
import { FutureWeb, HomeContainer } from "./style";
import futureWebMobile from '../assets/image-web-3-mobile.jpg'

export function Home(){
    return(
        <HomeContainer>
            <Header></Header>
            <FutureWeb>
                <img src={futureWebMobile} alt="" />
                <h1>The Bright Future of Web 3.0?</h1>
                <p>We dive into the next evolution of the web that claims to put power of the platforms back into the hands of people. But is it really fulfilling its promise?</p>
                <button>READ MORE</button>
            </FutureWeb>

        </HomeContainer>
    )
}