import React from 'react';
import './App.css';
import * as OG from '@ordergroove/offers';
import get from 'lodash/get';
import SubscriptionOptinWidgetForm from './forms/SubscriptionOptinWidgetForm';
import IncentivesForm from './forms/IncentivesForm';
import ReorderForm from './forms/ReorderForm';

OG.initialize('0e5de2bedc5e11e3a2e4bc764e106cf4', 'staging');

const log = type => console.log.bind(console, type);
export class App extends React.Component {
  state = {
    nav: 'Incentives'
  };

  handleNavChange(ev) {
    this.setState({ nav: ev });
  }

  render() {
    const navAvailable = [
      'Analytics',
      'Customer Portal',
      'Customer Support',
      'Data Exports',
      'Emails',
      'Settings',
      'User Management',
      'Incentives',
      'Reorder',
      'Offers'
    ];
    const { nav } = this.state;
    const navEl = navAvailable.map(it => (
      <li className={nav === it ? 'active' : ''}>
        <a href="#" onClick={() => this.handleNavChange(it)}>
          {it}
        </a>
      </li>
    ));

    return (
      <div className="App">
        <div className="col-lg-2 sidebar visible-lg-block">
          <img src="https://re.staging.v2.ordergroove.com/v2_static/209ac45846ae6bff812c0ea37a30d2c8.svg" />
          <ul className="nav nav-pills nav-stacked">{navEl}</ul>
        </div>
        <div className="hidden-lg">
          <ul className="nav nav-pills">{navEl}</ul>
        </div>
        <div className="col-md-10 page-content">
          <PageContent page={nav} />
        </div>
      </div>
    );
  }
}

function PageContent({ page }) {
  switch (page) {
    case 'Offers':
      return <OfferConfigPageContent />;
    case 'Reorder':
      return (
        <PageLayout title="Reorder">
          <TwoLayout>
            <ReorderForm />
            <ConextHelp />
          </TwoLayout>
        </PageLayout>
      );
    case 'Incentives':
      return (
        <PageLayout title="Incentives">
          <TwoLayout>
            <IncentivesForm />
            <ConextHelp />
          </TwoLayout>
        </PageLayout>
      );

    default:
      return <div>Hello!</div>;
  }
}

function PageLayout({ title, ...props }) {
  return (
    <div className="">
      <div className="row">
        <div className="col-md-9">
          <h1>{title}</h1>
        </div>
        <div className="col-md-3 form-actions">
          <button className="btn btn-info btn-lg">Save</button>
        </div>
      </div>
      {props.children}
    </div>
  );
}

function TwoLayout(props) {
  const [left, ...right] = props.children;
  return (
    <div className="row form-body-area">
      <div className="col-md-9">{left}</div>
      <div className="col-md-3">{right}</div>
    </div>
  );
}

class OfferConfigPageContent extends React.Component {
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
    const { settings, textCopy, styles } = formData;
    console.log(styles);
    OG.config({ ...settings });
    OG.setLocale({ ...textCopy });
    return (
      <div className="">
        <div className="row">
          <div className="col-md-12">
            <h1>Subscription Opt-in Widget</h1>
          </div>
        </div>

        <div className="row form-top-area">
          <div className="col-md-9">
            <style
              dangerouslySetInnerHTML={{
                __html: `* {
                --og-global-font-familiy: ${get(formData, 'styles.global.familly', 'inherit')};
                --og-global-font-size: ${get(formData, 'styles.global.size', '12')}${get(
                  formData,
                  'styles.global.unit',
                  'px'
                )};
                --og-global-font-color: ${get(formData, 'styles.global.color', 'inherit')};
                
                --og-tooltip-font-familiy: ${get(formData, 'styles.tooltip.familly', 'inherit')};
                --og-tooltip-font-size: ${get(formData, 'styles.tooltip.size', '12')}${get(
                  formData,
                  'styles.tooltip.unit',
                  'px'
                )};
                --og-tooltip-font-color: ${get(formData, 'styles.tooltip.color', 'inherit')};
                
                --og-upsell-font-familiy: ${get(formData, 'styles.upsell.familly', 'inherit')};
                --og-upsell-font-size: ${get(formData, 'styles.upsell.size', '12')}${get(
                  formData,
                  'styles.upsell.unit',
                  'px'
                )};
                --og-upsell-font-color: ${get(formData, 'styles.upsell.color', 'inherit')};
                --og-upsell-background-color: ${get(formData, 'styles.upsellColor', 'inherit')};
              }`
              }}
            />
            <WidgetPreview formData={formData} />
          </div>
          <div className="col-md-3 form-actions">
            <button className="btn btn-info btn-lg">Save</button>
          </div>
        </div>

        <div className="row form-body-area">
          <div className="col-md-9">
            <SubscriptionOptinWidgetForm
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
      <og-offer product="UD729" />
      <hr />
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
