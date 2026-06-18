import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
const Homepage = () => {
    return (
        <>
            <Navbar />


            <div className="hero-section">
                <h1>welcome to our site</h1>
                <button>shop now</button>
            </div>

            <center><h1>Products</h1></center>
            <div className="products">
                <img src="https://tse2.mm.bing.net/th/id/OIP.y_2i4EgAMDRZ2QHFK_L_FgHaI3?rs=1&pid=ImgDetMain&o=7&rm=3" alt="" />
                <img src="https://tse4.mm.bing.net/th/id/OIP.okPHK-lOk_E5nzOZsGx2dwHaFI?rs=1&pid=ImgDetMain&o=7&rm=3" alt="" />
                <img src="https://tse1.mm.bing.net/th/id/OIP.fXPX5SU-JnLjuILmvYEwVQHaE7?rs=1&pid=ImgDetMain&o=7&rm=3" alt="" />
            </div>


            <div className="products">
                <img src="https://tse1.explicit.bing.net/th/id/OIP.iRPbUUD_57bV05b8pSMhLAAAAA?w=465&h=465&rs=1&pid=ImgDetMain&o=7&rm=3" alt="" />
                <img src="https://tse1.mm.bing.net/th/id/OIP.cCQmtoZ6aUJHn0If34E-sgHaFf?w=480&h=356&rs=1&pid=ImgDetMain&o=7&rm=3" alt="" />
                <img src="https://c8.alamy.com/comp/2PKAWNN/apple-mac-studio-m1-max-white-background-2PKAWNN.jpg" alt="" />
            </div>
            <Footer />
        </>

    );
}
export default Homepage;