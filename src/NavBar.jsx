import TtySharpIcon from '@mui/icons-material/TtySharp';
import HelpSharpIcon from '@mui/icons-material/HelpSharp';
import BusinessCenterSharpIcon from '@mui/icons-material/BusinessCenterSharp';
import PaidIcon from '@mui/icons-material/Paid';
import SellIcon from '@mui/icons-material/Sell';
import LockOpenIcon from '@mui/icons-material/LockOpen';
import HamBurger from './images-icons/HamBurgerSign.svg'
import cross from './images-icons/crossButton.svg'
import shoperzIcon from './images-icons/Logo.svg'
import expandMore from './images-icons/expand.svg'
import LessExp from './images-icons/ExpandLess.svg'
import { useRef, useState } from 'react';

let flag=1;
const NavBar= ()=>{
    const Navref=useRef()
    const Navtwo=useRef()
    const ExpandData=useRef();
    const PriceShow=useRef();
    const ShowMoreDetails=useRef();
    const [Currimage,setImage]=useState(expandMore);
    const [imageNow,ImageSet]=useState(expandMore);
    const [priceDetailImage,SetDetailPriceImage]=useState(expandMore);
    const iconSize = 17;
    const iconSizeBuissness = 22;
    function handleClick(){
       Navref.current.classList.toggle("Activ")
       Navtwo.current.classList.toggle('Overlay')
    }
    function Expansion(){
        setImage((prevImage)=>
            prevImage===LessExp? expandMore:LessExp
        )
        ExpandData.current.classList.toggle('open');
    }
    function HandleShowMoreBrands(){
    ImageSet((prevImage) =>
      prevImage === LessExp ? expandMore : LessExp
    );
        ShowMoreDetails.current.classList.toggle('SeeMoreContentOfBrand');
    }
    return (
        <>
        <div className='parent' >
        <ul className="un_menu" >
            <img className='HamBurger' onClick={handleClick} src={HamBurger}></img>
            <li><TtySharpIcon style={{ fontSize: iconSize }}/> Contact us</li>
            <li><HelpSharpIcon style={{ fontSize: iconSize }}/> Help center</li>
            <li><BusinessCenterSharpIcon style={{ fontSize: iconSizeBuissness }}/> Buissness Conditions</li>
            <li>Terms of personel Data protection</li>
        </ul>
        <ul className='un_menuTwo'>
            <li><PaidIcon style={{ fontSize: iconSize }}/>Currency</li>
            <li><SellIcon style={{ fontSize: iconSize }}/>Sell of shoperz</li>
            <li><LockOpenIcon style={{ fontSize: iconSize }}/>login</li>
        </ul>
       
        </div>
        <div ref={Navtwo}></div>
        <div className='List' ref={Navref}>
        <img src={cross} alt="" id='crossBtn' onClick={handleClick}/>
            <ul className='menuu'>
                <img src={shoperzIcon} className='shoperzIconClass' alt="" />
                <div className="cate">
                <h4>Categories</h4>
                <div className="inner">
                <p>All (1929)</p>
                <img src={Currimage} onClick={Expansion}  alt="" />
                </div>
                <div className='WillExpand' ref={ExpandData}>
                    <p>iMac & MacBook (81)</p>
                    <p>Gaming Computers (1126)</p>
                    <p>Lenova & PCs (148)</p>
                    <p>Gadgets (510)</p>
                </div>
                </div>

                <div className="brands">
                <h3 className='Heading'>Brands</h3>
               <div className="checkBox">
                <input type="checkbox" id="myCheckbox" name="myCheckbox"></input>
                <label for="myCheckbox">Apple (32)</label>
                </div>
                <div className="checkBox">
                <input type="checkbox" id="myCheckbox" name="myCheckbox"></input>
                <label for="myCheckbox" className='we'>HP (64)</label>
                </div>
                <div className="checkBox">
                <input type="checkbox" id="myCheckbox" name="myCheckbox"></input>
                <label for="myCheckbox">Dell (21)</label>
                </div>
                

                {/* here is the code of Brands show more  */}
                <div className="ShowMore" ref={ShowMoreDetails} >
                <div>
                <input type="checkbox" id="myCheckbox" name="myCheckbox"></input>
                <label for="myCheckbox">Lenovo (21)</label>
                </div>
                <div>
                <input type="checkbox" id="myCheckbox" name="myCheckbox"></input>
                <label for="myCheckbox">Sony (13)</label>
                </div>

                <div>
                <input type="checkbox"  id="myCheckbox" name="myCheckbox"></input>
                <label for="myCheckbox">Toshiba (37)</label>
                </div>

                </div>

                <div className="Details"  onClick={HandleShowMoreBrands}><p>Show More</p> 
                <img src={imageNow} alt="" /></div>
                </div>

               <div className="price">
               <h3 className='Heading'>Price</h3>
               <div className="checkBox">
                <input type="checkbox" id="myCheckbox" name="myCheckbox"></input>
                <label for="myCheckbox">&gt;50 (32)</label>
                </div>

                <div className="checkBox">
                <input type="checkbox" id="myCheckbox" name="myCheckbox"></input>
                <label for="myCheckbox"> 100-200 (53)</label>
                </div>

                <div className="checkBox">
                <input type="checkbox" id="myCheckbox" name="myCheckbox"></input>
                <label for="myCheckbox"> 200-300 (53)</label>
                </div>
                <div className="PriceShowMore" ref={PriceShow}>
                    <div>
                    <input type="checkbox" id="myCheckbox" name="myCheckbox"></input>
                    <label for="myCheckbox"> 300-400 (58)</label>
                    </div>

                    <div>
                    <input type="checkbox" id="myCheckbox" name="myCheckbox"></input>
                    <label for="myCheckbox">&gt;500 (68)</label>
                    </div>

                </div>
                <div className="Details" onClick={()=>{
                    SetDetailPriceImage((prevImage)=>
                    prevImage===LessExp?expandMore:LessExp);
                    PriceShow.current.classList.toggle('PriceShowClass');
                }}><p>Show More</p> 
                <img src={priceDetailImage} alt="" /></div>
               </div>
               
            </ul>
        </div>
       
        </>
    )
}
export default NavBar;