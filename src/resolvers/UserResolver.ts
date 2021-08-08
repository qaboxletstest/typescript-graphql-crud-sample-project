import { User } from "../entity/User";
import { Arg, Int, Mutation, Query, Resolver } from "type-graphql";
import { UserInput } from "../inputType/User/UserInput";
import { UserUpdate } from "../inputType/User/UserUpdate";

@Resolver()
export class UserResolver {
    @Mutation(() => User)
    async createUser(
        @Arg("options", () => UserInput) options: UserInput,
    ) {
        const user = await User.create(options).save();
        return user;
    }

    @Mutation(() => Boolean)
    async updateUser(
        @Arg("id", () => Int) id: number,
        @Arg("input", () => UserUpdate) input: UserUpdate,
    ) {
        await User.update({ id }, input);
        return true
    }

    @Mutation(() => Boolean)
    async deleteUser(
        @Arg("id", () => Int) id: number
    ) {
        await User.delete({ id });
        return true
    }

    @Query(() => [User])
    users() {
        return User.find()
    }

}