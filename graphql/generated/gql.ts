/* eslint-disable */
import * as types from './graphql';
import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';

/**
 * Map of all GraphQL operations in the project.
 *
 * This map has several performance disadvantages:
 * 1. It is not tree-shakeable, so it will include all operations in the project.
 * 2. It is not minifiable, so the string of a GraphQL query will be multiple times inside the bundle.
 * 3. It does not support dead code elimination, so it will add unused operations.
 *
 * Therefore it is highly recommended to use the babel or swc plugin for production.
 */
const documents = {
    "mutation CreateProductReview($review: ReviewCreateInput!) {\n  review: createReview(data: $review) {\n    id\n    stage\n    user\n    date\n    rating\n    content\n  }\n}\n\nmutation CreateReview($id: ID, $reviews: ReviewUpdateManyInlineInput) {\n  updateProduct(data: {reviews: $reviews}, where: {id: $id}) {\n    id\n    reviews {\n      content\n      createdAt\n      user\n    }\n  }\n}\n\nmutation CreateOrder($order: OrderCreateInput!) {\n  createOrder(data: $order) {\n    id\n  }\n}": types.CreateProductReviewDocument,
    "query GetProductDetailBySlug($slug: String) {\n  product(where: {slug: $slug}) {\n    id\n    sale\n    slug\n    title\n    description\n    sport\n    category\n    tags\n    sizes\n    prices {\n      id\n      price\n      date\n    }\n    rating\n    images {\n      image {\n        id\n        url\n      }\n      alt\n    }\n    reviews {\n      user\n      content\n      rating\n      updatedAt\n    }\n  }\n}\n\nquery getProductsByTags($tags: [String!], $id: ID) {\n  products(where: {tags_contains_some: $tags, id_not: $id}) {\n    id\n    sizes\n    slug\n    title\n    prices {\n      id\n      price\n      date\n    }\n    tags\n    images {\n      image {\n        url\n        id\n      }\n    }\n  }\n}\n\nquery GetAllProducts($first: Int, $skip: Int, $category: [Category], $sport: [Sport]) {\n  products(\n    first: $first\n    skip: $skip\n    where: {category_in: $category, sport_in: $sport}\n  ) {\n    createdAt\n    id\n    sale\n    slug\n    title\n    description\n    sport\n    category\n    tags\n    sizes\n    prices {\n      id\n      price\n      date\n    }\n    images {\n      image {\n        id\n        url\n      }\n      alt\n    }\n    rating\n  }\n  productsConnection(where: {category_in: $category, sport_in: $sport}) {\n    aggregate {\n      count\n    }\n  }\n}": types.GetProductDetailBySlugDocument,
};

/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 *
 *
 * @example
 * ```ts
 * const query = graphql(`query GetUser($id: ID!) { user(id: $id) { name } }`);
 * ```
 *
 * The query argument is unknown!
 * Please regenerate the types.
 */
export function graphql(source: string): unknown;

/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "mutation CreateProductReview($review: ReviewCreateInput!) {\n  review: createReview(data: $review) {\n    id\n    stage\n    user\n    date\n    rating\n    content\n  }\n}\n\nmutation CreateReview($id: ID, $reviews: ReviewUpdateManyInlineInput) {\n  updateProduct(data: {reviews: $reviews}, where: {id: $id}) {\n    id\n    reviews {\n      content\n      createdAt\n      user\n    }\n  }\n}\n\nmutation CreateOrder($order: OrderCreateInput!) {\n  createOrder(data: $order) {\n    id\n  }\n}"): (typeof documents)["mutation CreateProductReview($review: ReviewCreateInput!) {\n  review: createReview(data: $review) {\n    id\n    stage\n    user\n    date\n    rating\n    content\n  }\n}\n\nmutation CreateReview($id: ID, $reviews: ReviewUpdateManyInlineInput) {\n  updateProduct(data: {reviews: $reviews}, where: {id: $id}) {\n    id\n    reviews {\n      content\n      createdAt\n      user\n    }\n  }\n}\n\nmutation CreateOrder($order: OrderCreateInput!) {\n  createOrder(data: $order) {\n    id\n  }\n}"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "query GetProductDetailBySlug($slug: String) {\n  product(where: {slug: $slug}) {\n    id\n    sale\n    slug\n    title\n    description\n    sport\n    category\n    tags\n    sizes\n    prices {\n      id\n      price\n      date\n    }\n    rating\n    images {\n      image {\n        id\n        url\n      }\n      alt\n    }\n    reviews {\n      user\n      content\n      rating\n      updatedAt\n    }\n  }\n}\n\nquery getProductsByTags($tags: [String!], $id: ID) {\n  products(where: {tags_contains_some: $tags, id_not: $id}) {\n    id\n    sizes\n    slug\n    title\n    prices {\n      id\n      price\n      date\n    }\n    tags\n    images {\n      image {\n        url\n        id\n      }\n    }\n  }\n}\n\nquery GetAllProducts($first: Int, $skip: Int, $category: [Category], $sport: [Sport]) {\n  products(\n    first: $first\n    skip: $skip\n    where: {category_in: $category, sport_in: $sport}\n  ) {\n    createdAt\n    id\n    sale\n    slug\n    title\n    description\n    sport\n    category\n    tags\n    sizes\n    prices {\n      id\n      price\n      date\n    }\n    images {\n      image {\n        id\n        url\n      }\n      alt\n    }\n    rating\n  }\n  productsConnection(where: {category_in: $category, sport_in: $sport}) {\n    aggregate {\n      count\n    }\n  }\n}"): (typeof documents)["query GetProductDetailBySlug($slug: String) {\n  product(where: {slug: $slug}) {\n    id\n    sale\n    slug\n    title\n    description\n    sport\n    category\n    tags\n    sizes\n    prices {\n      id\n      price\n      date\n    }\n    rating\n    images {\n      image {\n        id\n        url\n      }\n      alt\n    }\n    reviews {\n      user\n      content\n      rating\n      updatedAt\n    }\n  }\n}\n\nquery getProductsByTags($tags: [String!], $id: ID) {\n  products(where: {tags_contains_some: $tags, id_not: $id}) {\n    id\n    sizes\n    slug\n    title\n    prices {\n      id\n      price\n      date\n    }\n    tags\n    images {\n      image {\n        url\n        id\n      }\n    }\n  }\n}\n\nquery GetAllProducts($first: Int, $skip: Int, $category: [Category], $sport: [Sport]) {\n  products(\n    first: $first\n    skip: $skip\n    where: {category_in: $category, sport_in: $sport}\n  ) {\n    createdAt\n    id\n    sale\n    slug\n    title\n    description\n    sport\n    category\n    tags\n    sizes\n    prices {\n      id\n      price\n      date\n    }\n    images {\n      image {\n        id\n        url\n      }\n      alt\n    }\n    rating\n  }\n  productsConnection(where: {category_in: $category, sport_in: $sport}) {\n    aggregate {\n      count\n    }\n  }\n}"];

export function graphql(source: string) {
  return (documents as any)[source] ?? {};
}

export type DocumentType<TDocumentNode extends DocumentNode<any, any>> = TDocumentNode extends DocumentNode<  infer TType,  any>  ? TType  : never;