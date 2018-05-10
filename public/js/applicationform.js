class ApplicationForm extends React.Component {
  constructor(props){
    super(props)
    this.state={
      
    }
  }
  render() {
    return (
      <div className='field'>
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
    )
  }
}
