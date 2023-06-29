import { gql } from "@apollo/client";

export const GET_LOCATIONS = gql`
  query LocationList($page: Int!) {
    locationList(tenant: "940e8edf-edd9-401d-a21a-10f866fbdb3f", page: $page) {
      pages
      resources {
        address
        alias
        description
        id
        managingOrganization
        name
        npi
        partOf
        status
        tag
        taxId
        telecom {
          rank
          system
          use
          value
        }
        type
        updatedAt
      }
    }
  }
`;
export const GET_LOCATION_BY_ID = gql`
  query LocationRead($locationId: String!, $tenant: String!) {
    locationRead(id: $locationId, tenant: $tenant) {
      id
      resource {
        address
        alias
        description
        id
        managingOrganization
        name
        npi
        partOf
        status
        tag
        taxId
        telecom {
          rank
          system
          use
          value
        }
        type
        updatedAt
      }
    }
  }
`;
