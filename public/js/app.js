class App extends React.Component{

  render(){
    return (
      <div className='section'>
        <Nav />
        <div id="mainPage">
          <div id="profileContainer">
            <img src="http://lionhallattorneys.com.ng/wp-content/uploads/2015/12/empty-profile.png" alt="Profile Image"/>
            <div className="profileInfo">
              <h5>Username</h5>
              <h6>Number of Applications</h6>
              <h6>Member Since: May 4, 2018</h6>
            </div>
          </div>
          <ApplicationList />
        </div>

      </div>
    )
  }
}

ReactDOM.render(
  <App />,
  document.querySelector('main')
)
