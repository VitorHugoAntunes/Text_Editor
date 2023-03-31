import { Outlet } from 'react-router-dom'
import { useButtonContext } from '../../hooks/useButtonContext';
import { EditorContainer } from "./styles";

export function DefaultLayout() {

    return (
        <>
            <EditorContainer className="container">
                <Outlet />
            </EditorContainer>
        </>
    )
}