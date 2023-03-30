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

import { NavLink } from 'react-router-dom'

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
import { useButtonContext } from '../../hooks/useButtonContext'

export function ButtonsSection() {
  const { menuActive, setMenuActive } = useButtonContext()
  const { handleChangeToggleStatus } = useToggleContext()

  return (
    <ButtonsContainer id='buttons'>
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

      <TextAlignSection className='alignSection'>
        {toggleTextAlign.map(button => (
          <Toggle
            className='toggleList'
            key={button.id}
            title={button.title}
            typeInput={button.typeInput}
            icon={button.icon}
            onClick={() => handleChangeToggleStatus(button.id)}
          ></Toggle>
        ))}
      </TextAlignSection>
      <TextSpacingSection>
        <Input
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
        <div className='menuToggle'>
          <Button

            title="Mais"
            icon={<DotsThreeVertical size={20} weight="bold" />}
            typeButton="moreOptions"
          />
          {menuActive && (
            <ul id='menuList' onClick={() => setMenuActive(false)} className='menuList'>
              <a href="https://github.com/VitorHugoAntunes" target="_blank">
                <li>Meu Github</li>
              </a>
              <a href="https://dribbble.com/shots/15553350-Text-Editor-Light-and-Dark-Mode" target="_blank">
                <li>Ver este design</li>
              </a>
              <NavLink to="/about">
                <li>Sobre</li>
              </NavLink>
            </ul>

          )}
        </div>

      </MoreActionsSection>
    </ButtonsContainer >
  )
}
