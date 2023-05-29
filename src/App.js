import styled from "styled-components"
import HomePage from "./pages/HomePage/HomePage"
import HospedagemPage from "./pages/HospedagemPage/HospedagemPage"
import HospedagemSuccessPage from "./pages/HospedagemSuccessPage/HospedagemSuccessPage"
import PassagemSuccessPage from "./pages/PassagemSuccessPage/PassagemSuccessPage"
import { Route, Routes, BrowserRouter, Link } from "react-router-dom"
import React from "react"

export default function App() {
    return (
        <BrowserRouter>
           <NavContainer><Link to="/">Agência de viagens</Link></NavContainer>
           <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/hospedagem-detalhes/:id" element={<HospedagemSuccessPage />} />
            <Route path="/hospedagem" element={<HospedagemPage />} />
            <Route path="/passagens-detalhes/:id" element={<PassagemSuccessPage/>} />
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
