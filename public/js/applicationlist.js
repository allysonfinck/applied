class ApplicationList extends React.Component {
  render () {
    return (
      <table className='table'>
        <tbody>
          <tr>
            <td>
              <h3>IBM</h3>
            </td>
            <td>
              <h3>Front End Developer</h3>
            </td>
            <td>
              <h3>May 4, 2018</h3>
            </td>
            <td>
              <button type='button' className='btn btn-info'>Edit</button>
            </td>
            <td>
              <button type='button' className='btn btn-danger'>Delete</button>
            </td>
          </tr>
        </tbody>
      </table>
    )
  }
}
