import React from 'react'
import './Home.css'
import Product from './Product'
import BookPic from '../images/Spirit+Run+A+6,000-Mile+Marathon+Through+North+America’s+Stolen+Land+by+Noé+Álvarez+thumbnail.png'




function Home() {
    return (
        <div className="home">
            <div className="home__container">
                <img className='home__image' src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg" alt="" />
                <div className="home__row">
                    
                    < Product id = '33333' title = "The Lean Book" price = {14.3} image = {BookPic} rating = {5} />
                    < Product id='4444' title="The Athelete" price={20.03} image={BookPic} rating={3} />
                </div>
                <div className="home__row">
                    < Product id='123' title="Box-1 Book-2" price={23.33} image={BookPic} rating={4} />
                    < Product id='12345' title="Box-2 Book-2" price={31.33} image={BookPic} rating={5} />
                    < Product id='123666' title="Box-3 Book-3" price={26.33} image={BookPic} rating={5} />
                </div>
                <div className="home__row">
                    < Product id='123' title="Box-1 Book" price={23.33} image={BookPic} rating={4} />
                </div>
            </div>
        </div>
    )
}

export default Home