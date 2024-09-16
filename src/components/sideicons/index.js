import React from 'react'
import AddIcon from '@material-ui/icons/Add'
import  '../../styles/SideIcon.css'

const index = () => {
  return (
    <div className='sideIcons'>
        <div className='sideIcons__top'>
        <img src="https://cdn4.iconfinder.com/data/icons/logos-brands-in-colors/48/google-calendar-512.png" alt="Google Calendar" />
                <img src="https://cdn0.iconfinder.com/data/icons/3-colors-outline/500/Keep-512.png" alt="Google Keep" />
                <img src="https://www.androidpolice.com/wp-content/uploads/2018/03/nexus2cee_new-tasks-icon.png" alt="Google Tasks" />
      
        </div>
        <hr/>
        <div className='sideIcons_plusIcon'>
        <AddIcon />
        </div>
    </div>
  )
}

export default index
