import React from 'react';

//import data
import {navigation} from '../data';

const NavMobile = () => {
  return (
  <nav className='bg-white w-full h-full shadow-2x1'>
    <ul className='text-center h-full flex flex-col item-center justify-center gap-y-6'>
      {navigation.map((item, index)=> {
        return (
          <li key={index}>
            <a className='text-x1 font-medium capitalize' href={item.href}>
              {item.name}
            </a>
          </li>
        );
      })}
    </ul>
  </nav>
  );
};

export default NavMobile;
