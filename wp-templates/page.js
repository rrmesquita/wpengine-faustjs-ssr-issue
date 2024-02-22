import { gql } from "@apollo/client"

export default function Component(props) {
  return <div>Testing</div>
}

// Uncomment the query below to enable SSR
// Component.query = gql`
//   query Example {
//     __typename
//   }
// `
