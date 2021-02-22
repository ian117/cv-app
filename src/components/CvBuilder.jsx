import React, { useState, useEffect} from 'react';
import uniqid from 'uniqid';

const CvBuilder = () => {
    const [ isEdit, setIsEdit] = useState(false);
    const [ name, setName] = useState();
    const [ email, setEmail] = useState();
    const [ phone, setPhone] = useState();
    //Const para los ADD skills & exp
    const [educationIds, setEducationIds] = useState([]);
	const [experienceIds, setExperienceIds] = useState([]);

    //HandleClick para hacer el seteo del ID
    const handleClick = (type) => {
		if (type === 'experienceIds') {
			setExperienceIds((prevExpIds) => [...prevExpIds, uniqid()]);
		} else {
			setEducationIds((prevEduIds) => [...prevEduIds, uniqid()]);
		}
	};

    //Handler para hacer el Delete
    const handleDelete = (type, id) => {
		if (type === 'experienceIds') {
			setExperienceIds((prevExpIds) => {
				let newList = prevExpIds.filter((key) => key !== id);
				return newList;
			});
		} else {
			setEducationIds((prevEduIds) => {
				let newList = prevEduIds.filter((key) => key !== id);
				return newList;
			});
		}
	};


    //Se hace el seteo de los componentes que se añaden constantemente
    const skillsComponents = educationIds.map((id) => (
		<p>heey</p>
	));
	const expComponents = experienceIds.map((id) => (
		<p>heey</p>
	));


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
                {skillsComponents}
                <button onClick={() => handleClick('educationIds')} type="button" className="btnForAdd">+ Skill</button>

           </div>
           <div>
                <h3>Working Experience</h3>
                <p>Add "Working Experience" component</p>
                {expComponents}
                <button onClick={() => handleClick('experienceIds')} type="button" className="btnForAdd">+ Experience</button>

           </div>
        
            <button> Make CV</button>
       </form>
    </div>
    
    )}


export default CvBuilder;