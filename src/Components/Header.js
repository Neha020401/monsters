import React, { useEffect } from 'react';

const Header = ({searchvalue, searchChange,}) => {

  return (
    <div>
        <h1>Monsters-Rolodex</h1>
        <input type='search' value={searchvalue} onChange={searchChange} id='searchbox' />
      
    </div>
  )
}

export default Header
