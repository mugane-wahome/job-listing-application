import React, { useState } from "react";
import { Form } from "react-router-dom";

const JobSearchForm = () => {
  const [jobKeyword, setJobKeyword] = useState("");
  const [company, setCompany] = useState("");
  const [location, setLocation] = useState("");
  const [cv, setCv] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!jobKeyword && !company && !location && !cv) {
      setMessage("fill all  the fields");
      return;
    }

    
    const hasValue = jobKeyword || company || location || cv;

    if (hasValue) {
      setMessage("goodluck with your job search");
    } else {
      setMessage("Please fill in all the fields.");
    }
  };

  return (
    <div>
      <h2>РАТАЈОВ</h2>
      <h3>search, find and apply</h3>
      <h4>This is your place, over 1M people got job via this platform</h4>
      <Form onSubmit={handleSubmit}>
        <p>
          <label htmlFor="jobKeyword">What</label>
          <input
            type="text"
            id="jobKeyword"
            placeholder="Job keyword or company"
            value={jobKeyword}
            onChange={(e) => setJobKeyword(e.target.value)}
          />
        </p>
        <p>
          <label htmlFor="company">Full-time. I</label>
          <input
            type="text"
            id="company"
            value={company}
            onChange={(e) => setCompany(e.target.value)}
          />
          <span>Get a job, work hard be paying your bills😂😂😂</span>
        </p>
        <p>
          <label htmlFor="location">Where</label>
          <input
            type="text"
            id="location"
            placeholder="location"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
          />

        </p>
        
        <label for="language">job level</label>
          <select name="job level " id="language">
            <option value="senior" selected>
              senior
            </option>
            <option value="intermidiate">junior </option>
            <option value="junior">junior</option>
          </select>


        <p>
          <label htmlFor="cv">Upload your resume</label>
          <input
            type="file"
            id="resume"
            accept=".pdf,.doc,.docx"
            value={cv}
            onChange={(e) => setCv(e.target.value)}
          />
        </p>
        <p>
          <button type="submit">search</button>
        </p>
      </Form>
      <p>{message}</p>
    </div>
  );
};

export default JobSearchForm;
