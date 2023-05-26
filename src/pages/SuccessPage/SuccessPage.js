import styled from "styled-components"
import axios from "axios";
import { useEffect, useState } from "react";
import { Link, Params, useNavigate, useParams } from "react-router-dom";

export default function SuccessPage() {
    const sessão = useParams();
    const navegate = useNavigate();
    const [listaCidades, setListaCidades] = useState([1]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const wait = async () => {
          setIsLoading(true);
    
          try {
            const promise = axios.get(`http://localhost:5000/passagens/${sessão.id}`); 
            promise.then((ok) => { setListaCidades(ok.data) });
            
            setIsLoading(false);
          } catch (erro) {
            console.error(erro);
            setIsLoading(false);
          }
        };
    
        wait();
      }, []);

    return (

        <PageContainer>
            <h1>Detalhes da passagem para {listaCidades[0].local_destino}</h1>

            <TextContainer>
                <h1>Empresa: {listaCidades[0].cia_aerea}</h1>
                <strong><p>{listaCidades[0].data}</p></strong>
                <p>Local de saída: {listaCidades[0].local_origem}</p>
                <p>Horário da saída: {listaCidades[0].horario_saida}</p>
            </TextContainer>

            <TextContainer >
                <strong><p>Preço:</p></strong>

                <p>R$ {listaCidades[0].preco}</p>

            </TextContainer>

            <TextContainer >
                <strong><p>Destino:</p></strong> <p >{listaCidades[0].local_destino} - previsão de chegada: {listaCidades[0].horario_chegada}</p>
            </TextContainer>

            <Link to="/"><button style={{backgroundColor:"green"}} >Concluir Compra!</button></Link>
            <Link to="/"><button  >Voltar para Home</button></Link>
        </PageContainer>
    )
}

const PageContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    font-family: 'Roboto';
    font-size: 24px;
    color: #293845;
    margin: 30px 20px;
    padding-bottom: 120px;
    padding-top: 70px;
    a {
        text-decoration: none;
    }
    button {
        margin-top: 50px;
    }
    h1 {
        font-family: 'Roboto';
        font-style: normal;
        font-weight: 700;
        font-size: 24px;
        line-height: 28px;
        display: flex;
        align-items: center;
        text-align: center;
        color: #247A6B;
    }
`
const TextContainer = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    margin-top: 30px;
    strong {
        font-weight: bold;
        margin-bottom: 10px;
    }
`