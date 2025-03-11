import React from 'react'
import Header from './_components/Header'

function DashboardLayout({children}) {
  return (
    <>
      <Header/>
      <div className=' mx-4 md:mx-26 lg:mx-28'>
      {children}
      </div>
      
    </>
  )
}

export default DashboardLayout