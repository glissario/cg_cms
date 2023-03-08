import * as contentful from "contentful";
contentful.createClient ? contentful.createClient({
  space: "ttcbkd5cuxln",
  accessToken: "WYwTlB0BprnzmGZqnWiVa7eKEGnlBC_2MBy_1utLKw8"
}) : contentful.default.createClient({
  space: "ttcbkd5cuxln",
  accessToken: "WYwTlB0BprnzmGZqnWiVa7eKEGnlBC_2MBy_1utLKw8"
});
const contentfulFetch = async (query = "") => {
  const url = "https://graphql.contentful.com/content/v1/spaces/ttcbkd5cuxln";
  const response = await fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: "Bearer WYwTlB0BprnzmGZqnWiVa7eKEGnlBC_2MBy_1utLKw8"
    },
    body: JSON.stringify({ query })
  });
  return response;
};
const styles = "";
export {
  contentfulFetch as c
};
