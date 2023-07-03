import { filterStreamrNodes } from '../utils/refineAPI';

export const cronJobs = [
  {
    // filter for streamr/broker-node to find total nodes
    url: 'https://api.runonflux.io/apps/globalappsspecifications',
    schedule: '*/1 * * * *', // Every 1 minute
    streamId:
      '0xd4081fcd7b3d4006515f9daf7c7b6cc13935df12/runonflux.io/streamr-nodes',
    refineFunc: filterStreamrNodes,
  },
  {
    url: 'https://api.runonflux.io/flux/info',
    schedule: '*/5 * * * *', // Every 5 minutes
    streamId: '',
  },
  {
    url: 'https://api.runonflux.io/apps/fluxusage',
    schedule: '0 */2 * * *', // Every 2 hours
    streamId: '',
  },
  {
    url: 'https://api.runonflux.io/apps/appsresources',
    schedule: '*/1 * * * *', // Every 1 minute
    streamId: '',
  },
];
