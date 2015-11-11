Orders = new Mongo.Collection('orders');

Order = Astro.Class({
    name:'Order',
    collection: Orders,
    fields:{
        quantity:{
            type:'number',
            default:0,
            validator: Validators.gte(1)
        }
    }
});