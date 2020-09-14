import styled from 'styled-components'

export const Container = styled.div`
    padding: 80px 60px;
    background: radial-gradient(circle, rgb(255,255,255) 0%, rgb (255,215,0) 100%);
`
export const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content:center;
    max-innerWidth: 100px;
    margin: 0 auto;
`
export const Column = styled.div`
    display: flex;
    flex-direction: column;
    text-align: left;
    margin-left: 60px;
`
export const Row = styled.div`
    display: grid;
    grid-template-columns: repeat (auto-fill, minmax(230px, 1fr));
    grid-gap: 20px;

    @media (max-width: 100px) {
        grid-template-columns: ;
    }
`
export const Link = styled.a`
color: #000000;
    margin-bottom: 20px;
    font-size: 18px;
    text-decoration: none;

    &:hover {
        color: #ffd700;
        transition: 200ms ease-in;
    }
`
export const Title = styled.p`
    font-size; 24px;
    color: #000000;
    margin-bottom: 20 px;
    font-weight: bold;
`