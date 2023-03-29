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
                <p>Block code</p>
            </div>
        </AboutContainer>
    )
}