const Enzyme = require('enzyme');
const Adapter = require('enzyme-adapter-react-16');

Enzyme.configure({ adapter: new Adapter() });

global.navigator = {
  userAgent: 'node.js'
};

const rejectionHandler = (err) => {
  console.error('Unhandled Rejection');
  console.error(err);
  throw err;
};

beforeAll(() => {
  process.on('unhandledRejection', rejectionHandler);
})

afterAll(() => {
  process.removeListener('unhandledRejection', rejectionHandler);
})
