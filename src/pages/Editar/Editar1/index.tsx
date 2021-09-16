import React, { useState, useEffect, FormEvent } from 'react';
import CardsEdit from '../../../components/Cards/CardsEdit';
import Header from '../../../components/Header';
import Menu from '../../../components/Menu';

import { All, Filtros, Content_cards } from './style';
import FilterSearch from '../../../components/Filters/FilterSearch';
import FilterStatus from '../../../components/Filters/FilterStatus';
import { FiChevronRight } from "react-icons/fi";



const Editar1: React.FC = () => {
  return(
    <>
    <Header>
      </Header>

      <Filtros>

        <div className="content_title">
            <div className="arrow">
              <FiChevronRight size="15px" color="#0091BD"/>
            </div>

            <div className="texto cor_4">
                Escolha o projeto a ser editado
            </div>
        </div>

        <FilterStatus />

        <FilterSearch/>

      </Filtros>

      <All>

        <Content_cards>


        <a href="/editar2">
            <CardsEdit/>
            LINK PARA VISUALIZAÇÃO DE EDITAR
        </a>

        </Content_cards>

        <Menu/>

      </All>
    </>
  )
}

export default Editar1;
