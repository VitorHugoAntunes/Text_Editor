import { Outlet } from 'react-router-dom'
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