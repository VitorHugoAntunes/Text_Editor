import jsPDF from "jspdf"
import { useButtonContext } from "../../hooks/useButtonContext"
import { useInputContext } from "../../hooks/useInputContext"
import { useTextAreaContext } from "../../hooks/useTextAreaContext"
import { SubmitContainer, SubmitButtonComponent } from "./styles"

export function SubmitButton() {
    const { boldActive, italicActive } = useButtonContext()
    const { fontSize } = useInputContext()
    const { text } = useTextAreaContext()

    function handleExportPDF() {
        const pdf = new jsPDF()

        if (boldActive === true && italicActive === true) {
            pdf.setFont("Helvetica", "bolditalic")
        } else if (boldActive === true && italicActive === false) {
            pdf.setFont("Helvetica", "bold")
        } else if (boldActive === false && italicActive === true) {
            pdf.setFont("Helvetica", "italic")
        }

        pdf.setFontSize(fontSize)

        pdf.text(text, 20, 30)

        pdf.save('MeuDocumento.pdf')
    }
    return (
        <SubmitContainer id="submitText">
            <SubmitButtonComponent type="submit" onClick={handleExportPDF}>Exportar texto</SubmitButtonComponent>
        </SubmitContainer>
    )
}