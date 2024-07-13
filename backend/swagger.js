// backend/swagger.js

import swaggerJSDoc from 'swagger-jsdoc';
import swaggerUi from 'swagger-ui-express';

const options = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'Medik E-commerce with Swagger',
      version: '1.0.0',
      description: 'Swagger integrated in Medik E-commerce website',
      contact: {
        name: 'Raghav Laad',
        email: 'raghavlaad89@gmail.com'
      }
    },
    servers: [
      {
        url: 'http://localhost:5000',
        description: 'Development server'
      }
    ],
    components: {
      schemas: {
        User: {
          type: 'object',
          properties: {
            _id: { type: 'string' },
            name: { type: 'string' },
            email: { type: 'string' },
            isAdmin: { type: 'boolean' }
          }
        },
        Product: {
          type: 'object',
          properties: {
            _id: { type: 'string' },
            name: { type: 'string' },
            price: { type: 'number' },
            description: { type: 'string' },
            countInStock: { type: 'number' },
            imageUrl: { type: 'string' }
          }
        },
        ProductInput: {
          type: 'object',
          properties: {
            name: { type: 'string' },
            price: { type: 'number' },
            description: { type: 'string' },
            countInStock: { type: 'number' },
            imageUrl: { type: 'string' }
          },
          required: ['name', 'price', 'description', 'countInStock', 'imageUrl']
        },
        Review: {
          type: 'object',
          properties: {
            _id: { type: 'string' },
            user: { type: 'string' }, // Assuming user ID or name
            rating: { type: 'number' },
            comment: { type: 'string' }
          }
        },
        ReviewInput: {
          type: 'object',
          properties: {
            rating: { type: 'number' },
            comment: { type: 'string' }
          },
          required: ['rating', 'comment']
        },
        Order: {
          type: 'object',
          properties: {
            _id: { type: 'string' },
            user: { type: 'string' }, // Assuming user ID or name
            orderItems: { type: 'array', items: { $ref: '#/components/schemas/Product' } },
            shippingAddress: { type: 'object' }, // Define structure based on your application
            paymentMethod: { type: 'string' },
            paymentResult: { type: 'object' }, // Define structure based on your application
            itemsPrice: { type: 'number' },
            taxPrice: { type: 'number' },
            shippingPrice: { type: 'number' },
            totalPrice: { type: 'number' },
            isPaid: { type: 'boolean' },
            paidAt: { type: 'string', format: 'date-time' },
            isDelivered: { type: 'boolean' },
            deliveredAt: { type: 'string', format: 'date-time' }
          }
        }
      }
    }
  },
  apis: ['./backend/routes/*.js'] // Adjust the path to include all route files if needed
};

const swaggerSpec = swaggerJSDoc(options);

const swaggerUiSetup = (app) => {
  app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));
};

export default swaggerUiSetup;
