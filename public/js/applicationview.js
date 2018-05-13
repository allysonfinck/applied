class ApplicationView extends React.Component {
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
      user_id: 1
    }
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }
  componentDidMount(){
    this.setState({
      date_applied: this.props.application.date_applied,
      company: this.props.application.company,
      job_title: this.props.application.job_title,
      application_link: this.props.application.application_link,
      email_response_link: this.props.application.email_response_link,
      contact_name: this.props.application.contact_name,
      contact_email: this.props.application.contact_email,
      user_id: 1,
      id: this.props.application.id
    })
  }
  handleChange(event){
    this.setState({[event.target.id]: event.target.value})
  }
  handleSubmit(event){
    event.preventDefault()
    console.log(this.state)
    this.props.handleUpdateSubmit(this.state)
    // this.setState({
    //   date_applied: '',
    //   company: '',
    //   job_title: '',
    //   application_link: '',
    //   email_response_link: '',
    //   contact_name: '',
    //   contact_email: '',
    //   user_id: 1
    // })
  }
  render(){
    return (
      <div className='editView'>
        <div className='applicationShow'>
          <ul>
            <li>
              <h3>Date Applied</h3>
              <p>{this.props.application.date_applied}</p>
            </li>
            <li>
              <h3>Company</h3>
              <p>{this.props.application.company}</p>
            </li>
            <li>
              <h3>Position</h3>
              <p>{this.props.application.job_title}</p>
            </li>
            <li>
              <h3>Application Link</h3>
              <p>{this.props.application.application_link}</p>
            </li>
            <li>
              <h3>Email Correspondence</h3>
              <p>{this.props.application.email_response_link}</p>
            </li>
            <li>
              <h3>Contact name</h3>
              <p>{this.props.application.contact_name}</p>
            </li>
            <li>
              <h3>Contact Email</h3>
              <p>{this.props.application.contact_email}</p>
            </li>
          </ul>
          <button type="button" className='btn btn-info' onClick={()=>this.props.toggleState('applicationShowIsVisible')}>Back to List</button>
        </div>
        <div className='applicationEdit'>
          <form onSubmit={this.handleSubmit}>
            <div className="form-group">
              <label for="dateapplied">Date Applied</label>
              <input type="text" className="form-control" id="date_applied" onChange={this.handleChange} value={this.state.date_applied}/>
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
              <input type="text" className="form-control" id="email_response_link" onChange={this.handleChange} value={this.state.email_response_link} />
            </div>
            <div className="form-group">
              <label for="contactname">Contact Name</label>
              <input type="text" className="form-control" id="contact_name" onChange={this.handleChange} value={this.state.contact_name}/>
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
      </div>
    )
  }
}
