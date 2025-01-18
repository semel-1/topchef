import React from 'react'
import Background from '../Component/Background/Background'
import Quality from '../Component/Quality/Quality'
import Chefs from '../Component/Chefs/Chefs'

const Chef = () => {
  return (
    <div>
        <Background text ="our chefs" image="ChefBG" />
        <Quality/>
        <Chefs/>
        
        
    </div>
  )
}

export default Chef