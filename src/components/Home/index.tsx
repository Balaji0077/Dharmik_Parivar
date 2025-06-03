import "./index.css"

const Home = ()=>{
   return (
     <div className="bg-yellow-300 home-container">
        <nav className="home-flex-container">
            <div>
                <h3 className="font-mono text-xl font-semibold">Logo</h3>
            </div>
            <div className="services-container font-mono text-lg font-semibold text-shadow-lg/20 cursor-pointer">
                 <p>Id Cards</p>
                 <p>Services</p>
                 <p>Post Ads</p>
                 <p>Matrimony</p>
                 <p>Jobs</p>
                 <p>Classified</p>
                 <p>Gallery</p>
            </div>
            <div className="about-container">
                <p className="contact-text font-mono text-lg font-semibold">Contact Us</p>
                <p className="font-mono text-lg font-semibold">About Us</p>
            </div>
        </nav>
        

     </div>
   )
}

export default Home;