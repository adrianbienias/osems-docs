# Visual dependency graph

It can be helpful from the architectural point of view to see how parts of the system depend on each other.

- [dependency-cruiser - npm](https://www.npmjs.com/package/dependency-cruiser)
- [Graphviz](https://graphviz.org/download/) (required by dependency-cruiser)

Example usage:

```
npx depcruise .  --ts-config --exclude "(node_modules|\.next|\.test)" --output-type dot | dot -T svg > dependency-graph.svg
```
