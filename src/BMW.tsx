
import  { useState } from 'react';
import Lorem from './LOREM';  
import "./btn.css"

const Bmw = () => {
  const [isClicked, setIsClicked] = useState();

  const handleClick = () => {
    setIsClicked(!isClicked);  
  };

  return (
    <div className='bilol'>
      <div className='tayoq'></div>
      <div className='dis'>

<h1 className='bat hop' onClick={handleClick}> Lorem ipsum dolor sit    </h1>
<div className="animation"> 
<div className="anim1"></div> 
<div className="anim2"></div> 

</div>
</div>
  <div></div>
      
      

      
      {isClicked && <Lorem />}  
    </div>
  );
};
export default Bmw;