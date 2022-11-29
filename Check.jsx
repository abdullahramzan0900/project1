import React from "react";
import { useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
function Check(){
const [change,setchange]=useState(false)
const array=[
  "abdullah","khalid","amna","iqra","maira","laiba"
]
console.log(array,"array")
    return(
        <div>      
{  change &&
  <div>
  <button onClick={()=>{
    setchange(false);
  }}>table</button>
  


 
    
    <nav class="navbar navbar-dark bg-mynav">
      <div class="container-fluid">
        <a class="navbar-brand" href="#">My App</a>
      </div>
    </nav>

    <div class="container">
      <div class="d-flex bd-highlight mb-3">
        <div class="me-auto p-2 bd-highlight">Users</div>
        <div class="p-2 bd-highlight">
          <button type="button" class="btn btn-secondary" onclick="showUserCreateBox()">Create</button>
        </div>
      </div>
      
      <div class="table-responsive">
        <table class="table">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">Username</th>
              <th scope="col">Action</th>
            </tr>
          </thead>
          { array && array?.map((item,index)=>
          { return(
            <>
            <tbody id="mytable">
            <tr>
              <th scope="col" >{index}</th>  
              <th scope="col">{item}</th>
        
              <th style={{
                
              }} scope="col"><button>del</button><button>edit</button></th>
                   
            </tr>
          </tbody>
              </>
          )

           
              
          })
        }
      


          {/* <tbody id="mytable">
            <tr>
              <th scope="col" >1</th>  
              <th scope="col">abdullah</th>
        
              <th style={{
             
              }} scope="col"><button>del</button><button>edit</button></th>
                   
            </tr>
          </tbody> */}

       </table>
      </div>
    </div>
  </div>
}   
{  
 !change &&
 <div>
   <button onClick={()=>{
    setchange(true);
   }}>check</button>
   <button>hello woorldwwqsd</button>
   <p>paragraph444</p>
   <h1>textarea33</h1>
   <button>hello woorld</button>
   <p>paragraph</p>
   <h1>textarea  </h1>
   </div>

} 


        </div>
    )
}
export default Check;
