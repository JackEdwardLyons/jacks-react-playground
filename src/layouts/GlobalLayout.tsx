import React from 'react'

const GlobalLayout: React.FC<{ children: any }> = ({ children }: { children: any }) => {
  return <div className="min-h-[100vh] p-12 bg-yellow-100 font-sans tracking-wider">{children}</div>
}

export default GlobalLayout
