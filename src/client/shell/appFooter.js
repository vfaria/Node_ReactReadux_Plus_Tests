/** @module shell/AppFooter */

import React, {Component} from 'react';

export default class AppFooter extends Component {
  render() {
    return (
      <footer>
          <div className="row">
            <div className="col-mg">
              <small> Front: React and redux with es6 | Back: Node and express with es6 </small>
            </div> 
          </div>
      </footer>
    )
  }
}
