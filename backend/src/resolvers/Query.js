// this module allows you to pass queries directly
// to prisma without running any logic or authentication
// first.
const {forwardTo} = require('prisma-binding')

const Query = {
    // below is the simple way to do the query
    // and the fully fleshed out version is commented out
    items: forwardTo('db'),
    // async items(parent, args, ctx, info) {
    //     const items = await ctx.db.query.items()
    //     return items
    // }
    item: forwardTo('db'),
    itemsConnection: forwardTo('db'),
    // ES6 syntax that allows assigning a prop name to a value like a function
    // otherwise it would look like: me: function(...)
    me(parent, args, ctx, info) {
        //check if there is a current user Id
        if (!ctx.request.userId) {
            return null
        }

        return ctx.db.query.user({
            where: {id: ctx.request.userId}
        }, info)
    }
};

module.exports = Query;
