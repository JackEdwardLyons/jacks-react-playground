import React from 'react'

const GlobalLayout: React.FC<{ children: any }> = ({ children }: { children: any }) => {
  return <main className="min-h-[100vh] px-6 bg-yellow-100 font-sans tracking-wider">{children}</main>
}

export default GlobalLayout
