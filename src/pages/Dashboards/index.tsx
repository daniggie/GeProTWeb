import React from "react";
import { TituloF, All, Filtros, BodyDashboards, Container, LitlleCont, MediumCont, BigCont } from './styles';
import Menu from '../../components/Menu';

import { FiPieChart, FiBarChart2, FiPlusSquare, FiLogOut, FiChevronDown } from "react-icons/fi"
import Header from "../../components/Header";
import FilterSearch from "../../components/FilterSearch";
import FilterStatus from "../../components/FilterStatus";
import FilterTime from "../../components/FilterTime";
import FilterCC from "../../components/FilterCC";

const Dashboard: React.FC = () => {

  return(
    <>
      <Header/>

      <TituloF>
        <p>Filtros</p>
        <div></div>
      </TituloF>

      <Filtros>

        <FilterSearch/>

        <FilterStatus/>

        <FilterTime/>

        <FilterCC/>

      </Filtros>

      <All>
        <BodyDashboards>
          <Container>
            <MediumCont>
              <div className="status cor_3f">
                <p>PROJETOS CONCLUÍDOS</p>
              </div>
              <FiPieChart size="150px" />
            </MediumCont>
            <BigCont>
              <div className="status cor_3f">
                <p>PROJETOS EM ANDAMENTO</p>
              </div>
              <FiBarChart2 size="150px" />
            </BigCont>
          </Container>
          <Container>
            <MediumCont>
              <div className="status cor_3f">
                <p>PROJETOS ATRASADOS</p>
              </div>
              <FiPieChart size="150px"/>
            </MediumCont>
            <LitlleCont>
              <div className="status cor_3f">
                <p>VERBA DISPONÍVEL</p>
              </div>
            </LitlleCont>
            <LitlleCont>
              <div className="status cor_3f">
                <p>VERBA NÃO LIBERADA</p>
              </div>
            </LitlleCont>
            <LitlleCont>
              <div className="status cor_3f">
                <p>VERBA APROVADA</p>
              </div>
            </LitlleCont>
          </Container>
        </BodyDashboards>

        <Menu>
        </Menu>
      </All>
    </>
  );
};

export default Dashboard;
