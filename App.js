import 'react-native-gesture-handler';
import Router from './src/Screens/Router/Router';
import { LoginProvider } from './src/Screens/Login/LoginContext';


export default function App() {
  return (
    // wrap the app with login context provider
    
      <Router />
  );
}
