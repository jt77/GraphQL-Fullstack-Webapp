// this module allows you to pass queries directly
// to prisma without running any logic or authentication
// first.  below is the simple query using this module
// and the fully fleshed out query commented out
const {forwardTo} = require('prisma-binding')

const Query = {
    items: forwardTo('db')
    // async items(parent, args, ctx, info) {
    //     const items = await ctx.db.query.items()
    //     return items
    // }
};

module.exports = Query;
