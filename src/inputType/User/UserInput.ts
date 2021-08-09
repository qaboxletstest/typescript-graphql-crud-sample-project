import { IsInt, Length, Max, Min } from "class-validator";
import { Field, Int, InputType } from "type-graphql";

@InputType()
export class UserInput {
    @Field()
    @Length(3, 10)
    firstName: string;

    @Field()
    @Length(3, 10)
    lastName: string;

    @Field(() => Int)
    @IsInt()
    @Min(18)
    @Max(60)
    age: number;
}