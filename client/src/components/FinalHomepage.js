import React from 'react'
import NewHomepage from './NewHomepage'
import AltNavBar from './AltNavBar'

const FinalHomepage = () => {
  return (
    <div className="flex flex-row justify-between">
      <div className="h-screen bg-[#f7eaad] bg-opacity-40 w-40 rounded-2xl">
        vertical list
      </div>

      <div className="w-screen">
        <div className="border-4">
          <AltNavBar />
        </div>
        <NewHomepage />
      </div>

    </div>
  )
}

export default FinalHomepage
