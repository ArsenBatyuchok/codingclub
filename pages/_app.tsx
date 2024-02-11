import '../styles/reset.css';
import type { AppProps } from 'next/app';
import { CntrlProvider, customItems } from '@cntrl-site/sdk-nextjs';

// place your custom items/sections definitions here
customItems.define('form', () => {
  return (
    <form>
      <input type="text" />
    </form>
  );
});
// customSections.define('custom-section', {
//   component: MyCustomSection,
//   dataResolver: async () => ({ your: 'CMS data here' })
// });

function App({ Component, pageProps }: AppProps) {
  return (
    <CntrlProvider>
      <Component {...pageProps} />
    </CntrlProvider>
  );
}

export default App;
