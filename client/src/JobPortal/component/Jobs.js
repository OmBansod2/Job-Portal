import React from 'react';
import { Link } from 'react-router-dom';

const Jobs = ({ jobs = [] }) => {
  if (!Array.isArray(jobs)) {
    // Defensive fallback if jobs is not an array
    return <div>No jobs found or data format error.</div>;
  }

  if (jobs.length === 0) {
    return <div>No jobs available at the moment.</div>;
  }

  return (
    <div>
      {jobs.map((item) => (
        <div
          key={item._id}
          className="card mb-2 p-3"
          style={{ border: '5px solid red' }}
        >
          <h3>{item.jobtitle}</h3>
          <p>{item.comName}</p>
          <p>Work From: {item.WorkFrom}</p>
          <p>Location: {item.location}</p>

          <div className="row">
            <div className="col-1"></div>
            <div className="col-3">
              <p>Start Date</p>
              <p>TODAY</p>
            </div>
            <div className="col-3">
              <p>Duration</p>
              <p>{item.jobduration}</p>
            </div>
            <div className="col-3">
              <p>Salary</p>
              <p>{item.salary}</p>
            </div>
          </div>

          <p>
            <b>Number of Applications: </b>{' '}
            {Array.isArray(item.jobCount) ? item.jobCount.length : 0}
          </p>

          <button
            className="btn btn-success btn_detail"
            style={{ width: '120px', backgroundColor: 'orange' }}
          >
            <Link
              to={`/job/${item._id}`}
              style={{ color: 'white', textDecoration: 'none' }}
            >
              Detail
            </Link>
          </button>
        </div>
      ))}
    </div>
  );
};

export default Jobs;
