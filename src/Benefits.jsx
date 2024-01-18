import icon1 from './images-icons/icon1.svg'
import icon2 from './images-icons/Icons 2.svg'
import icon3 from './images-icons/Icons.png'
import icon4 from './images-icons/Icons3.svg'
import icon5 from './images-icons/Icons4.svg'
const Benefits=()=>{
    return(
        <>
        <div className="HeadingBenefit">
            <h1>Benefits</h1>
        </div>
        <div className="BenefitsContent">
            <div className="NodesParent">,
                <img src={icon1} alt="" className='icons'/>
                <div>
                <h4>Guarntee</h4>
                <p>24 months</p>
                </div>
            </div>
            <div className="NodesParent">
            <img src={icon3} alt="" className='icons'/>
                <div>
                <h4>Rate-Paying </h4>
                <p>4-12 months</p>
                </div>
            </div>
            <div className="NodesParent">
                <img src={icon2} alt="" className='icons' />
                <div>
                <h4>Payments</h4>
                <p>Secured</p>
                </div>
            </div>
            <div className="NodesParent">
            <img src={icon4} alt="" className='icons' />
                <div>
                <h4>Free Delivery</h4>
                <p>From $100</p>
                </div>
            </div>
            <div className='lastnode'>
            <img src={icon5} alt="" className='icons' />
                <div>
                <h4>Brands</h4>
                <p>Top Brands</p>
                </div>
            </div>
        </div>
        </>
    )
}
export default Benefits;