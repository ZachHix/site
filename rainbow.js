
import '@rainbow-me/rainbowkit/styles.css';

import {
  apiProvider,
  configureChains,
  getDefaultWallets,
  RainbowKitProvider,
} from '@rainbow-me/rainbowkit';
import { chain, createClient, WagmiProvider } from 'wagmi';

...
import { chain, createClient, WagmiProvider } from 'wagmi';
const { chains, provider } = configureChains(
  [chain.mainnet, chain.polygon, chain.optimism, chain.arbitrum],
  [
	apiProvider.alchemy(process.env.ALCHEMY_ID),
	apiProvider.fallback()
  ]
);
const { connectors } = getDefaultWallets({
  appName: 'My RainbowKit App',
  chains
});
const wagmiClient = createClient({
  autoConnect: true,
  connectors,
  provider
})
const App = () => {
  return (
	<WagmiProvider client={wagmiClient}>
	  <RainbowKitProvider chains={chains}>
		<YourApp />
	  </RainbowKitProvider>
	</WagmiProvider>
  );
};
import { ConnectButton } from '@rainbow-me/rainbowkit';
export const YourApp = () => {
  return <ConnectButton />;
};