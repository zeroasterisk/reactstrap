/* eslint react/no-multi-comp: 0, react/prop-types: 0 */
import React from 'react';
import { PrismCode } from 'react-prism';
import Helmet from 'react-helmet';

import CardExample from '../examples/Card';
const CardExampleSource = require('!!raw!../examples/Card.jsx');

export default class CardPage extends React.Component {
  render() {
    return (
      <div>
        <Helmet title="Card" />
        <h3>Card</h3>
        <hr />
        <div className="docs-example">
          <CardExample />
        </div>
        <pre>
          <PrismCode className="language-jsx">
            {CardExampleSource}
          </PrismCode>
        </pre>
        <h4>Content Types</h4>

        <h4>Sizing</h4>

        <h4>Text alignment</h4>

        <h4>Image caps</h4>

        <h4>Image overlays</h4>

        <h4>Inverted text</h4>

        <h4>Background variants</h4>

        <h4>Groups</h4>

        <h4>Decks</h4>

        <h4>Columns</h4>
      </div>
    );
  }
}
