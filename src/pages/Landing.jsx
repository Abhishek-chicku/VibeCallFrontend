// import React from 'react';
// import { Link } from 'react-router-dom';

// const Landing = () => {
//     return (
//         <div className='LandingPageContainer'>
//             <nav>
//                 <div className='navHeader'>
//                     <h2>VibeCall</h2>
//                 </div>
//                 <div className='navList'>
//                     <p>join as Guest</p>
//                 <p>Register</p>
//                 <div role='button'>
//                     <p>Login</p>
//                 </div>
//                 </div>
//             </nav>

//             <div className="LandingMainContainer">
//              <div>
//                 <h1><span style={{ color: "#FF9839" }}>Connect</span> with your loved Ones</h1>
//                   <p>Cover a distance by VibeCall</p>
//                     <div role='button'>
//                 <Link to={"/auth"}>Get Started</Link>
//                 </div>
//              </div>
//                  <div>
//                    <img src="/mobile.png" alt="img" />
//                </div>
//             </div>
//         </div>
//     );
// }

// export default Landing;


import React from 'react';
import { Link } from 'react-router-dom';

const Landing = () => {
    return (
        <div className='LandingPageContainer'>
            <nav>
                <div className='navHeader'>
                    <h2>VibeCall</h2>
                </div>
                <div className='navList'>
                    <Link to="/auth">
                        <p>Join as Guest</p>
                    </Link>
                    <Link to="/auth">
                        <p>Register</p>
                    </Link>
                    <Link to="/auth">
                        <p>Login</p>
                    </Link>
                </div>
            </nav>

            <div className="LandingMainContainer">
                <div>
                    <h1><span style={{ color: "#FF9839" }}>Connect</span> with your loved Ones</h1>
                    <p>Cover a distance by VibeCall</p>
                    <div role='button'>
                        <Link to="/auth">Get Started</Link>
                    </div>
                </div>
                <div>
                    <img src="/mobile.png" alt="img" />
                </div>
            </div>
        </div>
    );
}

export default Landing;
