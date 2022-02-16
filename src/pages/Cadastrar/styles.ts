import styled, {css} from 'styled-components';

interface TableProps{
  popup: boolean;
};

export const All= styled.div`
  width: 100%;
  display: flex;
  align-content: space-around;
  flex-wrap: wrap;
  margin-top: 40px;
  flex-direction: row;

  .title{
    width: 100%;
    height: 45px;
    display: flex;
    align-items: center;
    align-content: space-around;
    margin-bottom: 15px;
    margin-left: 120px;
  }
`;

export const Container=styled.div<TableProps>`
  width: 75%;
  max-height: 400px;
  padding: 25px;
  margin: 0 83.5px 0 120px;
  padding: 35px;

  border: 0.5px;
  border-style: solid;
  border-color: #c4c4c4;
  border-radius: 4px;

  overflow: auto;

  .position{
    width:100%;
    display:flex;
    justify-content: space-between;
    padding: 0px 20px 0px 20px;
  }

  .boxAdd{
    width: 20px;
    height: 20px;
    border-radius: 5px;
    margin: -20px 0px 0px 197px;
    padding: 2px;
    cursor: pointer;

    &:hover{
      background: #008EA5;
      transition: 0.2s;
      cursor: pointer;
    }
  }

  .boxEx{
    width: 20px;
    height: 20px;
    border-radius: 5px;
    padding: 2px;
    cursor: pointer;
    margin: 0px 0px 0px 0px;

    &:hover{
      background: #008EA5;
      transition: 0.2s;
      cursor: pointer;
    }
  }

  form{
    display: flex;
    flex-wrap: wrap;
    align-content: space-around;
    justify-content: center;

    .column{
      width: 48%;
      height: 700px;
      align-items: center;
      align-content: space-around;
      justify-content: space-around;

      .table{
        width: 93%;
        background: #fff;
        height: 200px;
        border: 1px solid #dedede;
        border-radius: 3px;
        margin-bottom: 52px;
        overflow: auto;
      
        .header{
          display:flex;
          width: 100%;
          height: 50px;
          align-items: center;
          background: #EBEBEB;
          border-bottom-style: solid;
          border-bottom-width: 0.5px;
          border-bottom-color: #DCDCDC;
      
          .title1{
            width:40%;
            height: 50px;
            display:flex;
            justify-content: center;
            border-right-style: solid;
            border-right-width: 0.5px;
            border-right-color: #DCDCDC;
            align-items: center;
          }
      
          .title2{
            width:20%;
            height: 50px;
            display:flex;
            justify-content: center;
            align-items: center;
          }
      
          .title3{
            width:50%;
            height: 50px;
            display:flex;
            justify-content: center;
            border-right-style: solid;
            border-right-width: 0.5px;
            border-right-color: #DCDCDC;
            align-items: center;
          }
        }
      
        .columns{
          width:100%;
          display: flex;
          background: #fff;
      
          .column1{
            width: 50%;
            height: 30px;
            display:flex;
            justify-content: center;
            align-items: center;
            border-bottom-style: solid;
            border-bottom-width: 0.5px;
            border-bottom-color: #DCDCDC;
          }
      
          .column2{
            height: 30px;
            width: 30%;
            display:flex;
            justify-content: center;
            align-items: center;
      
            border-bottom-style: solid;
            border-bottom-width: 0.5px;
            border-bottom-color: #DCDCDC;
          }
      
          .column3{
            height: 30px;
            width: 20%;
            display:flex;
            justify-content: center;
            align-items: center;
      
            border-bottom-style: solid;
            border-bottom-width: 0.5px;
            border-bottom-color: #DCDCDC;
          }
        }
      }

      .lineDescricao{
        width: 100%;
        height: 160px;
        margin-bottom: 20px;

        textarea{
          width: 93%;
          height: 135px;
          border-radius:4px;
          padding:5px;
          border: 2px solid #dedede;
          color: #828282;
          font-size: 15px;
          resize: none;
          margin-top: 5px;
        }
      }

      .line{
        width: 100%;
        height: 70px;
        margin-bottom: 20px;
        display: flex;
        flex-wrap: wrap;
        flex-direction: row;
        align-content: center;
        justify-content: flex-start;

        .popup{

          ${(props) =>
            props.popup &&
            css`
            visibility: hidden;
            opacity: 0;
          `}

          ${(props) =>
            !props.popup &&
            css`
            visibility: visible;
            opacity: 1;
          `}

          position: absolute;
          top: 0;
          left: 0;
          bottom: 0;
          right: 0;
          height: 100%;
          background: rgba(0, 0, 0, 0.30);
          transition: 0.5s;

          .popSkills{
            position: fixed;
            top: 0;
            bottom: 0; 
            left: 0; 
            right:0;
            margin: auto;
            width: 400px;
            height: 200px;
            background: white;
            box-shadow:0px 4px 4px rgb(0 0 0 / 25%);
            display: flex;
            border-radius: 5px;
            flex-direction: column;

            #barra{
              background-color: #00579D;
              width: 100%;
              height: 30px;
              border-radius: 5px 5px 0px 0px;
              display: flex;
              align-items: center;
              padding: 5px;
              color: #fff;
            }

            #data-table{
              width: 100%;
              border-spacing: 0 0.5rem;
              color: #363f5f;
            }
    
            table thead tr th:first-child,
            table tbody tr  td:first-child{
                border-radius: 0.25rem 0 0 0.25rem;
            }
    
            table thead th{
                background: #ffffff;
                font-size: 15px;
                
                font-weight: normal;
            
                text-align: center;
            }
    
            table tbody tr{
                opacity: 0.7 ;
            }
            
            table tr:hover{
                opacity: 1;
            }
            
            table tbody td{
                background: white;
                padding: 1rem 2rem;
            }
    
            td.description{
                color: #363f5f;
            }

            th.description{
              color: #363f5f;
            }
          }
        }

        label{
          width: 70%;
          background: #FFFFFF;
          border: 1px solid rgba(0, 0, 0, 0.2);
          box-sizing: border-box;
          display: flex;
          justify-content: space-between;
          align-items: center;
          border-radius: 4px;
          padding:5px 10px;
          cursor: pointer;

          p{
            margin: 11px 0px 8px 0px;
          }
    
          &:hover{
            opacity: 0.7;
            transition: 0.2s;
    
          }

          input[type='file'] {
            display: none
          }
        }

        .float{
          width: 45%;
        }

        p{
          display: flex;
          width: 80%;
          justify-content: start;
          margin-bottom: 5px;
        }
      }
    }
  }
`;