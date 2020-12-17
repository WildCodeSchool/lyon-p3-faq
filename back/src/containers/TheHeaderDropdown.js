import React  from 'react';
import {useContext} from 'react'
import { storeContext} from "../context";
import {
  CBadge,
  CDropdown,
  CDropdownItem,
  CDropdownMenu,
  CDropdownToggle,
  CImg
} from '@coreui/react'
import CIcon from '@coreui/icons-react'
import {useHistory} from "react-router-dom"


const TheHeaderDropdown = () => {

  let history = useHistory()

  const [currentUser, setCurrentUser] = useContext(storeContext);


const logout = () => {


setCurrentUser({connected:false})

history.push({ pathname :`/`});

}


  


  
  return (
    <CDropdown
      inNav
      className="c-header-nav-items mx-2"
      direction="down"
    >
      <CDropdownToggle className="c-header-nav-link" caret={false}>
        <div className="c-avatar">
          <CImg
            src={'avatars/1.jpeg'}
            className="c-avatar-img"
            alt="admin@bootstrapmaster.com"
          />
        </div>
      </CDropdownToggle>
      <CDropdownMenu className="pt-0" placement="bottom-end">
        <CDropdownItem
          header
          tag="div"
          color="light"
          className="text-center"
        >
          <strong>Account</strong>
        </CDropdownItem>
      
        
        {/* TODO : Mettre le lien vers le bon profil avec les infos du user */}
        <CDropdownItem onClick={() => history.push({
          pathname: `/pages/users/usermodify/${currentUser.id}`,
          user : currentUser
        
        })}> 
          <CIcon name="cil-user" className="mfe-2" />Profile
        </CDropdownItem>
        <CDropdownItem>
          <CIcon name="cil-settings" className="mfe-2" /> 
          Settings
        </CDropdownItem>
        
        <CDropdownItem divider />
        <CDropdownItem onClick={logout} >
          <CIcon name="cil-lock-locked" className="mfe-2" /> 
          Log Out
        </CDropdownItem>
      </CDropdownMenu>
    </CDropdown>
  )
}

export default TheHeaderDropdown
