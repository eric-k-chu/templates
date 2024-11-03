# vun

Vitest + Bun

## note

Use `bun test` and `bun test --watch` to run tests. 

`bun test` took ~70ms
`bun run vitest --run` took ~600ms

I am using Vitest because I could not get Bun to provide global APIs (not even sure if bun:test has globals)