import React from 'react'
import { CFooter } from '@coreui/react'

const TheFooter = () => {
  return (
    <CFooter fixed={false}>
      <div>
        <a href="https://coreui.io" target="_blank" rel="noopener noreferrer">WILD CODE SCHOOL</a>
        <span className="ml-1">&copy; 2020 ACCREATION.</span>
      </div>
      <div className="mfs-auto">
        <span className="mr-1">Powered by WCS</span>
       
      </div>
    </CFooter>
  )
}

export default React.memo(TheFooter)
