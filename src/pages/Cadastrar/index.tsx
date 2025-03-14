import React, { useState, useRef, useCallback, useEffect } from 'react';
import {api} from "../../services/api";
import * as Yup from "yup";
import { Form } from "@unform/web";
import { useHistory } from 'react-router';
import { FormHandles } from '@unform/core';

import Menu from '../../components/Menu';
import Header from '../../components/Header';
import getValidationErrors from '../../utils/getValidationErrors';
import InputRegister from '../../components/InputRegister';
import ButtonRegister from '../../components/Buttons/ButtonRegister';
import BotaoCancel from "../../components/Buttons/ButtonCancel";

import { All, Container } from './styles';
import { FiCheck, FiX } from 'react-icons/fi';
import { RiAddLine, RiContactsBookLine } from 'react-icons/ri';
import { number } from 'yargs';
import { MenssagemErro, MenssagemSucesso } from '../../hooks/toast';

interface NomeConsultor {
  id: number;
  usuario: {
    nome: string;
  }
}

interface CCPaganteAdicionar {
  secaoId: number,
  taxa: number
}
 
interface Consultor {
  id: number;
  nome: string;
  skillNome: string;
  horas: string;
  skill: number;
}

interface ConsultorAdicionar {
  consultorId: number,
  quantidadeHoras: number,
  numeroDaSkill: number
}

interface Secao {
  id: number;
  nome: string;
  taxa: number;
}

interface Projeto {
  alfanumericoAta: string,
  nome: string;
  nomeSolicitante: string;
  descricao: string;
  dataFinalizacao: string;
  dataInicio: string;
  nomeResponsavel: string;
  consultores: {
    consultorId: number;
    quantidadeHoras: number;
  }
  ccpagantes:{
      secaoId: number;
      taxa: number;
  }
}

interface Skills {
  id: number,
  nome: string
}

const Cadastro:React.FC = () => {
  const formRef = useRef<FormHandles>(null);
  const history = useHistory();

  const [ skillBuscar, setSkillBuscar ] = useState<Skills>();
  const[consultores, setConsultores] = useState<Consultor[]>([]);
  const [ ccPagantes, setccPagantes ] = useState<CCPaganteAdicionar[]>([])
  const [ consultoresAdicionar, setConsultoresAdicionar ] = useState<ConsultorAdicionar[]>([])
  const [skillMarcada, setSkillMarcada] = useState(0);
  const [skills, setSkills] = useState<Skills[]>([]);
  const [ secoes, setSecoes ] = useState<Secao[]>([]);



  useEffect(() => {
    async function carregaDados(): Promise<void>{
      const token = localStorage.getItem("@Geprot:token");
      let config = {
        headers: { Authorization: `Bearer ${token}` },
      };
      await api.get(`secao/listar`, config).then(response => {
        setSecoes(response.data);
      })
    }
    carregaDados();
  });

  
  const cadastrarProjeto = useCallback( async(data: Projeto) => {
    try{
      const projetoBrayan = {
        alfanumericoAta: (document.getElementById('numAta') as HTMLInputElement).value,
        nome: (document.getElementById('nomeProjeto') as HTMLInputElement).value,
        nomeSolicitante: (document.getElementById('nomeSolicitante') as HTMLInputElement).value,
        descricao: (document.getElementById('descricao') as HTMLInputElement).value,
        dataFinalizacao: (document.getElementById('dataFinalizacao') as HTMLInputElement).value,
        dataInicio: (document.getElementById('dataInicio') as HTMLInputElement).value,
        nomeResponsavel: (document.getElementById('nomeResponsavel') as HTMLInputElement).value,
        valor: parseFloat((document.getElementById('verbasAprovadas') as HTMLInputElement).value),
        horasPrevistas: parseInt((document.getElementById('horasTotais') as HTMLInputElement).value),
        ccpagantes: ccPagantes,
        consultores: consultoresAdicionar
      }

      const token = localStorage.getItem("@Geprot:token");
      let config = {
        headers: { Authorization: `Bearer ${token}`},
      };

      const today = new Date();
      
  /*    const schema = Yup.object().shape({
        nomeProjeto: Yup.string()
        .required("O nome do projeto é obrigatório"),
        nomeSolicitante:Yup.string()
        .required("O nome do solicitante é obrigatório"),
        nomeResponsavel:Yup.string()
        .required("O nome do responsável é obrigatório"),
        descricao: Yup.string()
        .required("A descrição é obrigatória"),
        dataFinalizacao: Yup.date()
        .typeError('A data deve ser dd/mm/yyyy')
        .required("A data é obrigatória"),
        dataInicio: Yup.date()
        .typeError('A data deve ser dd/mm/yyyy')
        .required("A data é obrigatória")
        .min(today, "A data não pode ser anteceder o dia de hoje")
      }) 
      
       await schema.validate(data, {
           abortEarly: false,
       })  
      console.log(projetoBrayan)
      
      */
          

      await api.post("/projetos/cadastrar", projetoBrayan, config).catch((error ) => MenssagemErro(error.response.data.titulo))

      MenssagemSucesso("Projeto cadastrado com sucesso!")

      history.push('/')

    }
    catch(e){
      if(e instanceof Yup.ValidationError){
        const errors = getValidationErrors(e);
        formRef.current?.setErrors(errors);
        return
      }

     // MenssagemErro(e.response.data.titulo)
    }
  }, [ history]);

  const marcarCcPagantes = useCallback((id: number, taxa: number) => {
    ccPagantes.push({secaoId :id, taxa: taxa})
    setccPagantes(ccPagantes)
  }, [ccPagantes])

const marcarConsultores = useCallback((id: number, horas: number, skillId: number) => {
  consultoresAdicionar.push({consultorId :id, quantidadeHoras: horas, numeroDaSkill: skillId})
  setConsultoresAdicionar(consultoresAdicionar)
  }, [ccPagantes])

  const adcionarListaSecao = () => {

    var idSecao = (document.getElementById("idCentroCusto") as HTMLInputElement).value;

    const pegaNome = async () => {
      const token = localStorage.getItem("@Geprot:token");
      let config = {
        headers: { Authorization: `Bearer ${token}` },
      };

      const response = await api.get<Secao>(`/secao/buscar/${idSecao}`,config);
      const secao = response.data;

      const card:Secao = {
        id: parseInt(idSecao),
        nome: secao.nome,
        taxa: parseInt((document.getElementById('porcentagem') as HTMLInputElement).value)
      }

      marcarCcPagantes(card.id, card.taxa)
      setSecoes([...secoes, card]);
      
      (document.getElementById('idCentroCusto') as HTMLInputElement).value ='';
      (document.getElementById('porcentagem') as HTMLInputElement).value ='';

    }
    pegaNome();
  };

  const adcionarListaConsultor = () => {

    const idConsultor = (document.getElementById('idConsultor') as HTMLInputElement).value;

   const pegaNome = async () => {
      const token = localStorage.getItem("@Geprot:token");
      let config = {
        headers: { Authorization: `Bearer ${token}`},
      };
      const response = await api.get<NomeConsultor>(`/consultor/buscar/${idConsultor}`,config);
      const consultor = response.data;

      const card:Consultor = {
        id: parseInt(idConsultor),
        nome: consultor.usuario.nome,
        skillNome: skillBuscar!?.nome.toString(),
        horas: (document.getElementById('horasConsultor') as HTMLInputElement).value ? (document.getElementById('horasConsultor') as HTMLInputElement).value : "1",
        skill: skillMarcada
      }

      marcarConsultores(card.id, parseInt(card.horas), card.skill)
      
      setConsultores([...consultores, card]);
      (document.getElementById('horasConsultor') as HTMLInputElement).value ='';
      (document.getElementById('idConsultor') as HTMLInputElement).value='';
    }
    pegaNome();

  };

  const removerListaSecao = (index: number) => {
    setSecoes(secoes.filter(secao => secao.id !== index))
    setccPagantes(ccPagantes.filter(ccPagante => ccPagante.secaoId !== index))
  };

  const removeListaConsultor = (index: number) => {
    setConsultores(consultores.filter(consultor => consultor.id !== index))
    setConsultoresAdicionar(consultoresAdicionar.filter(consultor => consultor.consultorId !== index))
  };


  const listarSkills = async (idConsultor: number) => {
    const token = localStorage.getItem("@Geprot:token");
    let config = {
      headers: { Authorization: `Bearer ${token}`},
    };
    await api.get(`consultor/skills/${idConsultor}`, config).then(response => {
      setSkills(response.data);
    })
  }

  const [ abrirSkills, setAbrirSkills ] = useState(true);

  const abreSkills = ( idConsultor:number ) => {
    if(!abrirSkills){
     setAbrirSkills(true);
    }else{
      setAbrirSkills(false);
      listarSkills(idConsultor)
    }

    return abrirSkills;
  };
  
  const cadastraSkill = (idConsultor: number) => {
    if(!abrirSkills){
     setAbrirSkills(true);
     adcionarListaConsultor();
    }else{
      setAbrirSkills(false);
      listarSkills(idConsultor)
    }
    return abrirSkills;
  };

  function setar(id :number){
    setSkillMarcada(id)
    buscarSkill(id)
  }

  const buscarSkill = async (skillMarcada: number) => {
    const token = localStorage.getItem("@Geprot:token");
    let config = {
      headers: { Authorization: `Bearer ${token}`},
    };
    await api.get(`skill/buscar/${skillMarcada}`, config).then(response => {
      setSkillBuscar(response.data);
    })
  }

  

  return( 
    <>
      <Header/>

      <All>
        <div className="title">
          <b className="helvetica fonte_20 cor_5">CADASTRO DE PROJETO</b>
        </div>
        <Container  popup={abrirSkills}>
          <Form ref={formRef} onSubmit={cadastrarProjeto}>
            <div className="column">
              <div className="line">
                <p className="helvetica fonte_15 cor_5 bold">Número da ATA:</p>
                <InputRegister name="numAta" id="numAta" placeholder="Digite o número..."/>  
              </div>

              <div className="line">
                <p className="helvetica fonte_15 cor_5 bold">Nome do projeto:</p>
                <InputRegister name="nomeProjeto" id="nomeProjeto" placeholder="Digite o nome..."/>
              </div>

              <div className="line">
                <p className="helvetica fonte_15 cor_5 bold">Nome do solicitante:</p>
                <InputRegister name="nomeSolicitante" id="nomeSolicitante" placeholder="Digite o nome..."/>
              </div>

              <div className="line">
                <p className="helvetica fonte_15 cor_5 bold">Nome do responsável:</p>
                <InputRegister name="nomeResponsavel" id="nomeResponsavel" placeholder="Digite o nome..."/>
              </div>

              <div className="line">
                <div className="float">
                  <p className="helvetica fonte_15 cor_5 bold">Consultor:</p>
                  <InputRegister id="idConsultor" name="idConsultor" type="number" placeholder="Digite o ID..."/>
                </div>
                <div className="float">
                  <p className="helvetica fonte_15 cor_5 bold">Horas:</p>
                  <InputRegister id="horasConsultor" name="horasConsultor" type="number" placeholder="1" />
                  <div className="boxAdd cor_6f">
                    <RiAddLine color="#fff" onClick={() => abreSkills(parseInt((document.getElementById("idConsultor") as HTMLInputElement).value)) }/>
                  </div>
                </div>

                <div id="popup" className="popup">
                  <div className='popSkills'>
                    <div id="barra" >
                      <FiX size={25}  onClick={() => abreSkills} cursor="pointer"/>
                      <p className="helvetica fonte_20">Skills do consultor</p>
                      <FiCheck size={25} onClick={() => cadastraSkill(0)} cursor="pointer"/>
                    </div> 
                    <div id='apoio'>
                      <table id='data_table'>
                        <thead>
                          <tr>
                            <th className="skill">Skills</th>
                            <th className='selecao'>Selecionar</th>
                          </tr>
                        </thead>
                        <tbody>
                          {skills.map(skill => (
                            <tr>
                              <td className="skill"><label>{skill.nome}</label></td>
                              <td className="selecao"><input type="radio" id="vehicle1" name="vehicle1" value={skill.id} onClick={() => setar(skill.id)}/></td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
              </div>

              <table className='table'>
                <thead>
                  <tr>
                    <th className=" "></th>
                    <th className='selecao'>Consultor</th>
                    <th className='selecao'>Habilidade</th>
                    <th className='selecao'>Horas</th>
                  </tr>
                </thead>
                  <tbody>
                    {consultores.map(consultor => (
                      <tr>
                        <td className=""><FiX color="#2311c0" onClick={() => removeListaConsultor(consultor.id)}/></td>
                        <td className="">{consultor.nome}</td>
                        <td className="">{consultor.skillNome}</td>
                        <td className="">{consultor.horas}</td>
                      </tr>
                    ))}
                  </tbody>
              </table>
            </div>

            <div className="column">
              <div className="line">
                <div className="float">
                  <p className="helvetica fonte_15 cor_5 bold">Data de inicio:</p>
                  <InputRegister type="date" name="dataInicio" id="dataInicio"/>
                </div>
                <div className="float">
                  <p className="helvetica fonte_15 cor_5 bold">Data de encerramento:</p>
                  <InputRegister type="date" name="dataFinalizacao" id="dataFinalizacao" />
                </div>
              </div>

              <div className="lineDescricao">
                <p className="helvetica fonte_15 cor_5 bold">Descrição</p>
                <textarea id="descricao" className="helvetica"></textarea>
              </div>

              <div className="line">
                <div className="float">
                  <p className="helvetica fonte_14 cor_5 bold">Horas totais aprovadas:</p>
                  <InputRegister id="horasTotais" name="horasTotais" type="number" placeholder="0 H"/>
                </div>
                <div className="float">
                  <p className="helvetica fonte_13 cor_5 bold">Verbas totais aprovadas:</p>
                  <InputRegister id="verbasAprovadas" name="verbasAprovadas" type="number" placeholder="R$" />
                </div>
              </div>

              <div className="line">
                <div className="float">
                  <p className="helvetica fonte_15 cor_5 bold">Centro de Custo:</p>
                  <InputRegister id="idCentroCusto" name="idCentroCusto" type="number" placeholder="Digite o ID..."/>
                </div>
                <div className="float">
                  <p className="helvetica fonte_15 cor_5 bold">Percentual Aprovado:</p>
                  <InputRegister id="porcentagem" name="porcentagem" type="number" placeholder="%" />
                  <div className="boxAdd cor_6f" >
                    <RiAddLine color="#fff" onClick={() => adcionarListaSecao()}/>
                  </div>
                </div>
              </div>

              <div className="table">

              <div className="header">
                <div className="title3 bold helvetica cor_0 fonte_15">
                  Centro de custo
                </div>
                <div className="title3 bold helvetica cor_0 fonte_15">
                  Percentual
                </div>
              </div>

              {secoes.map(secao => (
                ccPagantes.map(ccPagante => (
                  <div className="columns helvetica cor_0 lighter">
                  <div className="column1">
                    <div className="boxEx cor_6f" onClick={() => removerListaSecao(secao.id)}>
                      <FiX color="#fff"/>
                    </div>
                    {secao.nome}
                  </div>
                  <div className="column2">
                    {ccPagante.taxa}%
                  </div>
                </div>
                ))
                
              ))}
              </div>
            </div>
            <div className="position">
              <BotaoCancel/>
              <ButtonRegister type="submit" className="cor_000 helvetica fonte_20"></ButtonRegister>
            </div>
          </Form>
        </Container>
        <Menu/>
      </All>
    </>
  );
};

export default Cadastro;