import { useRawLaunchParams } from '@telegram-apps/sdk-react';

function App() {
  const params = useRawLaunchParams();
  console.log('Launch params:', params);
  return <div className="text-2xl">Info: {JSON.stringify(params)}</div>;
}

export default App;
