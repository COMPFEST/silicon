import React, { createContext, useContext, useState } from 'react'
import { TabGroupContextProps, TabGroupProviderProps } from './interface'

const TabGroupContext = createContext<TabGroupContextProps>(
  {} as TabGroupContextProps
)

export const useTabGroupContext = () => useContext(TabGroupContext)

export const TabGroupProvider: React.FC<TabGroupProviderProps> = ({
  initialSelectedIndex = 0,
  children,
}) => {
  const [selectedIndex, setSelectedIndex] = useState(initialSelectedIndex)

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
