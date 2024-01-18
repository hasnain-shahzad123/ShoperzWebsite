import formIcon from './images-icons/Form_buttons.svg'

const FooterCoupen=()=>{
    return (
        <>
            <div className="ParentClass ">
                <div>
                <span className="CoupenHead">
                <span className="newsLetter">Subscribe to Our Newsletter</span>
                <span>- get a <span className="Coupen">$20 Coupon</span> for your first order!</span>
                </span>
                </div>
           
            <div className='emailSendBox'>
                <span><input type="email" placeholder="Enter your email address " className="Email"/></span>
                <div> <a href=""><img src={formIcon} alt="" className='FormImage'/></a></div>
               
            </div>
            </div>
        </>
    )
}
export default FooterCoupen;