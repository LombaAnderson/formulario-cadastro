import { Router } from './router';
import { FormProvider } from './contexts/FormContext';
import io from 'socket.io-client';

io('http://localhost:3000');
const App = () => {
  return (
    <FormProvider>
      <Router />
    </FormProvider>
  );
}

export default App;
