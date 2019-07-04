import React from 'react';
import reactCSS from 'reactcss';
import { SketchPicker } from 'react-color';

class SketchExample extends React.Component {
  state = {
    displayColorPicker: false,
    value: '#000'
  };

  constructor(props) {
    super(props);
    this.state.value = props.value;
  }
  handleClick = () => {
    this.setState({ displayColorPicker: !this.state.displayColorPicker });
  };

  handleClose = () => {
    this.setState({ displayColorPicker: false });
  };

  handleChange = color => {
    console.log(color);
    this.setState({ value: color.hex });
    setImmediate(() => this.props.onChange(color.hex));
  };

  render() {
    const styles = reactCSS({
      default: {
        color: {
          display: 'inline-block',
          verticalAlign: 'middle',
          width: '36px',
          height: '100%',
          marginRight: '5px',
          borderRadius: '2px',
          background: this.state.value
        },
        swatch: {
          padding: '5px',
          background: '#fff',
          display: 'inline-block',
          cursor: 'pointer',
          width: '65px'
        },
        popover: {
          position: 'absolute',
          zIndex: '2'
        },
        cover: {
          position: 'fixed',
          top: '0px',
          right: '0px',
          bottom: '0px',
          left: '0px'
        }
      }
    });

    return (
      <div>
        <div style={styles.swatch} onClick={this.handleClick} className="form-control">
          <span style={styles.color} />
          <span className="caret"></span>
        </div>
        {this.state.displayColorPicker ? (
          <div style={styles.popover}>
            <div style={styles.cover} onClick={this.handleClose} />
            <SketchPicker color={this.state.value} onChange={this.handleChange} />
          </div>
        ) : null}
      </div>
    );
  }
}

export default SketchExample;
