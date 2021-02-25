import React, { useState, useEffect} from 'react';
import { useForm, useFieldArray, useWatch, Controller  } from 'react-hook-form';


const CvBuilder = () => {

    //React UseForm ===>
    const { register, errors, handleSubmit, control } = useForm();

    //Array for Skills
    const { fields: skillsFields, append: skillsAppend, remove: skillsRemove} = useFieldArray({
        control,
        name: 'skills'
    });

    //Array for Experience
    const { fields: experienceFields, append: experienceAppend, remove: experienceRemove} = useFieldArray({
        control,
        name: 'experience'
    });

    //OnSubmit CallBack ==>
        const onSubmitForm = (data, e) => {
            console.log("%cHey bby, i want to know","color:green; font-size:1.3rem")
            console.log(data)
            e.target.reset()
        }

   return  ( 
    
    <div className="CV-Builder">
       <form onSubmit={handleSubmit(onSubmitForm)}>
           <div>
                <h3>General Data</h3>
                <div className="DataInputs">

                    <label>
                        Name:
                        <input ref={register({
                            required: {value: true, message: 'Name Required'}
                        })} name="name" type="text"/>
                    </label>
                   
                        <p style={{background:"white", color:"red",  width: "35%",  margin: "auto"}}>
                           {errors?.name?.message}
                        </p>

                    <label>
                        Email:
                        <input ref={register({
                            required: {value: true, message: 'Email Required'}
                        })} name="email" type="email"/>
                    </label>

                    <p style={{background:"white", color:"red",  width: "35%",  margin: "auto"}}>
                           {errors?.email?.message}
                        </p>

                    <label>
                        Phone:
                        <input ref={register({
                            required: {value: true, message: 'Phone Required'}
                        })} name="phone" type="number"/>
                    </label>

                    <p style={{background:"white", color:"red",  width: "35%",  margin: "auto"}}>
                           {errors?.phone?.message}
                        </p>

                </div>
           </div>
           <div>
                <h3>Skills</h3>

                {skillsFields.map((item, index) => (

                        <div key={item.id}>
                            <p>Skill </p>
                            <input
                                className="CompInput"
                                placeholder="Skill"
                                name={`skills[${index}].skill`}
                                ref={register()}
                                defaultValue={item.skill}
                            />
                            <p>In which year learned this skill</p>
                            <Controller as={<input />}
                                className="CompInput"
                                placeholder="Date"
                                name={`skills[${index}].date`}
                                control={control}
                                defaultValue={item.date} // make sure to set up defaultValue
                                />
                                <button style={{display: "block", margin: "auto", marginTop: "15px"}} type="button" onClick={() => skillsRemove(index)}>Remove Skill</button>
                        </div>

                ))}
                <button
                    className="btnForAdd"
                    type="button"
                    onClick={() => skillsAppend({ skill: "", date: "" })}
                >
                    + Skill
                </button>

           </div>

           <div>
                <h3>Working Experience</h3>


                {experienceFields.map((item, index) => (

                    <div key={item.id}>
                        <p>Where your work</p>
                        <input
                            className="CompInput"
                            placeholder="Place of work"
                            name={`experience[${index}].exp`}
                            ref={register()}
                            defaultValue={item.exp}
                        />
                        <p>How many years spend in that position</p>
                        <Controller as={<input />}
                            className="CompInput"
                            placeholder="Years"
                            name={`experience[${index}].years`}
                            control={control}
                            defaultValue={item.years} // make sure to set up defaultValue
                            />
                            <button style={{display: "block", margin: "auto", marginTop: "15px"}} type="button" onClick={() => experienceRemove(index)}>Remove Experience</button>
                    </div>

                    ))}
                <button
                    className="btnForAdd"
                    type="button"
                    onClick={() => experienceAppend({ exp: "", years: "" })}
                    >
                    + Experience
                 </button>

           </div>
       
            <button> Make CV</button>
       </form>
    </div>
    
    )}


export default CvBuilder;
