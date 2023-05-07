import React from 'react'
import NewHomepage from './NewHomepage'
import AltNavBar from './AltNavBar'

const FinalHomepage = () => {
  return (
    <div className="flex flex-row justify-between">
      <div className="w-screen">
        <div>
          <AltNavBar />
        </div>
        <NewHomepage />
      </div>

    </div>
  )
}

export default FinalHomepage
