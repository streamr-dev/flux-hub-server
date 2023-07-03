interface ApiData {
  status: string;
  data: Array<{
    name: string;
    compose?: Array<{
      repotag: string;
    }>;
  }>;
}

export const filterStreamrNodes = (
  apiData: ApiData
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
  console.log(`Total occurrences of streamr/broker: ${count}`);

  return { 'streamr-nodes': count };
};
