import loadAsync from '../../utils/loadAsync';
const LoginContainer = import('./LoginContainer');

export default loadAsync(() => LoginContainer);
