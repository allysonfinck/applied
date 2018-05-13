class App extends React.Component{
  
  render(){
    return (
      <div className='section'>
        <Nav />

        <ApplicationList />
      </div>
    )
  }
}

ReactDOM.render(
  <App />,
  document.querySelector('main')
)
