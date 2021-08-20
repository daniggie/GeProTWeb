import React from "react";
import { TituloF, Menu, All, Filtros, BodyDashboards, Container, LitlleCont, MediumCont, BigCont, BarTitle } from './styles';

import { FiPieChart, FiBarChart2, FiPlusSquare, FiEye, FiEdit, FiUserPlus, FiLogOut, FiChevronDown } from "react-icons/fi"

import { BiBarChart } from "react-icons/bi" ; 

import Header from "../../components/Header";

const Dashboard: React.FC = () => {

  return(
    <>
      <Header> </Header>

      <TituloF>
        <p>Filtros</p>
        <div></div>
      </TituloF>

      <Filtros>
        <div className="content_procurar">
          <div className="texto cor_4">
            Procurar:
          </div>
          <div>
            <input className="procurar cor_0" type="text" id="fname" name="fname" placeholder="Digite o nome do projeto..." />
          </div>
        </div>

        <div className="content_title">
          <div className="texto cor_4">
            Status:
          </div>
          <form>
            <select className="status cor_3f" name="status">
              <option value="status">Todos</option>
              <option value="status">Andamento</option>
              <option value="status">Atrasado</option>
              <option value="status">Concluído</option>
            </select>
          </form>
        </div>

        <div className="content_title">
          <div className="texto cor_4">
            Tempo:
          </div>

          <form>
            <select className="status cor_3f" name="status">
              <option value="status">Últimos 7 dias</option>
              <option value="status">Último mês</option>
              <option value="status">Últimos 6 meses</option>
              <option value="status">Último ano</option>
            </select>
          </form>
        </div>

        <div className="content_title">
          <div className="texto cor_4">
            Centro de Custos:
          </div>

          <form>
            <select className="status cor_3f" name="status">
              <option value="status">Todos</option>
              <option value="status">Centro ABCD</option>
              <option value="status">Centro EFGH</option>
              <option value="status">Centro IJKL</option>
            </select>
          </form>
        </div>
      </Filtros>

      <All>
        <BodyDashboards>
          <Container>
            <MediumCont>
              <BarTitle className="status cor_3f">
                <p>PROJETOS CONCLUÍDOS</p> 
              </BarTitle>
              <FiPieChart size="150px" />
            </MediumCont>
            <BigCont>
              <BarTitle className="status cor_3f">
                <p>PROJETOS EM ANDAMENTO</p> 
              </BarTitle>
              <FiBarChart2 size="150px" />
            </BigCont>
          </Container>
          <Container>
            <MediumCont>
              <BarTitle className="status cor_3f">
                <p>PROJETOS ATRASADOS</p> 
              </BarTitle>
              <div><FiPieChart size="150px"/></div>
            </MediumCont>
            <LitlleCont>
              <BarTitle className="status cor_3f">
                <p>VERBA DISPONÍVEL</p>
              </BarTitle>
            </LitlleCont>
            <LitlleCont>
              <BarTitle className="status cor_3f">
                <p>VERBA NÃO LIBERADA</p>
              </BarTitle>
            </LitlleCont>
            <LitlleCont>
              <BarTitle className="status cor_3f">
                <p>VERBA APROVADA</p>
              </BarTitle>
            </LitlleCont>
          </Container>
        </BodyDashboards>

        <Menu>
          <div id="menu">

            <div className="content_atalho cor_1f" id="border1">
              <div className="atalho cor_1f" id="border1">
                <FiEye size="32px"/>
              </div>
              <p id="idparagrafo"> VISUALIZAR PROJETOS </p>
            </div>

            <div className="content_atalho cor_2f">
              <div className="atalho cor_2f">
                <FiPlusSquare size="32px"/>
              </div>
              <p id="idparagrafo"> CADASTRAR PROJETOS </p>
            </div>

            <div className="content_atalho cor_1f">
              <div className="atalho cor_1f">
                <FiEdit size="32px"/>
              </div>
              <p id="idparagrafo"> EDITAR PROJETOS </p>
            </div>

            <div className="content_atalho cor_3f">
              <div className="atalho cor_3f">
                <FiUserPlus size="32px"/>
              </div>
              <p id="idparagrafo"> ALOCAR CONSULTORES </p>
            </div>

            <div className="content_atalho cor_4f" id="border2">
              <div className="atalho cor_4f" id="border2">
                <BiBarChart size="32px"/>
              </div>
              <p id="idparagrafo"> IR PARA DASHBOARDS </p>
            </div>
          </div>
        </Menu>
      </All>
    </>
  );
};

export default Dashboard;
