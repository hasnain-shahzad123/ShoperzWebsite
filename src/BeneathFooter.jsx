import fb from './images-icons/fb.svg'
import inst from './images-icons/insta.svg'
import linkedin from './images-icons/linkedin.svg'
import YouTub from './images-icons/youtube.svg'
import vis from './images-icons/visa.svg'
import buble from './images-icons/circle.svg'
import paypal from './images-icons/paypal.svg'
import twit from './images-icons/twitter.svg'
import skrill from './images-icons/skrill.svg'
const BeneathFooter=()=>{
    return<>
    <div className='ParentDiv'>
        <div className='shoperzTag'>
        <h3><span>© Shoperz</span> 2023 - All Rights Reserved</h3>
        </div>
        <div className='social_icons_parent'>
            <a href=""><img src={fb} alt="" /></a>
            <a href=""><img src={inst} alt="" /></a>
            <a href=""><img src={linkedin} alt="" /></a>
            <a href=""><img src={twit} alt="" /></a>
           <a href=""><img src={YouTub} alt="" /></a>
        </div>
        <div className='PaymentMethods'>
            <img src={vis} alt="" />
            <img src={buble} alt="" />
            <img src={paypal} alt="" />
            <img src={skrill} alt="" />
        </div>
    </div>
    </>
}
export default BeneathFooter;