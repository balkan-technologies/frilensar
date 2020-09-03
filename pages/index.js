import React from 'react';
import App from '../components/App'
import Layout from "../components/Layout";
import {Container} from "reactstrap";
import ClipLoader from "react-spinners/ClipLoader";
import GenericPage from "../components/Core/GenericPage";
import {useQuery} from "@apollo/react-hooks";
import gql from "graphql-tag";

const PAGE_QUERY = gql`
    query PageQuery($pageSlug: String!) {
        pages(where: { name: $pageSlug }, first: 1) {
            __typename
            edges {
                node {
                    __typename
                    id
                    title
                    uri
                    blocksJSON
                }
            }
        }
    }
`;

const IndexPage = () => {
  const { loading, data } = useQuery(PAGE_QUERY, {
    variables: {
      pageSlug: "homepage",
    }
  });

  return (
    <App>
      <Layout>
          {loading ? (
            <ClipLoader />
          ): (
            <GenericPage data={data.pages.edges[0].node} />
          )}
      </Layout>
    </App>
  )
}

export default IndexPage
