import 'react-native-gesture-handler';
import Router from './src/Screens/Router/Router';
import { UserContextProvider } from './src/Contexts/UserContext';
import { Toast } from 'react-native-toast-message/lib/src/Toast';


// import Error Toast component and configure it



export default function App() {



  return (
    // wrap the app with login context provider
    <UserContextProvider>
      <Router />
      <Toast />
    </UserContextProvider>
  );
}
