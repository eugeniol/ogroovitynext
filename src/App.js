import React from 'react';
import './App.css';

import OfferWidgetForm from './forms/SubscriptionOptinWidgetForm';
import CompactPicker from './widgets/CompactPicker';

const log = type => console.log.bind(console, type);
export function App() {
  return (
    <div className="App">
      <div className="col-md-2 sidebar">
        
        nav
      </div>

      <div className="col-md-10 page-content">
        <PageContent />
      </div>
    </div>
  );
}
class PageContent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      formData: {}
    };
  }
  // componentWillMount() {
  //   fetch('http://localhost:9000/spec/reservation')
  //     .then(res => res.json())
  //     .then(schema =>
  //       this.setState({
  //         schema: {
  //           ...schema,
  //           properties: {
  //             ...omit(schema.properties, ['_id', '__v'])
  //           }
  //         }
  //       })
  //     );
  // }
  // onSubmit({ formData }) {
  //   fetch('http://localhost:9000/api/reservation', {
  //     method: 'POST', // *GET, POST, PUT, DELETE, etc.
  //     mode: 'cors', // no-cors, cors, *same-origin
  //     cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
  //     credentials: 'same-origin', // include, *same-origin, omit
  //     headers: {
  //       'Content-Type': 'application/json'
  //       // 'Content-Type': 'application/x-www-form-urlencoded',
  //     },
  //     redirect: 'follow', // manual, *follow, error
  //     referrer: 'no-referrer', // no-referrer, *client
  //     body: JSON.stringify(formData) // body d
  //   })
  //     .then(res => res.json())
  //     .then(data =>
  //       this.setState({
  //         data
  //       })
  //     );
  // }
  onChange() {
    return event => this.setState({ formData: event.formData });
  }
  render() {
    const formData = this.state.formData;
    return (
      <div className="">
        <div className="row">
          <div className="col-md-12">
            <h1>Subscription Opt-in Widget</h1>
          </div>
        </div>
        <div className="row form-top-area">
          <div className="col-md-9">
            <WidgetPreview formData={formData} />
          </div>
          <div className="col-md-3 form-actions">
            <button className="btn btn-info btn-lg">Save</button>
          </div>
        </div>
        <div className="row form-body-area">
          <div className="col-md-9">
            <OfferWidgetForm
              formData={formData}
              onChange={this.onChange()}
              onSubmit={log('submit')}
              onError={log('errors')}
            />
          </div>
          <div className="col-md-3">
            <ConextHelp />{' '}
          </div>
        </div>
      </div>
    );
  }
}

function WidgetPreview({ formData }) {
  return (
    <fieldset className="widgetPreview">
      <legend>Widget preview</legend>
      <pre>{JSON.stringify(formData, null, 4)}</pre>
    </fieldset>
  );
}

function ConextHelp(props) {
  return (
    <div>
      <h3>What is a widget?</h3>
      <p>
        Welcome to the incentives page where you learn things about incentives. This would be high level info about this
        page and would show by default before you’ve done anything on the page.
      </p>

      <p>
        We might even have more than one paragraph and this section will float along with you while you scroll. That’s
        all I got please enjoy!
      </p>

      <h3>The more you know...</h3>
      <p>
        <a href="#">Here is a link to help you learn more</a>
      </p>
      <p>
        <a href="#">Who knows what kind of stuff we can have here</a>
      </p>
      <p>
        <a href="#">There is a lot of info we’ll need to add</a>
      </p>
    </div>
  );
}
export default App;
