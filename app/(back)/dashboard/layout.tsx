import React, { ReactNode } from 'react'

export default function Layout({children}:{children:ReactNode}) {
  return (
    <div>
        <h2>I am the the Dashboard only pages layout</h2>
      {children}
    </div>
  )
}
