class ApplicationView extends React.Component {
  render(){
    return (
      <div className='editView'>
        <div className='applicationShow'>
          <ul>
            <li>
              <h3>Date Applied</h3>
              <p>May 4,2018</p>
            </li>
            <li>
              <h3>Company</h3>
              <p>IBM</p>
            </li>
            <li>
              <h3>Position</h3>
              <p>Front End Developer</p>
            </li>
            <li>
              <h3>Application Link</h3>
              <p>LINK HERE</p>
            </li>
            <li>
              <h3>Email Correspondence</h3>
              <p>COMMUNICATION BREAKDOWN</p>
            </li>
            <li>
              <h3>Contact name</h3>
              <p>Person</p>
            </li>
            <li>
              <h3>Contact Email</h3>
              <p>Person@IBM.com</p>
            </li>
          </ul>
        </div>
        <div className='applicationEdit'>
          <form>
            <div className="form-group">
              <label for="dateapplied">Date Applied</label>
              <input type="text" className="form-control" id="date_applied" />
            </div>
            <div className="form-group">
              <label for="company">Company</label>
              <input type="text" className="form-control" id="company" />
            </div>
            <div className="form-group">
              <label for="jobtitle">Job Title</label>
              <input type="text" className="form-control" id="job_title" />
            </div>
            <div className="form-group">
              <label for="applicationlink">Application Link</label>
              <input type="text" className="form-control" id="application_link" />
            </div>
            <div className="form-group">
              <label for="emailresponselink">Email Response Link</label>
              <input type="text" className="form-control" id="email_response_link" />
            </div>
            <div className="form-group">
              <label for="contactname">Contact Name</label>
              <input type="text" className="form-control" id="contact_name" />
            </div>
            <div className="form-group">
              <label for="contactemail">Contact Email</label>
              <input type="text" className="form-control" id="contact_email" />
            </div>
          </form>
        </div>
      </div>
    )
  }
}
