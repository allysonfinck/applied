class ApplicationList extends React.Component {
  constructor(props){
    super(props)
    this.state={
      applicationShowIsVisible: false
    }
    this.toggleState = this.toggleState.bind(this)
  }
  toggleState(st){
    this.setState({[st]: !this.state[st]})
  }
  render () {
    return (
      <div>
        <table className='table'>
          <tbody>
            <tr>
              <td>
                <h3>May 4, 2018</h3>
              </td>
              <td>
                <h3>IBM</h3>
              </td>
              <td>
                <h3>Front End Developer</h3>
              </td>
              <td>
                <button type='button' className='btn btn-info' onClick={()=>this.toggleState('applicationShowIsVisible')}>Edit</button>
              </td>
              <td>
                <button type='button' className='btn btn-danger'>Delete</button>
              </td>
            </tr>
          </tbody>
        </table>
        {this.state.applicationShowIsVisible ? <ApplicationView /> : ''}
      </div>
    )
  }
}
