'use client'

import { AudioContextType } from "@/types"
import React, { createContext } from "react"

const AudioContext = createContext<AudioContextType | undefined>(undefined)

const AudioProvider = ({ children }: { children: React.ReactNode}) => {
    
}
