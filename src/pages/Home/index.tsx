import React, { useState, useEffect } from 'react';
import Cards from '../../components/Cards/Cards';
import Header from '../../components/Header';
import Menu from '../../components/Menu';

import { All, Filtros, Content_cards, ContFilter, Container } from './style';
import FilterSearch from '../../components/Filters/FilterSearch';

import { FiChevronRight } from "react-icons/fi";

let statusVar :number;


export const filter = (status: number) => {
  statusVar = status;
  console.log(statusVar)
}

{/* STATUS DESCOMPONENTIZADO */}
const addStatus = async (statusInt: number) => {
  await filter(statusInt);
};

{/* STATUS DESCOMPONENTIZADO */}

const Home: React.FC = () => {
  if(statusVar == null){
    statusVar = 0
  }

  const [ status , setStatus ] = useState<number>();
  useEffect(() => {
    setStatus(statusVar)
    console.log(status)
  },[])

   return (
    <>
    <Header/>
      <Filtros>
        <div className="content_title">
            <div className="arrow">
              <FiChevronRight size="15px" color="#0091BD"/>
            </div>
            <div className="texto cor_4">
                Projetos
            </div>
        </div>
        {/* STATUS DESCOMPONENTIZADO */}

        <Container>
      <div className="arrow">
        <FiChevronRight size="15px" color="#0091BD"/>
      </div>

      <div className="texto cor_4">
          Status:
      </div>

      <ContFilter>
        <div className="lang-menu">
          <div className="selected-lang">
            Todos
          </div>
          <ul>
            <li>
              <a className="de" onClick={() => addStatus(0)}>Todos</a>
            </li>
            <li>
              <a className="br" onClick={() => addStatus(4)}>Andamentos</a>
            </li>
            <li>
              <a className="en" onClick={() => addStatus(2)}>Atrasados</a>
            </li>
            <li>
              <a className="fr" onClick={() => addStatus(3)}>Concluídos</a>
            </li>
            <li>
              <a className="fr" onClick={() => addStatus(1)}>Não Iniciado</a>
            </li>
          </ul>
        </div>
      </ContFilter>

    </Container>

        {/* STATUS DESCOMPONENTIZADO */}

        <FilterSearch/>
      </Filtros>
      <All>
        <Content_cards>
          <Cards status={statusVar}/>
        </Content_cards>
        <Menu/>
      </All>
    </>
  );
};

export default Home;
;
