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
    },
    async signin(parent, {email, password}, ctx, info) {

        // check if there is a user with that email
        const user = await ctx.db.query.user({where: {email}})
        if (!user) {
            throw new Error(`No such user found for email ${email}`)
        }

        // check if their password is correct
        const valid = await bcrypt.compare(password, user.password)
        if (!valid) {
            throw new Error('Invalid Password')
        }

        // generate the jwt token
        const token = jwt.sign({userId: user.id}, process.env.APP_SECRET)

        // set the cookie with the token to return with the response to the client
        ctx.response.cookie('token', token, {
            httpOnly: true,
            maxAge: 1000 * 60 * 60 * 24 * 365,
        })

        // return the user
        return user
    },
    signout(parent, args, ctx, info) {
        // usage of the cookie-parser module in index.js gives us access
        // to the cookie data in the request and response along with
        // the clearCookie method to remove a cookie from the response/request
        ctx.response.clearCookie('token')
        return {message: 'Goodbye'}
    }
};

module.exports = Mutations;
