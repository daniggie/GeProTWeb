import React  from 'react';
import { Titulo, Formulario } from './style';
import Barra from "../../components/Barra";
import BotaoAvancar from '../../components/ButtonAvancar';
import { BsFillCaretRightFill, BsX } from "react-icons/bs";
import { FiX } from "react-icons/fi";
import { RiAddLine } from "react-icons/ri";

const Cadastrar6: React.FC = () => {
    return (
      <>
        <a href="/cadastrar5">
        <Barra>
        </Barra>
      </a>

      <Titulo>
          <p className="helvetica fonte_20 cor_5 bold">Resumo</p>
        </Titulo>
        <Titulo>
          <b className="helvetica fonte_15 cor_0">Cadastro de projetos</b>
          <BsFillCaretRightFill color="#828282"/>
          <b className="helvetica fonte_15 cor_0">Aprovações</b>
          <BsFillCaretRightFill color="#828282"/>
          <b className="helvetica fonte_15 cor_0">Verbas</b>
          <BsFillCaretRightFill color="#828282"/>
          <b className="helvetica fonte_15 cor_0">Centro de custos</b>
          <BsFillCaretRightFill color="#828282"/>
          <b className="helvetica fonte_15 cor_0">Alocação </b>
          <BsFillCaretRightFill color="#828282"/>
          <b className="helvetica fonte_15 cor_5 normal"> <u> Resumo </u> </b>
        </Titulo>
        <Formulario>
          <p className="helvetica fonte_25 cor_3 bold"> NOME DO PROJETO</p>
          <p className="helvetica fonte_20 cor_3 lighter">Seção X <b className="helvetica fonte_20 cor_0 lighter">123456</b></p>
          <div className="content">

            <div className="line">
              <b className="helvetica fonte_20 cor_3 bold">Geral</b>
            </div>

            <div className="line">
              <div className="tamanho">
                <b className="helvetica fonte_13 cor_3 bold">ID PPM:</b>
              </div>
              <div className="tamanho">
                <b className="helvetica fonte_13 cor_0 lighter">00000001</b>
              </div>
            </div>

            <div className="line">
              <div className="tamanho">
                <b className="helvetica fonte_13 cor_3 bold">RESPONSÁVEL:</b>
              </div>
              <div className="tamanho">
                <b className="helvetica fonte_13 cor_0 lighter">Lara Hanna</b>
              </div>
            </div>

            <div className="line">
              <div className="tamanho">
                <b className="helvetica fonte_13 cor_3 bold">SOLICITANTE:</b>
              </div>
              <div className="tamanho">
                <b className="helvetica fonte_13 cor_0 lighter">Rodrigo Loudres</b>
              </div>
            </div>

            <div className="line">
              <div className="tamanho">
                <b className="helvetica fonte_13 cor_3 bold">PREVISÃO</b>
              </div>
              <div className="tamanho">
                <b className="helvetica fonte_13 cor_0 lighter">13/05/2021 á 25/02/2022</b>
              </div>
            </div>

            <div className="line">
              <div className="tamanho">
                <b className="helvetica fonte_13 cor_3 bold">VERBA:</b>
              </div>
              <div className="tamanho">
                <b className="helvetica fonte_13 cor_0 lighter">R$    80.000,00</b>
              </div>
            </div>

            <div className="line">
              <b className="helvetica fonte_20 cor_3 bold">Centro de custos</b>
            </div>

            <div className="line">
              <div className="tamanho2">
                <b className="helvetica fonte_13 cor_3 bold">NOME: </b>
                <b className="helvetica fonte_13 cor_0 lighter"> Setor</b>
              </div>
              <div className="tamanho2">
                <b className="helvetica fonte_13 cor_3 bold">RESPONSÁVEL: </b>
                <b className="helvetica fonte_13 cor_0 lighter"> Nome responsável</b>
              </div>
              <div className="tamanho2">
                <b className="helvetica fonte_13 cor_3 bold">PERCENTUAL: </b>
                <b className="helvetica fonte_13 cor_0 lighter"> 00%</b>
              </div>
            </div>

            <div className="line">
              <div className="tamanho2">
                <b className="helvetica fonte_13 cor_3 bold">NOME: </b>
                <b className="helvetica fonte_13 cor_0 lighter"> Setor</b>
              </div>
              <div className="tamanho2">
                <b className="helvetica fonte_13 cor_3 bold">RESPONSÁVEL: </b>
                <b className="helvetica fonte_13 cor_0 lighter"> Nome responsável</b>
              </div>
              <div className="tamanho2">
                <b className="helvetica fonte_13 cor_3 bold">PERCENTUAL: </b>
                <b className="helvetica fonte_13 cor_0 lighter"> 00%</b>
              </div>
            </div>

            <div className="line">
              <div className="tamanho2">
                <b className="helvetica fonte_13 cor_3 bold">NOME: </b>
                <b className="helvetica fonte_13 cor_0 lighter"> Setor</b>
              </div>
              <div className="tamanho2">
                <b className="helvetica fonte_13 cor_3 bold">RESPONSÁVEL: </b>
                <b className="helvetica fonte_13 cor_0 lighter"> Nome responsável</b>
              </div>
              <div className="tamanho2">
                <b className="helvetica fonte_13 cor_3 bold">PERCENTUAL: </b>
                <b className="helvetica fonte_13 cor_0 lighter"> 00%</b>
              </div>
            </div>

            <div className="line">
              <div className="tamanho2">
                <b className="helvetica fonte_13 cor_3 bold">NOME: </b>
                <b className="helvetica fonte_13 cor_0 lighter"> Setor</b>
              </div>
              <div className="tamanho2">
                <b className="helvetica fonte_13 cor_3 bold">RESPONSÁVEL: </b>
                <b className="helvetica fonte_13 cor_0 lighter"> Nome responsável</b>
              </div>
              <div className="tamanho2">
                <b className="helvetica fonte_13 cor_3 bold">PERCENTUAL: </b>
                <b className="helvetica fonte_13 cor_0 lighter"> 00%</b>
              </div>
            </div>


          </div>

          <div className="content">

            <div className="line">
              <b className="helvetica fonte_20 cor_3 bold">Aprovação</b>
            </div>

            <div className="line">
              <div className="tamanho">
                <b className="helvetica fonte_13 cor_3 bold">ID aprovação:</b>
              </div>
              <div className="tamanho">
                <b className="helvetica fonte_13 cor_0 lighter">00000001</b>
              </div>
            </div>

            <div className="line">
              <div className="tamanho">
                <b className="helvetica fonte_13 cor_3 bold">Data da aprovação:</b>
              </div>
              <div className="tamanho">
                <b className="helvetica fonte_13 cor_0 lighter">20/05/2021</b>
              </div>
            </div>

            <div className="line">
              <div className="tamanho">
                <b className="helvetica fonte_13 cor_3 bold">ID Comissão:</b>
              </div>
              <div className="tamanho">
                <b className="helvetica fonte_13 cor_0 lighter">00000001</b>
              </div>
            </div>

            <div className="line">
              <div className="tamanho">
                <b className="helvetica fonte_13 cor_3 bold">PREVISÃO</b>
              </div>
              <div className="tamanho">
                <b className="helvetica fonte_13 cor_0 lighter">13/05/2021 á 25/02/2022</b>
              </div>
            </div>

            <div className="line">
              <div className="tamanho">
                <b className="helvetica fonte_13 cor_0 bold">ATA_COMISSÃO_001</b>
              </div>
            </div>

            <div className="line">
              <b className="helvetica fonte_20 cor_3 bold">Centro de custos</b>
            </div>

            <div className="line">
              <div className="tamanho2">
                <b className="helvetica fonte_13 cor_3 bold">NOME: </b>
                <b className="helvetica fonte_13 cor_0 lighter"> Setor</b>
              </div>
              <div className="tamanho2">
                <b className="helvetica fonte_13 cor_3 bold">RESPONSÁVEL: </b>
                <b className="helvetica fonte_13 cor_0 lighter"> Nome responsável</b>
              </div>
              <div className="tamanho2">
                <b className="helvetica fonte_13 cor_3 bold">PERCENTUAL: </b>
                <b className="helvetica fonte_13 cor_0 lighter"> 00%</b>
              </div>
            </div>

            <div className="line">
              <div className="tamanho2">
                <b className="helvetica fonte_13 cor_3 bold">NOME: </b>
                <b className="helvetica fonte_13 cor_0 lighter"> Setor</b>
              </div>
              <div className="tamanho2">
                <b className="helvetica fonte_13 cor_3 bold">RESPONSÁVEL: </b>
                <b className="helvetica fonte_13 cor_0 lighter"> Nome responsável</b>
              </div>
              <div className="tamanho2">
                <b className="helvetica fonte_13 cor_3 bold">PERCENTUAL: </b>
                <b className="helvetica fonte_13 cor_0 lighter"> 00%</b>
              </div>
            </div>

            <div className="line">
              <div className="tamanho2">
                <b className="helvetica fonte_13 cor_3 bold">NOME: </b>
                <b className="helvetica fonte_13 cor_0 lighter"> Setor</b>
              </div>
              <div className="tamanho2">
                <b className="helvetica fonte_13 cor_3 bold">RESPONSÁVEL: </b>
                <b className="helvetica fonte_13 cor_0 lighter"> Nome responsável</b>
              </div>
              <div className="tamanho2">
                <b className="helvetica fonte_13 cor_3 bold">PERCENTUAL: </b>
                <b className="helvetica fonte_13 cor_0 lighter"> 00%</b>
              </div>
            </div>

            <div className="line">
              <div className="tamanho2">
                <b className="helvetica fonte_13 cor_3 bold">NOME: </b>
                <b className="helvetica fonte_13 cor_0 lighter"> Setor</b>
              </div>
              <div className="tamanho2">
                <b className="helvetica fonte_13 cor_3 bold">RESPONSÁVEL: </b>
                <b className="helvetica fonte_13 cor_0 lighter"> Nome responsável</b>
              </div>
              <div className="tamanho2">
                <b className="helvetica fonte_13 cor_3 bold">PERCENTUAL: </b>
                <b className="helvetica fonte_13 cor_0 lighter"> 00%</b>
              </div>
            </div>


          </div>

          <div className="position">
            <a href="/cadastrar5">
            <BotaoAvancar>
            <p className="helvetica fonte_20 bold">Próximo</p>
            </BotaoAvancar>
            </a>
          </div>
        </Formulario>
      </>
    );
}
export default Cadastrar6;
