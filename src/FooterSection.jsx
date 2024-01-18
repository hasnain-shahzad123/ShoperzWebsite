import logo from './images-icons/Logo.svg';
const FooterSection=()=>{
    return (
        <>
        <div className="parentOfFooter">
            <div className='section1'>
            <img src={logo} alt="" />
            <div className='HeadQuarters'>
            <h3>Headquarters</h3>
            <p>Presei Square No45, Bucharest - 0994550</p>
            </div>
            <div className='Email_footer'>
            <h3>Email</h3>
            <p>contact@shoperz.com</p>
            </div>

            <div className='Telephone'>
            <h3>Telephone</h3>
            <p>(+40) 987 123 654</p>
            </div>

            </div>


            <div className='Computers_footer'>
            <h3>Computers</h3>
            <div className='computer_Links'>
                <a href="#">iMac</a><br/><br/>
                <a href="#">Mac books</a><br/><br/>
                <a href="#">Windows Laptops</a><br/><br/>
                <a href="#">Gaming Computers</a><br/><br/>
                <a href="#">Accessories</a><br/><br/>
                <a href="#">Gadgets</a><br/><br/>
            </div>
            </div>


            <div className='useful_links_Parent'>
                <h3>Useful Links</h3>
                <div>
                <a href="#">About</a><br/><br/>
                <a href="#">Contact</a><br/><br/>
                <a href="#">wishlist</a><br/><br/>
                <a href="#">FAQ</a><br/><br/>
                <a href="#">Privacy policy</a><br/><br/>
                <a href="#">Terms & Conditions</a><br/><br/>
                <a href="#">Cookie Policy</a><br/><br/>
                </div>
            </div>

            <div className='consumer_services_parent'>
            <h3>Consumer Services</h3>
            <div>
                <a href="#">My Account</a><br/><br/>
                <a href="#">My Cart</a><br/><br/>
                <a href="#">Track Order</a><br/><br/>
                <a href="#">Returns & Exchanges</a><br/><br/>
                <a href="#">Payment Methods</a><br/><br/>
                <a href="#">Support</a><br/><br/>
            </div>
            </div>
        </div>
        </>
    )
}
export default FooterSection;