import React from 'react';

import './Nav.css';


//make nav a class
class Nav extends React.Component{
    render(){
        return(
            <div className='nav-container'>
                 <div className='nav-color-overlay'>
                   <div className='nav-title'>The Expanse Memory Game</div>
                   
                   </div>
            </div>
            
        );
    }
}
export default Nav;


// const Nav = ({trig}) => {
//     console.log('----' + window.innerWidth);
//    const trig2 = trig;
//     return(
//             <div className='nav-container'>
//                 <div className='nav-color-overlay'>
//                     <div className='nav-title'>The Expanse Memory Game</div>
//                     <div className='nav-link-container'>
//                     {trig2 ? (<ScoreBoard />) : (<div></div>)}
                           
//                     </div>  
//                 </div>
//             </div>
        
       
//     )
// }



