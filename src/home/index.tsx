import { Header } from "../components/Header/Header";
import { FutureWeb, HomeContainer, NewsArticles, Topics } from "./style";
import futureWebMobile from '../assets/image-web-3-mobile.jpg'
import retroPCs from '../assets/image-retro-pcs.jpg'
import topLaptops from '../assets/image-top-laptops.jpg'
import growthGame from '../assets/image-gaming-growth.jpg'

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
            <NewsArticles>
                <h2>New</h2>
                 <div>
                    <h3>Hydrogen VS Electric Cars</h3>
                    <p>Will hydrogen-fueled cars ever catch up to EVs?</p>
                    <hr />
                 </div>
                 <div>
                    <h3>The Downsides of AI Artistry</h3>
                    <p>What are the possible adverse effects of on-demand AI image generation?</p>
                    <hr />
                 </div>
                 <div>
                    <h3>Is VC Funding Drying Up?</h3>
                    <p>Private funding by VC firms is down 50% YOY. We take a look at what that means</p>
                 </div>
            </NewsArticles>
            <Topics>
                <article>
                    <figure>
                        <img src={retroPCs} alt="" />
                    </figure>
                    <div>
                        <h4>01</h4>
                            <h5>Reviving Retro PCs</h5>
                            <p>What happens when old PCs are given modern upgrades?</p>
                    </div>
                </article>
                <article>
                     <figure>
                        <img src={topLaptops} alt="" />
                    </figure>
                    <div>
                        <h4>02</h4>
                            <h5>Top 10 Laptops of 2022</h5>
                            <p>Our best picks for various needs and budgets</p>
                        </div>
                </article>
                <article>
                    <figure>
                        <img src={growthGame} alt="" />
                    </figure>
                    <div>
                        <h4>03</h4>
                        <h5>The Growth of Gaming</h5>
                        <p>How the pandemic has sparked fresh opportunities</p>
                    </div>
                </article>
               
            </Topics>

        </HomeContainer>
    )
}