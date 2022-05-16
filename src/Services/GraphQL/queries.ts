import { gql } from '@apollo/client'

export const LOAD_INFO = gql `
  query Query {
    company {
      ceo
      coo
      founded
      valuation
      employees
      name
    }
    rockets {
      id
      company
      name
      description
      cost_per_launch
    }
  }
`
