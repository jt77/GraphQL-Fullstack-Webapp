const Mutations = {
    async createItem(parent, args, ctx, info) {
        const item = await ctx.db.mutation.createItem({
            data: {
                ...args
            }
        }, info)

        return item
    },
    updateItem(parent, args, ctx, info) {
        // take a copy of the updates
        const updates = {...args}
        // remove the id from the updates
        delete updates.id
        // run the updates method
        // the signature for this mutation method can be
        // found by the same name in the auto generated
        // schema file under the Mutation category
        return ctx.db.mutation.updateItem(
            {
                data: updates,
                where: {
                    id: args.id
                }
            },
            info
        )
    }
};

module.exports = Mutations;
