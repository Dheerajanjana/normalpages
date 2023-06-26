import React from 'react'
import vg from "../assets/photo-1510915228340-29c85a43dcfe.avif";
import { AiFillGoogleCircle,AiFillAmazonCircle,AiFillYoutube,AiFillInstagram } from "react-icons/ai";

const Home = () => {
  return (<>
    <div className='home' id='Home'>
        <main>
            <h1>technorizen</h1>
            <p>Solution to all your problems</p>
        </main>
    </div>
    <div className='home2'>
      <img src={vg} alt="Graphics" />
      <div>
          <p>
            Lorem ipsum dolor sit amet consectetur <br /> 
            adipisicing elit. Similique quo tenetur
            sequi facilis tempore quasi voluptatem.
                Deserunt, repellendus.
          </p>
      </div>
  </div>
  <div className='home3' id='About'>
    <div>
      <h1>Who we are? </h1>
      <p>
                Lorem ipsum dolor sit, amet consectetur adipisicing  ullam sed ipsa 
                quaerat itaque natus nemo
                voluptatibus id, quibusdam est liberoelit. Est iste ratione
                debitis ea facere rerum inventore totam cupiditate, aliquam
                neque voluptates velit, nostrum, 
                molestiae assumenda similique. Ipsa doloribus cum atque.
      </p>
    </div>
  </div>
  <div className="home4" id='Brands'>
    <div className='icon'>
      <h1>Brands</h1>
      <article>
        <div style={{animationDelay:"0.3s",}}>
        < AiFillGoogleCircle/>
          <p>Google</p>
        </div>
        <div style={{animationDelay:"0.5s",}}>
        <AiFillAmazonCircle/>
          <p>Amazon</p>
        </div>
        <div style={{animationDelay:"0.7s",}}>
        <AiFillYoutube/>
          <p>Youtube</p>
        </div>
        <div style={{animationDelay:"1s",}}>
        <AiFillInstagram/>
          <p>Instagram</p>
        </div>
      </article>
    </div>
  </div>
    </>);
}

export default Home