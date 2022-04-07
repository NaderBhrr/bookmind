import {TribeClient} from "@tribeplatform/gql-client";

export function tribeFacade() {

  const client = new TribeClient({
    clientId: process.env.CLIENT_ID,
    clientSecret: process.env.CLIENT_SECRET,
    graphqlUrl: process.env.GRAPHQL_URL
  });

  async function getTribeAccessToken (client: TribeClient) {

    const token = await client.generateToken({
      networkId: process.env.NETWORK_ID,
      memberId: process.env.MEMBER_ID
    });

    console.log("Toekn >>", token);

    return token

  }
  return {
    client,
    getTribeAccessToken
  }
}
