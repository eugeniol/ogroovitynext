import React from 'react';

export default class Frequency extends React.Component {
    constructor(props) {
      super(props);
      console.log(props);
      console.log(props.schema.properties.period);
      this.state = {
        every: '',
        period: '',
        ...props.formData
      };
    }
  
    onChange(name) {
      return event => {
        this.setState({ [name]: event.target.value });
        setImmediate(() => this.props.onChange(this.state));
      };
    }
  
    render() {
      const { every, period } = this.state;
      const schema = {
        properties: {
          period: this.props.schema.properties.period
        }
      };
      return (
        <div className="row">
          <div className="col-sm-6">
            <label>Latitude</label>
            <input className="form-control" type="text" value={every} step="0.00001" onChange={this.onChange('every')} />
          </div>
          <div className="col-sm-6">
            <label>Longitude</label>
            <input
              className="form-control"
              type="text"
              value={period}
              step="0.00001"
              onChange={this.onChange('period')}
            />
          </div>
        </div>
      );
    }
  }
