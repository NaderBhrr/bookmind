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

    return token;

  }

  async function getTribeMember (memberId: string) {

    const token = await getTribeAccessToken(client);

    client.setToken(token);

    const member = await client.members.get(memberId);

    return member;
  }

  async function getTribePosts (limit: number) {
    const token = await getTribeAccessToken(client);

    client.setToken(token);

    const posts = await client.posts.list({limit})

    return posts;
  }

  return {
    getTribeMember,
    getTribePosts
  }
}
