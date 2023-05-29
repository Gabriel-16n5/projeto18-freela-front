import styled from "styled-components"
import axios from "axios";
import { useEffect, useState } from "react";
import { Link, Params, useNavigate, useParams } from "react-router-dom";
import { LoremIpsum } from "lorem-ipsum";
import { AiFillExclamationCircle } from "react-icons/ai";

const lorem = new LoremIpsum({
    sentencesPerParagraph: {
      max: 8,
      min: 4
    },
    wordsPerSentence: {
      max: 16,
      min: 4
    }
  });

const lor = lorem.generateSentences(3);

export default function SuccessPage() {
    const sessão = useParams();
    const navegate = useNavigate();
    const [listaCidades, setListaCidades] = useState([1]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const wait = async () => {
          setIsLoading(true);
          try {
            const promise = axios.get(`https://freela-cxlk.onrender.com/hospedagem/${sessão.id}`); 
            promise.then((ok) => { setListaCidades(ok.data) });
            setIsLoading(false);
            
          } catch (erro) {
            console.error(erro);
            setIsLoading(false);
          }
          
        };
        wait();
        
      }, []);

       if (listaCidades === 1){
        console.log("tempo perdido mano")
        return <p>carregando</p>
    }
    else{
    console.log(listaCidades[0].piscina)
    return (
        
        <PageContainer>
            <h1>{listaCidades[0].nome_hotel}</h1>

            <ListContainer>
                        <MovieContainer>
                            {/* colocar aqui o array de imagens do banco */}
                            <img src={listaCidades[0].img_hotel} alt="foto-hospedagem" />
                            <img src={listaCidades[0].img_hotel} alt="foto-hospedagem" />
                            <img src={listaCidades[0].img_hotel} alt="foto-hospedagem" />
                            <img src={listaCidades[0].img_hotel} alt="foto-hospedagem" />
                        </MovieContainer>
                
            </ListContainer>
            <TextContainer>
                <Caracteristicas>
                <h1>Caracteristicas:</h1>
                <p>Local: - <Link to="/">{listaCidades[0].nome_hotel}</Link></p>
                <h2>Preço: {listaCidades[0].diaria}</h2>
                <p>Descrição: {lor}</p>
                </Caracteristicas>

                <Caracteristicas>
                <h1>Comodidades:</h1>
                <p>Piscina: <AiFillExclamationCircle color={listaCidades[0].piscina === false ? "red" : "green"} /> </p>
                <p>café da manhã: <AiFillExclamationCircle color={listaCidades[0].cafe === false ? "red" : "green"} /> </p>
                <p>Ar condicionado: <AiFillExclamationCircle color={listaCidades[0].ar_condicionado === false ? "red" : "green"} /></p>
                <p>Quantidade de camas: {listaCidades[0].qtd_camas}</p> 
                </Caracteristicas>

            </TextContainer>

            <Link to="/"><button style={{backgroundColor:"green"}} >Concluir Compra!</button></Link>
            <Link to="/"><button style={{backgroundColor:"gray"}} >Voltar para Home</button></Link>
        </PageContainer>
    )
}
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
    }
    button {
        margin-top: 20px;
    }
    h1 {
        font-family: 'Roboto';
        font-style: normal;
        font-weight: 800;
        font-size: 44px;
        line-height: 28px;
        display: flex;
        align-items: center;
        text-align: center;
        color: #247A6B;
        margin-bottom: 20px;
    }
`
const TextContainer = styled.div`
display: flex;
margin-left: 90px;
margin-top: 30px;
width: 85%;;
height: 350px;
`

const MovieContainer = styled.div`
    width: 250px;
    height: 200px;
    display: flex;
    margin: 25px;
    img {
        width: 250px;
        height: 200px;
        margin-right: 15px;
        box-shadow: 0px 2px 4px 2px #0000001A;
        border-radius: 3px;
    }
    p{
        margin-top: 8px;
        font-size: 14px;
    }
`

const ListContainer = styled.div`
    width: 90%;
    display: flex;
    flex-wrap: wrap;
    flex-direction: row;
    padding: 10px;
    background-color: lightgray;
    
`

const Caracteristicas = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    background-color: whitesmoke;
    width: 450px;
    height: 250px;
    margin-right:50px;
    h1 {
        margin-bottom: 5px;
        font-family: 'Roboto';
        font-style: normal;
        font-weight: 800;
        font-size: 14px;
        line-height: 28px;
        display: flex;
        align-items: center;
        text-align: center;
        color: #247A6B;
    }
    h2 {
        margin-bottom: 5px;
        font-family: 'Roboto';
        font-style: normal;
        font-weight: 800;
        font-size: 24px;
        line-height: 28px;
        display: flex;
        align-items: center;
        text-align: center;
        color: #247A6B;
    }
    p {
        margin-bottom: 5px;
        font-family: 'Roboto';
        font-style: normal;
        font-weight: 300;
        font-size: 14px;
        line-height: 28px;
        display: flex;
        align-items: center;
        color: black;
    }
`