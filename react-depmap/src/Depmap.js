import React from 'react'

function Depmap() {
    function depmap(){
        let arr = []
        for (let i = 1; i < 81; i++){
            arr.push(<img src={'depmap' + '/' + i + '.png'}></img>)
          
            
        }
        return arr
    }
  
    return (
      <div className="Depmap">
        <table style={{border:"5px"}}>
          <thead>
            <tr style={{background:"orange", color:"black",alignItems:'center',justifyContent:'center'}}>
              <th >Depmap</th>
            </tr>
          </thead>
          <tbody>
            
            <tr>
            <td>{depmap()}</td>
            </tr>
          </tbody>
          
           
          
        </table>
      </div>
    );
  }
  
  export default Depmap;