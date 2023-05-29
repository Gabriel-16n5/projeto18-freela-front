import styled from "styled-components"
import HomePage from "./pages/HomePage/HomePage"
import SeatsPage from "./pages/SeatsPage/SeatsPage"
import SessionsPage from "./pages/SessionsPage/SessionsPage"
import SuccessPage from "./pages/SuccessPage/SuccessPage"
import { Route, Routes, BrowserRouter, Link } from "react-router-dom"
import React from "react"

export default function App() {
    // const [nomeDoFilme, setNomeDoFilme] = React.useState([]);
    // const [data, setData] = React.useState([]);
    // const [horário, setHorário] = React.useState([]);
    // const [lugar, setLugar] = React.useState([]);
    // const [compradorNome, setCompradorNome] = React.useState([]);
    // const [compradorCpf, setCompradorCpf] = React.useState([]);
    return (
        <BrowserRouter>
           <NavContainer><Link to="/">Agência de viagens</Link></NavContainer>
           <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/hospedagem-detalhes/:id" element={<SessionsPage />} />
            <Route path="/hospedagem" element={<SeatsPage />} />
            <Route path="/passagens-detalhes/:id" element={<SuccessPage/>} />
           </Routes>
        </BrowserRouter>
    )
}

const NavContainer = styled.div`
    width: 100%;
    height: 68px;
    display: flex;
    align-items: center;
    padding-left: 10px;
    background-color: lightskyblue;
    color: black;
    font-family: 'Roboto', sans-serif;
    font-size: 34px;
    position: fixed;
    top: 0;
    a {
        text-decoration: none;
        color: black;
    }
`
