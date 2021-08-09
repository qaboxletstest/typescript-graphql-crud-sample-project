import { InputType } from "type-graphql";
import { Field, Int } from "type-graphql";
import { IsInt, Length, Max, Min } from "class-validator";

@InputType()
export class UserUpdate {
    @Field(() => String, { nullable: true })
    @Length(3, 10)
    firstName?: string;

    @Field(() => String, { nullable: true })
    @Length(3, 10)
    lastName?: string;

    @Field(() => Int, { nullable: true })
    @IsInt()
    @Min(18)
    @Max(60)
    age?: number;
}