import {
  extractDashboardData,
  extractLockedUpSupply,
  extractNodeData,
  extractSupplyData,
  extractTitanNodeCount,
  extractUsageData,
  filterStreamrNodes,
} from '../utils/refineAPI';

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
    // ressources on flux available
    url: 'https://api.runonflux.io/apps/fluxusage',
    schedule: '*/1 * * * *', // Every 1 minute
    streamId:
      '0xd4081fcd7b3d4006515f9daf7c7b6cc13935df12/runonflux.io/resources-available',
    refineFunc: extractUsageData,
  },
  {
    // circulating token supply of flux
    url: 'https://explorer.runonflux.io/api/statistics/circulating-supply',
    schedule: '*/1 * * * *', // Every 1 minute
    streamId:
      '0xd4081fcd7b3d4006515f9daf7c7b6cc13935df12/runonflux.io/circulating-supply',
    refineFunc: extractSupplyData,
  },
  {
    // titan nodes
    url: 'https://titan.runonflux.io/nodes',
    schedule: '*/1 * * * *', // Every 1 minute
    streamId:
      '0xd4081fcd7b3d4006515f9daf7c7b6cc13935df12/runonflux.io/total-titan-nodes',
    refineFunc: extractTitanNodeCount,
  },
  {
    // locked up supply
    url: 'https://titan.runonflux.io/stats',
    schedule: '*/1 * * * *', // Every 1 minute
    streamId:
      '0xd4081fcd7b3d4006515f9daf7c7b6cc13935df12/runonflux.io/total-locked-up-supply-titan-nodes',
    refineFunc: extractLockedUpSupply,
  },
  {
    // The Flux Cloud Usage, in Application Instances, Total Deployments, and Unique Applications
    url: 'https://usagestats.runonflux.io/dashboard',
    schedule: '*/1 * * * *', // Every 1 minute
    streamId:
      '0xd4081fcd7b3d4006515f9daf7c7b6cc13935df12/runonflux.io/flux-cloud-usage',
    refineFunc: extractDashboardData,
  },
  {
    // The Flux Cloud back bone infrastructure, in total FluxNodes and its different tiers
    url: 'https://usagestats.runonflux.io/dashboard',
    schedule: '*/1 * * * *', // Every 1 minute
    streamId:
      '0xd4081fcd7b3d4006515f9daf7c7b6cc13935df12/runonflux.io/infrastructure',
    refineFunc: extractNodeData,
  },
];
