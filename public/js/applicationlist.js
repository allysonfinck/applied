class ApplicationList extends React.Component {
  constructor(props){
    super(props)
    this.state={
      applicationShowIsVisible: false,
      addApplicationIsVisible: false,
      applications: [],
      application: {}
    }
    this.handleUpdateSubmit = this.handleUpdateSubmit.bind(this)
    this.deleteApplication = this.deleteApplication.bind(this)
    this.handleCreate = this.handleCreate.bind(this)
    this.handleCreateSubmit = this.handleCreateSubmit.bind(this)
    this.getApplication = this.getApplication.bind(this)
    this.getApplications = this.getApplications.bind(this)
    this.toggleState = this.toggleState.bind(this)
  }
  componentDidMount(){
    this.getApplications()
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
  handleCreate(application){
    const updatedApplications = this.state.applications
    updatedApplications.push(application)
    this.setState({applications: updatedApplications})
  }
  handleCreateSubmit(application){
    fetch('/applications', {
      body: JSON.stringify(application),
      method: 'POST',
      headers: {
        'Accept': 'application/json, text/plain, */*',
        'Content-Type': 'application/json'
      }
    }).then(createdApplication => {return createdApplication.json()})
      .then(jsonedApplication => this.handleCreate(jsonedApplication))
      .catch(error=>console.log(error))
  }

  getApplication(application){
    this.setState({application: application})
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
  handleUpdateSubmit(application, index){
    fetch('applications/' + application.id, {
      body: JSON.stringify(application),
      method: 'PUT',
      headers: {
        'Accept': 'application/json, text/plain, */*',
        'Content-Type': 'application/json'
      }
    }).then(updatedApplication => {return updatedApplication.json()
    }).then(jsonedApplication => {
      this.getApplications()
    }).catch(error => console.log(error))
  }
  toggleState(st1, st2){
    this.setState({
      [st1]: !this.state[st1],
      [st2]: !this.state[st2]
    })
  }
  render () {
    return (
      <div>
      <button type='button' className='btn btn-primary' id="addAppBtn" onClick={()=>this.toggleState('addApplicationIsVisible')} toggleState={this.toggleState}>Add an Application</button>

      {this.state.addApplicationIsVisible ? <ApplicationForm toggleState={this.toggleState} applications={this.state.applications} application={this.state.application} handleCreate={this.handleCreate} handleSubmit={this.handleCreateSubmit}/> : ''}

      {this.state.applicationShowIsVisible ? <ApplicationView applications={this.state.applications} application={this.state.application} toggleState={this.toggleState} handleCreate={this.handleCreate} handleUpdateSubmit={this.handleUpdateSubmit}/> : ''}

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
