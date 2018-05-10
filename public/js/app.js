class App extends React.Component{
  render(){
    return (
      <div className='section'>
        <Nav />
        <ApplicationForm />
        <ApplicationList />
      </div>
    )
  }
}

ReactDOM.render(
  <App />,
  document.querySelector('main')
)
