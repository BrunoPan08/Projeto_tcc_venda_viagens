export default {
    name: 'banner',
    title: 'Banner',
    type: 'document',
    fields: [
        {
            name:'image',
            title: 'Image',
            type: 'image',
            options: {
                hotspot: true,

            }
        },
        {
            name: 'buttonText',
            title: 'buttonText',
            type: 'string',
        },
        {
            name: 'product',
            title: 'Product',
            type: 'string'
        },
        {
            name: 'desc',
            title: 'Desc',
            type: 'string',
        },
        {
            name: 'smallText',
            title: 'SmallText',
            type: 'string',
        },
        {
            name: 'midText',
            title: 'MidText',
            type: 'string',
        },
        {
            name: 'largeText1',
            title: 'largeText1',
            type: 'string',
        },
        {
            name: 'largeText2',
            title: 'largetext2',
            type: 'string',
        },
        {
            name: 'discount',
            title: 'Discount',
            type: 'string',
        },
        {
            name: 'saleTime',
            title: 'SaleTime',
            type: 'string',
        },
    ]
}