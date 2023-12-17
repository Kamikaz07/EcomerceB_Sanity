export default {
    name: 'review',
    title: 'Review',
    type: 'document',
    fields: [
      {
        name: 'product',
        title: 'Product',
        type: 'reference',
        to: [{type: 'product'}],
      },
      {
        name: 'rating',
        title: 'Rating',
        type: 'number',
        validation: Rule => Rule.required().min(1).max(5),
      },
      {
        name: 'reviewText',
        title: 'Review Text',
        type: 'text',
      },
      // ... outros campos conforme necessário ...
    ],
  };