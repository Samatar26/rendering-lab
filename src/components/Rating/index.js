import React from 'react';

export default class Rating extends React.Component {
componentWillReceiveProps(nextProps){
  if(nextProps.rating>this.props.rating){
    this.setState({increasing:true, decreasing: false});
    console.log(this.state)
  };
  if(nextProps.rating<this.props.rating){
    this.setState({decreasing:true, increasing:false})
  };
  if (nextProps.rating===this.props.rating){
    this.setState({decreasing:false, increasing: false})
  }


}
  constructor(props) {
    super(props);
    this.state = {
      increasing: false,
      decreasing: false
    };
  }

  render() {
    let trend = 'stable';
    if (this.state.increasing) {
      trend = 'increasing';
    } else if (this.state.decreasing) {
      trend = 'decreasing';
    }

    return (
      <div>
        <p>Rating: {this.props.rating}</p>
        <p>Trend: {trend}</p>
      </div>
    )
  }
}
