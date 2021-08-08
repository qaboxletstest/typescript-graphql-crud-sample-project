import { InputType } from "type-graphql";
import { Field, Int } from "type-graphql";

@InputType()
export class UserUpdate {
    @Field(() => String, { nullable: true })
    firstName?: string;

    @Field(() => String, { nullable: true })
    lastName?: string;

    @Field(() => Int, { nullable: true })
    age?: number;
}