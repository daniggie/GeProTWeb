import React, {useState, useEffect} from "react";
import { useParams } from "react-router";
import api from "../../../services/api";
import { Chart } from "react-google-charts";

interface Dashboard {
    projetosConcluidos: number;
    projetosAtrasados: number;
    projetosEmAndamento: number;
    projetosNaoIniciados: number;
    verbasDisponivel: number;
    verbasAprovadas:number;
    restoProjetosAtrasados: number;
    restoProjetosEmAndamento: number;
    restoProjetosNaoIniciados: number;
  }
  
  interface DashboardConcluidos {
    data: string;
    quantidade: number;
  }

const ChartSixMonth: React.FC = () => {
    const { id }: {id:string} = useParams();
    const [valores, setValores ] = useState<Dashboard>();
    const [valoresConcluidos, setValoresConcluidos] = useState<DashboardConcluidos[]>([])
    const token = localStorage.getItem("@Geprot:token");
    let config = {
      headers: { Authorization: `Bearer ${token}` },
    };
  
    const [secao] = useState(() => {
      let usuario = localStorage.getItem('@Geprot:usuario');
  
      if(usuario) {
          let languageObject = JSON.parse(usuario);
          return languageObject;
      }
    });
  
    async function buscarValores1() {
      var response = await api.get(`dashboard/concluidos/7dias/${secao.secao.id ? secao.secao.id : null}`, config).then(response => {
        setValoresConcluidos(response.data)
      })
    }
  
    async function buscarValores2() {
      var response = await api.get(`secao/listar/${secao.secao.id ? secao.secao.id : null}`, config).then(response => {
        setValores(response.data)
      })
    }
  
    useEffect(() => {
      buscarValores1()
      buscarValores2()
    }, [])
  
    const dolar = 5.29;
    const euro = 6.20;

    return(
        <Chart
            width={"100%"}
            height={"180px"}
            chartType="ColumnChart"
            loader={<p>Loading Chart</p>}

            data={[
                ['Weeks', 'Projects', { role: 'style' }],
                [valoresConcluidos[6] ? valoresConcluidos[6].data : undefined, valoresConcluidos[6] ? valoresConcluidos[6].quantidade : undefined, "#0091BD"],
                [valoresConcluidos[5] ? valoresConcluidos[5].data : undefined, valoresConcluidos[5] ? valoresConcluidos[5].quantidade : undefined, '#2382BA'],
                [valoresConcluidos[4] ? valoresConcluidos[4].data : undefined, valoresConcluidos[4] ? valoresConcluidos[4].quantidade : undefined, "#0091BD"],
                [valoresConcluidos[3] ? valoresConcluidos[3].data : undefined, valoresConcluidos[3] ? valoresConcluidos[3].quantidade : undefined, '#2382BA'],
                [valoresConcluidos[2] ? valoresConcluidos[2].data : undefined, valoresConcluidos[2] ? valoresConcluidos[2].quantidade : undefined, "#0091BD"],
                [valoresConcluidos[1] ? valoresConcluidos[1].data : undefined, valoresConcluidos[1] ? valoresConcluidos[1].quantidade : undefined, '#2382BA'],
                [valoresConcluidos[0] ? valoresConcluidos[0].data : undefined, valoresConcluidos[0] ? valoresConcluidos[0].quantidade : undefined, "#0091BD"],
            ]}

            options={{
                legend: 'none',
                columnSliceTextStyle: {
                    color: '#828282',
                },
                chartArea:{
                    left:40,
                    top:10,
                    width:'92%',
                    height:'80%'
                }
            }}
        />
    );
};

export default ChartSixMonth;