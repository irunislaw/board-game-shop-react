   /*<style>
          li{
              padding-bottom: 19px;
              font-family: 'Lato', sans-serif;
              font-size: 16px;   
              font-weight: Regular;
              min-width: 195px;
          }
          div{
              float:left;
              margin-right: 183.33px;
              width: 195px;
              
          }
          footer{
          display: block;
          }
      </style>*/


import { makeStyles, fade } from '@material-ui/core/styles';
export default makeStyles((theme) => ({
    li: {
        paddingBottom: '19px',
        fontFamily: 'Lato,sans-serif',
        fontSize: '16px',
        fontWeight: 'Regular',
        minWidth:'195px',
      },
      div: {
        float: 'left',
        marginRight: '220px',
        width: '195px',
      },  
      footer:{
          display:'block',
          marginLeft:'Auto'
      },
      klasa:{
          margin:'auto'
      }  

      
}));