import React from 'react';
import { AiTwotoneShopping, AiOutlineLogin } from 'react-icons/ai';
import { Link } from 'react-router-dom';
const Header = () => {
  const menuItems = <>
  <li><Link to='/'>Home</Link></li>
  <li><Link to='/shop'>Shop</Link></li>
  <li><Link to='/orders'>Orders</Link></li>
  <li><Link to='/inventory'>Inventory</Link></li>
  </>
    return (
        <div>
            <div class="sticky top-0 navbar bg-secondary">
  <div class="navbar-start">
    <div class="dropdown">
      <label tabindex="0" class="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </label>
      <ul tabindex="0" class="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
        {menuItems}
      </ul>
    </div>
    <Link to='/' class="btn btn-ghost normal-case text-2xl text-base-100 font-bolder"><AiTwotoneShopping />Daily Shopping</Link>
  </div>
  <div class="navbar-center hidden lg:flex">
    <ul class="menu menu-horizontal p-0">
      {menuItems}
    </ul>
  </div>
  <div class="navbar-end">
    <Link to='/login' class="btn btn-ghost text-primary"><AiOutlineLogin />LOG IN</Link>
  </div>
</div>
        </div>
    );
};

export default Header;