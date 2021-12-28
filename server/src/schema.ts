import path from "path";
import {
  Arg,
  Field,
  ObjectType,
  Query,
  Resolver,
  buildSchema,
} from "type-graphql";

@ObjectType()
class Hello {
  @Field()
  response!: string;
}

@Resolver(Hello)
export class HelloResolver {
  @Query((returns) => Hello)
  async hello(@Arg("name") name: string) {
    return { response: `Hello ${name || "world"}` };
  }
}

export const getSchema = async () => {
  const schema = await buildSchema({
    resolvers: [HelloResolver],
    emitSchemaFile: path.resolve(__dirname, "../schema.gql"),
  });
  return schema;
};
