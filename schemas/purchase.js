// schemas/purchase.js

export default {
    name: 'purchase',
    title: 'Purchase',
    type: 'document',
    fields: [
      {
        name: 'customerEmail',
        title: 'Customer Email',
        type: 'string',
      },
      {
        name: 'totalPrice',
        title: 'Total Price',
        type: 'number',
      },
      {
        name: 'items',
        title: 'Items',
        type: 'array',
        of: [{ type: 'reference', to: [{ type: 'product' }] }],
      },
      // Outros campos conforme necessário
    ],
  };
  