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

// Multiple queries example (SSR not working)
// Component.queries = [
//   {
//     query: gql`
//       query Example {
//         __typename
//       }
//     `
//   }
// ]
