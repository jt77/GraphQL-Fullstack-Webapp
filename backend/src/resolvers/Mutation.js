const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')

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
    },
    async deleteItem(parent, args, ctx, info) {
        const where = {id: args.id}
        // find the item
        const item = await ctx.db.query.item({where}, `{id title}`)
        // check if they own the item or have permissions

        // delete item
        return ctx.db.mutation.deleteItem({where}, info)
    },
    async signup(parent, args, ctx, info) {
        args.email = args.email.toLowerCase()

        // hash users password
        const password = await bcrypt.hash(args.password, 10)

        // create the user in the database
        const user = await ctx.db.mutation.createUser({
            data: {
                ...args,
                password,
                permissions: {set: ['USER']},
            }
        }, info)

        // create the jwt token
        const token = jwt.sign({userId: user.id}, process.env.APP_SECRET)

        // set the jwt token as a cookie in the response to use during the users session
        ctx.response.cookie('token', token, {
            httpOnly: true,
            maxAge: 1000 * 60 * 60 * 24 * 365, // 1 year cookie duration
        })

        // return user
        return user
    }
};

module.exports = Mutations;
