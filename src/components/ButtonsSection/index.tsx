import {
  TextBolder,
  TextItalic,
  TextAa,
  TextIndent,
  ArrowsOutLineVertical,
  DotsThreeVertical,
  Palette,
  TextUnderline,
  CopySimple,
} from 'phosphor-react'

import { Toaster } from 'react-hot-toast'

import { Button } from '../Button'

import {
  ButtonsContainer,
  LinkSection,
  MoreActionsSection,
  TextAlignSection,
  TextSpacingSection,
  TextStyleSection,
} from './styles'

import { Input } from '../Input'
import { toggleTextAlign } from '../../data/toggleData'
import { Toggle } from '../Toggle'
import { useToggleContext } from '../../hooks/useToggleContext'

export function ButtonsSection() {
  const { handleChangeToggleStatus } = useToggleContext()

  return (
    <ButtonsContainer>
      <TextStyleSection>
        <Button
          title="Texto em negrito"
          icon={<TextBolder size={20} weight="bold" />}
          typeButton="bold"
        />
        <Button
          title="Texto em itálico"
          icon={<TextItalic size={20} weight="bold" />}
          typeButton="italic"
        />
        <Button
          title="Texto sublinhado"
          icon={<TextUnderline size={20} weight="bold" />}
          typeButton="underline"
        />

        <Button
          title="Letra maiúscula"
          icon={<TextAa size={20} weight="bold" />}
          typeButton="uppercase"
        />
      </TextStyleSection>

      <TextAlignSection>
        {toggleTextAlign.map(button => (
          <Toggle
            key={button.id}
            title={button.title}
            typeInput={button.typeInput}
            icon={button.icon}
            onClick={() => handleChangeToggleStatus(button.id)}
          ></Toggle>
        ))}


      </TextAlignSection>
      <TextSpacingSection>
        <Button
          title="Espaçamento de linha"
          icon={<ArrowsOutLineVertical size={20} />}
          typeButton="lineSpacing"
        />
        <Button
          title="Recuo à esquerda"
          icon={<TextIndent size={20} />}
          typeButton="indent"
        />
      </TextSpacingSection>
      <LinkSection>
        <Input
          title="Tamanho de fonte"
          type="number"
          typeButton="fontSize"
          placeholder="14"
        />

        <Toaster
          position='top-right'
        />

        <Button
          title="Copiar para àrea de transferência"
          icon={<CopySimple size={20} />}
          typeButton="copyToClipboard"
        />
      </LinkSection>
      <MoreActionsSection>
        <Button
          title="Tema"
          icon={<Palette size={20} weight="bold" />}
          typeButton="theme"
        />
        <Button
          title="Mais"
          icon={<DotsThreeVertical size={20} weight="bold" />}
          typeButton="moreOptions"
        />
      </MoreActionsSection>
    </ButtonsContainer >
  )
}
