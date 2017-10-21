import React from 'react';
import CerealTile from '../components/CerealTile'

class CerealsIndexContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      cereals: []
    }
  }

  componentDidMount(){
    fetch('/api/v1/cereals')
    .then(response => {
      let data = response.json()
      return data
    }).then(data => {
      this.setState({ cereals: data.cereals})
    })
  }
  render() {
    let cereals = this.state.cereals.map((cereal) => {
      return(
        <CerealTile
          key={cereal.id}
          id={cereal.id}
          name={cereal.name}
          description={cereal.description}
        />
      )
    })
    return(
      <div>
        <h1>All the Cereals</h1>
        {cereals}
      </div>
    )
  }
}
export default CerealsIndexContainer;
