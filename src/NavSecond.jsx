import React from 'react'
import shoperzIcon from './images-icons/Logo.svg'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import SearchIcon from '@mui/icons-material/Search';
import FavoriteIcon from '@mui/icons-material/Favorite';
import LocalMallIcon from '@mui/icons-material/LocalMall';
const NavSecond = () => {
  return (
    <>
    <ul className='ul_secondNav'>
        <li><img src={shoperzIcon} alt="shoperz_icon" className='shoperz_icon'/></li>
        <li className='Categories'>Select Categories <ExpandMoreIcon/></li>
        <li><input type="text" className='ul_secondNav-input' placeholder='What are you looking for?'/><SearchIcon className='search_icon'/></li>
        <li ><FavoriteIcon className='favIcon'/></li>
        <li className='CartItems'><button><LocalMallIcon/></button><span>$799.00</span></li>
    </ul>
    </>
  )
}
export default NavSecond;