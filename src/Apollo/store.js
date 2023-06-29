import {
  ApolloClient,
  InMemoryCache,
  gql,
  createHttpLink,
  ApolloProvider,
} from "@apollo/client";
import { setContext } from "@apollo/client/link/context";

const authLink = setContext((_, { headers }) => {
  // return the headers to the context so httpLink can read them
  return {
    headers: {
      ...headers,
      authorization:
        "eyJraWQiOiIzZ1U3bzFFVkg2bTJKY3AxXC9TVWpMYTlIQUJFelluQUx6QXNPS0lLNDE4Zz0iLCJhbGciOiJSUzI1NiJ9.eyJzdWIiOiI0YzliODNhNy1hZmEzLTQ3NTEtYjYzNi0yNjE3MWNhOGU5ZDEiLCJjb2duaXRvOmdyb3VwcyI6WyJhZG1pbl82OTI2MjdlZi1mZGE4LTQyMDMtYjEwOC1lOGU5ZjUyYWQ0MTAiLCJ0ZW5hbnRfNjkyNjI3ZWYtZmRhOC00MjAzLWIxMDgtZThlOWY1MmFkNDEwIiwidGVuYW50Xzk0MGU4ZWRmLWVkZDktNDAxZC1hMjFhLTEwZjg2NmZiZGIzZiJdLCJpc3MiOiJodHRwczpcL1wvY29nbml0by1pZHAudXMtZWFzdC0xLmFtYXpvbmF3cy5jb21cL3VzLWVhc3QtMV9VYXFsdUxPaHEiLCJ2ZXJzaW9uIjoyLCJjbGllbnRfaWQiOiIxcDNoNG1rc2ZhdWU0cThqbjQ3dWZlYm9yIiwib3JpZ2luX2p0aSI6IjIyNDZmOTNlLTNlOGEtNGZhYS1iNWZjLThkM2FkOWY2N2QwMSIsImV2ZW50X2lkIjoiMjMwZTdiYWUtODZlMS00NmM3LThkOGUtNDY3Y2FhNDY4MTc3IiwidG9rZW5fdXNlIjoiYWNjZXNzIiwic2NvcGUiOiJwaG9uZSBncmF2aXR5XC9ncmFwaHFsIG9wZW5pZCBlbWFpbCIsImF1dGhfdGltZSI6MTY4NzA4MDgzNSwiZXhwIjoxNjg4MTIxMTk4LCJpYXQiOjE2ODgwMzQ3OTgsImp0aSI6IjgxYThhYTExLWQ2OTItNDUwYS05ZWM4LWNjYzBiOTRlYmZjOCIsInVzZXJuYW1lIjoiY29kZXRlc3QtdXNlciJ9.YCa8qmm8he2n3-IXLPrXdGfgA07WdYxtZKsUwX7Ts_Zf51MJWwZdpKoU6VygAb0zpnKzWE8oOEVhe9E8X5didgKYq8aa9XQXiPtXals2lg2am88SKfcmmbb0ZzwTYygjEEPn4Mt64MbScZoHu0gVUISCnB2s_lp7E1DbsSjueg_iNdqGSYwm7VkXvdaj0nM3pJH2rjGQTg3_tgJdCT652GkicH4CgmrvPDLhnvAF7hm1VJBT8l92zKcfE4ijgo8xoFKwrYCCiz17H23aCrzgHMicP6axRwdraFQTdGMXnwM4wL7A_eLpQN-cI9cBxqb2nEybK49pePcPlpTCR9HPIA",
    },
  };
});

const httpLink = createHttpLink({
  uri: "https://graph.dev.jit.care/graphql",
});

export const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
});
