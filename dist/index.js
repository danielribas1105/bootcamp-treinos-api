import "dotenv.config";
import Fastify from "fastify";
import { serializerCompiler, validatorCompiler, } from "fastify-type-provider-zod";
const app = Fastify({
    logger: true,
});
// Add schema validator and serializer
app.setValidatorCompiler(validatorCompiler);
app.setSerializerCompiler(serializerCompiler);
// Declare a route
app.get("/", async function handler(request, reply) {
    return { hello: "world" };
});
// Run the server!
try {
    await app.listen({ port: Number(process.env.PORT) || 8081 });
}
catch (err) {
    app.log.error(err);
    process.exit(1);
}
