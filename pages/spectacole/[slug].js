import React from 'react';
import {useRouter} from "next/router";
import App from "../../components/App";
import Show from "../../components/Shows/Show";
import gql from "graphql-tag";
import {useQuery} from "@apollo/react-hooks";

// Folosim query-ul pentru spectacole pentru a putea cauta dupa slug
// In WPGraphql nu poti face query dupa slug pentru custom post types
const SHOW_QUERY = gql`
    query Spectacol($slug: String!) {
        spectacole(where: { name: $slug }, first: 1){
            edges {
                node {
                    title
                    uri
                    blocksJSON
                }
            }
        }
    }
`;
function ShowPage(props) {
  const router = useRouter();
  const { slug } = router.query;
  const { loading, data} = useQuery(SHOW_QUERY, {
    variables: {
      slug,
    }
  });

  if(!data) {
    return null;
  }

  return (
    <App>
      <Show data={data.spectacole.edges[0].node} />
    </App>
  )
}

export default ShowPage;
