import React, { useState } from "react";
import { Contant } from "./style";
import { useParams } from "react-router";
import { useEffect } from "react"
import api from "../../../services/api";
import Atribuicao from "../../Atribuicao";
import { ReactNode } from "hoist-non-react-statics/node_modules/@types/react";


interface Projeto {
  id: number,
  nome: string,
  nomeResponsavel: string,
  dataCadastro: Date,
  allocated: boolean
}

interface PesquisaProps {
  pesquisarPorNome?: string,
  pesquisaPorNomeResponsavel?: string,
  pesquisaId?: string
  children?: ReactNode
}

const Informations: React.FC<PesquisaProps> = ({pesquisaPorNomeResponsavel, pesquisaId, pesquisarPorNome}: PesquisaProps) => {
  const { id }: {id:string} = useParams();
  const [ valores, setValores ] = useState<Projeto[]>([]);
  const token = localStorage.getItem("@Geprot:token");
  let usuario = localStorage.getItem('@Geprot:gestor');
  const [perfil] = useState(() => {
    let usuario = localStorage.getItem('@Geprot:gestor');
    if (usuario) {
        let languageObject = JSON.parse(usuario);
        return languageObject;
      }
  });
  let config = {
    headers: { Authorization: `Bearer ${token}` },
  };
  useEffect(() => {
    async function carregaDados(): Promise<void> {
      await api.get(`projetos/alocados/${perfil.secao.id}/${id}`,config).then(response => {
        setValores(response.data)
      })
    }
    carregaDados();
  }, [])

  return (

    <>
    {
      valores.map(valor => (


    <Contant >
      <div className="columns">
      <div className="column1">
          <p className="helvetica light fonte_15 cor_0">{valor.id}</p>
      </div>

      <div className="column2">
        <p className="helvetica light fonte_15 cor_0">{valor.nome}</p>
      </div>

      <div className="column2">
        <p className="helvetica light fonte_15 cor_0">{valor.nomeResponsavel}</p>
      </div>

      <div className="column1">
        <p className="helvetica light fonte_15 cor_0"> {valor.dataCadastro} </p>
      </div>

      <div className="column1">
        {console.log(id)}
        <Atribuicao projetoId={valor.id} consultorId={id}/>
      </div>

    </div>

    </Contant>


    ))
    }


  </>
  )
};

export default Informations;
