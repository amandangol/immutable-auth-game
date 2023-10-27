import { config, passport } from '@imtbl/sdk';
import { ImmutableConfiguration } from '@imtbl/sdk/dist/config';

interface PassportModuleConfiguration {
  baseConfig: ImmutableConfiguration;
  clientId: string;
  logoutRedirectUri: string;
  logoutMode?: 'redirect' | 'silent'; // defaults to 'redirect'
  redirectUri: string;
  scope?: string;
  audience?: string;
}

const configuration: PassportModuleConfiguration = {
  baseConfig: new config.ImmutableConfiguration({
    environment: config.Environment.SANDBOX,
  }),
  clientId: '3yH4O0SJZZZY7mKrigqw73MncdWtuOsa',
  redirectUri: 'https://immutable-auth-game.netlify.app/',
  logoutRedirectUri: 'https://immutable-auth-game.netlify.app/logout',
  audience: 'platform_api',
  scope: 'openid offline_access email transact'
};

const passportInstance = new passport.Passport(configuration);

const provider = passportInstance.connectEvm();

export const login = async () => {
  return await provider.request({ method: "eth_requestAccounts" });
}

export const loginCallback = () => {
  passportInstance.loginCallback();
}
