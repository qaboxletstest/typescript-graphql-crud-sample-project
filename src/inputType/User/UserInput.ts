import { InputType } from "type-graphql";
import { Field, Int } from "type-graphql";

@InputType()
export class UserInput {
    @Field()
    firstName: string;

    @Field()
    lastName: string;

    @Field(() => Int)
    age: number;
}