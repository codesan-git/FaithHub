'use client'
import { FC, useEffect, useState } from 'react'

interface ClientOnlyProps {
  children: React.ReactNode
}

const ClientOnly: FC<ClientOnlyProps> = ({children}) => {
    const [hasMounted, setHasMounted] = useState(false);
    
    useEffect(() => {
      setHasMounted(true)
    }, [])
    
    if(!hasMounted) return null
  return <div>{children}</div>
}

export default ClientOnly