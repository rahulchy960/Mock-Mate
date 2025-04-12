'use client'

import React from 'react'
import Header from './_components/Header'

function DashboardLayout({ children }) {
  return (
    <div className="min-h-screen transition-colors bg-background text-foreground">
      <Header />
      <div className="mx-4 md:mx-26 lg:mx-28">
        {children}
      </div>
    </div>
  )
}

export default DashboardLayout
