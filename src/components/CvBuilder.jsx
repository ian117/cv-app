import React, { useState, useEffect} from 'react';

const CvBuilder = () => {
    const [ isEdit, setIsEdit] = useState(false);
    const [ name, setName] = useState();
    const [ email, setEmail] = useState();
    const [ phone, setPhone] = useState();


   return  ( 
    
    <div className="CV-Builder">
       <form>
           <div>
                <h3>General Data</h3>
                <div className="DataInputs">

                    <label>
                        Name:
                        <input type="text"/>
                    </label>
                    <label>
                        Email:
                        <input type="email"/>
                    </label>
                    <label>
                        Phone:
                        <input type="number"/>
                    </label>

                </div>
           </div>
           <div>
                <h3>Skills</h3>
                <p>Add "Skills" component</p>

           </div>
           <div>
                <h3>Working Experience</h3>
                <p>Add "Working Experience" component</p>

           </div>
        
            <button> Make CV</button>
       </form>
    </div>
    
    )}


export default CvBuilder;