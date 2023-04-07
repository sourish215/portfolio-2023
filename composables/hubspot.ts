import { Client } from '@hubspot/api-client';

export const useHubspot = () => {
  const runtimeConfig = useRuntimeConfig();

  const hubspotClient = new Client({ accessToken: 'pat-na1-314bbac6-f723-4d48-a61b-2d1b2b11261e' });

  return {
    hubspotClient,
  };
};
