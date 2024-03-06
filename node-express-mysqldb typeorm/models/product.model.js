const { EntitySchema } = require('typeorm');

module.exports = new EntitySchema({
    name: 'Products',
    columns: {
        id: {
            primary: true,
            type: 'int',
            generated: true,
        },
        text: {
            type: 'varchar',
        },
        description: {
            type: 'text',
        },
        price: {
            type: 'double',
            precision: 10,
            scale: 2,
        },
        imageUrl: {
            type: 'varchar'
        },
    },
});
