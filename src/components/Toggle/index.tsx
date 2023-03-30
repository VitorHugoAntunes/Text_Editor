import { InputHTMLAttributes } from "react";
import { ToggleContainer } from "./styles";
import { ReactNode } from 'react'

import { TextAlignLeft, TextAlignRight, TextAlignCenter } from "phosphor-react";
import { useToggleContext } from "../../hooks/useToggleContext";

type ToggleProps = InputHTMLAttributes<HTMLInputElement> & {
    typeInput: string
    icon?: ReactNode;
}

export function Toggle({ typeInput, icon, ...props }: ToggleProps) {
    const {
        toggleActive,
    } = useToggleContext()

    switch (icon) {
        case 'left':
            return (
                <ToggleContainer readOnly {...props} className={toggleActive === 1 ? 'toggle active' : 'toggle'}>
                    <TextAlignLeft size={20} />
                </ToggleContainer>

            )
        case 'center':
            return (
                <ToggleContainer readOnly {...props} className={toggleActive === 2 ? 'toggle active' : 'toggle'}>
                    <TextAlignCenter size={20} />
                </ToggleContainer>
            )
        case 'right':
            return (
                <ToggleContainer readOnly {...props} className={toggleActive === 3 ? 'toggle active' : 'toggle'}>
                    <TextAlignRight size={20} />
                </ToggleContainer>
            )
    }
    return (
        <ToggleContainer readOnly {...props}>{icon}</ToggleContainer>
    )
}