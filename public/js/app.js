class App extends React.Component{
  constructor(props){
    super(props)
    this.state ={
      addApplicationIsVisible: false,
      applicationListIsVisible: true
    }
    this.toggleState = this.toggleState.bind(this)
  }
  toggleState(st1, st2){
    this.setState({
      [st1]: !this.state[st1],
      [st2]: !this.state[st2]
    })
  }
  render(){
    return (
      <div className='section'>
        <Nav />
        <button type='button' className='btn btn-primary' onClick={()=>this.toggleState('addApplicationIsVisible')}>Add an Application</button>
        {this.state.addApplicationIsVisible ? <ApplicationForm /> : ''}
        {this.state.applicationListIsVisible ? <ApplicationList /> : ''}
      </div>
    )
  }
}

ReactDOM.render(
  <App />,
  document.querySelector('main')
)
