import {
  GraphQLSchema,
  GraphQLObjectType,
  GraphQLString,
  GraphQLInt,
  GraphQLList,
  GraphQLNonNull,
  GraphQLBoolean
} from 'graphql'

import addProduct from './resolvers/create'
import viewProduct from './resolvers/view'
import listProducts from './resolvers/list'
import removeProduct from './resolvers/remove'

const productType = new GraphQLObjectType({
  name: 'Product',
  fields: {
    id: { type: new GraphQLNonNull(GraphQLString) },
    name: { type: new GraphQLNonNull(GraphQLString) },
    quantity: { type: new GraphQLNonNull(GraphQLInt) },
    addedAt: { type: new GraphQLNonNull(GraphQLString) }
  }
})

const schema = dynamoDb => new GraphQLSchema({
  query: new GraphQLObjectType({
    name: 'Query',
    fields: {
      listProducts: {
        type: new GraphQLList(productType),
        resolve: (parent, args) => listProducts(dynamoDb)
      },
      viewProduct: {
        args: {
          id: { type: new GraphQLNonNull(GraphQLString) }
        },
        type: productType,
        resolve: (parent, args) => viewProduct(dynamoDb, args.id)
      }
    }
  }),

  mutation: new GraphQLObjectType({
    name: 'Mutation',
    fields: {
      createProduct: {
        args: {
          name: { type: new GraphQLNonNull(GraphQLString) },
          quantity: { type: new GraphQLNonNull(GraphQLInt) }
        },
        type: productType,
        resolve: (parent, args) => addProduct(dynamoDb, args)
      },
      removeProduct: {
        args: {
          id: { type: new GraphQLNonNull(GraphQLString) }
        },
        type: GraphQLBoolean,
        resolve: (parent, args) => removeProduct(dynamoDb, args.id)
      }
    }
  })
})

export default schema
