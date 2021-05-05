import styled from 'styled-components'
import { Link } from 'react-router-dom'

export const Nav = styled.div`
position: fixed;
margin-left: 8rem;
`
export const NavIcon = styled(Link)`
    font-size: 3rem;
    margin: 3rem 0 0 -3rem;
    display: flex;
    justify-content: flex-end;   
    color: #f1f1f1;
`

export const SidebarNav = styled.nav`
    position: fixed;
    padding: 0 3rem;
    top: 0;
    left: ${({ sidebar }) => (sidebar ? '0' : '-32rem')};
    background: #15171c;    
    width: 30rem;
    height: 100%;
    display: flex;
    justify-content: center;    
    transition: .7s;
    z-index: 10;
`

export const SidebarWrap = styled.div`
    width: 200%;
`