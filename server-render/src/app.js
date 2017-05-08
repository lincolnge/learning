import React from 'react';
import moment from 'moment';
import './init';
// import DatetimePicker from '../../dist';

export default class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      items: this.props.items,
      disabled: true,

      datetime: moment(),
    };
  }

  componentDidMount() {
    this.setState({
      disabled: false
    })
  }

  handleClick() {
    this.setState({
      items: this.state.items.concat('Item ' + this.state.items.length)
    });
  }

  render() {
    const limit = {
      min: moment().subtract(5, 'day'),
      max: moment().add(5, 'day')
    };
    return (
      <div>
        <button onClick={this.handleClick.bind(this)} disabled={this.state.disabled}>Add Item</button>
        <ul>
        {
          this.state.items.map((item, index) => {
            return <li key={index}>{item}</li>
          })
        }
        </ul>
        {/* <DatetimePicker
          style={{width: '300px'}}
          value={this.state.datetime}
          format='YYYY-MM-DD HH:mm:ss'
          limit={limit}
          onChange={datetime => this.setState({datetime})}
        /> */}
      </div>
    );
  }
}
