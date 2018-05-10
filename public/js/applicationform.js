class ApplicationForm extends React.Component {
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
            <input type="text" className="form-control" id="applicationLink" />
          </div>
        </form>
      </div>
    )
  }
}
