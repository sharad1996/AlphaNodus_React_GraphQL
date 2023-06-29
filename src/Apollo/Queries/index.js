import { gql } from "@apollo/client";

export const GET_LOCATIONS = gql`
  query LocationList {
    locationList(tenant: "940e8edf-edd9-401d-a21a-10f866fbdb3f") {
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