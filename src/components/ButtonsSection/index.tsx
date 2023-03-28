import {
  TextBolder,
  TextItalic,
  ListBullets,
  TextIndent,
  TextOutdent,
  ArrowsOutLineVertical,
  Image,
  LinkSimpleHorizontal,
  DotsThreeVertical,
  Palette,
} from 'phosphor-react'

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
import { toggleTextAlign, toggleTextIndent } from '../../data/toggleData'
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

        <Input
          title="Tamanho de fonte"
          type="number"
          typeButton="fontSize"
          placeholder="14"
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
          title="Lista"
          icon={<ListBullets size={20} />}
          typeButton="bullets"
        />
        <Button
          title="Espaçamento de linha"
          icon={<ArrowsOutLineVertical size={20} />}
          typeButton="lineSpacing"
        />
        <Button
          title="Recuo à esquerda"
          icon={<TextIndent size={20} />}
          typeButton="identLeft"
        />
        <Button
          title="Recuo à direita"
          icon={<TextOutdent size={20} />}
          typeButton="indentRight"
        />
      </TextSpacingSection>
      <LinkSection>
        <Button
          title="Adicionar imagem"
          icon={<Image size={20} weight="fill" alt="" />}
          typeButton="addImage"
        />
        <Button
          title="Adicionar link"
          icon={<LinkSimpleHorizontal size={20} />}
          typeButton="addLink"
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
