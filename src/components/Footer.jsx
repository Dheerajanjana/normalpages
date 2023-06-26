import React from 'react'

const Footer = () => {
  return (<>
    <footer>
        <div className='ftr'>
            <h1>Technorizen</h1>
            <p>@all right reserved</p>
        </div>
        <div>
            <h5>Follow Us</h5>
            <div className='link'>
                <a href="https://www.google.com/" target={"blank"}>google</a>
                <a href="https://www.youtube.com/" target={"blank"}>youtube</a>
                <a href="https://www.facebook.com/" target={"blank"}>facebook</a>
            </div>
        </div>
    </footer>
    </>);
}

export default Footer