import Component from 'noflo-assembly';
import * as bodyParser from 'body-parser';

export class Middleware extends Component {
  constructor() {
    super({ description: 'Application-specific Express.js middleware' });
  }
  handle(input, output) {
    const app = input.getData('in');
    app.use(bodyParser.json({
      type: 'application/json',
      limit: '2mb',
    }));
    output.sendDone(app);
  }
}

export function getComponent() {
  return new Middleware();
}