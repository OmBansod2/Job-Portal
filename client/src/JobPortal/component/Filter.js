import React,{useEffect, useState} from 'react';
import {useDispatch,useSelector} from "react-redux"
import {getAllJobAction} from "../actions/job_actions"

const Filter = () => {

   const  checkValue = [5000,10000,15000,25000,50000 ]
   const[searchKey,setSearchKey] = useState("");
   const dispatch = useDispatch()

    const handleChange= (e)=>{
       
        if((e.target.checked)){
            dispatch(getAllJobAction("Salary",e.target.value))
           
         }
    }

    return (
      <div style={{ maxWidth: '800px', margin: '0 auto' }}>
  <div className="card price_filter" style={{ backgroundColor: '#d1b6e3', padding: '15px', borderRadius: '10px', marginBottom: '15px' }}>
    <p className="text-start text-bold" style={{ color: 'black', fontSize: '18px', marginBottom: '10px' }}>
      Filter By Salary
    </p>
    {checkValue.map((item, index) => (
      <div className="form-check" key={index}>
        <input
          className="form-check-input"
          type="checkbox"
          value={item}
          id={item.value}
          onChange={(e) => handleChange(e)}
          style={{ backgroundColor: '#007bff', border: '1px solid #007bff', borderRadius: '5px' }}
        />
        <label
          className="form-check-label"
          htmlFor="flexCheckDefault"
          style={{ marginTop: '7px', fontSize: '16px', color: 'black', marginLeft: '5px' }}
        >
          ₹{item}
        </label>
      </div>
    ))}
  </div>

  <div className="card mt-3 p-1" style={{ backgroundColor: '#d1b6e3', padding: '15px', borderRadius: '10px' }}>
    <p className="text-start text-bold" style={{ fontSize: '18px', marginBottom: '10px', color: 'black' }}>
      Filter By Location
    </p>
    <input
      value={searchKey}
      onChange={(e) => setSearchKey(e.target.value)}
      type="text"
      placeholder="Location"
      className="form-control"
      style={{ marginBottom: '10px' }}
    />
    <button
      type="button"
      className="btn btn-primary mt-1 ser_btn"
      onClick={() => dispatch(getAllJobAction('Location', searchKey))}
      style={{ width: '100%', fontSize: '16px', backgroundColor: '#d900ff', border: '1px solid #bf00ff' }}
    >
      Search
    </button>
  </div>
</div>


    
    );
};

export default Filter;