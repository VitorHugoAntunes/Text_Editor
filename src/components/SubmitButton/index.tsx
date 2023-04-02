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

        // Quebrando o conteudo do pdf em novas linhas caso passe da largura limite

        const textLines = pdf.splitTextToSize(text, 170)

        let cursorY = 20;

        // Adicionando nova pagina do PDF caso a altura de todas as linhas seja maior que a altura da pagina atual

        textLines.forEach((line: string) => {
            if (cursorY + 5 > pdf.internal.pageSize.height - 20) {
                // adicionar nova página se o texto exceder a altura restante da página
                pdf.addPage();
                cursorY = 20;
            }
            pdf.text(line, 20, cursorY);
            cursorY += 5;
        });

        pdf.save('MeuDocumento.pdf')
    }
    return (
        <SubmitContainer id="submitText">
            <SubmitButtonComponent type="submit" onClick={handleExportPDF}>Exportar texto</SubmitButtonComponent>
        </SubmitContainer>
    )
}