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
    url: 'https://api.runonflux.io/apps/fluxusage',
    schedule: '*/1 * * * *', // Every 1 minute
    streamId:
      '0xd4081fcd7b3d4006515f9daf7c7b6cc13935df12/runonflux.io/resources-available',
  },
];
