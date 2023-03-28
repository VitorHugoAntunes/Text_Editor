import { createContext, type ReactNode, useState, useEffect } from 'react'


interface ToggleProviderProps {
    children: ReactNode
}

interface ToggleContextType {
    toggleActive: number
    alignLeftActive: boolean
    centerTextActive: boolean
    alignRightActive: boolean
    handleChangeToggleStatus: (id: number) => void
}

export const ToggleContext = createContext({} as ToggleContextType)

export function ToggleProvider({ children }: ToggleProviderProps) {
    const [toggleActive, setToggleActive] = useState(1)

    const [alignLeftActive, setAlignLeftActive] = useState(true)
    const [centerTextActive, setCenterTextActive] = useState(false)
    const [alignRightActive, setAlignRightActive] = useState(false)


    function changeAlignLeftStatus(id: number) {
        if (id === 1) {
            setAlignLeftActive(true)

            setCenterTextActive(false)

            setAlignRightActive(false)
        }
    }

    function changeCenterTextStatus(id: number) {
        if (id === 2) {
            setAlignLeftActive(false)

            setCenterTextActive(true)

            setAlignRightActive(false)
        }
    }

    function changeAlignRightStatus(id: number) {
        if (id === 3) {
            setAlignLeftActive(false)

            setCenterTextActive(false)

            setAlignRightActive(true)
        }
    }

    function handleChangeToggleStatus(id: number) {
        setToggleActive(id)
        console.log('Ativado: ' + id)

        changeAlignLeftStatus(id)
        changeCenterTextStatus(id)
        changeAlignRightStatus(id)
    }

    useEffect(() => {
        console.log(alignLeftActive, centerTextActive, alignRightActive)
    })

    return (
        <ToggleContext.Provider
            value={{
                toggleActive,
                alignLeftActive,
                centerTextActive,
                alignRightActive,
                handleChangeToggleStatus,
            }}
        >
            {children}
        </ToggleContext.Provider>
    )
}
