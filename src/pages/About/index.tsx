import { ArrowLeft } from 'phosphor-react'
import { NavLink } from 'react-router-dom'
import { AboutContainer, AboutHeaderContainer } from './styles'

export function About() {
    return (
        <AboutContainer>
            <AboutHeaderContainer>
                <div className='link'>
                    <NavLink to="/">
                        <ArrowLeft size={24} />
                    </NavLink>
                </div>
                <div className='title'>
                    <h2>About</h2>
                </div>
            </AboutHeaderContainer>
            <div>
                <pre>
                    <code className='codeBlock' aria-readonly={'true'}>
                        <p>
                            /**
                        </p>
                        <p>  * Editor de texto criado com Reactjs + Typescript</p>
                        <p>  * Documentação usada como base: <a href="https://react.dev/" target="_blank">Documentação React</a></p>
                        <p>  * Inspiração em designs diversos: <a href="https://dribbble.com/" target="_blank">Dribbble</a> </p>
                        <p>  * Para o deploy deste site foi utilizado: <a href="https://www.netlify.com/" target="_blank">Netlify</a></p>
                        <p>  * Criado por: <a href="https://github.com/VitorHugoAntunes" target="_blank">Vitor Hugo Antunes</a></p>
                        <p>  * Versão: <strong>2.0</strong></p>
                        <p>
                            */
                        </p>
                    </code>
                </pre>
            </div>
        </AboutContainer >
    )
}