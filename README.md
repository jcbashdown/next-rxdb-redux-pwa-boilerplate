# Next RxDB Redux PWA Boilerplate 

This example originally uses [`next-pwa`](https://github.com/shadowwalker/next-pwa) to create a progressive web app (PWA) powered by [Workbox](https://developers.google.com/web/tools/workbox/).

# How to use this as a boilerplate

- This repo demonstrates using next-pwa with rxdb and redux. This might be overkill in some ways and it's not totally clear yet how best to keep redux in sync with rxdb
- It shows loading initial data (from a fixture here but in prod it would be a server). Syncing it to redux store state and using the info in a component
- It includes some tests that don't currently pass (taken from an older project) but show how they could work
- It uses the app router
- It demonstrates a Next server route
- It uses tailwind
- TS is reasonably well set up

There is a fair bit that needs cleaning up if starting a new project with this template but it's small enough to understand the project and do this - it's a good example

Please note that with this approach, the initial render on the server-side will not have access to the data fetched from RxDB. If you need to pre-populate the store with data on the server-side, you'll need to find alternative ways to fetch and serialize the data during SSR and hydrate the store on the client-side.

This currently doesn't include any server sync/replication of rxdb. This is a challenge but the notes-app-next-pwa repo should eventually give and example of doing this robustly (especially if we put a backend in that repo - use a monorepo approach)
