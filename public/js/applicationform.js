class ApplicationForm extends React.Component {
  constructor(props){
    super(props)
    this.state={
      date_applied: '',
      company: '',
      job_title: '',
      application_link: '',
      email_response_link: '',
      contact_name: '',
      contact_email: '',
      user_id: '1'
    }
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }
  componentDidMount(){
    if(this.props.application){
      this.setState({
        date_applied: this.props.application.date_applied,
        company: this.props.application.company,
        job_title: this.props.application.job_title,
        application_link: this.props.application.application_link,
        email_response_link: this.props.application.email_response_link,
        contact_name: this.props.application.contact_name,
        contact_email: this.props.application.contact_email,
        user_id: '1'
      })
    }
  }
  handleChange(event){
    this.setState({[event.target.id]: event.target.value})
  }
  handleSubmit(event){
    event.preventDefault()
    console.log(this.state)
    this.props.handleSubmit(this.state)
  }
  render() {
    return (
      <div className='field'>
        <form onSubmit={this.handleSubmit}>
          <div className="form-group">
            <label for="dateapplied">Date Applied</label>
            <input type="text" className="form-control" id="date_applied" onChange={this.handleChange} value={this.state.date_applied} />
          </div>
          <div className="form-group">
            <label for="company">Company</label>
            <input type="text" className="form-control" id="company" onChange={this.handleChange} value={this.state.company}/>
          </div>
          <div className="form-group">
            <label for="jobtitle">Job Title</label>
            <input type="text" className="form-control" id="job_title" onChange={this.handleChange} value={this.state.job_title}/>
          </div>
          <div className="form-group">
            <label for="applicationlink">Application Link</label>
            <input type="text" className="form-control" id="application_link" onChange={this.handleChange} value={this.state.application_link}/>
          </div>
          <div className="form-group">
            <label for="emailresponselink">Email Response Link</label>
            <input type="text" className="form-control" id="email_response_link" onChange={this.handleChange} value={this.state.email_response_link}/>
          </div>
          <div className="form-group">
            <label for="contactname">Contact Name</label>
            <input type="text" className="form-control" id="contact_name" onChange={this.handleChange} value={this.contact_name}/>
          </div>
          <div className="form-group">
            <label for="contactemail">Contact Email</label>
            <input type="text" className="form-control" id="contact_email" onChange={this.handleChange} value={this.state.contact_email}/>
          </div>
          <div className="formgroup">
            <input type="submit" className="btn btn-success" />
          </div>
        </form>
      </div>
    )
  }
}
