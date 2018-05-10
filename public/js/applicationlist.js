class ApplicationList extends React.Component {
  constructor(props){
    super(props)
    this.state={
      applicationShowIsVisible: false,
      applications: []
    }
    this.toggleState = this.toggleState.bind(this)
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
                  <button type='button' className='btn btn-info' onClick={()=>this.toggleState('applicationShowIsVisible')}>Edit</button>
                </td>
                <td>
                  <button type='button' className='btn btn-danger'>Delete</button>
                </td>
              </tr>
            )
          })}

          </tbody>
        </table>
        {this.state.applicationShowIsVisible ? <ApplicationView /> : ''}
      </div>
    )
  }
}
