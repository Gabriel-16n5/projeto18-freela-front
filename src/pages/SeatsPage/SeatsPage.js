import axios from "axios"
import { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import styled from "styled-components"
import React from "react"

export default function HomePage() {
    const [listaCidades, setListaCidades] = useState([]);
    const [cidadeSelecionada, setCidadeSelecionada] = useState('');
    const [listaPassagens, setListaPassagens] = useState([]);

    async function all() {
        if(listaPassagens.length === 0){
          console.log("dentro")
          try{
            const  promise = axios.get(`https://freela-cxlk.onrender.com/hospedagem`);
            promise.then((ok) => { setListaPassagens(ok.data) });
       } catch (erro) {
          return console.log(erro);
       }
        }
        }

    useEffect(() => {
        try{
            const promise = axios.get("https://freela-cxlk.onrender.com/cidades"); 
            promise.then((ok) => { setListaCidades(ok.data) });
            
        } catch (erro) {
            console.log(erro);
        }



    }, []);

    const handler = (event) => {
        setCidadeSelecionada(event.target.value);
        console.log(event.target.value)
        try{
          const promise = axios.get(`https://freela-cxlk.onrender.com/hospedagem/${event.target.value}`); 
          promise.then((ok) => { setListaPassagens(ok.data) });
          
      } catch (erro) {
          console.log(erro);
      }
        };
        all()
    return (
    <PageContainer>
      <Title>Selecione a cidade da Hospedagem</Title>
      <Select value={cidadeSelecionada} onChange={handler}>
        <Option value="">Escolha uma cidade</Option>
        {listaCidades.map((item) => (
          <Option key={item.id} value={item.id}>
            {item.name}
          </Option>
        ))}
      </Select>
      <ListContainer>
                {listaPassagens.map((passagens, i) =>
                        <MovieContainer key={i}>
                            <Link to={`/hospedagem-detalhes/${passagens.id}`}><img src={passagens.img_hotel} alt="foto-hospedagem" /></Link>
                            <p>{passagens.nome_hotel}</p>
                            <p>R$ {passagens.diaria}</p>
                            <p>{listaCidades[[passagens.cidades_id]-1].name} - SP</p>
                        </MovieContainer>
                )}
        </ListContainer>
    </PageContainer>
    )
}

const PageContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    font-family: 'Roboto';
    font-size: 24px;
    text-align: center;
    color: #293845;
    margin-top: 30px;
    padding-top: 70px;
`
const ListContainer = styled.div`
    width: 1000px;
    display: flex;
    flex-wrap: wrap;
    flex-direction: row;
    padding: 10px;
`
const MovieContainer = styled.div`
    width: 250px;
    height: 300px;
    box-shadow: 0px 2px 4px 2px #0000001A;
    border-radius: 3px;
    display: flex;
    flex-direction: column;
    margin: 30px;
    img {
        width: 250px;
        height: 195px;
    }
    p{
        margin-top: 8px;
        font-size: 14px;
    }
`

const Title = styled.h1`
  font-size: 24px;
  margin-bottom: 16px;
`;

const Select = styled.select`
  font-size: 16px;
  padding: 8px;
  width: 300px;
`;

const Option = styled.option`
  font-size: 16px;
`;