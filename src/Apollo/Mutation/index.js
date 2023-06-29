import { gql } from "@apollo/client";

/***
 * requestBody: ->
 * 
 *  address:String
    alias:String
    description: String
    id:String
    managingOrganization: String
    name: String!
    npi:String
    partOf:String
    status:String
    tag:String
    taxId:String
    telecom:[LocationTelecomInput]
    tenant:String
    type:String
    updatedAt:Float
 * **/

export const CREATE_LOCATION = gql`
  mutation LocationCreate($requestBody: LocationWriteInput!, $tenant: String!) {
    locationCreate(requestBody: $requestBody, tenant: $tenant) {
      resourceID
    }
  }
`;

export const REMOVE_LOCATION = gql`
  mutation LocationRemove($locationRemoveId: String!, $tenant: String!) {
    locationRemove(id: $locationRemoveId, tenant: $tenant) {
      resourceID
    }
  }
`;

// LocationWriteInput: it contains so many fields, you can see above
export const UPDATE_LOCATION = gql`
  mutation LocationUpdate(
    $locationUpdateId: String!
    $requestBody: LocationWriteInput!
    $tenant: String!
  ) {
    locationUpdate(
      id: $locationUpdateId
      requestBody: $requestBody
      tenant: $tenant
    ) {
      resourceID
    }
  }
`;
