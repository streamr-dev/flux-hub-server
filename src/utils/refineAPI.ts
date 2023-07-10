interface NodeData {
  status: string;
  data: Array<{
    name: string;
    compose?: Array<{
      repotag: string;
    }>;
  }>;
}

export const filterStreamrNodes = (
  apiData: NodeData
): { 'streamr-nodes': number } => {
  let count = 0; // Counter for streamr/broker-node occurrences
  for (const item of apiData.data) {
    if (item.compose) {
      for (const composeItem of item.compose) {
        if (composeItem.repotag.startsWith('streamr/broker')) {
          count++;
        }
      }
    }
  }

  return { 'streamr-nodes': count };
};

interface UsageData {
  status: string;
  data: string;
}

export const extractUsageData = (apiData: UsageData): { usage: string } => {
  return { usage: apiData.data };
};

export const extractSupplyData = (apiData: number): { supply: number } => {
  return { supply: apiData };
};

interface TitanNodes {
  uuid: string;
  address: string;
  collateral: number;
  created: number;
  location: string;
  name: string;
}

export const extractTitanNodeCount = (
  apiData: TitanNodes[]
): { titanNodes: number } => {
  return { titanNodes: apiData.length };
};

interface TitanStats {
  total: number;
  confirming: number;
  unregistered: number;
  maxsupply: number;
  currentsupply: number;
}

export const extractLockedUpSupply = (
  apiData: TitanStats
): { lockedUpSupply: number } => {
  return { lockedUpSupply: apiData.total };
};

interface Nodes {
  cumulus: number;
  nimbus: number;
  stratus: number;
  fractus: number;
  total: number;
}

interface DashboardStats {
  status: string;
  data: {
    nodes: Nodes;
    cpu: number;
    cpu30Day: number;
    cpuTotal: number;
    ram: number;
    ram30Day: number;
    ramTotal: number;
    hdd: number;
    hdd30Day: number;
    hddTotal: number;
    ssdTotal: number;
    appInstances: number;
    appCount: number;
    uniqueAppCount: number;
    countries: number;
    continents: number;
    orgs: number;
  };
}

export const extractDashboardData = (
  apiData: DashboardStats
): { appInstances: number; appCount: number; uniqueAppCount: number } => {
  return {
    appInstances: apiData.data.appInstances,
    appCount: apiData.data.appCount,
    uniqueAppCount: apiData.data.uniqueAppCount,
  };
};

export const extractNodeData = (apiData: DashboardStats): Nodes => {
  return apiData.data.nodes;
};
