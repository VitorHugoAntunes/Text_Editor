import { useContext } from 'react'
import { ToggleContext } from '../contexts/ToggleContext'

export function useToggleContext() {
    const {
        toggleActive,
        alignLeftActive,
        centerTextActive,
        alignRightActive,
        handleChangeToggleStatus,
    } = useContext(ToggleContext)

    return {
        toggleActive,
        alignLeftActive,
        centerTextActive,
        alignRightActive,
        handleChangeToggleStatus,
    }
}
