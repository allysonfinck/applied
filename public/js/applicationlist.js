class ApplicationList extends React.Component {
  constructor(props){
    super(props)
    this.state={
      applicationShowIsVisible: false,
      applications: [],
      application: {}
    }
    this.toggleState = this.toggleState.bind(this)
    this.getApplication = this.getApplication.bind(this)
  }
  getApplication(application){
    this.setState({application: application})
  }
  deleteApplication(application, index){
    console.log(application);
    fetch('applications/' + application.id,
      {
        method: 'DELETE'
      })
      .then(data => {
        this.setState({
          applications: [
            ...this.state.applications.slice(0, index),
            ...this.state.applications.slice(index + 1)
          ]
        })
      })
  }
  componentDidMount(){
    this.getApplications();
  }
  toggleState(st){
    this.setState({[st]: !this.state[st]})
  }
  getApplications(){
    fetch('/applications')
      .then(response => response.json())
      .then(data => {
        this.setState({
          applications: data
        })
      }).catch(error => console.log(error))
  }

  render () {
    return (
      <div>
      {this.state.applicationShowIsVisible ? <ApplicationView applications={this.state.applications} application={this.state.application} toggleState={this.toggleState}/> : ''}
        <table className='table'>
          <tbody>
          {this.state.applications.map((application, index) => {
            return (
              <tr>
                <td>
                  <h3>{application.date_applied}</h3>
                </td>
                <td>
                  <h3>{application.company}</h3>
                </td>
                <td>
                  <h3>{application.job_title}</h3>
                </td>
                <td>
                  <button type='button' className='btn btn-info' onClick={()=>{this.getApplication(application); this.toggleState('applicationShowIsVisible')}}>Edit</button>
                </td>
                <td>
                  <button type='button' className='btn btn-danger' onClick={()=>this.deleteApplication(application, index)}>Delete</button>
                </td>
              </tr>
            )
          })}
          </tbody>
        </table>
      </div>
    )
  }
}
