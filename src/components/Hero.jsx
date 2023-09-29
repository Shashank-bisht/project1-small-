
import '../styles/Hero.scss'
const Hero = () => {
  return (
    <>
    <main className="hero">
                <div className="hero-content">
                    <h1>YOUR FEET <br />
                        DESERVE 
                        THE BEST</h1>
                    <p>YOUR FEET DESERVE THE BEST AND WE’RE HERE TO HELP YOU WITH OUR SHOES.YOUR FEET DESERVE THE BEST AND WE’RE HERE TO HELP YOU WITH OUR SHOES.</p>

                    <div className="hero-btn">
                        <button>Shop Now</button>
                        <button className="secondary-btn cat ">Category</button>
                    </div>
                    <div className="shopping">
                        <p>Also Available On</p>
                    </div>
                    <div className="brand-icons">
                        <img src="https://www.thesun.co.uk/wp-content/uploads/2022/02/Amazon-Logo-1024x426-1.png" alt="" />
                        <img className='flipkart' src="/images/flipkart.png" alt="" />
                    </div>
                </div>
                <div className="hero-image">
                    <img src="/images/shoe_image.png" alt="" />
                </div>
            </main>
    
    
    
    
    </>
  )
}

export default Hero