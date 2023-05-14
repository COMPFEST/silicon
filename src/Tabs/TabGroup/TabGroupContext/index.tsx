import React, { createContext, useContext, useState } from 'react'
import { TabGroupContextProps, TabGroupProviderProps } from './interface'

const TabGroupContext = createContext<TabGroupContextProps>(
  {} as TabGroupContextProps
)

export const useTabGroupContext = () => useContext(TabGroupContext)

export const TabGroupProvider: React.FC<TabGroupProviderProps> = ({
  children,
}) => {
  const [selectedIndex, setSelectedIndex] = useState(0)

  const contextValue = {
    selectedIndex,
    setSelectedIndex,
  }

  return (
    <TabGroupContext.Provider value={contextValue}>
      {children}
    </TabGroupContext.Provider>
  )
}
