import React from 'react'

class CerealsShowContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      cereals: []
    }
  }

  componentDidMount(){
    fetch('/api/v1/cereals')
    .then(response => {
      let cereals = response.json()
      return cereals
    }).then(cereals => {
      this.setState({ cereals: cereals})
    })
  }
  render() {
    return(
      <h1>This kind of Cereal</h1>
    )
  }
}
export default CerealsShowContainer
