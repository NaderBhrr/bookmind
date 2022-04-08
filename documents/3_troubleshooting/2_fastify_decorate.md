# How to add decorate typings to FastifyInstance
When adding decorators to the fastify, you will likely receive the error that "*" does not exist on FastifyInstance<>.

To sole the issue you need to extend the FastifyInstance in the **@types** directory at the root of the project.

Then you should add the typing to the tsconfig.app.json as follows:

```typescript
 "types": ["node", "../../@types"]
```