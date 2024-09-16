import React from 'react'
import ArrowRightIcon from '@material-ui/icons/ArrowRight'
import '../../styles/Sidebar.css'
import '../../styles/SidebarItem.css'


const SideBarItems = ({arrow, icon, label}) => {
  return (
    <div className='sidebarItem'>
      <div className='sidebarItem__arrow'>
        {arrow && (<ArrowRightIcon />)}
      </div>
      <div className='sidebarItem__main'>
      {icon}
      <p>{label}</p>
      </div>

    </div>
  )
}

export default SideBarItems
