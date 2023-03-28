import jsPDF from 'jspdf'
import { ButtonsSection } from '../../components/ButtonsSection'
import { TextSection } from '../../components/TextSection'
import { useButtonContext } from '../../hooks/useButtonContext'
import { useInputContext } from '../../hooks/useInputContext'
import { useTextAreaContext } from '../../hooks/useTextAreaContext'
import { EditorContainer, SubmitButton, SubmitContainer } from './styles'

export function Home() {
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
    <EditorContainer className="container">
      <ButtonsSection />
      <TextSection />
      <SubmitContainer>
        <SubmitButton type="submit" onClick={handleExportPDF}>Exportar texto</SubmitButton>
      </SubmitContainer>

    </EditorContainer>
  )
}
