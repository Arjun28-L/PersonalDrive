import React from 'react'
import NewFile from './NewFile'
import SideBarItems from './SideBarItems'
import InsertDriveFileIcon from '@material-ui/icons/InsertDriveFile';
import ImportantDevicesIcon from '@material-ui/icons/ImportantDevices';
import PeopleAltIcon from '@material-ui/icons/PeopleAlt';
import QueryBuilderIcon from '@material-ui/icons/QueryBuilder';
import StarBorderIcon from '@material-ui/icons/StarBorder';
import DeleteOutlineIcon from '@material-ui/icons/DeleteOutline';
import StorageIcon from '@material-ui/icons/Storage';



const index = () => {
  return (
    <div className='sideBar'>
        <NewFile />
        <div className='sidebar__itemsContainer'>
            <SideBarItems arrow icon={(<InsertDriveFileIcon />)} label={'My Drive'} />
            <SideBarItems arrow icon={(<ImportantDevicesIcon />)} label={'Computers'} />
            <SideBarItems icon={(<PeopleAltIcon />)} label={'Shared with me'} />
            <SideBarItems icon={(<QueryBuilderIcon />)} label={'Recent'} />
            <SideBarItems icon={(<StarBorderIcon />)} label={'Starred'} />
            <SideBarItems icon={(<DeleteOutlineIcon />)} label={'Bin'} />


            <hr />
            <SideBarItems icon={(<StorageIcon />)} label={'Storage'} />

        </div>

       
    </div>
  )
}

export default index
