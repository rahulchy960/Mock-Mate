import React from 'react'
import Header from './_components/Header'

function DashboardLayout({children}) {
  return (
    <>
      <Header/>
      {children}
    </>
  )
}

export default DashboardLayout