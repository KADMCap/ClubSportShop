import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
const defaultOptions = {} as const;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  Date: any;
  DateTime: any;
  Hex: any;
  Json: any;
  Long: any;
  RGBAHue: any;
  RGBATransparency: any;
  RichTextAST: any;
};

export type Account = Node & {
  __typename?: 'Account';
  avatar?: Maybe<Scalars['String']>;
  /** The time the document was created */
  createdAt: Scalars['DateTime'];
  /** User that created this document */
  createdBy?: Maybe<User>;
  /** Get the document in other stages */
  documentInStages: Array<Account>;
  email: Scalars['String'];
  fullName?: Maybe<Scalars['String']>;
  /** List of Account versions */
  history: Array<Version>;
  /** The unique identifier */
  id: Scalars['ID'];
  password?: Maybe<Scalars['String']>;
  /** The time the document was published. Null on documents in draft stage. */
  publishedAt?: Maybe<Scalars['DateTime']>;
  /** User that last published this document */
  publishedBy?: Maybe<User>;
  scheduledIn: Array<ScheduledOperation>;
  /** System stage field */
  stage: Stage;
  /** The time the document was updated */
  updatedAt: Scalars['DateTime'];
  /** User that last updated this document */
  updatedBy?: Maybe<User>;
};


export type AccountCreatedByArgs = {
  forceParentLocale?: InputMaybe<Scalars['Boolean']>;
  locales?: InputMaybe<Array<Locale>>;
};


export type AccountDocumentInStagesArgs = {
  includeCurrent?: Scalars['Boolean'];
  inheritLocale?: Scalars['Boolean'];
  stages?: Array<Stage>;
};


export type AccountHistoryArgs = {
  limit?: Scalars['Int'];
  skip?: Scalars['Int'];
  stageOverride?: InputMaybe<Stage>;
};


export type AccountPublishedByArgs = {
  forceParentLocale?: InputMaybe<Scalars['Boolean']>;
  locales?: InputMaybe<Array<Locale>>;
};


export type AccountScheduledInArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  forceParentLocale?: InputMaybe<Scalars['Boolean']>;
  last?: InputMaybe<Scalars['Int']>;
  locales?: InputMaybe<Array<Locale>>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<ScheduledOperationWhereInput>;
};


export type AccountUpdatedByArgs = {
  forceParentLocale?: InputMaybe<Scalars['Boolean']>;
  locales?: InputMaybe<Array<Locale>>;
};

export type AccountConnectInput = {
  /** Allow to specify document position in list of connected documents, will default to appending at end of list */
  position?: InputMaybe<ConnectPositionInput>;
  /** Document to connect */
  where: AccountWhereUniqueInput;
};

/** A connection to a list of items. */
export type AccountConnection = {
  __typename?: 'AccountConnection';
  aggregate: Aggregate;
  /** A list of edges. */
  edges: Array<AccountEdge>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
};

export type AccountCreateInput = {
  avatar?: InputMaybe<Scalars['String']>;
  createdAt?: InputMaybe<Scalars['DateTime']>;
  email: Scalars['String'];
  fullName?: InputMaybe<Scalars['String']>;
  password?: InputMaybe<Scalars['String']>;
  updatedAt?: InputMaybe<Scalars['DateTime']>;
};

export type AccountCreateManyInlineInput = {
  /** Connect multiple existing Account documents */
  connect?: InputMaybe<Array<AccountWhereUniqueInput>>;
  /** Create and connect multiple existing Account documents */
  create?: InputMaybe<Array<AccountCreateInput>>;
};

export type AccountCreateOneInlineInput = {
  /** Connect one existing Account document */
  connect?: InputMaybe<AccountWhereUniqueInput>;
  /** Create and connect one Account document */
  create?: InputMaybe<AccountCreateInput>;
};

/** An edge in a connection. */
export type AccountEdge = {
  __typename?: 'AccountEdge';
  /** A cursor for use in pagination. */
  cursor: Scalars['String'];
  /** The item at the end of the edge. */
  node: Account;
};

/** Identifies documents */
export type AccountManyWhereInput = {
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<AccountWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<AccountWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<AccountWhereInput>>;
  /** Contains search across all appropriate fields. */
  _search?: InputMaybe<Scalars['String']>;
  avatar?: InputMaybe<Scalars['String']>;
  /** All values containing the given string. */
  avatar_contains?: InputMaybe<Scalars['String']>;
  /** All values ending with the given string. */
  avatar_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are contained in given list. */
  avatar_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** Any other value that exists and is not equal to the given value. */
  avatar_not?: InputMaybe<Scalars['String']>;
  /** All values not containing the given string. */
  avatar_not_contains?: InputMaybe<Scalars['String']>;
  /** All values not ending with the given string */
  avatar_not_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  avatar_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values not starting with the given string. */
  avatar_not_starts_with?: InputMaybe<Scalars['String']>;
  /** All values starting with the given string. */
  avatar_starts_with?: InputMaybe<Scalars['String']>;
  createdAt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  createdAt_gt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  createdAt_gte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  createdAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  /** All values less than the given value. */
  createdAt_lt?: InputMaybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  createdAt_lte?: InputMaybe<Scalars['DateTime']>;
  /** Any other value that exists and is not equal to the given value. */
  createdAt_not?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  createdAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  createdBy?: InputMaybe<UserWhereInput>;
  documentInStages_every?: InputMaybe<AccountWhereStageInput>;
  documentInStages_none?: InputMaybe<AccountWhereStageInput>;
  documentInStages_some?: InputMaybe<AccountWhereStageInput>;
  email?: InputMaybe<Scalars['String']>;
  /** All values containing the given string. */
  email_contains?: InputMaybe<Scalars['String']>;
  /** All values ending with the given string. */
  email_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are contained in given list. */
  email_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** Any other value that exists and is not equal to the given value. */
  email_not?: InputMaybe<Scalars['String']>;
  /** All values not containing the given string. */
  email_not_contains?: InputMaybe<Scalars['String']>;
  /** All values not ending with the given string */
  email_not_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  email_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values not starting with the given string. */
  email_not_starts_with?: InputMaybe<Scalars['String']>;
  /** All values starting with the given string. */
  email_starts_with?: InputMaybe<Scalars['String']>;
  fullName?: InputMaybe<Scalars['String']>;
  /** All values containing the given string. */
  fullName_contains?: InputMaybe<Scalars['String']>;
  /** All values ending with the given string. */
  fullName_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are contained in given list. */
  fullName_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** Any other value that exists and is not equal to the given value. */
  fullName_not?: InputMaybe<Scalars['String']>;
  /** All values not containing the given string. */
  fullName_not_contains?: InputMaybe<Scalars['String']>;
  /** All values not ending with the given string */
  fullName_not_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  fullName_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values not starting with the given string. */
  fullName_not_starts_with?: InputMaybe<Scalars['String']>;
  /** All values starting with the given string. */
  fullName_starts_with?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['ID']>;
  /** All values containing the given string. */
  id_contains?: InputMaybe<Scalars['ID']>;
  /** All values ending with the given string. */
  id_ends_with?: InputMaybe<Scalars['ID']>;
  /** All values that are contained in given list. */
  id_in?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  /** Any other value that exists and is not equal to the given value. */
  id_not?: InputMaybe<Scalars['ID']>;
  /** All values not containing the given string. */
  id_not_contains?: InputMaybe<Scalars['ID']>;
  /** All values not ending with the given string */
  id_not_ends_with?: InputMaybe<Scalars['ID']>;
  /** All values that are not contained in given list. */
  id_not_in?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  /** All values not starting with the given string. */
  id_not_starts_with?: InputMaybe<Scalars['ID']>;
  /** All values starting with the given string. */
  id_starts_with?: InputMaybe<Scalars['ID']>;
  password?: InputMaybe<Scalars['String']>;
  /** All values containing the given string. */
  password_contains?: InputMaybe<Scalars['String']>;
  /** All values ending with the given string. */
  password_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are contained in given list. */
  password_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** Any other value that exists and is not equal to the given value. */
  password_not?: InputMaybe<Scalars['String']>;
  /** All values not containing the given string. */
  password_not_contains?: InputMaybe<Scalars['String']>;
  /** All values not ending with the given string */
  password_not_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  password_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values not starting with the given string. */
  password_not_starts_with?: InputMaybe<Scalars['String']>;
  /** All values starting with the given string. */
  password_starts_with?: InputMaybe<Scalars['String']>;
  publishedAt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  publishedAt_gt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  publishedAt_gte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  publishedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  /** All values less than the given value. */
  publishedAt_lt?: InputMaybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  publishedAt_lte?: InputMaybe<Scalars['DateTime']>;
  /** Any other value that exists and is not equal to the given value. */
  publishedAt_not?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  publishedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  publishedBy?: InputMaybe<UserWhereInput>;
  scheduledIn_every?: InputMaybe<ScheduledOperationWhereInput>;
  scheduledIn_none?: InputMaybe<ScheduledOperationWhereInput>;
  scheduledIn_some?: InputMaybe<ScheduledOperationWhereInput>;
  updatedAt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  updatedAt_gt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  updatedAt_gte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  updatedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  /** All values less than the given value. */
  updatedAt_lt?: InputMaybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  updatedAt_lte?: InputMaybe<Scalars['DateTime']>;
  /** Any other value that exists and is not equal to the given value. */
  updatedAt_not?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  updatedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  updatedBy?: InputMaybe<UserWhereInput>;
};

export enum AccountOrderByInput {
  AvatarAsc = 'avatar_ASC',
  AvatarDesc = 'avatar_DESC',
  CreatedAtAsc = 'createdAt_ASC',
  CreatedAtDesc = 'createdAt_DESC',
  EmailAsc = 'email_ASC',
  EmailDesc = 'email_DESC',
  FullNameAsc = 'fullName_ASC',
  FullNameDesc = 'fullName_DESC',
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC',
  PasswordAsc = 'password_ASC',
  PasswordDesc = 'password_DESC',
  PublishedAtAsc = 'publishedAt_ASC',
  PublishedAtDesc = 'publishedAt_DESC',
  UpdatedAtAsc = 'updatedAt_ASC',
  UpdatedAtDesc = 'updatedAt_DESC'
}

export type AccountUpdateInput = {
  avatar?: InputMaybe<Scalars['String']>;
  email?: InputMaybe<Scalars['String']>;
  fullName?: InputMaybe<Scalars['String']>;
  password?: InputMaybe<Scalars['String']>;
};

export type AccountUpdateManyInlineInput = {
  /** Connect multiple existing Account documents */
  connect?: InputMaybe<Array<AccountConnectInput>>;
  /** Create and connect multiple Account documents */
  create?: InputMaybe<Array<AccountCreateInput>>;
  /** Delete multiple Account documents */
  delete?: InputMaybe<Array<AccountWhereUniqueInput>>;
  /** Disconnect multiple Account documents */
  disconnect?: InputMaybe<Array<AccountWhereUniqueInput>>;
  /** Override currently-connected documents with multiple existing Account documents */
  set?: InputMaybe<Array<AccountWhereUniqueInput>>;
  /** Update multiple Account documents */
  update?: InputMaybe<Array<AccountUpdateWithNestedWhereUniqueInput>>;
  /** Upsert multiple Account documents */
  upsert?: InputMaybe<Array<AccountUpsertWithNestedWhereUniqueInput>>;
};

export type AccountUpdateManyInput = {
  avatar?: InputMaybe<Scalars['String']>;
  fullName?: InputMaybe<Scalars['String']>;
  password?: InputMaybe<Scalars['String']>;
};

export type AccountUpdateManyWithNestedWhereInput = {
  /** Update many input */
  data: AccountUpdateManyInput;
  /** Document search */
  where: AccountWhereInput;
};

export type AccountUpdateOneInlineInput = {
  /** Connect existing Account document */
  connect?: InputMaybe<AccountWhereUniqueInput>;
  /** Create and connect one Account document */
  create?: InputMaybe<AccountCreateInput>;
  /** Delete currently connected Account document */
  delete?: InputMaybe<Scalars['Boolean']>;
  /** Disconnect currently connected Account document */
  disconnect?: InputMaybe<Scalars['Boolean']>;
  /** Update single Account document */
  update?: InputMaybe<AccountUpdateWithNestedWhereUniqueInput>;
  /** Upsert single Account document */
  upsert?: InputMaybe<AccountUpsertWithNestedWhereUniqueInput>;
};

export type AccountUpdateWithNestedWhereUniqueInput = {
  /** Document to update */
  data: AccountUpdateInput;
  /** Unique document search */
  where: AccountWhereUniqueInput;
};

export type AccountUpsertInput = {
  /** Create document if it didn't exist */
  create: AccountCreateInput;
  /** Update document if it exists */
  update: AccountUpdateInput;
};

export type AccountUpsertWithNestedWhereUniqueInput = {
  /** Upsert data */
  data: AccountUpsertInput;
  /** Unique document search */
  where: AccountWhereUniqueInput;
};

/** This contains a set of filters that can be used to compare values internally */
export type AccountWhereComparatorInput = {
  /** This field can be used to request to check if the entry is outdated by internal comparison */
  outdated_to?: InputMaybe<Scalars['Boolean']>;
};

/** Identifies documents */
export type AccountWhereInput = {
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<AccountWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<AccountWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<AccountWhereInput>>;
  /** Contains search across all appropriate fields. */
  _search?: InputMaybe<Scalars['String']>;
  avatar?: InputMaybe<Scalars['String']>;
  /** All values containing the given string. */
  avatar_contains?: InputMaybe<Scalars['String']>;
  /** All values ending with the given string. */
  avatar_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are contained in given list. */
  avatar_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** Any other value that exists and is not equal to the given value. */
  avatar_not?: InputMaybe<Scalars['String']>;
  /** All values not containing the given string. */
  avatar_not_contains?: InputMaybe<Scalars['String']>;
  /** All values not ending with the given string */
  avatar_not_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  avatar_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values not starting with the given string. */
  avatar_not_starts_with?: InputMaybe<Scalars['String']>;
  /** All values starting with the given string. */
  avatar_starts_with?: InputMaybe<Scalars['String']>;
  createdAt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  createdAt_gt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  createdAt_gte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  createdAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  /** All values less than the given value. */
  createdAt_lt?: InputMaybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  createdAt_lte?: InputMaybe<Scalars['DateTime']>;
  /** Any other value that exists and is not equal to the given value. */
  createdAt_not?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  createdAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  createdBy?: InputMaybe<UserWhereInput>;
  documentInStages_every?: InputMaybe<AccountWhereStageInput>;
  documentInStages_none?: InputMaybe<AccountWhereStageInput>;
  documentInStages_some?: InputMaybe<AccountWhereStageInput>;
  email?: InputMaybe<Scalars['String']>;
  /** All values containing the given string. */
  email_contains?: InputMaybe<Scalars['String']>;
  /** All values ending with the given string. */
  email_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are contained in given list. */
  email_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** Any other value that exists and is not equal to the given value. */
  email_not?: InputMaybe<Scalars['String']>;
  /** All values not containing the given string. */
  email_not_contains?: InputMaybe<Scalars['String']>;
  /** All values not ending with the given string */
  email_not_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  email_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values not starting with the given string. */
  email_not_starts_with?: InputMaybe<Scalars['String']>;
  /** All values starting with the given string. */
  email_starts_with?: InputMaybe<Scalars['String']>;
  fullName?: InputMaybe<Scalars['String']>;
  /** All values containing the given string. */
  fullName_contains?: InputMaybe<Scalars['String']>;
  /** All values ending with the given string. */
  fullName_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are contained in given list. */
  fullName_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** Any other value that exists and is not equal to the given value. */
  fullName_not?: InputMaybe<Scalars['String']>;
  /** All values not containing the given string. */
  fullName_not_contains?: InputMaybe<Scalars['String']>;
  /** All values not ending with the given string */
  fullName_not_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  fullName_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values not starting with the given string. */
  fullName_not_starts_with?: InputMaybe<Scalars['String']>;
  /** All values starting with the given string. */
  fullName_starts_with?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['ID']>;
  /** All values containing the given string. */
  id_contains?: InputMaybe<Scalars['ID']>;
  /** All values ending with the given string. */
  id_ends_with?: InputMaybe<Scalars['ID']>;
  /** All values that are contained in given list. */
  id_in?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  /** Any other value that exists and is not equal to the given value. */
  id_not?: InputMaybe<Scalars['ID']>;
  /** All values not containing the given string. */
  id_not_contains?: InputMaybe<Scalars['ID']>;
  /** All values not ending with the given string */
  id_not_ends_with?: InputMaybe<Scalars['ID']>;
  /** All values that are not contained in given list. */
  id_not_in?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  /** All values not starting with the given string. */
  id_not_starts_with?: InputMaybe<Scalars['ID']>;
  /** All values starting with the given string. */
  id_starts_with?: InputMaybe<Scalars['ID']>;
  password?: InputMaybe<Scalars['String']>;
  /** All values containing the given string. */
  password_contains?: InputMaybe<Scalars['String']>;
  /** All values ending with the given string. */
  password_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are contained in given list. */
  password_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** Any other value that exists and is not equal to the given value. */
  password_not?: InputMaybe<Scalars['String']>;
  /** All values not containing the given string. */
  password_not_contains?: InputMaybe<Scalars['String']>;
  /** All values not ending with the given string */
  password_not_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  password_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values not starting with the given string. */
  password_not_starts_with?: InputMaybe<Scalars['String']>;
  /** All values starting with the given string. */
  password_starts_with?: InputMaybe<Scalars['String']>;
  publishedAt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  publishedAt_gt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  publishedAt_gte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  publishedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  /** All values less than the given value. */
  publishedAt_lt?: InputMaybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  publishedAt_lte?: InputMaybe<Scalars['DateTime']>;
  /** Any other value that exists and is not equal to the given value. */
  publishedAt_not?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  publishedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  publishedBy?: InputMaybe<UserWhereInput>;
  scheduledIn_every?: InputMaybe<ScheduledOperationWhereInput>;
  scheduledIn_none?: InputMaybe<ScheduledOperationWhereInput>;
  scheduledIn_some?: InputMaybe<ScheduledOperationWhereInput>;
  updatedAt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  updatedAt_gt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  updatedAt_gte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  updatedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  /** All values less than the given value. */
  updatedAt_lt?: InputMaybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  updatedAt_lte?: InputMaybe<Scalars['DateTime']>;
  /** Any other value that exists and is not equal to the given value. */
  updatedAt_not?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  updatedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  updatedBy?: InputMaybe<UserWhereInput>;
};

/** The document in stages filter allows specifying a stage entry to cross compare the same document between different stages */
export type AccountWhereStageInput = {
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<AccountWhereStageInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<AccountWhereStageInput>>;
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<AccountWhereStageInput>>;
  /** This field contains fields which can be set as true or false to specify an internal comparison */
  compareWithParent?: InputMaybe<AccountWhereComparatorInput>;
  /** Specify the stage to compare with */
  stage?: InputMaybe<Stage>;
};

/** References Account record uniquely */
export type AccountWhereUniqueInput = {
  email?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['ID']>;
};

export type AddressOrder = {
  __typename?: 'AddressOrder';
  addressName?: Maybe<Scalars['String']>;
  city?: Maybe<Scalars['String']>;
  emailAddress?: Maybe<Scalars['String']>;
  fullName?: Maybe<Scalars['String']>;
  /** The unique identifier */
  id: Scalars['ID'];
  phoneNumber?: Maybe<Scalars['String']>;
  postCode?: Maybe<Scalars['String']>;
  /** System stage field */
  stage: Stage;
  streetAddress?: Maybe<Scalars['String']>;
};

export type AddressOrderConnectInput = {
  /** Allow to specify document position in list of connected documents, will default to appending at end of list */
  position?: InputMaybe<ConnectPositionInput>;
  /** Document to connect */
  where: AddressOrderWhereUniqueInput;
};

/** A connection to a list of items. */
export type AddressOrderConnection = {
  __typename?: 'AddressOrderConnection';
  aggregate: Aggregate;
  /** A list of edges. */
  edges: Array<AddressOrderEdge>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
};

export type AddressOrderCreateInput = {
  addressName?: InputMaybe<Scalars['String']>;
  city?: InputMaybe<Scalars['String']>;
  emailAddress?: InputMaybe<Scalars['String']>;
  fullName?: InputMaybe<Scalars['String']>;
  phoneNumber?: InputMaybe<Scalars['String']>;
  postCode?: InputMaybe<Scalars['String']>;
  streetAddress?: InputMaybe<Scalars['String']>;
};

export type AddressOrderCreateManyInlineInput = {
  /** Create and connect multiple existing AddressOrder documents */
  create?: InputMaybe<Array<AddressOrderCreateInput>>;
};

export type AddressOrderCreateOneInlineInput = {
  /** Create and connect one AddressOrder document */
  create?: InputMaybe<AddressOrderCreateInput>;
};

export type AddressOrderCreateWithPositionInput = {
  /** Document to create */
  data: AddressOrderCreateInput;
  /** Position in the list of existing component instances, will default to appending at the end of list */
  position?: InputMaybe<ConnectPositionInput>;
};

/** An edge in a connection. */
export type AddressOrderEdge = {
  __typename?: 'AddressOrderEdge';
  /** A cursor for use in pagination. */
  cursor: Scalars['String'];
  /** The item at the end of the edge. */
  node: AddressOrder;
};

/** Identifies documents */
export type AddressOrderManyWhereInput = {
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<AddressOrderWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<AddressOrderWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<AddressOrderWhereInput>>;
  /** Contains search across all appropriate fields. */
  _search?: InputMaybe<Scalars['String']>;
  addressName?: InputMaybe<Scalars['String']>;
  /** All values containing the given string. */
  addressName_contains?: InputMaybe<Scalars['String']>;
  /** All values ending with the given string. */
  addressName_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are contained in given list. */
  addressName_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** Any other value that exists and is not equal to the given value. */
  addressName_not?: InputMaybe<Scalars['String']>;
  /** All values not containing the given string. */
  addressName_not_contains?: InputMaybe<Scalars['String']>;
  /** All values not ending with the given string */
  addressName_not_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  addressName_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values not starting with the given string. */
  addressName_not_starts_with?: InputMaybe<Scalars['String']>;
  /** All values starting with the given string. */
  addressName_starts_with?: InputMaybe<Scalars['String']>;
  city?: InputMaybe<Scalars['String']>;
  /** All values containing the given string. */
  city_contains?: InputMaybe<Scalars['String']>;
  /** All values ending with the given string. */
  city_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are contained in given list. */
  city_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** Any other value that exists and is not equal to the given value. */
  city_not?: InputMaybe<Scalars['String']>;
  /** All values not containing the given string. */
  city_not_contains?: InputMaybe<Scalars['String']>;
  /** All values not ending with the given string */
  city_not_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  city_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values not starting with the given string. */
  city_not_starts_with?: InputMaybe<Scalars['String']>;
  /** All values starting with the given string. */
  city_starts_with?: InputMaybe<Scalars['String']>;
  emailAddress?: InputMaybe<Scalars['String']>;
  /** All values containing the given string. */
  emailAddress_contains?: InputMaybe<Scalars['String']>;
  /** All values ending with the given string. */
  emailAddress_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are contained in given list. */
  emailAddress_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** Any other value that exists and is not equal to the given value. */
  emailAddress_not?: InputMaybe<Scalars['String']>;
  /** All values not containing the given string. */
  emailAddress_not_contains?: InputMaybe<Scalars['String']>;
  /** All values not ending with the given string */
  emailAddress_not_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  emailAddress_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values not starting with the given string. */
  emailAddress_not_starts_with?: InputMaybe<Scalars['String']>;
  /** All values starting with the given string. */
  emailAddress_starts_with?: InputMaybe<Scalars['String']>;
  fullName?: InputMaybe<Scalars['String']>;
  /** All values containing the given string. */
  fullName_contains?: InputMaybe<Scalars['String']>;
  /** All values ending with the given string. */
  fullName_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are contained in given list. */
  fullName_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** Any other value that exists and is not equal to the given value. */
  fullName_not?: InputMaybe<Scalars['String']>;
  /** All values not containing the given string. */
  fullName_not_contains?: InputMaybe<Scalars['String']>;
  /** All values not ending with the given string */
  fullName_not_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  fullName_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values not starting with the given string. */
  fullName_not_starts_with?: InputMaybe<Scalars['String']>;
  /** All values starting with the given string. */
  fullName_starts_with?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['ID']>;
  /** All values containing the given string. */
  id_contains?: InputMaybe<Scalars['ID']>;
  /** All values ending with the given string. */
  id_ends_with?: InputMaybe<Scalars['ID']>;
  /** All values that are contained in given list. */
  id_in?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  /** Any other value that exists and is not equal to the given value. */
  id_not?: InputMaybe<Scalars['ID']>;
  /** All values not containing the given string. */
  id_not_contains?: InputMaybe<Scalars['ID']>;
  /** All values not ending with the given string */
  id_not_ends_with?: InputMaybe<Scalars['ID']>;
  /** All values that are not contained in given list. */
  id_not_in?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  /** All values not starting with the given string. */
  id_not_starts_with?: InputMaybe<Scalars['ID']>;
  /** All values starting with the given string. */
  id_starts_with?: InputMaybe<Scalars['ID']>;
  phoneNumber?: InputMaybe<Scalars['String']>;
  /** All values containing the given string. */
  phoneNumber_contains?: InputMaybe<Scalars['String']>;
  /** All values ending with the given string. */
  phoneNumber_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are contained in given list. */
  phoneNumber_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** Any other value that exists and is not equal to the given value. */
  phoneNumber_not?: InputMaybe<Scalars['String']>;
  /** All values not containing the given string. */
  phoneNumber_not_contains?: InputMaybe<Scalars['String']>;
  /** All values not ending with the given string */
  phoneNumber_not_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  phoneNumber_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values not starting with the given string. */
  phoneNumber_not_starts_with?: InputMaybe<Scalars['String']>;
  /** All values starting with the given string. */
  phoneNumber_starts_with?: InputMaybe<Scalars['String']>;
  postCode?: InputMaybe<Scalars['String']>;
  /** All values containing the given string. */
  postCode_contains?: InputMaybe<Scalars['String']>;
  /** All values ending with the given string. */
  postCode_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are contained in given list. */
  postCode_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** Any other value that exists and is not equal to the given value. */
  postCode_not?: InputMaybe<Scalars['String']>;
  /** All values not containing the given string. */
  postCode_not_contains?: InputMaybe<Scalars['String']>;
  /** All values not ending with the given string */
  postCode_not_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  postCode_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values not starting with the given string. */
  postCode_not_starts_with?: InputMaybe<Scalars['String']>;
  /** All values starting with the given string. */
  postCode_starts_with?: InputMaybe<Scalars['String']>;
  streetAddress?: InputMaybe<Scalars['String']>;
  /** All values containing the given string. */
  streetAddress_contains?: InputMaybe<Scalars['String']>;
  /** All values ending with the given string. */
  streetAddress_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are contained in given list. */
  streetAddress_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** Any other value that exists and is not equal to the given value. */
  streetAddress_not?: InputMaybe<Scalars['String']>;
  /** All values not containing the given string. */
  streetAddress_not_contains?: InputMaybe<Scalars['String']>;
  /** All values not ending with the given string */
  streetAddress_not_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  streetAddress_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values not starting with the given string. */
  streetAddress_not_starts_with?: InputMaybe<Scalars['String']>;
  /** All values starting with the given string. */
  streetAddress_starts_with?: InputMaybe<Scalars['String']>;
};

export enum AddressOrderOrderByInput {
  AddressNameAsc = 'addressName_ASC',
  AddressNameDesc = 'addressName_DESC',
  CityAsc = 'city_ASC',
  CityDesc = 'city_DESC',
  EmailAddressAsc = 'emailAddress_ASC',
  EmailAddressDesc = 'emailAddress_DESC',
  FullNameAsc = 'fullName_ASC',
  FullNameDesc = 'fullName_DESC',
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC',
  PhoneNumberAsc = 'phoneNumber_ASC',
  PhoneNumberDesc = 'phoneNumber_DESC',
  PostCodeAsc = 'postCode_ASC',
  PostCodeDesc = 'postCode_DESC',
  StreetAddressAsc = 'streetAddress_ASC',
  StreetAddressDesc = 'streetAddress_DESC'
}

export type AddressOrderParent = Order;

export type AddressOrderParentConnectInput = {
  Order?: InputMaybe<OrderConnectInput>;
};

export type AddressOrderParentCreateInput = {
  Order?: InputMaybe<OrderCreateInput>;
};

export type AddressOrderParentCreateManyInlineInput = {
  /** Connect multiple existing AddressOrderParent documents */
  connect?: InputMaybe<Array<AddressOrderParentWhereUniqueInput>>;
  /** Create and connect multiple existing AddressOrderParent documents */
  create?: InputMaybe<Array<AddressOrderParentCreateInput>>;
};

export type AddressOrderParentCreateOneInlineInput = {
  /** Connect one existing AddressOrderParent document */
  connect?: InputMaybe<AddressOrderParentWhereUniqueInput>;
  /** Create and connect one AddressOrderParent document */
  create?: InputMaybe<AddressOrderParentCreateInput>;
};

export type AddressOrderParentUpdateInput = {
  Order?: InputMaybe<OrderUpdateInput>;
};

export type AddressOrderParentUpdateManyInlineInput = {
  /** Connect multiple existing AddressOrderParent documents */
  connect?: InputMaybe<Array<AddressOrderParentConnectInput>>;
  /** Create and connect multiple AddressOrderParent documents */
  create?: InputMaybe<Array<AddressOrderParentCreateInput>>;
  /** Delete multiple AddressOrderParent documents */
  delete?: InputMaybe<Array<AddressOrderParentWhereUniqueInput>>;
  /** Disconnect multiple AddressOrderParent documents */
  disconnect?: InputMaybe<Array<AddressOrderParentWhereUniqueInput>>;
  /** Override currently-connected documents with multiple existing AddressOrderParent documents */
  set?: InputMaybe<Array<AddressOrderParentWhereUniqueInput>>;
  /** Update multiple AddressOrderParent documents */
  update?: InputMaybe<Array<AddressOrderParentUpdateWithNestedWhereUniqueInput>>;
  /** Upsert multiple AddressOrderParent documents */
  upsert?: InputMaybe<Array<AddressOrderParentUpsertWithNestedWhereUniqueInput>>;
};

export type AddressOrderParentUpdateManyWithNestedWhereInput = {
  Order?: InputMaybe<OrderUpdateManyWithNestedWhereInput>;
};

export type AddressOrderParentUpdateOneInlineInput = {
  /** Connect existing AddressOrderParent document */
  connect?: InputMaybe<AddressOrderParentWhereUniqueInput>;
  /** Create and connect one AddressOrderParent document */
  create?: InputMaybe<AddressOrderParentCreateInput>;
  /** Delete currently connected AddressOrderParent document */
  delete?: InputMaybe<Scalars['Boolean']>;
  /** Disconnect currently connected AddressOrderParent document */
  disconnect?: InputMaybe<Scalars['Boolean']>;
  /** Update single AddressOrderParent document */
  update?: InputMaybe<AddressOrderParentUpdateWithNestedWhereUniqueInput>;
  /** Upsert single AddressOrderParent document */
  upsert?: InputMaybe<AddressOrderParentUpsertWithNestedWhereUniqueInput>;
};

export type AddressOrderParentUpdateWithNestedWhereUniqueInput = {
  Order?: InputMaybe<OrderUpdateWithNestedWhereUniqueInput>;
};

export type AddressOrderParentUpsertWithNestedWhereUniqueInput = {
  Order?: InputMaybe<OrderUpsertWithNestedWhereUniqueInput>;
};

export type AddressOrderParentWhereInput = {
  Order?: InputMaybe<OrderWhereInput>;
};

export type AddressOrderParentWhereUniqueInput = {
  Order?: InputMaybe<OrderWhereUniqueInput>;
};

export type AddressOrderUpdateInput = {
  addressName?: InputMaybe<Scalars['String']>;
  city?: InputMaybe<Scalars['String']>;
  emailAddress?: InputMaybe<Scalars['String']>;
  fullName?: InputMaybe<Scalars['String']>;
  phoneNumber?: InputMaybe<Scalars['String']>;
  postCode?: InputMaybe<Scalars['String']>;
  streetAddress?: InputMaybe<Scalars['String']>;
};

export type AddressOrderUpdateManyInlineInput = {
  /** Create and connect multiple AddressOrder component instances */
  create?: InputMaybe<Array<AddressOrderCreateWithPositionInput>>;
  /** Delete multiple AddressOrder documents */
  delete?: InputMaybe<Array<AddressOrderWhereUniqueInput>>;
  /** Update multiple AddressOrder component instances */
  update?: InputMaybe<Array<AddressOrderUpdateWithNestedWhereUniqueAndPositionInput>>;
  /** Upsert multiple AddressOrder component instances */
  upsert?: InputMaybe<Array<AddressOrderUpsertWithNestedWhereUniqueAndPositionInput>>;
};

export type AddressOrderUpdateManyInput = {
  addressName?: InputMaybe<Scalars['String']>;
  city?: InputMaybe<Scalars['String']>;
  emailAddress?: InputMaybe<Scalars['String']>;
  fullName?: InputMaybe<Scalars['String']>;
  phoneNumber?: InputMaybe<Scalars['String']>;
  postCode?: InputMaybe<Scalars['String']>;
  streetAddress?: InputMaybe<Scalars['String']>;
};

export type AddressOrderUpdateManyWithNestedWhereInput = {
  /** Update many input */
  data: AddressOrderUpdateManyInput;
  /** Document search */
  where: AddressOrderWhereInput;
};

export type AddressOrderUpdateOneInlineInput = {
  /** Create and connect one AddressOrder document */
  create?: InputMaybe<AddressOrderCreateInput>;
  /** Delete currently connected AddressOrder document */
  delete?: InputMaybe<Scalars['Boolean']>;
  /** Update single AddressOrder document */
  update?: InputMaybe<AddressOrderUpdateWithNestedWhereUniqueInput>;
  /** Upsert single AddressOrder document */
  upsert?: InputMaybe<AddressOrderUpsertWithNestedWhereUniqueInput>;
};

export type AddressOrderUpdateWithNestedWhereUniqueAndPositionInput = {
  /** Document to update */
  data?: InputMaybe<AddressOrderUpdateInput>;
  /** Position in the list of existing component instances, will default to appending at the end of list */
  position?: InputMaybe<ConnectPositionInput>;
  /** Unique component instance search */
  where: AddressOrderWhereUniqueInput;
};

export type AddressOrderUpdateWithNestedWhereUniqueInput = {
  /** Document to update */
  data: AddressOrderUpdateInput;
  /** Unique document search */
  where: AddressOrderWhereUniqueInput;
};

export type AddressOrderUpsertInput = {
  /** Create document if it didn't exist */
  create: AddressOrderCreateInput;
  /** Update document if it exists */
  update: AddressOrderUpdateInput;
};

export type AddressOrderUpsertWithNestedWhereUniqueAndPositionInput = {
  /** Document to upsert */
  data?: InputMaybe<AddressOrderUpsertInput>;
  /** Position in the list of existing component instances, will default to appending at the end of list */
  position?: InputMaybe<ConnectPositionInput>;
  /** Unique component instance search */
  where: AddressOrderWhereUniqueInput;
};

export type AddressOrderUpsertWithNestedWhereUniqueInput = {
  /** Upsert data */
  data: AddressOrderUpsertInput;
  /** Unique document search */
  where: AddressOrderWhereUniqueInput;
};

/** Identifies documents */
export type AddressOrderWhereInput = {
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<AddressOrderWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<AddressOrderWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<AddressOrderWhereInput>>;
  /** Contains search across all appropriate fields. */
  _search?: InputMaybe<Scalars['String']>;
  addressName?: InputMaybe<Scalars['String']>;
  /** All values containing the given string. */
  addressName_contains?: InputMaybe<Scalars['String']>;
  /** All values ending with the given string. */
  addressName_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are contained in given list. */
  addressName_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** Any other value that exists and is not equal to the given value. */
  addressName_not?: InputMaybe<Scalars['String']>;
  /** All values not containing the given string. */
  addressName_not_contains?: InputMaybe<Scalars['String']>;
  /** All values not ending with the given string */
  addressName_not_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  addressName_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values not starting with the given string. */
  addressName_not_starts_with?: InputMaybe<Scalars['String']>;
  /** All values starting with the given string. */
  addressName_starts_with?: InputMaybe<Scalars['String']>;
  city?: InputMaybe<Scalars['String']>;
  /** All values containing the given string. */
  city_contains?: InputMaybe<Scalars['String']>;
  /** All values ending with the given string. */
  city_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are contained in given list. */
  city_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** Any other value that exists and is not equal to the given value. */
  city_not?: InputMaybe<Scalars['String']>;
  /** All values not containing the given string. */
  city_not_contains?: InputMaybe<Scalars['String']>;
  /** All values not ending with the given string */
  city_not_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  city_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values not starting with the given string. */
  city_not_starts_with?: InputMaybe<Scalars['String']>;
  /** All values starting with the given string. */
  city_starts_with?: InputMaybe<Scalars['String']>;
  emailAddress?: InputMaybe<Scalars['String']>;
  /** All values containing the given string. */
  emailAddress_contains?: InputMaybe<Scalars['String']>;
  /** All values ending with the given string. */
  emailAddress_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are contained in given list. */
  emailAddress_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** Any other value that exists and is not equal to the given value. */
  emailAddress_not?: InputMaybe<Scalars['String']>;
  /** All values not containing the given string. */
  emailAddress_not_contains?: InputMaybe<Scalars['String']>;
  /** All values not ending with the given string */
  emailAddress_not_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  emailAddress_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values not starting with the given string. */
  emailAddress_not_starts_with?: InputMaybe<Scalars['String']>;
  /** All values starting with the given string. */
  emailAddress_starts_with?: InputMaybe<Scalars['String']>;
  fullName?: InputMaybe<Scalars['String']>;
  /** All values containing the given string. */
  fullName_contains?: InputMaybe<Scalars['String']>;
  /** All values ending with the given string. */
  fullName_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are contained in given list. */
  fullName_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** Any other value that exists and is not equal to the given value. */
  fullName_not?: InputMaybe<Scalars['String']>;
  /** All values not containing the given string. */
  fullName_not_contains?: InputMaybe<Scalars['String']>;
  /** All values not ending with the given string */
  fullName_not_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  fullName_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values not starting with the given string. */
  fullName_not_starts_with?: InputMaybe<Scalars['String']>;
  /** All values starting with the given string. */
  fullName_starts_with?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['ID']>;
  /** All values containing the given string. */
  id_contains?: InputMaybe<Scalars['ID']>;
  /** All values ending with the given string. */
  id_ends_with?: InputMaybe<Scalars['ID']>;
  /** All values that are contained in given list. */
  id_in?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  /** Any other value that exists and is not equal to the given value. */
  id_not?: InputMaybe<Scalars['ID']>;
  /** All values not containing the given string. */
  id_not_contains?: InputMaybe<Scalars['ID']>;
  /** All values not ending with the given string */
  id_not_ends_with?: InputMaybe<Scalars['ID']>;
  /** All values that are not contained in given list. */
  id_not_in?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  /** All values not starting with the given string. */
  id_not_starts_with?: InputMaybe<Scalars['ID']>;
  /** All values starting with the given string. */
  id_starts_with?: InputMaybe<Scalars['ID']>;
  phoneNumber?: InputMaybe<Scalars['String']>;
  /** All values containing the given string. */
  phoneNumber_contains?: InputMaybe<Scalars['String']>;
  /** All values ending with the given string. */
  phoneNumber_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are contained in given list. */
  phoneNumber_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** Any other value that exists and is not equal to the given value. */
  phoneNumber_not?: InputMaybe<Scalars['String']>;
  /** All values not containing the given string. */
  phoneNumber_not_contains?: InputMaybe<Scalars['String']>;
  /** All values not ending with the given string */
  phoneNumber_not_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  phoneNumber_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values not starting with the given string. */
  phoneNumber_not_starts_with?: InputMaybe<Scalars['String']>;
  /** All values starting with the given string. */
  phoneNumber_starts_with?: InputMaybe<Scalars['String']>;
  postCode?: InputMaybe<Scalars['String']>;
  /** All values containing the given string. */
  postCode_contains?: InputMaybe<Scalars['String']>;
  /** All values ending with the given string. */
  postCode_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are contained in given list. */
  postCode_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** Any other value that exists and is not equal to the given value. */
  postCode_not?: InputMaybe<Scalars['String']>;
  /** All values not containing the given string. */
  postCode_not_contains?: InputMaybe<Scalars['String']>;
  /** All values not ending with the given string */
  postCode_not_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  postCode_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values not starting with the given string. */
  postCode_not_starts_with?: InputMaybe<Scalars['String']>;
  /** All values starting with the given string. */
  postCode_starts_with?: InputMaybe<Scalars['String']>;
  streetAddress?: InputMaybe<Scalars['String']>;
  /** All values containing the given string. */
  streetAddress_contains?: InputMaybe<Scalars['String']>;
  /** All values ending with the given string. */
  streetAddress_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are contained in given list. */
  streetAddress_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** Any other value that exists and is not equal to the given value. */
  streetAddress_not?: InputMaybe<Scalars['String']>;
  /** All values not containing the given string. */
  streetAddress_not_contains?: InputMaybe<Scalars['String']>;
  /** All values not ending with the given string */
  streetAddress_not_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  streetAddress_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values not starting with the given string. */
  streetAddress_not_starts_with?: InputMaybe<Scalars['String']>;
  /** All values starting with the given string. */
  streetAddress_starts_with?: InputMaybe<Scalars['String']>;
};

/** References AddressOrder record uniquely */
export type AddressOrderWhereUniqueInput = {
  id?: InputMaybe<Scalars['ID']>;
};

export type Aggregate = {
  __typename?: 'Aggregate';
  count: Scalars['Int'];
};

/** Asset system model */
export type Asset = Node & {
  __typename?: 'Asset';
  /** The time the document was created */
  createdAt: Scalars['DateTime'];
  /** User that created this document */
  createdBy?: Maybe<User>;
  /** Get the document in other stages */
  documentInStages: Array<Asset>;
  /** The file name */
  fileName: Scalars['String'];
  /** The file handle */
  handle: Scalars['String'];
  /** The height of the file */
  height?: Maybe<Scalars['Float']>;
  /** List of Asset versions */
  history: Array<Version>;
  /** The unique identifier */
  id: Scalars['ID'];
  /** System Locale field */
  locale: Locale;
  /** Get the other localizations for this document */
  localizations: Array<Asset>;
  /** The mime type of the file */
  mimeType?: Maybe<Scalars['String']>;
  /** The time the document was published. Null on documents in draft stage. */
  publishedAt?: Maybe<Scalars['DateTime']>;
  /** User that last published this document */
  publishedBy?: Maybe<User>;
  scheduledIn: Array<ScheduledOperation>;
  /** The file size */
  size?: Maybe<Scalars['Float']>;
  /** System stage field */
  stage: Stage;
  /** The time the document was updated */
  updatedAt: Scalars['DateTime'];
  /** User that last updated this document */
  updatedBy?: Maybe<User>;
  /** Get the url for the asset with provided transformations applied. */
  url: Scalars['String'];
  /** The file width */
  width?: Maybe<Scalars['Float']>;
};


/** Asset system model */
export type AssetCreatedAtArgs = {
  variation?: SystemDateTimeFieldVariation;
};


/** Asset system model */
export type AssetCreatedByArgs = {
  forceParentLocale?: InputMaybe<Scalars['Boolean']>;
  locales?: InputMaybe<Array<Locale>>;
};


/** Asset system model */
export type AssetDocumentInStagesArgs = {
  includeCurrent?: Scalars['Boolean'];
  inheritLocale?: Scalars['Boolean'];
  stages?: Array<Stage>;
};


/** Asset system model */
export type AssetHistoryArgs = {
  limit?: Scalars['Int'];
  skip?: Scalars['Int'];
  stageOverride?: InputMaybe<Stage>;
};


/** Asset system model */
export type AssetLocalizationsArgs = {
  includeCurrent?: Scalars['Boolean'];
  locales?: Array<Locale>;
};


/** Asset system model */
export type AssetPublishedAtArgs = {
  variation?: SystemDateTimeFieldVariation;
};


/** Asset system model */
export type AssetPublishedByArgs = {
  forceParentLocale?: InputMaybe<Scalars['Boolean']>;
  locales?: InputMaybe<Array<Locale>>;
};


/** Asset system model */
export type AssetScheduledInArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  forceParentLocale?: InputMaybe<Scalars['Boolean']>;
  last?: InputMaybe<Scalars['Int']>;
  locales?: InputMaybe<Array<Locale>>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<ScheduledOperationWhereInput>;
};


/** Asset system model */
export type AssetUpdatedAtArgs = {
  variation?: SystemDateTimeFieldVariation;
};


/** Asset system model */
export type AssetUpdatedByArgs = {
  forceParentLocale?: InputMaybe<Scalars['Boolean']>;
  locales?: InputMaybe<Array<Locale>>;
};


/** Asset system model */
export type AssetUrlArgs = {
  transformation?: InputMaybe<AssetTransformationInput>;
};

export type AssetConnectInput = {
  /** Allow to specify document position in list of connected documents, will default to appending at end of list */
  position?: InputMaybe<ConnectPositionInput>;
  /** Document to connect */
  where: AssetWhereUniqueInput;
};

/** A connection to a list of items. */
export type AssetConnection = {
  __typename?: 'AssetConnection';
  aggregate: Aggregate;
  /** A list of edges. */
  edges: Array<AssetEdge>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
};

export type AssetCreateInput = {
  createdAt?: InputMaybe<Scalars['DateTime']>;
  fileName: Scalars['String'];
  handle: Scalars['String'];
  height?: InputMaybe<Scalars['Float']>;
  /** Inline mutations for managing document localizations excluding the default locale */
  localizations?: InputMaybe<AssetCreateLocalizationsInput>;
  mimeType?: InputMaybe<Scalars['String']>;
  size?: InputMaybe<Scalars['Float']>;
  updatedAt?: InputMaybe<Scalars['DateTime']>;
  urlImage?: InputMaybe<ImageCreateManyInlineInput>;
  width?: InputMaybe<Scalars['Float']>;
};

export type AssetCreateLocalizationDataInput = {
  createdAt?: InputMaybe<Scalars['DateTime']>;
  fileName: Scalars['String'];
  handle: Scalars['String'];
  height?: InputMaybe<Scalars['Float']>;
  mimeType?: InputMaybe<Scalars['String']>;
  size?: InputMaybe<Scalars['Float']>;
  updatedAt?: InputMaybe<Scalars['DateTime']>;
  width?: InputMaybe<Scalars['Float']>;
};

export type AssetCreateLocalizationInput = {
  /** Localization input */
  data: AssetCreateLocalizationDataInput;
  locale: Locale;
};

export type AssetCreateLocalizationsInput = {
  /** Create localizations for the newly-created document */
  create?: InputMaybe<Array<AssetCreateLocalizationInput>>;
};

export type AssetCreateManyInlineInput = {
  /** Connect multiple existing Asset documents */
  connect?: InputMaybe<Array<AssetWhereUniqueInput>>;
  /** Create and connect multiple existing Asset documents */
  create?: InputMaybe<Array<AssetCreateInput>>;
};

export type AssetCreateOneInlineInput = {
  /** Connect one existing Asset document */
  connect?: InputMaybe<AssetWhereUniqueInput>;
  /** Create and connect one Asset document */
  create?: InputMaybe<AssetCreateInput>;
};

/** An edge in a connection. */
export type AssetEdge = {
  __typename?: 'AssetEdge';
  /** A cursor for use in pagination. */
  cursor: Scalars['String'];
  /** The item at the end of the edge. */
  node: Asset;
};

/** Identifies documents */
export type AssetManyWhereInput = {
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<AssetWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<AssetWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<AssetWhereInput>>;
  /** Contains search across all appropriate fields. */
  _search?: InputMaybe<Scalars['String']>;
  createdAt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  createdAt_gt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  createdAt_gte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  createdAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  /** All values less than the given value. */
  createdAt_lt?: InputMaybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  createdAt_lte?: InputMaybe<Scalars['DateTime']>;
  /** Any other value that exists and is not equal to the given value. */
  createdAt_not?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  createdAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  createdBy?: InputMaybe<UserWhereInput>;
  documentInStages_every?: InputMaybe<AssetWhereStageInput>;
  documentInStages_none?: InputMaybe<AssetWhereStageInput>;
  documentInStages_some?: InputMaybe<AssetWhereStageInput>;
  id?: InputMaybe<Scalars['ID']>;
  /** All values containing the given string. */
  id_contains?: InputMaybe<Scalars['ID']>;
  /** All values ending with the given string. */
  id_ends_with?: InputMaybe<Scalars['ID']>;
  /** All values that are contained in given list. */
  id_in?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  /** Any other value that exists and is not equal to the given value. */
  id_not?: InputMaybe<Scalars['ID']>;
  /** All values not containing the given string. */
  id_not_contains?: InputMaybe<Scalars['ID']>;
  /** All values not ending with the given string */
  id_not_ends_with?: InputMaybe<Scalars['ID']>;
  /** All values that are not contained in given list. */
  id_not_in?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  /** All values not starting with the given string. */
  id_not_starts_with?: InputMaybe<Scalars['ID']>;
  /** All values starting with the given string. */
  id_starts_with?: InputMaybe<Scalars['ID']>;
  publishedAt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  publishedAt_gt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  publishedAt_gte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  publishedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  /** All values less than the given value. */
  publishedAt_lt?: InputMaybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  publishedAt_lte?: InputMaybe<Scalars['DateTime']>;
  /** Any other value that exists and is not equal to the given value. */
  publishedAt_not?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  publishedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  publishedBy?: InputMaybe<UserWhereInput>;
  scheduledIn_every?: InputMaybe<ScheduledOperationWhereInput>;
  scheduledIn_none?: InputMaybe<ScheduledOperationWhereInput>;
  scheduledIn_some?: InputMaybe<ScheduledOperationWhereInput>;
  updatedAt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  updatedAt_gt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  updatedAt_gte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  updatedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  /** All values less than the given value. */
  updatedAt_lt?: InputMaybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  updatedAt_lte?: InputMaybe<Scalars['DateTime']>;
  /** Any other value that exists and is not equal to the given value. */
  updatedAt_not?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  updatedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  updatedBy?: InputMaybe<UserWhereInput>;
};

export enum AssetOrderByInput {
  CreatedAtAsc = 'createdAt_ASC',
  CreatedAtDesc = 'createdAt_DESC',
  FileNameAsc = 'fileName_ASC',
  FileNameDesc = 'fileName_DESC',
  HandleAsc = 'handle_ASC',
  HandleDesc = 'handle_DESC',
  HeightAsc = 'height_ASC',
  HeightDesc = 'height_DESC',
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC',
  MimeTypeAsc = 'mimeType_ASC',
  MimeTypeDesc = 'mimeType_DESC',
  PublishedAtAsc = 'publishedAt_ASC',
  PublishedAtDesc = 'publishedAt_DESC',
  SizeAsc = 'size_ASC',
  SizeDesc = 'size_DESC',
  UpdatedAtAsc = 'updatedAt_ASC',
  UpdatedAtDesc = 'updatedAt_DESC',
  WidthAsc = 'width_ASC',
  WidthDesc = 'width_DESC'
}

/** Transformations for Assets */
export type AssetTransformationInput = {
  document?: InputMaybe<DocumentTransformationInput>;
  image?: InputMaybe<ImageTransformationInput>;
  /** Pass true if you want to validate the passed transformation parameters */
  validateOptions?: InputMaybe<Scalars['Boolean']>;
};

export type AssetUpdateInput = {
  fileName?: InputMaybe<Scalars['String']>;
  handle?: InputMaybe<Scalars['String']>;
  height?: InputMaybe<Scalars['Float']>;
  /** Manage document localizations */
  localizations?: InputMaybe<AssetUpdateLocalizationsInput>;
  mimeType?: InputMaybe<Scalars['String']>;
  size?: InputMaybe<Scalars['Float']>;
  urlImage?: InputMaybe<ImageUpdateManyInlineInput>;
  width?: InputMaybe<Scalars['Float']>;
};

export type AssetUpdateLocalizationDataInput = {
  fileName?: InputMaybe<Scalars['String']>;
  handle?: InputMaybe<Scalars['String']>;
  height?: InputMaybe<Scalars['Float']>;
  mimeType?: InputMaybe<Scalars['String']>;
  size?: InputMaybe<Scalars['Float']>;
  width?: InputMaybe<Scalars['Float']>;
};

export type AssetUpdateLocalizationInput = {
  data: AssetUpdateLocalizationDataInput;
  locale: Locale;
};

export type AssetUpdateLocalizationsInput = {
  /** Localizations to create */
  create?: InputMaybe<Array<AssetCreateLocalizationInput>>;
  /** Localizations to delete */
  delete?: InputMaybe<Array<Locale>>;
  /** Localizations to update */
  update?: InputMaybe<Array<AssetUpdateLocalizationInput>>;
  upsert?: InputMaybe<Array<AssetUpsertLocalizationInput>>;
};

export type AssetUpdateManyInlineInput = {
  /** Connect multiple existing Asset documents */
  connect?: InputMaybe<Array<AssetConnectInput>>;
  /** Create and connect multiple Asset documents */
  create?: InputMaybe<Array<AssetCreateInput>>;
  /** Delete multiple Asset documents */
  delete?: InputMaybe<Array<AssetWhereUniqueInput>>;
  /** Disconnect multiple Asset documents */
  disconnect?: InputMaybe<Array<AssetWhereUniqueInput>>;
  /** Override currently-connected documents with multiple existing Asset documents */
  set?: InputMaybe<Array<AssetWhereUniqueInput>>;
  /** Update multiple Asset documents */
  update?: InputMaybe<Array<AssetUpdateWithNestedWhereUniqueInput>>;
  /** Upsert multiple Asset documents */
  upsert?: InputMaybe<Array<AssetUpsertWithNestedWhereUniqueInput>>;
};

export type AssetUpdateManyInput = {
  fileName?: InputMaybe<Scalars['String']>;
  height?: InputMaybe<Scalars['Float']>;
  /** Optional updates to localizations */
  localizations?: InputMaybe<AssetUpdateManyLocalizationsInput>;
  mimeType?: InputMaybe<Scalars['String']>;
  size?: InputMaybe<Scalars['Float']>;
  width?: InputMaybe<Scalars['Float']>;
};

export type AssetUpdateManyLocalizationDataInput = {
  fileName?: InputMaybe<Scalars['String']>;
  height?: InputMaybe<Scalars['Float']>;
  mimeType?: InputMaybe<Scalars['String']>;
  size?: InputMaybe<Scalars['Float']>;
  width?: InputMaybe<Scalars['Float']>;
};

export type AssetUpdateManyLocalizationInput = {
  data: AssetUpdateManyLocalizationDataInput;
  locale: Locale;
};

export type AssetUpdateManyLocalizationsInput = {
  /** Localizations to update */
  update?: InputMaybe<Array<AssetUpdateManyLocalizationInput>>;
};

export type AssetUpdateManyWithNestedWhereInput = {
  /** Update many input */
  data: AssetUpdateManyInput;
  /** Document search */
  where: AssetWhereInput;
};

export type AssetUpdateOneInlineInput = {
  /** Connect existing Asset document */
  connect?: InputMaybe<AssetWhereUniqueInput>;
  /** Create and connect one Asset document */
  create?: InputMaybe<AssetCreateInput>;
  /** Delete currently connected Asset document */
  delete?: InputMaybe<Scalars['Boolean']>;
  /** Disconnect currently connected Asset document */
  disconnect?: InputMaybe<Scalars['Boolean']>;
  /** Update single Asset document */
  update?: InputMaybe<AssetUpdateWithNestedWhereUniqueInput>;
  /** Upsert single Asset document */
  upsert?: InputMaybe<AssetUpsertWithNestedWhereUniqueInput>;
};

export type AssetUpdateWithNestedWhereUniqueInput = {
  /** Document to update */
  data: AssetUpdateInput;
  /** Unique document search */
  where: AssetWhereUniqueInput;
};

export type AssetUpsertInput = {
  /** Create document if it didn't exist */
  create: AssetCreateInput;
  /** Update document if it exists */
  update: AssetUpdateInput;
};

export type AssetUpsertLocalizationInput = {
  create: AssetCreateLocalizationDataInput;
  locale: Locale;
  update: AssetUpdateLocalizationDataInput;
};

export type AssetUpsertWithNestedWhereUniqueInput = {
  /** Upsert data */
  data: AssetUpsertInput;
  /** Unique document search */
  where: AssetWhereUniqueInput;
};

/** This contains a set of filters that can be used to compare values internally */
export type AssetWhereComparatorInput = {
  /** This field can be used to request to check if the entry is outdated by internal comparison */
  outdated_to?: InputMaybe<Scalars['Boolean']>;
};

/** Identifies documents */
export type AssetWhereInput = {
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<AssetWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<AssetWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<AssetWhereInput>>;
  /** Contains search across all appropriate fields. */
  _search?: InputMaybe<Scalars['String']>;
  createdAt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  createdAt_gt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  createdAt_gte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  createdAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  /** All values less than the given value. */
  createdAt_lt?: InputMaybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  createdAt_lte?: InputMaybe<Scalars['DateTime']>;
  /** Any other value that exists and is not equal to the given value. */
  createdAt_not?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  createdAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  createdBy?: InputMaybe<UserWhereInput>;
  documentInStages_every?: InputMaybe<AssetWhereStageInput>;
  documentInStages_none?: InputMaybe<AssetWhereStageInput>;
  documentInStages_some?: InputMaybe<AssetWhereStageInput>;
  fileName?: InputMaybe<Scalars['String']>;
  /** All values containing the given string. */
  fileName_contains?: InputMaybe<Scalars['String']>;
  /** All values ending with the given string. */
  fileName_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are contained in given list. */
  fileName_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** Any other value that exists and is not equal to the given value. */
  fileName_not?: InputMaybe<Scalars['String']>;
  /** All values not containing the given string. */
  fileName_not_contains?: InputMaybe<Scalars['String']>;
  /** All values not ending with the given string */
  fileName_not_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  fileName_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values not starting with the given string. */
  fileName_not_starts_with?: InputMaybe<Scalars['String']>;
  /** All values starting with the given string. */
  fileName_starts_with?: InputMaybe<Scalars['String']>;
  handle?: InputMaybe<Scalars['String']>;
  /** All values containing the given string. */
  handle_contains?: InputMaybe<Scalars['String']>;
  /** All values ending with the given string. */
  handle_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are contained in given list. */
  handle_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** Any other value that exists and is not equal to the given value. */
  handle_not?: InputMaybe<Scalars['String']>;
  /** All values not containing the given string. */
  handle_not_contains?: InputMaybe<Scalars['String']>;
  /** All values not ending with the given string */
  handle_not_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  handle_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values not starting with the given string. */
  handle_not_starts_with?: InputMaybe<Scalars['String']>;
  /** All values starting with the given string. */
  handle_starts_with?: InputMaybe<Scalars['String']>;
  height?: InputMaybe<Scalars['Float']>;
  /** All values greater than the given value. */
  height_gt?: InputMaybe<Scalars['Float']>;
  /** All values greater than or equal the given value. */
  height_gte?: InputMaybe<Scalars['Float']>;
  /** All values that are contained in given list. */
  height_in?: InputMaybe<Array<InputMaybe<Scalars['Float']>>>;
  /** All values less than the given value. */
  height_lt?: InputMaybe<Scalars['Float']>;
  /** All values less than or equal the given value. */
  height_lte?: InputMaybe<Scalars['Float']>;
  /** Any other value that exists and is not equal to the given value. */
  height_not?: InputMaybe<Scalars['Float']>;
  /** All values that are not contained in given list. */
  height_not_in?: InputMaybe<Array<InputMaybe<Scalars['Float']>>>;
  id?: InputMaybe<Scalars['ID']>;
  /** All values containing the given string. */
  id_contains?: InputMaybe<Scalars['ID']>;
  /** All values ending with the given string. */
  id_ends_with?: InputMaybe<Scalars['ID']>;
  /** All values that are contained in given list. */
  id_in?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  /** Any other value that exists and is not equal to the given value. */
  id_not?: InputMaybe<Scalars['ID']>;
  /** All values not containing the given string. */
  id_not_contains?: InputMaybe<Scalars['ID']>;
  /** All values not ending with the given string */
  id_not_ends_with?: InputMaybe<Scalars['ID']>;
  /** All values that are not contained in given list. */
  id_not_in?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  /** All values not starting with the given string. */
  id_not_starts_with?: InputMaybe<Scalars['ID']>;
  /** All values starting with the given string. */
  id_starts_with?: InputMaybe<Scalars['ID']>;
  mimeType?: InputMaybe<Scalars['String']>;
  /** All values containing the given string. */
  mimeType_contains?: InputMaybe<Scalars['String']>;
  /** All values ending with the given string. */
  mimeType_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are contained in given list. */
  mimeType_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** Any other value that exists and is not equal to the given value. */
  mimeType_not?: InputMaybe<Scalars['String']>;
  /** All values not containing the given string. */
  mimeType_not_contains?: InputMaybe<Scalars['String']>;
  /** All values not ending with the given string */
  mimeType_not_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  mimeType_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values not starting with the given string. */
  mimeType_not_starts_with?: InputMaybe<Scalars['String']>;
  /** All values starting with the given string. */
  mimeType_starts_with?: InputMaybe<Scalars['String']>;
  publishedAt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  publishedAt_gt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  publishedAt_gte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  publishedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  /** All values less than the given value. */
  publishedAt_lt?: InputMaybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  publishedAt_lte?: InputMaybe<Scalars['DateTime']>;
  /** Any other value that exists and is not equal to the given value. */
  publishedAt_not?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  publishedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  publishedBy?: InputMaybe<UserWhereInput>;
  scheduledIn_every?: InputMaybe<ScheduledOperationWhereInput>;
  scheduledIn_none?: InputMaybe<ScheduledOperationWhereInput>;
  scheduledIn_some?: InputMaybe<ScheduledOperationWhereInput>;
  size?: InputMaybe<Scalars['Float']>;
  /** All values greater than the given value. */
  size_gt?: InputMaybe<Scalars['Float']>;
  /** All values greater than or equal the given value. */
  size_gte?: InputMaybe<Scalars['Float']>;
  /** All values that are contained in given list. */
  size_in?: InputMaybe<Array<InputMaybe<Scalars['Float']>>>;
  /** All values less than the given value. */
  size_lt?: InputMaybe<Scalars['Float']>;
  /** All values less than or equal the given value. */
  size_lte?: InputMaybe<Scalars['Float']>;
  /** Any other value that exists and is not equal to the given value. */
  size_not?: InputMaybe<Scalars['Float']>;
  /** All values that are not contained in given list. */
  size_not_in?: InputMaybe<Array<InputMaybe<Scalars['Float']>>>;
  updatedAt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  updatedAt_gt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  updatedAt_gte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  updatedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  /** All values less than the given value. */
  updatedAt_lt?: InputMaybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  updatedAt_lte?: InputMaybe<Scalars['DateTime']>;
  /** Any other value that exists and is not equal to the given value. */
  updatedAt_not?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  updatedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  updatedBy?: InputMaybe<UserWhereInput>;
  width?: InputMaybe<Scalars['Float']>;
  /** All values greater than the given value. */
  width_gt?: InputMaybe<Scalars['Float']>;
  /** All values greater than or equal the given value. */
  width_gte?: InputMaybe<Scalars['Float']>;
  /** All values that are contained in given list. */
  width_in?: InputMaybe<Array<InputMaybe<Scalars['Float']>>>;
  /** All values less than the given value. */
  width_lt?: InputMaybe<Scalars['Float']>;
  /** All values less than or equal the given value. */
  width_lte?: InputMaybe<Scalars['Float']>;
  /** Any other value that exists and is not equal to the given value. */
  width_not?: InputMaybe<Scalars['Float']>;
  /** All values that are not contained in given list. */
  width_not_in?: InputMaybe<Array<InputMaybe<Scalars['Float']>>>;
};

/** The document in stages filter allows specifying a stage entry to cross compare the same document between different stages */
export type AssetWhereStageInput = {
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<AssetWhereStageInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<AssetWhereStageInput>>;
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<AssetWhereStageInput>>;
  /** This field contains fields which can be set as true or false to specify an internal comparison */
  compareWithParent?: InputMaybe<AssetWhereComparatorInput>;
  /** Specify the stage to compare with */
  stage?: InputMaybe<Stage>;
};

/** References Asset record uniquely */
export type AssetWhereUniqueInput = {
  id?: InputMaybe<Scalars['ID']>;
};

export type BatchPayload = {
  __typename?: 'BatchPayload';
  /** The number of nodes that have been affected by the Batch operation. */
  count: Scalars['Long'];
};

/** Category of product */
export enum Category {
  Other = 'Other',
  Shirts = 'Shirts',
  Shoes = 'Shoes',
  Shorts = 'Shorts'
}

/** Representing a color value comprising of HEX, RGBA and css color values */
export type Color = {
  __typename?: 'Color';
  css: Scalars['String'];
  hex: Scalars['Hex'];
  rgba: Rgba;
};

/** Accepts either HEX or RGBA color value. At least one of hex or rgba value should be passed. If both are passed RGBA is used. */
export type ColorInput = {
  hex?: InputMaybe<Scalars['Hex']>;
  rgba?: InputMaybe<RgbaInput>;
};

export type Comment = Node & {
  __typename?: 'Comment';
  /** Content of comment */
  comment?: Maybe<Scalars['String']>;
  /** The time the document was created */
  createdAt: Scalars['DateTime'];
  /** User that created this document */
  createdBy?: Maybe<User>;
  date?: Maybe<Scalars['Date']>;
  /** Get the document in other stages */
  documentInStages: Array<Comment>;
  /** List of Comment versions */
  history: Array<Version>;
  /** The unique identifier */
  id: Scalars['ID'];
  /** The time the document was published. Null on documents in draft stage. */
  publishedAt?: Maybe<Scalars['DateTime']>;
  /** User that last published this document */
  publishedBy?: Maybe<User>;
  scheduledIn: Array<ScheduledOperation>;
  /** System stage field */
  stage: Stage;
  /** The time the document was updated */
  updatedAt: Scalars['DateTime'];
  /** User that last updated this document */
  updatedBy?: Maybe<User>;
  userName?: Maybe<Scalars['String']>;
};


export type CommentCreatedByArgs = {
  forceParentLocale?: InputMaybe<Scalars['Boolean']>;
  locales?: InputMaybe<Array<Locale>>;
};


export type CommentDocumentInStagesArgs = {
  includeCurrent?: Scalars['Boolean'];
  inheritLocale?: Scalars['Boolean'];
  stages?: Array<Stage>;
};


export type CommentHistoryArgs = {
  limit?: Scalars['Int'];
  skip?: Scalars['Int'];
  stageOverride?: InputMaybe<Stage>;
};


export type CommentPublishedByArgs = {
  forceParentLocale?: InputMaybe<Scalars['Boolean']>;
  locales?: InputMaybe<Array<Locale>>;
};


export type CommentScheduledInArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  forceParentLocale?: InputMaybe<Scalars['Boolean']>;
  last?: InputMaybe<Scalars['Int']>;
  locales?: InputMaybe<Array<Locale>>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<ScheduledOperationWhereInput>;
};


export type CommentUpdatedByArgs = {
  forceParentLocale?: InputMaybe<Scalars['Boolean']>;
  locales?: InputMaybe<Array<Locale>>;
};

export type CommentConnectInput = {
  /** Allow to specify document position in list of connected documents, will default to appending at end of list */
  position?: InputMaybe<ConnectPositionInput>;
  /** Document to connect */
  where: CommentWhereUniqueInput;
};

/** A connection to a list of items. */
export type CommentConnection = {
  __typename?: 'CommentConnection';
  aggregate: Aggregate;
  /** A list of edges. */
  edges: Array<CommentEdge>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
};

export type CommentCreateInput = {
  comment?: InputMaybe<Scalars['String']>;
  createdAt?: InputMaybe<Scalars['DateTime']>;
  date?: InputMaybe<Scalars['Date']>;
  updatedAt?: InputMaybe<Scalars['DateTime']>;
  userName?: InputMaybe<Scalars['String']>;
};

export type CommentCreateManyInlineInput = {
  /** Connect multiple existing Comment documents */
  connect?: InputMaybe<Array<CommentWhereUniqueInput>>;
  /** Create and connect multiple existing Comment documents */
  create?: InputMaybe<Array<CommentCreateInput>>;
};

export type CommentCreateOneInlineInput = {
  /** Connect one existing Comment document */
  connect?: InputMaybe<CommentWhereUniqueInput>;
  /** Create and connect one Comment document */
  create?: InputMaybe<CommentCreateInput>;
};

/** An edge in a connection. */
export type CommentEdge = {
  __typename?: 'CommentEdge';
  /** A cursor for use in pagination. */
  cursor: Scalars['String'];
  /** The item at the end of the edge. */
  node: Comment;
};

/** Identifies documents */
export type CommentManyWhereInput = {
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<CommentWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<CommentWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<CommentWhereInput>>;
  /** Contains search across all appropriate fields. */
  _search?: InputMaybe<Scalars['String']>;
  comment?: InputMaybe<Scalars['String']>;
  /** All values containing the given string. */
  comment_contains?: InputMaybe<Scalars['String']>;
  /** All values ending with the given string. */
  comment_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are contained in given list. */
  comment_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** Any other value that exists and is not equal to the given value. */
  comment_not?: InputMaybe<Scalars['String']>;
  /** All values not containing the given string. */
  comment_not_contains?: InputMaybe<Scalars['String']>;
  /** All values not ending with the given string */
  comment_not_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  comment_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values not starting with the given string. */
  comment_not_starts_with?: InputMaybe<Scalars['String']>;
  /** All values starting with the given string. */
  comment_starts_with?: InputMaybe<Scalars['String']>;
  createdAt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  createdAt_gt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  createdAt_gte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  createdAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  /** All values less than the given value. */
  createdAt_lt?: InputMaybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  createdAt_lte?: InputMaybe<Scalars['DateTime']>;
  /** Any other value that exists and is not equal to the given value. */
  createdAt_not?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  createdAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  createdBy?: InputMaybe<UserWhereInput>;
  date?: InputMaybe<Scalars['Date']>;
  /** All values greater than the given value. */
  date_gt?: InputMaybe<Scalars['Date']>;
  /** All values greater than or equal the given value. */
  date_gte?: InputMaybe<Scalars['Date']>;
  /** All values that are contained in given list. */
  date_in?: InputMaybe<Array<InputMaybe<Scalars['Date']>>>;
  /** All values less than the given value. */
  date_lt?: InputMaybe<Scalars['Date']>;
  /** All values less than or equal the given value. */
  date_lte?: InputMaybe<Scalars['Date']>;
  /** Any other value that exists and is not equal to the given value. */
  date_not?: InputMaybe<Scalars['Date']>;
  /** All values that are not contained in given list. */
  date_not_in?: InputMaybe<Array<InputMaybe<Scalars['Date']>>>;
  documentInStages_every?: InputMaybe<CommentWhereStageInput>;
  documentInStages_none?: InputMaybe<CommentWhereStageInput>;
  documentInStages_some?: InputMaybe<CommentWhereStageInput>;
  id?: InputMaybe<Scalars['ID']>;
  /** All values containing the given string. */
  id_contains?: InputMaybe<Scalars['ID']>;
  /** All values ending with the given string. */
  id_ends_with?: InputMaybe<Scalars['ID']>;
  /** All values that are contained in given list. */
  id_in?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  /** Any other value that exists and is not equal to the given value. */
  id_not?: InputMaybe<Scalars['ID']>;
  /** All values not containing the given string. */
  id_not_contains?: InputMaybe<Scalars['ID']>;
  /** All values not ending with the given string */
  id_not_ends_with?: InputMaybe<Scalars['ID']>;
  /** All values that are not contained in given list. */
  id_not_in?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  /** All values not starting with the given string. */
  id_not_starts_with?: InputMaybe<Scalars['ID']>;
  /** All values starting with the given string. */
  id_starts_with?: InputMaybe<Scalars['ID']>;
  publishedAt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  publishedAt_gt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  publishedAt_gte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  publishedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  /** All values less than the given value. */
  publishedAt_lt?: InputMaybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  publishedAt_lte?: InputMaybe<Scalars['DateTime']>;
  /** Any other value that exists and is not equal to the given value. */
  publishedAt_not?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  publishedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  publishedBy?: InputMaybe<UserWhereInput>;
  scheduledIn_every?: InputMaybe<ScheduledOperationWhereInput>;
  scheduledIn_none?: InputMaybe<ScheduledOperationWhereInput>;
  scheduledIn_some?: InputMaybe<ScheduledOperationWhereInput>;
  updatedAt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  updatedAt_gt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  updatedAt_gte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  updatedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  /** All values less than the given value. */
  updatedAt_lt?: InputMaybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  updatedAt_lte?: InputMaybe<Scalars['DateTime']>;
  /** Any other value that exists and is not equal to the given value. */
  updatedAt_not?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  updatedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  updatedBy?: InputMaybe<UserWhereInput>;
  userName?: InputMaybe<Scalars['String']>;
  /** All values containing the given string. */
  userName_contains?: InputMaybe<Scalars['String']>;
  /** All values ending with the given string. */
  userName_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are contained in given list. */
  userName_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** Any other value that exists and is not equal to the given value. */
  userName_not?: InputMaybe<Scalars['String']>;
  /** All values not containing the given string. */
  userName_not_contains?: InputMaybe<Scalars['String']>;
  /** All values not ending with the given string */
  userName_not_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  userName_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values not starting with the given string. */
  userName_not_starts_with?: InputMaybe<Scalars['String']>;
  /** All values starting with the given string. */
  userName_starts_with?: InputMaybe<Scalars['String']>;
};

export enum CommentOrderByInput {
  CommentAsc = 'comment_ASC',
  CommentDesc = 'comment_DESC',
  CreatedAtAsc = 'createdAt_ASC',
  CreatedAtDesc = 'createdAt_DESC',
  DateAsc = 'date_ASC',
  DateDesc = 'date_DESC',
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC',
  PublishedAtAsc = 'publishedAt_ASC',
  PublishedAtDesc = 'publishedAt_DESC',
  UpdatedAtAsc = 'updatedAt_ASC',
  UpdatedAtDesc = 'updatedAt_DESC',
  UserNameAsc = 'userName_ASC',
  UserNameDesc = 'userName_DESC'
}

export type CommentUpdateInput = {
  comment?: InputMaybe<Scalars['String']>;
  date?: InputMaybe<Scalars['Date']>;
  userName?: InputMaybe<Scalars['String']>;
};

export type CommentUpdateManyInlineInput = {
  /** Connect multiple existing Comment documents */
  connect?: InputMaybe<Array<CommentConnectInput>>;
  /** Create and connect multiple Comment documents */
  create?: InputMaybe<Array<CommentCreateInput>>;
  /** Delete multiple Comment documents */
  delete?: InputMaybe<Array<CommentWhereUniqueInput>>;
  /** Disconnect multiple Comment documents */
  disconnect?: InputMaybe<Array<CommentWhereUniqueInput>>;
  /** Override currently-connected documents with multiple existing Comment documents */
  set?: InputMaybe<Array<CommentWhereUniqueInput>>;
  /** Update multiple Comment documents */
  update?: InputMaybe<Array<CommentUpdateWithNestedWhereUniqueInput>>;
  /** Upsert multiple Comment documents */
  upsert?: InputMaybe<Array<CommentUpsertWithNestedWhereUniqueInput>>;
};

export type CommentUpdateManyInput = {
  comment?: InputMaybe<Scalars['String']>;
  date?: InputMaybe<Scalars['Date']>;
  userName?: InputMaybe<Scalars['String']>;
};

export type CommentUpdateManyWithNestedWhereInput = {
  /** Update many input */
  data: CommentUpdateManyInput;
  /** Document search */
  where: CommentWhereInput;
};

export type CommentUpdateOneInlineInput = {
  /** Connect existing Comment document */
  connect?: InputMaybe<CommentWhereUniqueInput>;
  /** Create and connect one Comment document */
  create?: InputMaybe<CommentCreateInput>;
  /** Delete currently connected Comment document */
  delete?: InputMaybe<Scalars['Boolean']>;
  /** Disconnect currently connected Comment document */
  disconnect?: InputMaybe<Scalars['Boolean']>;
  /** Update single Comment document */
  update?: InputMaybe<CommentUpdateWithNestedWhereUniqueInput>;
  /** Upsert single Comment document */
  upsert?: InputMaybe<CommentUpsertWithNestedWhereUniqueInput>;
};

export type CommentUpdateWithNestedWhereUniqueInput = {
  /** Document to update */
  data: CommentUpdateInput;
  /** Unique document search */
  where: CommentWhereUniqueInput;
};

export type CommentUpsertInput = {
  /** Create document if it didn't exist */
  create: CommentCreateInput;
  /** Update document if it exists */
  update: CommentUpdateInput;
};

export type CommentUpsertWithNestedWhereUniqueInput = {
  /** Upsert data */
  data: CommentUpsertInput;
  /** Unique document search */
  where: CommentWhereUniqueInput;
};

/** This contains a set of filters that can be used to compare values internally */
export type CommentWhereComparatorInput = {
  /** This field can be used to request to check if the entry is outdated by internal comparison */
  outdated_to?: InputMaybe<Scalars['Boolean']>;
};

/** Identifies documents */
export type CommentWhereInput = {
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<CommentWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<CommentWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<CommentWhereInput>>;
  /** Contains search across all appropriate fields. */
  _search?: InputMaybe<Scalars['String']>;
  comment?: InputMaybe<Scalars['String']>;
  /** All values containing the given string. */
  comment_contains?: InputMaybe<Scalars['String']>;
  /** All values ending with the given string. */
  comment_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are contained in given list. */
  comment_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** Any other value that exists and is not equal to the given value. */
  comment_not?: InputMaybe<Scalars['String']>;
  /** All values not containing the given string. */
  comment_not_contains?: InputMaybe<Scalars['String']>;
  /** All values not ending with the given string */
  comment_not_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  comment_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values not starting with the given string. */
  comment_not_starts_with?: InputMaybe<Scalars['String']>;
  /** All values starting with the given string. */
  comment_starts_with?: InputMaybe<Scalars['String']>;
  createdAt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  createdAt_gt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  createdAt_gte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  createdAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  /** All values less than the given value. */
  createdAt_lt?: InputMaybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  createdAt_lte?: InputMaybe<Scalars['DateTime']>;
  /** Any other value that exists and is not equal to the given value. */
  createdAt_not?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  createdAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  createdBy?: InputMaybe<UserWhereInput>;
  date?: InputMaybe<Scalars['Date']>;
  /** All values greater than the given value. */
  date_gt?: InputMaybe<Scalars['Date']>;
  /** All values greater than or equal the given value. */
  date_gte?: InputMaybe<Scalars['Date']>;
  /** All values that are contained in given list. */
  date_in?: InputMaybe<Array<InputMaybe<Scalars['Date']>>>;
  /** All values less than the given value. */
  date_lt?: InputMaybe<Scalars['Date']>;
  /** All values less than or equal the given value. */
  date_lte?: InputMaybe<Scalars['Date']>;
  /** Any other value that exists and is not equal to the given value. */
  date_not?: InputMaybe<Scalars['Date']>;
  /** All values that are not contained in given list. */
  date_not_in?: InputMaybe<Array<InputMaybe<Scalars['Date']>>>;
  documentInStages_every?: InputMaybe<CommentWhereStageInput>;
  documentInStages_none?: InputMaybe<CommentWhereStageInput>;
  documentInStages_some?: InputMaybe<CommentWhereStageInput>;
  id?: InputMaybe<Scalars['ID']>;
  /** All values containing the given string. */
  id_contains?: InputMaybe<Scalars['ID']>;
  /** All values ending with the given string. */
  id_ends_with?: InputMaybe<Scalars['ID']>;
  /** All values that are contained in given list. */
  id_in?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  /** Any other value that exists and is not equal to the given value. */
  id_not?: InputMaybe<Scalars['ID']>;
  /** All values not containing the given string. */
  id_not_contains?: InputMaybe<Scalars['ID']>;
  /** All values not ending with the given string */
  id_not_ends_with?: InputMaybe<Scalars['ID']>;
  /** All values that are not contained in given list. */
  id_not_in?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  /** All values not starting with the given string. */
  id_not_starts_with?: InputMaybe<Scalars['ID']>;
  /** All values starting with the given string. */
  id_starts_with?: InputMaybe<Scalars['ID']>;
  publishedAt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  publishedAt_gt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  publishedAt_gte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  publishedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  /** All values less than the given value. */
  publishedAt_lt?: InputMaybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  publishedAt_lte?: InputMaybe<Scalars['DateTime']>;
  /** Any other value that exists and is not equal to the given value. */
  publishedAt_not?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  publishedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  publishedBy?: InputMaybe<UserWhereInput>;
  scheduledIn_every?: InputMaybe<ScheduledOperationWhereInput>;
  scheduledIn_none?: InputMaybe<ScheduledOperationWhereInput>;
  scheduledIn_some?: InputMaybe<ScheduledOperationWhereInput>;
  updatedAt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  updatedAt_gt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  updatedAt_gte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  updatedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  /** All values less than the given value. */
  updatedAt_lt?: InputMaybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  updatedAt_lte?: InputMaybe<Scalars['DateTime']>;
  /** Any other value that exists and is not equal to the given value. */
  updatedAt_not?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  updatedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  updatedBy?: InputMaybe<UserWhereInput>;
  userName?: InputMaybe<Scalars['String']>;
  /** All values containing the given string. */
  userName_contains?: InputMaybe<Scalars['String']>;
  /** All values ending with the given string. */
  userName_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are contained in given list. */
  userName_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** Any other value that exists and is not equal to the given value. */
  userName_not?: InputMaybe<Scalars['String']>;
  /** All values not containing the given string. */
  userName_not_contains?: InputMaybe<Scalars['String']>;
  /** All values not ending with the given string */
  userName_not_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  userName_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values not starting with the given string. */
  userName_not_starts_with?: InputMaybe<Scalars['String']>;
  /** All values starting with the given string. */
  userName_starts_with?: InputMaybe<Scalars['String']>;
};

/** The document in stages filter allows specifying a stage entry to cross compare the same document between different stages */
export type CommentWhereStageInput = {
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<CommentWhereStageInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<CommentWhereStageInput>>;
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<CommentWhereStageInput>>;
  /** This field contains fields which can be set as true or false to specify an internal comparison */
  compareWithParent?: InputMaybe<CommentWhereComparatorInput>;
  /** Specify the stage to compare with */
  stage?: InputMaybe<Stage>;
};

/** References Comment record uniquely */
export type CommentWhereUniqueInput = {
  id?: InputMaybe<Scalars['ID']>;
};

export type ConnectPositionInput = {
  /** Connect document after specified document */
  after?: InputMaybe<Scalars['ID']>;
  /** Connect document before specified document */
  before?: InputMaybe<Scalars['ID']>;
  /** Connect document at last position */
  end?: InputMaybe<Scalars['Boolean']>;
  /** Connect document at first position */
  start?: InputMaybe<Scalars['Boolean']>;
};

export enum DocumentFileTypes {
  Doc = 'doc',
  Docx = 'docx',
  Html = 'html',
  Jpg = 'jpg',
  Odp = 'odp',
  Ods = 'ods',
  Odt = 'odt',
  Pdf = 'pdf',
  Png = 'png',
  Ppt = 'ppt',
  Pptx = 'pptx',
  Svg = 'svg',
  Txt = 'txt',
  Webp = 'webp',
  Xls = 'xls',
  Xlsx = 'xlsx'
}

export type DocumentOutputInput = {
  /**
   * Transforms a document into a desired file type.
   * See this matrix for format support:
   *
   * PDF:	jpg, odp, ods, odt, png, svg, txt, and webp
   * DOC:	docx, html, jpg, odt, pdf, png, svg, txt, and webp
   * DOCX:	doc, html, jpg, odt, pdf, png, svg, txt, and webp
   * ODT:	doc, docx, html, jpg, pdf, png, svg, txt, and webp
   * XLS:	jpg, pdf, ods, png, svg, xlsx, and webp
   * XLSX:	jpg, pdf, ods, png, svg, xls, and webp
   * ODS:	jpg, pdf, png, xls, svg, xlsx, and webp
   * PPT:	jpg, odp, pdf, png, svg, pptx, and webp
   * PPTX:	jpg, odp, pdf, png, svg, ppt, and webp
   * ODP:	jpg, pdf, png, ppt, svg, pptx, and webp
   * BMP:	jpg, odp, ods, odt, pdf, png, svg, and webp
   * GIF:	jpg, odp, ods, odt, pdf, png, svg, and webp
   * JPG:	jpg, odp, ods, odt, pdf, png, svg, and webp
   * PNG:	jpg, odp, ods, odt, pdf, png, svg, and webp
   * WEBP:	jpg, odp, ods, odt, pdf, png, svg, and webp
   * TIFF:	jpg, odp, ods, odt, pdf, png, svg, and webp
   * AI:	    jpg, odp, ods, odt, pdf, png, svg, and webp
   * PSD:	jpg, odp, ods, odt, pdf, png, svg, and webp
   * SVG:	jpg, odp, ods, odt, pdf, png, and webp
   * HTML:	jpg, odt, pdf, svg, txt, and webp
   * TXT:	jpg, html, odt, pdf, svg, and webp
   */
  format?: InputMaybe<DocumentFileTypes>;
};

/** Transformations for Documents */
export type DocumentTransformationInput = {
  /** Changes the output for the file. */
  output?: InputMaybe<DocumentOutputInput>;
};

export type DocumentVersion = {
  __typename?: 'DocumentVersion';
  createdAt: Scalars['DateTime'];
  data?: Maybe<Scalars['Json']>;
  id: Scalars['ID'];
  revision: Scalars['Int'];
  stage: Stage;
};

export type Image = {
  __typename?: 'Image';
  alt?: Maybe<Scalars['String']>;
  /** The unique identifier */
  id: Scalars['ID'];
  image?: Maybe<Asset>;
  /** System stage field */
  stage: Stage;
};


export type ImageImageArgs = {
  forceParentLocale?: InputMaybe<Scalars['Boolean']>;
  locales?: InputMaybe<Array<Locale>>;
};

export type ImageConnectInput = {
  /** Allow to specify document position in list of connected documents, will default to appending at end of list */
  position?: InputMaybe<ConnectPositionInput>;
  /** Document to connect */
  where: ImageWhereUniqueInput;
};

/** A connection to a list of items. */
export type ImageConnection = {
  __typename?: 'ImageConnection';
  aggregate: Aggregate;
  /** A list of edges. */
  edges: Array<ImageEdge>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
};

export type ImageCreateInput = {
  alt?: InputMaybe<Scalars['String']>;
  image?: InputMaybe<AssetCreateOneInlineInput>;
};

export type ImageCreateManyInlineInput = {
  /** Create and connect multiple existing Image documents */
  create?: InputMaybe<Array<ImageCreateInput>>;
};

export type ImageCreateOneInlineInput = {
  /** Create and connect one Image document */
  create?: InputMaybe<ImageCreateInput>;
};

export type ImageCreateWithPositionInput = {
  /** Document to create */
  data: ImageCreateInput;
  /** Position in the list of existing component instances, will default to appending at the end of list */
  position?: InputMaybe<ConnectPositionInput>;
};

/** An edge in a connection. */
export type ImageEdge = {
  __typename?: 'ImageEdge';
  /** A cursor for use in pagination. */
  cursor: Scalars['String'];
  /** The item at the end of the edge. */
  node: Image;
};

export enum ImageFit {
  /** Resizes the image to fit within the specified parameters without distorting, cropping, or changing the aspect ratio. */
  Clip = 'clip',
  /** Resizes the image to fit the specified parameters exactly by removing any parts of the image that don't fit within the boundaries. */
  Crop = 'crop',
  /** Resizes the image to fit within the parameters, but as opposed to 'fit:clip' will not scale the image if the image is smaller than the output size. */
  Max = 'max',
  /** Resizes the image to fit the specified parameters exactly by scaling the image to the desired size. The aspect ratio of the image is not respected and the image can be distorted using this method. */
  Scale = 'scale'
}

/** Identifies documents */
export type ImageManyWhereInput = {
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<ImageWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<ImageWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<ImageWhereInput>>;
  /** Contains search across all appropriate fields. */
  _search?: InputMaybe<Scalars['String']>;
  alt?: InputMaybe<Scalars['String']>;
  /** All values containing the given string. */
  alt_contains?: InputMaybe<Scalars['String']>;
  /** All values ending with the given string. */
  alt_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are contained in given list. */
  alt_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** Any other value that exists and is not equal to the given value. */
  alt_not?: InputMaybe<Scalars['String']>;
  /** All values not containing the given string. */
  alt_not_contains?: InputMaybe<Scalars['String']>;
  /** All values not ending with the given string */
  alt_not_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  alt_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values not starting with the given string. */
  alt_not_starts_with?: InputMaybe<Scalars['String']>;
  /** All values starting with the given string. */
  alt_starts_with?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['ID']>;
  /** All values containing the given string. */
  id_contains?: InputMaybe<Scalars['ID']>;
  /** All values ending with the given string. */
  id_ends_with?: InputMaybe<Scalars['ID']>;
  /** All values that are contained in given list. */
  id_in?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  /** Any other value that exists and is not equal to the given value. */
  id_not?: InputMaybe<Scalars['ID']>;
  /** All values not containing the given string. */
  id_not_contains?: InputMaybe<Scalars['ID']>;
  /** All values not ending with the given string */
  id_not_ends_with?: InputMaybe<Scalars['ID']>;
  /** All values that are not contained in given list. */
  id_not_in?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  /** All values not starting with the given string. */
  id_not_starts_with?: InputMaybe<Scalars['ID']>;
  /** All values starting with the given string. */
  id_starts_with?: InputMaybe<Scalars['ID']>;
  image?: InputMaybe<AssetWhereInput>;
};

export enum ImageOrderByInput {
  AltAsc = 'alt_ASC',
  AltDesc = 'alt_DESC',
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC'
}

export type ImageParent = Product;

export type ImageParentConnectInput = {
  Product?: InputMaybe<ProductConnectInput>;
};

export type ImageParentCreateInput = {
  Product?: InputMaybe<ProductCreateInput>;
};

export type ImageParentCreateManyInlineInput = {
  /** Connect multiple existing ImageParent documents */
  connect?: InputMaybe<Array<ImageParentWhereUniqueInput>>;
  /** Create and connect multiple existing ImageParent documents */
  create?: InputMaybe<Array<ImageParentCreateInput>>;
};

export type ImageParentCreateOneInlineInput = {
  /** Connect one existing ImageParent document */
  connect?: InputMaybe<ImageParentWhereUniqueInput>;
  /** Create and connect one ImageParent document */
  create?: InputMaybe<ImageParentCreateInput>;
};

export type ImageParentUpdateInput = {
  Product?: InputMaybe<ProductUpdateInput>;
};

export type ImageParentUpdateManyInlineInput = {
  /** Connect multiple existing ImageParent documents */
  connect?: InputMaybe<Array<ImageParentConnectInput>>;
  /** Create and connect multiple ImageParent documents */
  create?: InputMaybe<Array<ImageParentCreateInput>>;
  /** Delete multiple ImageParent documents */
  delete?: InputMaybe<Array<ImageParentWhereUniqueInput>>;
  /** Disconnect multiple ImageParent documents */
  disconnect?: InputMaybe<Array<ImageParentWhereUniqueInput>>;
  /** Override currently-connected documents with multiple existing ImageParent documents */
  set?: InputMaybe<Array<ImageParentWhereUniqueInput>>;
  /** Update multiple ImageParent documents */
  update?: InputMaybe<Array<ImageParentUpdateWithNestedWhereUniqueInput>>;
  /** Upsert multiple ImageParent documents */
  upsert?: InputMaybe<Array<ImageParentUpsertWithNestedWhereUniqueInput>>;
};

export type ImageParentUpdateManyWithNestedWhereInput = {
  Product?: InputMaybe<ProductUpdateManyWithNestedWhereInput>;
};

export type ImageParentUpdateOneInlineInput = {
  /** Connect existing ImageParent document */
  connect?: InputMaybe<ImageParentWhereUniqueInput>;
  /** Create and connect one ImageParent document */
  create?: InputMaybe<ImageParentCreateInput>;
  /** Delete currently connected ImageParent document */
  delete?: InputMaybe<Scalars['Boolean']>;
  /** Disconnect currently connected ImageParent document */
  disconnect?: InputMaybe<Scalars['Boolean']>;
  /** Update single ImageParent document */
  update?: InputMaybe<ImageParentUpdateWithNestedWhereUniqueInput>;
  /** Upsert single ImageParent document */
  upsert?: InputMaybe<ImageParentUpsertWithNestedWhereUniqueInput>;
};

export type ImageParentUpdateWithNestedWhereUniqueInput = {
  Product?: InputMaybe<ProductUpdateWithNestedWhereUniqueInput>;
};

export type ImageParentUpsertWithNestedWhereUniqueInput = {
  Product?: InputMaybe<ProductUpsertWithNestedWhereUniqueInput>;
};

export type ImageParentWhereInput = {
  Product?: InputMaybe<ProductWhereInput>;
};

export type ImageParentWhereUniqueInput = {
  Product?: InputMaybe<ProductWhereUniqueInput>;
};

export type ImageResizeInput = {
  /** The default value for the fit parameter is fit:clip. */
  fit?: InputMaybe<ImageFit>;
  /** The height in pixels to resize the image to. The value must be an integer from 1 to 10000. */
  height?: InputMaybe<Scalars['Int']>;
  /** The width in pixels to resize the image to. The value must be an integer from 1 to 10000. */
  width?: InputMaybe<Scalars['Int']>;
};

/** Transformations for Images */
export type ImageTransformationInput = {
  /** Resizes the image */
  resize?: InputMaybe<ImageResizeInput>;
};

export type ImageUpdateInput = {
  alt?: InputMaybe<Scalars['String']>;
  image?: InputMaybe<AssetUpdateOneInlineInput>;
};

export type ImageUpdateManyInlineInput = {
  /** Create and connect multiple Image component instances */
  create?: InputMaybe<Array<ImageCreateWithPositionInput>>;
  /** Delete multiple Image documents */
  delete?: InputMaybe<Array<ImageWhereUniqueInput>>;
  /** Update multiple Image component instances */
  update?: InputMaybe<Array<ImageUpdateWithNestedWhereUniqueAndPositionInput>>;
  /** Upsert multiple Image component instances */
  upsert?: InputMaybe<Array<ImageUpsertWithNestedWhereUniqueAndPositionInput>>;
};

export type ImageUpdateManyInput = {
  alt?: InputMaybe<Scalars['String']>;
};

export type ImageUpdateManyWithNestedWhereInput = {
  /** Update many input */
  data: ImageUpdateManyInput;
  /** Document search */
  where: ImageWhereInput;
};

export type ImageUpdateOneInlineInput = {
  /** Create and connect one Image document */
  create?: InputMaybe<ImageCreateInput>;
  /** Delete currently connected Image document */
  delete?: InputMaybe<Scalars['Boolean']>;
  /** Update single Image document */
  update?: InputMaybe<ImageUpdateWithNestedWhereUniqueInput>;
  /** Upsert single Image document */
  upsert?: InputMaybe<ImageUpsertWithNestedWhereUniqueInput>;
};

export type ImageUpdateWithNestedWhereUniqueAndPositionInput = {
  /** Document to update */
  data?: InputMaybe<ImageUpdateInput>;
  /** Position in the list of existing component instances, will default to appending at the end of list */
  position?: InputMaybe<ConnectPositionInput>;
  /** Unique component instance search */
  where: ImageWhereUniqueInput;
};

export type ImageUpdateWithNestedWhereUniqueInput = {
  /** Document to update */
  data: ImageUpdateInput;
  /** Unique document search */
  where: ImageWhereUniqueInput;
};

export type ImageUpsertInput = {
  /** Create document if it didn't exist */
  create: ImageCreateInput;
  /** Update document if it exists */
  update: ImageUpdateInput;
};

export type ImageUpsertWithNestedWhereUniqueAndPositionInput = {
  /** Document to upsert */
  data?: InputMaybe<ImageUpsertInput>;
  /** Position in the list of existing component instances, will default to appending at the end of list */
  position?: InputMaybe<ConnectPositionInput>;
  /** Unique component instance search */
  where: ImageWhereUniqueInput;
};

export type ImageUpsertWithNestedWhereUniqueInput = {
  /** Upsert data */
  data: ImageUpsertInput;
  /** Unique document search */
  where: ImageWhereUniqueInput;
};

/** Identifies documents */
export type ImageWhereInput = {
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<ImageWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<ImageWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<ImageWhereInput>>;
  /** Contains search across all appropriate fields. */
  _search?: InputMaybe<Scalars['String']>;
  alt?: InputMaybe<Scalars['String']>;
  /** All values containing the given string. */
  alt_contains?: InputMaybe<Scalars['String']>;
  /** All values ending with the given string. */
  alt_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are contained in given list. */
  alt_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** Any other value that exists and is not equal to the given value. */
  alt_not?: InputMaybe<Scalars['String']>;
  /** All values not containing the given string. */
  alt_not_contains?: InputMaybe<Scalars['String']>;
  /** All values not ending with the given string */
  alt_not_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  alt_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values not starting with the given string. */
  alt_not_starts_with?: InputMaybe<Scalars['String']>;
  /** All values starting with the given string. */
  alt_starts_with?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['ID']>;
  /** All values containing the given string. */
  id_contains?: InputMaybe<Scalars['ID']>;
  /** All values ending with the given string. */
  id_ends_with?: InputMaybe<Scalars['ID']>;
  /** All values that are contained in given list. */
  id_in?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  /** Any other value that exists and is not equal to the given value. */
  id_not?: InputMaybe<Scalars['ID']>;
  /** All values not containing the given string. */
  id_not_contains?: InputMaybe<Scalars['ID']>;
  /** All values not ending with the given string */
  id_not_ends_with?: InputMaybe<Scalars['ID']>;
  /** All values that are not contained in given list. */
  id_not_in?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  /** All values not starting with the given string. */
  id_not_starts_with?: InputMaybe<Scalars['ID']>;
  /** All values starting with the given string. */
  id_starts_with?: InputMaybe<Scalars['ID']>;
  image?: InputMaybe<AssetWhereInput>;
};

/** References Image record uniquely */
export type ImageWhereUniqueInput = {
  id?: InputMaybe<Scalars['ID']>;
};

/** Locale system enumeration */
export enum Locale {
  /** System locale */
  En = 'en'
}

/** Representing a geolocation point with latitude and longitude */
export type Location = {
  __typename?: 'Location';
  distance: Scalars['Float'];
  latitude: Scalars['Float'];
  longitude: Scalars['Float'];
};


/** Representing a geolocation point with latitude and longitude */
export type LocationDistanceArgs = {
  from: LocationInput;
};

/** Input for a geolocation point with latitude and longitude */
export type LocationInput = {
  latitude: Scalars['Float'];
  longitude: Scalars['Float'];
};

export type Mutation = {
  __typename?: 'Mutation';
  /** Create one account */
  createAccount?: Maybe<Account>;
  /**
   * Create one asset
   * @deprecated Asset mutations will be overhauled soon
   */
  createAsset?: Maybe<Asset>;
  /** Create one comment */
  createComment?: Maybe<Comment>;
  /** Create one order */
  createOrder?: Maybe<Order>;
  /** Create one product */
  createProduct?: Maybe<Product>;
  /** Create one review */
  createReview?: Maybe<Review>;
  /** Create one scheduledRelease */
  createScheduledRelease?: Maybe<ScheduledRelease>;
  /** Delete one account from _all_ existing stages. Returns deleted document. */
  deleteAccount?: Maybe<Account>;
  /** Delete one asset from _all_ existing stages. Returns deleted document. */
  deleteAsset?: Maybe<Asset>;
  /** Delete one comment from _all_ existing stages. Returns deleted document. */
  deleteComment?: Maybe<Comment>;
  /**
   * Delete many Account documents
   * @deprecated Please use the new paginated many mutation (deleteManyAccountsConnection)
   */
  deleteManyAccounts: BatchPayload;
  /** Delete many Account documents, return deleted documents */
  deleteManyAccountsConnection: AccountConnection;
  /**
   * Delete many Asset documents
   * @deprecated Please use the new paginated many mutation (deleteManyAssetsConnection)
   */
  deleteManyAssets: BatchPayload;
  /** Delete many Asset documents, return deleted documents */
  deleteManyAssetsConnection: AssetConnection;
  /**
   * Delete many Comment documents
   * @deprecated Please use the new paginated many mutation (deleteManyCommentsConnection)
   */
  deleteManyComments: BatchPayload;
  /** Delete many Comment documents, return deleted documents */
  deleteManyCommentsConnection: CommentConnection;
  /**
   * Delete many Order documents
   * @deprecated Please use the new paginated many mutation (deleteManyOrdersConnection)
   */
  deleteManyOrders: BatchPayload;
  /** Delete many Order documents, return deleted documents */
  deleteManyOrdersConnection: OrderConnection;
  /**
   * Delete many Product documents
   * @deprecated Please use the new paginated many mutation (deleteManyProductsConnection)
   */
  deleteManyProducts: BatchPayload;
  /** Delete many Product documents, return deleted documents */
  deleteManyProductsConnection: ProductConnection;
  /**
   * Delete many Review documents
   * @deprecated Please use the new paginated many mutation (deleteManyReviewsConnection)
   */
  deleteManyReviews: BatchPayload;
  /** Delete many Review documents, return deleted documents */
  deleteManyReviewsConnection: ReviewConnection;
  /** Delete one order from _all_ existing stages. Returns deleted document. */
  deleteOrder?: Maybe<Order>;
  /** Delete one product from _all_ existing stages. Returns deleted document. */
  deleteProduct?: Maybe<Product>;
  /** Delete one review from _all_ existing stages. Returns deleted document. */
  deleteReview?: Maybe<Review>;
  /** Delete and return scheduled operation */
  deleteScheduledOperation?: Maybe<ScheduledOperation>;
  /** Delete one scheduledRelease from _all_ existing stages. Returns deleted document. */
  deleteScheduledRelease?: Maybe<ScheduledRelease>;
  /** Publish one account */
  publishAccount?: Maybe<Account>;
  /** Publish one asset */
  publishAsset?: Maybe<Asset>;
  /** Publish one comment */
  publishComment?: Maybe<Comment>;
  /**
   * Publish many Account documents
   * @deprecated Please use the new paginated many mutation (publishManyAccountsConnection)
   */
  publishManyAccounts: BatchPayload;
  /** Publish many Account documents */
  publishManyAccountsConnection: AccountConnection;
  /**
   * Publish many Asset documents
   * @deprecated Please use the new paginated many mutation (publishManyAssetsConnection)
   */
  publishManyAssets: BatchPayload;
  /** Publish many Asset documents */
  publishManyAssetsConnection: AssetConnection;
  /**
   * Publish many Comment documents
   * @deprecated Please use the new paginated many mutation (publishManyCommentsConnection)
   */
  publishManyComments: BatchPayload;
  /** Publish many Comment documents */
  publishManyCommentsConnection: CommentConnection;
  /**
   * Publish many Order documents
   * @deprecated Please use the new paginated many mutation (publishManyOrdersConnection)
   */
  publishManyOrders: BatchPayload;
  /** Publish many Order documents */
  publishManyOrdersConnection: OrderConnection;
  /**
   * Publish many Product documents
   * @deprecated Please use the new paginated many mutation (publishManyProductsConnection)
   */
  publishManyProducts: BatchPayload;
  /** Publish many Product documents */
  publishManyProductsConnection: ProductConnection;
  /**
   * Publish many Review documents
   * @deprecated Please use the new paginated many mutation (publishManyReviewsConnection)
   */
  publishManyReviews: BatchPayload;
  /** Publish many Review documents */
  publishManyReviewsConnection: ReviewConnection;
  /** Publish one order */
  publishOrder?: Maybe<Order>;
  /** Publish one product */
  publishProduct?: Maybe<Product>;
  /** Publish one review */
  publishReview?: Maybe<Review>;
  /** Schedule to publish one account */
  schedulePublishAccount?: Maybe<Account>;
  /** Schedule to publish one asset */
  schedulePublishAsset?: Maybe<Asset>;
  /** Schedule to publish one comment */
  schedulePublishComment?: Maybe<Comment>;
  /** Schedule to publish one order */
  schedulePublishOrder?: Maybe<Order>;
  /** Schedule to publish one product */
  schedulePublishProduct?: Maybe<Product>;
  /** Schedule to publish one review */
  schedulePublishReview?: Maybe<Review>;
  /** Unpublish one account from selected stages. Unpublish either the complete document with its relations, localizations and base data or specific localizations only. */
  scheduleUnpublishAccount?: Maybe<Account>;
  /** Unpublish one asset from selected stages. Unpublish either the complete document with its relations, localizations and base data or specific localizations only. */
  scheduleUnpublishAsset?: Maybe<Asset>;
  /** Unpublish one comment from selected stages. Unpublish either the complete document with its relations, localizations and base data or specific localizations only. */
  scheduleUnpublishComment?: Maybe<Comment>;
  /** Unpublish one order from selected stages. Unpublish either the complete document with its relations, localizations and base data or specific localizations only. */
  scheduleUnpublishOrder?: Maybe<Order>;
  /** Unpublish one product from selected stages. Unpublish either the complete document with its relations, localizations and base data or specific localizations only. */
  scheduleUnpublishProduct?: Maybe<Product>;
  /** Unpublish one review from selected stages. Unpublish either the complete document with its relations, localizations and base data or specific localizations only. */
  scheduleUnpublishReview?: Maybe<Review>;
  /** Unpublish one account from selected stages. Unpublish either the complete document with its relations, localizations and base data or specific localizations only. */
  unpublishAccount?: Maybe<Account>;
  /** Unpublish one asset from selected stages. Unpublish either the complete document with its relations, localizations and base data or specific localizations only. */
  unpublishAsset?: Maybe<Asset>;
  /** Unpublish one comment from selected stages. Unpublish either the complete document with its relations, localizations and base data or specific localizations only. */
  unpublishComment?: Maybe<Comment>;
  /**
   * Unpublish many Account documents
   * @deprecated Please use the new paginated many mutation (unpublishManyAccountsConnection)
   */
  unpublishManyAccounts: BatchPayload;
  /** Find many Account documents that match criteria in specified stage and unpublish from target stages */
  unpublishManyAccountsConnection: AccountConnection;
  /**
   * Unpublish many Asset documents
   * @deprecated Please use the new paginated many mutation (unpublishManyAssetsConnection)
   */
  unpublishManyAssets: BatchPayload;
  /** Find many Asset documents that match criteria in specified stage and unpublish from target stages */
  unpublishManyAssetsConnection: AssetConnection;
  /**
   * Unpublish many Comment documents
   * @deprecated Please use the new paginated many mutation (unpublishManyCommentsConnection)
   */
  unpublishManyComments: BatchPayload;
  /** Find many Comment documents that match criteria in specified stage and unpublish from target stages */
  unpublishManyCommentsConnection: CommentConnection;
  /**
   * Unpublish many Order documents
   * @deprecated Please use the new paginated many mutation (unpublishManyOrdersConnection)
   */
  unpublishManyOrders: BatchPayload;
  /** Find many Order documents that match criteria in specified stage and unpublish from target stages */
  unpublishManyOrdersConnection: OrderConnection;
  /**
   * Unpublish many Product documents
   * @deprecated Please use the new paginated many mutation (unpublishManyProductsConnection)
   */
  unpublishManyProducts: BatchPayload;
  /** Find many Product documents that match criteria in specified stage and unpublish from target stages */
  unpublishManyProductsConnection: ProductConnection;
  /**
   * Unpublish many Review documents
   * @deprecated Please use the new paginated many mutation (unpublishManyReviewsConnection)
   */
  unpublishManyReviews: BatchPayload;
  /** Find many Review documents that match criteria in specified stage and unpublish from target stages */
  unpublishManyReviewsConnection: ReviewConnection;
  /** Unpublish one order from selected stages. Unpublish either the complete document with its relations, localizations and base data or specific localizations only. */
  unpublishOrder?: Maybe<Order>;
  /** Unpublish one product from selected stages. Unpublish either the complete document with its relations, localizations and base data or specific localizations only. */
  unpublishProduct?: Maybe<Product>;
  /** Unpublish one review from selected stages. Unpublish either the complete document with its relations, localizations and base data or specific localizations only. */
  unpublishReview?: Maybe<Review>;
  /** Update one account */
  updateAccount?: Maybe<Account>;
  /** Update one asset */
  updateAsset?: Maybe<Asset>;
  /** Update one comment */
  updateComment?: Maybe<Comment>;
  /**
   * Update many accounts
   * @deprecated Please use the new paginated many mutation (updateManyAccountsConnection)
   */
  updateManyAccounts: BatchPayload;
  /** Update many Account documents */
  updateManyAccountsConnection: AccountConnection;
  /**
   * Update many assets
   * @deprecated Please use the new paginated many mutation (updateManyAssetsConnection)
   */
  updateManyAssets: BatchPayload;
  /** Update many Asset documents */
  updateManyAssetsConnection: AssetConnection;
  /**
   * Update many comments
   * @deprecated Please use the new paginated many mutation (updateManyCommentsConnection)
   */
  updateManyComments: BatchPayload;
  /** Update many Comment documents */
  updateManyCommentsConnection: CommentConnection;
  /**
   * Update many orders
   * @deprecated Please use the new paginated many mutation (updateManyOrdersConnection)
   */
  updateManyOrders: BatchPayload;
  /** Update many Order documents */
  updateManyOrdersConnection: OrderConnection;
  /**
   * Update many products
   * @deprecated Please use the new paginated many mutation (updateManyProductsConnection)
   */
  updateManyProducts: BatchPayload;
  /** Update many Product documents */
  updateManyProductsConnection: ProductConnection;
  /**
   * Update many reviews
   * @deprecated Please use the new paginated many mutation (updateManyReviewsConnection)
   */
  updateManyReviews: BatchPayload;
  /** Update many Review documents */
  updateManyReviewsConnection: ReviewConnection;
  /** Update one order */
  updateOrder?: Maybe<Order>;
  /** Update one product */
  updateProduct?: Maybe<Product>;
  /** Update one review */
  updateReview?: Maybe<Review>;
  /** Update one scheduledRelease */
  updateScheduledRelease?: Maybe<ScheduledRelease>;
  /** Upsert one account */
  upsertAccount?: Maybe<Account>;
  /** Upsert one asset */
  upsertAsset?: Maybe<Asset>;
  /** Upsert one comment */
  upsertComment?: Maybe<Comment>;
  /** Upsert one order */
  upsertOrder?: Maybe<Order>;
  /** Upsert one product */
  upsertProduct?: Maybe<Product>;
  /** Upsert one review */
  upsertReview?: Maybe<Review>;
};


export type MutationCreateAccountArgs = {
  data: AccountCreateInput;
};


export type MutationCreateAssetArgs = {
  data: AssetCreateInput;
};


export type MutationCreateCommentArgs = {
  data: CommentCreateInput;
};


export type MutationCreateOrderArgs = {
  data: OrderCreateInput;
};


export type MutationCreateProductArgs = {
  data: ProductCreateInput;
};


export type MutationCreateReviewArgs = {
  data: ReviewCreateInput;
};


export type MutationCreateScheduledReleaseArgs = {
  data: ScheduledReleaseCreateInput;
};


export type MutationDeleteAccountArgs = {
  where: AccountWhereUniqueInput;
};


export type MutationDeleteAssetArgs = {
  where: AssetWhereUniqueInput;
};


export type MutationDeleteCommentArgs = {
  where: CommentWhereUniqueInput;
};


export type MutationDeleteManyAccountsArgs = {
  where?: InputMaybe<AccountManyWhereInput>;
};


export type MutationDeleteManyAccountsConnectionArgs = {
  after?: InputMaybe<Scalars['ID']>;
  before?: InputMaybe<Scalars['ID']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<AccountManyWhereInput>;
};


export type MutationDeleteManyAssetsArgs = {
  where?: InputMaybe<AssetManyWhereInput>;
};


export type MutationDeleteManyAssetsConnectionArgs = {
  after?: InputMaybe<Scalars['ID']>;
  before?: InputMaybe<Scalars['ID']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<AssetManyWhereInput>;
};


export type MutationDeleteManyCommentsArgs = {
  where?: InputMaybe<CommentManyWhereInput>;
};


export type MutationDeleteManyCommentsConnectionArgs = {
  after?: InputMaybe<Scalars['ID']>;
  before?: InputMaybe<Scalars['ID']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<CommentManyWhereInput>;
};


export type MutationDeleteManyOrdersArgs = {
  where?: InputMaybe<OrderManyWhereInput>;
};


export type MutationDeleteManyOrdersConnectionArgs = {
  after?: InputMaybe<Scalars['ID']>;
  before?: InputMaybe<Scalars['ID']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<OrderManyWhereInput>;
};


export type MutationDeleteManyProductsArgs = {
  where?: InputMaybe<ProductManyWhereInput>;
};


export type MutationDeleteManyProductsConnectionArgs = {
  after?: InputMaybe<Scalars['ID']>;
  before?: InputMaybe<Scalars['ID']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<ProductManyWhereInput>;
};


export type MutationDeleteManyReviewsArgs = {
  where?: InputMaybe<ReviewManyWhereInput>;
};


export type MutationDeleteManyReviewsConnectionArgs = {
  after?: InputMaybe<Scalars['ID']>;
  before?: InputMaybe<Scalars['ID']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<ReviewManyWhereInput>;
};


export type MutationDeleteOrderArgs = {
  where: OrderWhereUniqueInput;
};


export type MutationDeleteProductArgs = {
  where: ProductWhereUniqueInput;
};


export type MutationDeleteReviewArgs = {
  where: ReviewWhereUniqueInput;
};


export type MutationDeleteScheduledOperationArgs = {
  where: ScheduledOperationWhereUniqueInput;
};


export type MutationDeleteScheduledReleaseArgs = {
  where: ScheduledReleaseWhereUniqueInput;
};


export type MutationPublishAccountArgs = {
  to?: Array<Stage>;
  where: AccountWhereUniqueInput;
};


export type MutationPublishAssetArgs = {
  locales?: InputMaybe<Array<Locale>>;
  publishBase?: InputMaybe<Scalars['Boolean']>;
  to?: Array<Stage>;
  where: AssetWhereUniqueInput;
  withDefaultLocale?: InputMaybe<Scalars['Boolean']>;
};


export type MutationPublishCommentArgs = {
  to?: Array<Stage>;
  where: CommentWhereUniqueInput;
};


export type MutationPublishManyAccountsArgs = {
  to?: Array<Stage>;
  where?: InputMaybe<AccountManyWhereInput>;
};


export type MutationPublishManyAccountsConnectionArgs = {
  after?: InputMaybe<Scalars['ID']>;
  before?: InputMaybe<Scalars['ID']>;
  first?: InputMaybe<Scalars['Int']>;
  from?: InputMaybe<Stage>;
  last?: InputMaybe<Scalars['Int']>;
  skip?: InputMaybe<Scalars['Int']>;
  to?: Array<Stage>;
  where?: InputMaybe<AccountManyWhereInput>;
};


export type MutationPublishManyAssetsArgs = {
  locales?: InputMaybe<Array<Locale>>;
  publishBase?: InputMaybe<Scalars['Boolean']>;
  to?: Array<Stage>;
  where?: InputMaybe<AssetManyWhereInput>;
  withDefaultLocale?: InputMaybe<Scalars['Boolean']>;
};


export type MutationPublishManyAssetsConnectionArgs = {
  after?: InputMaybe<Scalars['ID']>;
  before?: InputMaybe<Scalars['ID']>;
  first?: InputMaybe<Scalars['Int']>;
  from?: InputMaybe<Stage>;
  last?: InputMaybe<Scalars['Int']>;
  locales?: InputMaybe<Array<Locale>>;
  publishBase?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
  to?: Array<Stage>;
  where?: InputMaybe<AssetManyWhereInput>;
  withDefaultLocale?: InputMaybe<Scalars['Boolean']>;
};


export type MutationPublishManyCommentsArgs = {
  to?: Array<Stage>;
  where?: InputMaybe<CommentManyWhereInput>;
};


export type MutationPublishManyCommentsConnectionArgs = {
  after?: InputMaybe<Scalars['ID']>;
  before?: InputMaybe<Scalars['ID']>;
  first?: InputMaybe<Scalars['Int']>;
  from?: InputMaybe<Stage>;
  last?: InputMaybe<Scalars['Int']>;
  skip?: InputMaybe<Scalars['Int']>;
  to?: Array<Stage>;
  where?: InputMaybe<CommentManyWhereInput>;
};


export type MutationPublishManyOrdersArgs = {
  to?: Array<Stage>;
  where?: InputMaybe<OrderManyWhereInput>;
};


export type MutationPublishManyOrdersConnectionArgs = {
  after?: InputMaybe<Scalars['ID']>;
  before?: InputMaybe<Scalars['ID']>;
  first?: InputMaybe<Scalars['Int']>;
  from?: InputMaybe<Stage>;
  last?: InputMaybe<Scalars['Int']>;
  skip?: InputMaybe<Scalars['Int']>;
  to?: Array<Stage>;
  where?: InputMaybe<OrderManyWhereInput>;
};


export type MutationPublishManyProductsArgs = {
  to?: Array<Stage>;
  where?: InputMaybe<ProductManyWhereInput>;
};


export type MutationPublishManyProductsConnectionArgs = {
  after?: InputMaybe<Scalars['ID']>;
  before?: InputMaybe<Scalars['ID']>;
  first?: InputMaybe<Scalars['Int']>;
  from?: InputMaybe<Stage>;
  last?: InputMaybe<Scalars['Int']>;
  skip?: InputMaybe<Scalars['Int']>;
  to?: Array<Stage>;
  where?: InputMaybe<ProductManyWhereInput>;
};


export type MutationPublishManyReviewsArgs = {
  to?: Array<Stage>;
  where?: InputMaybe<ReviewManyWhereInput>;
};


export type MutationPublishManyReviewsConnectionArgs = {
  after?: InputMaybe<Scalars['ID']>;
  before?: InputMaybe<Scalars['ID']>;
  first?: InputMaybe<Scalars['Int']>;
  from?: InputMaybe<Stage>;
  last?: InputMaybe<Scalars['Int']>;
  skip?: InputMaybe<Scalars['Int']>;
  to?: Array<Stage>;
  where?: InputMaybe<ReviewManyWhereInput>;
};


export type MutationPublishOrderArgs = {
  to?: Array<Stage>;
  where: OrderWhereUniqueInput;
};


export type MutationPublishProductArgs = {
  to?: Array<Stage>;
  where: ProductWhereUniqueInput;
};


export type MutationPublishReviewArgs = {
  to?: Array<Stage>;
  where: ReviewWhereUniqueInput;
};


export type MutationSchedulePublishAccountArgs = {
  releaseAt?: InputMaybe<Scalars['DateTime']>;
  releaseId?: InputMaybe<Scalars['String']>;
  to?: Array<Stage>;
  where: AccountWhereUniqueInput;
};


export type MutationSchedulePublishAssetArgs = {
  locales?: InputMaybe<Array<Locale>>;
  publishBase?: InputMaybe<Scalars['Boolean']>;
  releaseAt?: InputMaybe<Scalars['DateTime']>;
  releaseId?: InputMaybe<Scalars['String']>;
  to?: Array<Stage>;
  where: AssetWhereUniqueInput;
  withDefaultLocale?: InputMaybe<Scalars['Boolean']>;
};


export type MutationSchedulePublishCommentArgs = {
  releaseAt?: InputMaybe<Scalars['DateTime']>;
  releaseId?: InputMaybe<Scalars['String']>;
  to?: Array<Stage>;
  where: CommentWhereUniqueInput;
};


export type MutationSchedulePublishOrderArgs = {
  releaseAt?: InputMaybe<Scalars['DateTime']>;
  releaseId?: InputMaybe<Scalars['String']>;
  to?: Array<Stage>;
  where: OrderWhereUniqueInput;
};


export type MutationSchedulePublishProductArgs = {
  releaseAt?: InputMaybe<Scalars['DateTime']>;
  releaseId?: InputMaybe<Scalars['String']>;
  to?: Array<Stage>;
  where: ProductWhereUniqueInput;
};


export type MutationSchedulePublishReviewArgs = {
  releaseAt?: InputMaybe<Scalars['DateTime']>;
  releaseId?: InputMaybe<Scalars['String']>;
  to?: Array<Stage>;
  where: ReviewWhereUniqueInput;
};


export type MutationScheduleUnpublishAccountArgs = {
  from?: Array<Stage>;
  releaseAt?: InputMaybe<Scalars['DateTime']>;
  releaseId?: InputMaybe<Scalars['String']>;
  where: AccountWhereUniqueInput;
};


export type MutationScheduleUnpublishAssetArgs = {
  from?: Array<Stage>;
  locales?: InputMaybe<Array<Locale>>;
  releaseAt?: InputMaybe<Scalars['DateTime']>;
  releaseId?: InputMaybe<Scalars['String']>;
  unpublishBase?: InputMaybe<Scalars['Boolean']>;
  where: AssetWhereUniqueInput;
};


export type MutationScheduleUnpublishCommentArgs = {
  from?: Array<Stage>;
  releaseAt?: InputMaybe<Scalars['DateTime']>;
  releaseId?: InputMaybe<Scalars['String']>;
  where: CommentWhereUniqueInput;
};


export type MutationScheduleUnpublishOrderArgs = {
  from?: Array<Stage>;
  releaseAt?: InputMaybe<Scalars['DateTime']>;
  releaseId?: InputMaybe<Scalars['String']>;
  where: OrderWhereUniqueInput;
};


export type MutationScheduleUnpublishProductArgs = {
  from?: Array<Stage>;
  releaseAt?: InputMaybe<Scalars['DateTime']>;
  releaseId?: InputMaybe<Scalars['String']>;
  where: ProductWhereUniqueInput;
};


export type MutationScheduleUnpublishReviewArgs = {
  from?: Array<Stage>;
  releaseAt?: InputMaybe<Scalars['DateTime']>;
  releaseId?: InputMaybe<Scalars['String']>;
  where: ReviewWhereUniqueInput;
};


export type MutationUnpublishAccountArgs = {
  from?: Array<Stage>;
  where: AccountWhereUniqueInput;
};


export type MutationUnpublishAssetArgs = {
  from?: Array<Stage>;
  locales?: InputMaybe<Array<Locale>>;
  unpublishBase?: InputMaybe<Scalars['Boolean']>;
  where: AssetWhereUniqueInput;
};


export type MutationUnpublishCommentArgs = {
  from?: Array<Stage>;
  where: CommentWhereUniqueInput;
};


export type MutationUnpublishManyAccountsArgs = {
  from?: Array<Stage>;
  where?: InputMaybe<AccountManyWhereInput>;
};


export type MutationUnpublishManyAccountsConnectionArgs = {
  after?: InputMaybe<Scalars['ID']>;
  before?: InputMaybe<Scalars['ID']>;
  first?: InputMaybe<Scalars['Int']>;
  from?: Array<Stage>;
  last?: InputMaybe<Scalars['Int']>;
  skip?: InputMaybe<Scalars['Int']>;
  stage?: InputMaybe<Stage>;
  where?: InputMaybe<AccountManyWhereInput>;
};


export type MutationUnpublishManyAssetsArgs = {
  from?: Array<Stage>;
  locales?: InputMaybe<Array<Locale>>;
  unpublishBase?: InputMaybe<Scalars['Boolean']>;
  where?: InputMaybe<AssetManyWhereInput>;
};


export type MutationUnpublishManyAssetsConnectionArgs = {
  after?: InputMaybe<Scalars['ID']>;
  before?: InputMaybe<Scalars['ID']>;
  first?: InputMaybe<Scalars['Int']>;
  from?: Array<Stage>;
  last?: InputMaybe<Scalars['Int']>;
  locales?: InputMaybe<Array<Locale>>;
  skip?: InputMaybe<Scalars['Int']>;
  stage?: InputMaybe<Stage>;
  unpublishBase?: InputMaybe<Scalars['Boolean']>;
  where?: InputMaybe<AssetManyWhereInput>;
};


export type MutationUnpublishManyCommentsArgs = {
  from?: Array<Stage>;
  where?: InputMaybe<CommentManyWhereInput>;
};


export type MutationUnpublishManyCommentsConnectionArgs = {
  after?: InputMaybe<Scalars['ID']>;
  before?: InputMaybe<Scalars['ID']>;
  first?: InputMaybe<Scalars['Int']>;
  from?: Array<Stage>;
  last?: InputMaybe<Scalars['Int']>;
  skip?: InputMaybe<Scalars['Int']>;
  stage?: InputMaybe<Stage>;
  where?: InputMaybe<CommentManyWhereInput>;
};


export type MutationUnpublishManyOrdersArgs = {
  from?: Array<Stage>;
  where?: InputMaybe<OrderManyWhereInput>;
};


export type MutationUnpublishManyOrdersConnectionArgs = {
  after?: InputMaybe<Scalars['ID']>;
  before?: InputMaybe<Scalars['ID']>;
  first?: InputMaybe<Scalars['Int']>;
  from?: Array<Stage>;
  last?: InputMaybe<Scalars['Int']>;
  skip?: InputMaybe<Scalars['Int']>;
  stage?: InputMaybe<Stage>;
  where?: InputMaybe<OrderManyWhereInput>;
};


export type MutationUnpublishManyProductsArgs = {
  from?: Array<Stage>;
  where?: InputMaybe<ProductManyWhereInput>;
};


export type MutationUnpublishManyProductsConnectionArgs = {
  after?: InputMaybe<Scalars['ID']>;
  before?: InputMaybe<Scalars['ID']>;
  first?: InputMaybe<Scalars['Int']>;
  from?: Array<Stage>;
  last?: InputMaybe<Scalars['Int']>;
  skip?: InputMaybe<Scalars['Int']>;
  stage?: InputMaybe<Stage>;
  where?: InputMaybe<ProductManyWhereInput>;
};


export type MutationUnpublishManyReviewsArgs = {
  from?: Array<Stage>;
  where?: InputMaybe<ReviewManyWhereInput>;
};


export type MutationUnpublishManyReviewsConnectionArgs = {
  after?: InputMaybe<Scalars['ID']>;
  before?: InputMaybe<Scalars['ID']>;
  first?: InputMaybe<Scalars['Int']>;
  from?: Array<Stage>;
  last?: InputMaybe<Scalars['Int']>;
  skip?: InputMaybe<Scalars['Int']>;
  stage?: InputMaybe<Stage>;
  where?: InputMaybe<ReviewManyWhereInput>;
};


export type MutationUnpublishOrderArgs = {
  from?: Array<Stage>;
  where: OrderWhereUniqueInput;
};


export type MutationUnpublishProductArgs = {
  from?: Array<Stage>;
  where: ProductWhereUniqueInput;
};


export type MutationUnpublishReviewArgs = {
  from?: Array<Stage>;
  where: ReviewWhereUniqueInput;
};


export type MutationUpdateAccountArgs = {
  data: AccountUpdateInput;
  where: AccountWhereUniqueInput;
};


export type MutationUpdateAssetArgs = {
  data: AssetUpdateInput;
  where: AssetWhereUniqueInput;
};


export type MutationUpdateCommentArgs = {
  data: CommentUpdateInput;
  where: CommentWhereUniqueInput;
};


export type MutationUpdateManyAccountsArgs = {
  data: AccountUpdateManyInput;
  where?: InputMaybe<AccountManyWhereInput>;
};


export type MutationUpdateManyAccountsConnectionArgs = {
  after?: InputMaybe<Scalars['ID']>;
  before?: InputMaybe<Scalars['ID']>;
  data: AccountUpdateManyInput;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<AccountManyWhereInput>;
};


export type MutationUpdateManyAssetsArgs = {
  data: AssetUpdateManyInput;
  where?: InputMaybe<AssetManyWhereInput>;
};


export type MutationUpdateManyAssetsConnectionArgs = {
  after?: InputMaybe<Scalars['ID']>;
  before?: InputMaybe<Scalars['ID']>;
  data: AssetUpdateManyInput;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<AssetManyWhereInput>;
};


export type MutationUpdateManyCommentsArgs = {
  data: CommentUpdateManyInput;
  where?: InputMaybe<CommentManyWhereInput>;
};


export type MutationUpdateManyCommentsConnectionArgs = {
  after?: InputMaybe<Scalars['ID']>;
  before?: InputMaybe<Scalars['ID']>;
  data: CommentUpdateManyInput;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<CommentManyWhereInput>;
};


export type MutationUpdateManyOrdersArgs = {
  data: OrderUpdateManyInput;
  where?: InputMaybe<OrderManyWhereInput>;
};


export type MutationUpdateManyOrdersConnectionArgs = {
  after?: InputMaybe<Scalars['ID']>;
  before?: InputMaybe<Scalars['ID']>;
  data: OrderUpdateManyInput;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<OrderManyWhereInput>;
};


export type MutationUpdateManyProductsArgs = {
  data: ProductUpdateManyInput;
  where?: InputMaybe<ProductManyWhereInput>;
};


export type MutationUpdateManyProductsConnectionArgs = {
  after?: InputMaybe<Scalars['ID']>;
  before?: InputMaybe<Scalars['ID']>;
  data: ProductUpdateManyInput;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<ProductManyWhereInput>;
};


export type MutationUpdateManyReviewsArgs = {
  data: ReviewUpdateManyInput;
  where?: InputMaybe<ReviewManyWhereInput>;
};


export type MutationUpdateManyReviewsConnectionArgs = {
  after?: InputMaybe<Scalars['ID']>;
  before?: InputMaybe<Scalars['ID']>;
  data: ReviewUpdateManyInput;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<ReviewManyWhereInput>;
};


export type MutationUpdateOrderArgs = {
  data: OrderUpdateInput;
  where: OrderWhereUniqueInput;
};


export type MutationUpdateProductArgs = {
  data: ProductUpdateInput;
  where: ProductWhereUniqueInput;
};


export type MutationUpdateReviewArgs = {
  data: ReviewUpdateInput;
  where: ReviewWhereUniqueInput;
};


export type MutationUpdateScheduledReleaseArgs = {
  data: ScheduledReleaseUpdateInput;
  where: ScheduledReleaseWhereUniqueInput;
};


export type MutationUpsertAccountArgs = {
  upsert: AccountUpsertInput;
  where: AccountWhereUniqueInput;
};


export type MutationUpsertAssetArgs = {
  upsert: AssetUpsertInput;
  where: AssetWhereUniqueInput;
};


export type MutationUpsertCommentArgs = {
  upsert: CommentUpsertInput;
  where: CommentWhereUniqueInput;
};


export type MutationUpsertOrderArgs = {
  upsert: OrderUpsertInput;
  where: OrderWhereUniqueInput;
};


export type MutationUpsertProductArgs = {
  upsert: ProductUpsertInput;
  where: ProductWhereUniqueInput;
};


export type MutationUpsertReviewArgs = {
  upsert: ReviewUpsertInput;
  where: ReviewWhereUniqueInput;
};

/** An object with an ID */
export type Node = {
  /** The id of the object. */
  id: Scalars['ID'];
  /** The Stage of an object */
  stage: Stage;
};

export type Order = Node & {
  __typename?: 'Order';
  address?: Maybe<AddressOrder>;
  /** The time the document was created */
  createdAt: Scalars['DateTime'];
  /** User that created this document */
  createdBy?: Maybe<User>;
  /** Get the document in other stages */
  documentInStages: Array<Order>;
  /** List of Order versions */
  history: Array<Version>;
  /** The unique identifier */
  id: Scalars['ID'];
  itemsQty?: Maybe<Scalars['Int']>;
  orderStatus?: Maybe<OrderStatus>;
  /** List of products from this order */
  products: Array<ProductsOrder>;
  /** The time the document was published. Null on documents in draft stage. */
  publishedAt?: Maybe<Scalars['DateTime']>;
  /** User that last published this document */
  publishedBy?: Maybe<User>;
  scheduledIn: Array<ScheduledOperation>;
  /** System stage field */
  stage: Stage;
  totalPrice?: Maybe<Scalars['Float']>;
  /** The time the document was updated */
  updatedAt: Scalars['DateTime'];
  /** User that last updated this document */
  updatedBy?: Maybe<User>;
  userId?: Maybe<Scalars['String']>;
};


export type OrderAddressArgs = {
  forceParentLocale?: InputMaybe<Scalars['Boolean']>;
  locales?: InputMaybe<Array<Locale>>;
};


export type OrderCreatedByArgs = {
  forceParentLocale?: InputMaybe<Scalars['Boolean']>;
  locales?: InputMaybe<Array<Locale>>;
};


export type OrderDocumentInStagesArgs = {
  includeCurrent?: Scalars['Boolean'];
  inheritLocale?: Scalars['Boolean'];
  stages?: Array<Stage>;
};


export type OrderHistoryArgs = {
  limit?: Scalars['Int'];
  skip?: Scalars['Int'];
  stageOverride?: InputMaybe<Stage>;
};


export type OrderProductsArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  forceParentLocale?: InputMaybe<Scalars['Boolean']>;
  last?: InputMaybe<Scalars['Int']>;
  locales?: InputMaybe<Array<Locale>>;
  orderBy?: InputMaybe<ProductsOrderOrderByInput>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<ProductsOrderWhereInput>;
};


export type OrderPublishedByArgs = {
  forceParentLocale?: InputMaybe<Scalars['Boolean']>;
  locales?: InputMaybe<Array<Locale>>;
};


export type OrderScheduledInArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  forceParentLocale?: InputMaybe<Scalars['Boolean']>;
  last?: InputMaybe<Scalars['Int']>;
  locales?: InputMaybe<Array<Locale>>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<ScheduledOperationWhereInput>;
};


export type OrderUpdatedByArgs = {
  forceParentLocale?: InputMaybe<Scalars['Boolean']>;
  locales?: InputMaybe<Array<Locale>>;
};

export type OrderConnectInput = {
  /** Allow to specify document position in list of connected documents, will default to appending at end of list */
  position?: InputMaybe<ConnectPositionInput>;
  /** Document to connect */
  where: OrderWhereUniqueInput;
};

/** A connection to a list of items. */
export type OrderConnection = {
  __typename?: 'OrderConnection';
  aggregate: Aggregate;
  /** A list of edges. */
  edges: Array<OrderEdge>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
};

export type OrderCreateInput = {
  address?: InputMaybe<AddressOrderCreateOneInlineInput>;
  createdAt?: InputMaybe<Scalars['DateTime']>;
  itemsQty?: InputMaybe<Scalars['Int']>;
  orderStatus?: InputMaybe<OrderStatus>;
  products?: InputMaybe<ProductsOrderCreateManyInlineInput>;
  totalPrice?: InputMaybe<Scalars['Float']>;
  updatedAt?: InputMaybe<Scalars['DateTime']>;
  userId?: InputMaybe<Scalars['String']>;
};

export type OrderCreateManyInlineInput = {
  /** Connect multiple existing Order documents */
  connect?: InputMaybe<Array<OrderWhereUniqueInput>>;
  /** Create and connect multiple existing Order documents */
  create?: InputMaybe<Array<OrderCreateInput>>;
};

export type OrderCreateOneInlineInput = {
  /** Connect one existing Order document */
  connect?: InputMaybe<OrderWhereUniqueInput>;
  /** Create and connect one Order document */
  create?: InputMaybe<OrderCreateInput>;
};

/** An edge in a connection. */
export type OrderEdge = {
  __typename?: 'OrderEdge';
  /** A cursor for use in pagination. */
  cursor: Scalars['String'];
  /** The item at the end of the edge. */
  node: Order;
};

/** Identifies documents */
export type OrderManyWhereInput = {
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<OrderWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<OrderWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<OrderWhereInput>>;
  /** Contains search across all appropriate fields. */
  _search?: InputMaybe<Scalars['String']>;
  address?: InputMaybe<AddressOrderWhereInput>;
  createdAt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  createdAt_gt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  createdAt_gte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  createdAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  /** All values less than the given value. */
  createdAt_lt?: InputMaybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  createdAt_lte?: InputMaybe<Scalars['DateTime']>;
  /** Any other value that exists and is not equal to the given value. */
  createdAt_not?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  createdAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  createdBy?: InputMaybe<UserWhereInput>;
  documentInStages_every?: InputMaybe<OrderWhereStageInput>;
  documentInStages_none?: InputMaybe<OrderWhereStageInput>;
  documentInStages_some?: InputMaybe<OrderWhereStageInput>;
  id?: InputMaybe<Scalars['ID']>;
  /** All values containing the given string. */
  id_contains?: InputMaybe<Scalars['ID']>;
  /** All values ending with the given string. */
  id_ends_with?: InputMaybe<Scalars['ID']>;
  /** All values that are contained in given list. */
  id_in?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  /** Any other value that exists and is not equal to the given value. */
  id_not?: InputMaybe<Scalars['ID']>;
  /** All values not containing the given string. */
  id_not_contains?: InputMaybe<Scalars['ID']>;
  /** All values not ending with the given string */
  id_not_ends_with?: InputMaybe<Scalars['ID']>;
  /** All values that are not contained in given list. */
  id_not_in?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  /** All values not starting with the given string. */
  id_not_starts_with?: InputMaybe<Scalars['ID']>;
  /** All values starting with the given string. */
  id_starts_with?: InputMaybe<Scalars['ID']>;
  itemsQty?: InputMaybe<Scalars['Int']>;
  /** All values greater than the given value. */
  itemsQty_gt?: InputMaybe<Scalars['Int']>;
  /** All values greater than or equal the given value. */
  itemsQty_gte?: InputMaybe<Scalars['Int']>;
  /** All values that are contained in given list. */
  itemsQty_in?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  /** All values less than the given value. */
  itemsQty_lt?: InputMaybe<Scalars['Int']>;
  /** All values less than or equal the given value. */
  itemsQty_lte?: InputMaybe<Scalars['Int']>;
  /** Any other value that exists and is not equal to the given value. */
  itemsQty_not?: InputMaybe<Scalars['Int']>;
  /** All values that are not contained in given list. */
  itemsQty_not_in?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  orderStatus?: InputMaybe<OrderStatus>;
  /** All values that are contained in given list. */
  orderStatus_in?: InputMaybe<Array<InputMaybe<OrderStatus>>>;
  /** Any other value that exists and is not equal to the given value. */
  orderStatus_not?: InputMaybe<OrderStatus>;
  /** All values that are not contained in given list. */
  orderStatus_not_in?: InputMaybe<Array<InputMaybe<OrderStatus>>>;
  products_every?: InputMaybe<ProductsOrderWhereInput>;
  products_none?: InputMaybe<ProductsOrderWhereInput>;
  products_some?: InputMaybe<ProductsOrderWhereInput>;
  publishedAt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  publishedAt_gt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  publishedAt_gte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  publishedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  /** All values less than the given value. */
  publishedAt_lt?: InputMaybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  publishedAt_lte?: InputMaybe<Scalars['DateTime']>;
  /** Any other value that exists and is not equal to the given value. */
  publishedAt_not?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  publishedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  publishedBy?: InputMaybe<UserWhereInput>;
  scheduledIn_every?: InputMaybe<ScheduledOperationWhereInput>;
  scheduledIn_none?: InputMaybe<ScheduledOperationWhereInput>;
  scheduledIn_some?: InputMaybe<ScheduledOperationWhereInput>;
  totalPrice?: InputMaybe<Scalars['Float']>;
  /** All values greater than the given value. */
  totalPrice_gt?: InputMaybe<Scalars['Float']>;
  /** All values greater than or equal the given value. */
  totalPrice_gte?: InputMaybe<Scalars['Float']>;
  /** All values that are contained in given list. */
  totalPrice_in?: InputMaybe<Array<InputMaybe<Scalars['Float']>>>;
  /** All values less than the given value. */
  totalPrice_lt?: InputMaybe<Scalars['Float']>;
  /** All values less than or equal the given value. */
  totalPrice_lte?: InputMaybe<Scalars['Float']>;
  /** Any other value that exists and is not equal to the given value. */
  totalPrice_not?: InputMaybe<Scalars['Float']>;
  /** All values that are not contained in given list. */
  totalPrice_not_in?: InputMaybe<Array<InputMaybe<Scalars['Float']>>>;
  updatedAt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  updatedAt_gt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  updatedAt_gte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  updatedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  /** All values less than the given value. */
  updatedAt_lt?: InputMaybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  updatedAt_lte?: InputMaybe<Scalars['DateTime']>;
  /** Any other value that exists and is not equal to the given value. */
  updatedAt_not?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  updatedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  updatedBy?: InputMaybe<UserWhereInput>;
  userId?: InputMaybe<Scalars['String']>;
  /** All values containing the given string. */
  userId_contains?: InputMaybe<Scalars['String']>;
  /** All values ending with the given string. */
  userId_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are contained in given list. */
  userId_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** Any other value that exists and is not equal to the given value. */
  userId_not?: InputMaybe<Scalars['String']>;
  /** All values not containing the given string. */
  userId_not_contains?: InputMaybe<Scalars['String']>;
  /** All values not ending with the given string */
  userId_not_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  userId_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values not starting with the given string. */
  userId_not_starts_with?: InputMaybe<Scalars['String']>;
  /** All values starting with the given string. */
  userId_starts_with?: InputMaybe<Scalars['String']>;
};

export enum OrderOrderByInput {
  CreatedAtAsc = 'createdAt_ASC',
  CreatedAtDesc = 'createdAt_DESC',
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC',
  ItemsQtyAsc = 'itemsQty_ASC',
  ItemsQtyDesc = 'itemsQty_DESC',
  OrderStatusAsc = 'orderStatus_ASC',
  OrderStatusDesc = 'orderStatus_DESC',
  PublishedAtAsc = 'publishedAt_ASC',
  PublishedAtDesc = 'publishedAt_DESC',
  TotalPriceAsc = 'totalPrice_ASC',
  TotalPriceDesc = 'totalPrice_DESC',
  UpdatedAtAsc = 'updatedAt_ASC',
  UpdatedAtDesc = 'updatedAt_DESC',
  UserIdAsc = 'userId_ASC',
  UserIdDesc = 'userId_DESC'
}

export enum OrderStatus {
  Abandon = 'Abandon',
  Delivered = 'Delivered',
  InProgress = 'InProgress',
  Shipped = 'Shipped'
}

export type OrderUpdateInput = {
  address?: InputMaybe<AddressOrderUpdateOneInlineInput>;
  itemsQty?: InputMaybe<Scalars['Int']>;
  orderStatus?: InputMaybe<OrderStatus>;
  products?: InputMaybe<ProductsOrderUpdateManyInlineInput>;
  totalPrice?: InputMaybe<Scalars['Float']>;
  userId?: InputMaybe<Scalars['String']>;
};

export type OrderUpdateManyInlineInput = {
  /** Connect multiple existing Order documents */
  connect?: InputMaybe<Array<OrderConnectInput>>;
  /** Create and connect multiple Order documents */
  create?: InputMaybe<Array<OrderCreateInput>>;
  /** Delete multiple Order documents */
  delete?: InputMaybe<Array<OrderWhereUniqueInput>>;
  /** Disconnect multiple Order documents */
  disconnect?: InputMaybe<Array<OrderWhereUniqueInput>>;
  /** Override currently-connected documents with multiple existing Order documents */
  set?: InputMaybe<Array<OrderWhereUniqueInput>>;
  /** Update multiple Order documents */
  update?: InputMaybe<Array<OrderUpdateWithNestedWhereUniqueInput>>;
  /** Upsert multiple Order documents */
  upsert?: InputMaybe<Array<OrderUpsertWithNestedWhereUniqueInput>>;
};

export type OrderUpdateManyInput = {
  itemsQty?: InputMaybe<Scalars['Int']>;
  orderStatus?: InputMaybe<OrderStatus>;
  totalPrice?: InputMaybe<Scalars['Float']>;
  userId?: InputMaybe<Scalars['String']>;
};

export type OrderUpdateManyWithNestedWhereInput = {
  /** Update many input */
  data: OrderUpdateManyInput;
  /** Document search */
  where: OrderWhereInput;
};

export type OrderUpdateOneInlineInput = {
  /** Connect existing Order document */
  connect?: InputMaybe<OrderWhereUniqueInput>;
  /** Create and connect one Order document */
  create?: InputMaybe<OrderCreateInput>;
  /** Delete currently connected Order document */
  delete?: InputMaybe<Scalars['Boolean']>;
  /** Disconnect currently connected Order document */
  disconnect?: InputMaybe<Scalars['Boolean']>;
  /** Update single Order document */
  update?: InputMaybe<OrderUpdateWithNestedWhereUniqueInput>;
  /** Upsert single Order document */
  upsert?: InputMaybe<OrderUpsertWithNestedWhereUniqueInput>;
};

export type OrderUpdateWithNestedWhereUniqueInput = {
  /** Document to update */
  data: OrderUpdateInput;
  /** Unique document search */
  where: OrderWhereUniqueInput;
};

export type OrderUpsertInput = {
  /** Create document if it didn't exist */
  create: OrderCreateInput;
  /** Update document if it exists */
  update: OrderUpdateInput;
};

export type OrderUpsertWithNestedWhereUniqueInput = {
  /** Upsert data */
  data: OrderUpsertInput;
  /** Unique document search */
  where: OrderWhereUniqueInput;
};

/** This contains a set of filters that can be used to compare values internally */
export type OrderWhereComparatorInput = {
  /** This field can be used to request to check if the entry is outdated by internal comparison */
  outdated_to?: InputMaybe<Scalars['Boolean']>;
};

/** Identifies documents */
export type OrderWhereInput = {
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<OrderWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<OrderWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<OrderWhereInput>>;
  /** Contains search across all appropriate fields. */
  _search?: InputMaybe<Scalars['String']>;
  address?: InputMaybe<AddressOrderWhereInput>;
  createdAt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  createdAt_gt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  createdAt_gte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  createdAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  /** All values less than the given value. */
  createdAt_lt?: InputMaybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  createdAt_lte?: InputMaybe<Scalars['DateTime']>;
  /** Any other value that exists and is not equal to the given value. */
  createdAt_not?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  createdAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  createdBy?: InputMaybe<UserWhereInput>;
  documentInStages_every?: InputMaybe<OrderWhereStageInput>;
  documentInStages_none?: InputMaybe<OrderWhereStageInput>;
  documentInStages_some?: InputMaybe<OrderWhereStageInput>;
  id?: InputMaybe<Scalars['ID']>;
  /** All values containing the given string. */
  id_contains?: InputMaybe<Scalars['ID']>;
  /** All values ending with the given string. */
  id_ends_with?: InputMaybe<Scalars['ID']>;
  /** All values that are contained in given list. */
  id_in?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  /** Any other value that exists and is not equal to the given value. */
  id_not?: InputMaybe<Scalars['ID']>;
  /** All values not containing the given string. */
  id_not_contains?: InputMaybe<Scalars['ID']>;
  /** All values not ending with the given string */
  id_not_ends_with?: InputMaybe<Scalars['ID']>;
  /** All values that are not contained in given list. */
  id_not_in?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  /** All values not starting with the given string. */
  id_not_starts_with?: InputMaybe<Scalars['ID']>;
  /** All values starting with the given string. */
  id_starts_with?: InputMaybe<Scalars['ID']>;
  itemsQty?: InputMaybe<Scalars['Int']>;
  /** All values greater than the given value. */
  itemsQty_gt?: InputMaybe<Scalars['Int']>;
  /** All values greater than or equal the given value. */
  itemsQty_gte?: InputMaybe<Scalars['Int']>;
  /** All values that are contained in given list. */
  itemsQty_in?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  /** All values less than the given value. */
  itemsQty_lt?: InputMaybe<Scalars['Int']>;
  /** All values less than or equal the given value. */
  itemsQty_lte?: InputMaybe<Scalars['Int']>;
  /** Any other value that exists and is not equal to the given value. */
  itemsQty_not?: InputMaybe<Scalars['Int']>;
  /** All values that are not contained in given list. */
  itemsQty_not_in?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  orderStatus?: InputMaybe<OrderStatus>;
  /** All values that are contained in given list. */
  orderStatus_in?: InputMaybe<Array<InputMaybe<OrderStatus>>>;
  /** Any other value that exists and is not equal to the given value. */
  orderStatus_not?: InputMaybe<OrderStatus>;
  /** All values that are not contained in given list. */
  orderStatus_not_in?: InputMaybe<Array<InputMaybe<OrderStatus>>>;
  products_every?: InputMaybe<ProductsOrderWhereInput>;
  products_none?: InputMaybe<ProductsOrderWhereInput>;
  products_some?: InputMaybe<ProductsOrderWhereInput>;
  publishedAt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  publishedAt_gt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  publishedAt_gte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  publishedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  /** All values less than the given value. */
  publishedAt_lt?: InputMaybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  publishedAt_lte?: InputMaybe<Scalars['DateTime']>;
  /** Any other value that exists and is not equal to the given value. */
  publishedAt_not?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  publishedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  publishedBy?: InputMaybe<UserWhereInput>;
  scheduledIn_every?: InputMaybe<ScheduledOperationWhereInput>;
  scheduledIn_none?: InputMaybe<ScheduledOperationWhereInput>;
  scheduledIn_some?: InputMaybe<ScheduledOperationWhereInput>;
  totalPrice?: InputMaybe<Scalars['Float']>;
  /** All values greater than the given value. */
  totalPrice_gt?: InputMaybe<Scalars['Float']>;
  /** All values greater than or equal the given value. */
  totalPrice_gte?: InputMaybe<Scalars['Float']>;
  /** All values that are contained in given list. */
  totalPrice_in?: InputMaybe<Array<InputMaybe<Scalars['Float']>>>;
  /** All values less than the given value. */
  totalPrice_lt?: InputMaybe<Scalars['Float']>;
  /** All values less than or equal the given value. */
  totalPrice_lte?: InputMaybe<Scalars['Float']>;
  /** Any other value that exists and is not equal to the given value. */
  totalPrice_not?: InputMaybe<Scalars['Float']>;
  /** All values that are not contained in given list. */
  totalPrice_not_in?: InputMaybe<Array<InputMaybe<Scalars['Float']>>>;
  updatedAt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  updatedAt_gt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  updatedAt_gte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  updatedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  /** All values less than the given value. */
  updatedAt_lt?: InputMaybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  updatedAt_lte?: InputMaybe<Scalars['DateTime']>;
  /** Any other value that exists and is not equal to the given value. */
  updatedAt_not?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  updatedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  updatedBy?: InputMaybe<UserWhereInput>;
  userId?: InputMaybe<Scalars['String']>;
  /** All values containing the given string. */
  userId_contains?: InputMaybe<Scalars['String']>;
  /** All values ending with the given string. */
  userId_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are contained in given list. */
  userId_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** Any other value that exists and is not equal to the given value. */
  userId_not?: InputMaybe<Scalars['String']>;
  /** All values not containing the given string. */
  userId_not_contains?: InputMaybe<Scalars['String']>;
  /** All values not ending with the given string */
  userId_not_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  userId_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values not starting with the given string. */
  userId_not_starts_with?: InputMaybe<Scalars['String']>;
  /** All values starting with the given string. */
  userId_starts_with?: InputMaybe<Scalars['String']>;
};

/** The document in stages filter allows specifying a stage entry to cross compare the same document between different stages */
export type OrderWhereStageInput = {
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<OrderWhereStageInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<OrderWhereStageInput>>;
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<OrderWhereStageInput>>;
  /** This field contains fields which can be set as true or false to specify an internal comparison */
  compareWithParent?: InputMaybe<OrderWhereComparatorInput>;
  /** Specify the stage to compare with */
  stage?: InputMaybe<Stage>;
};

/** References Order record uniquely */
export type OrderWhereUniqueInput = {
  id?: InputMaybe<Scalars['ID']>;
};

/** Information about pagination in a connection. */
export type PageInfo = {
  __typename?: 'PageInfo';
  /** When paginating forwards, the cursor to continue. */
  endCursor?: Maybe<Scalars['String']>;
  /** When paginating forwards, are there more items? */
  hasNextPage: Scalars['Boolean'];
  /** When paginating backwards, are there more items? */
  hasPreviousPage: Scalars['Boolean'];
  /** Number of items in the current page. */
  pageSize?: Maybe<Scalars['Int']>;
  /** When paginating backwards, the cursor to continue. */
  startCursor?: Maybe<Scalars['String']>;
};

export type Price = {
  __typename?: 'Price';
  date?: Maybe<Scalars['Date']>;
  /** The unique identifier */
  id: Scalars['ID'];
  price?: Maybe<Scalars['Float']>;
  /** System stage field */
  stage: Stage;
};

export type PriceConnectInput = {
  /** Allow to specify document position in list of connected documents, will default to appending at end of list */
  position?: InputMaybe<ConnectPositionInput>;
  /** Document to connect */
  where: PriceWhereUniqueInput;
};

/** A connection to a list of items. */
export type PriceConnection = {
  __typename?: 'PriceConnection';
  aggregate: Aggregate;
  /** A list of edges. */
  edges: Array<PriceEdge>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
};

export type PriceCreateInput = {
  date?: InputMaybe<Scalars['Date']>;
  price?: InputMaybe<Scalars['Float']>;
};

export type PriceCreateManyInlineInput = {
  /** Create and connect multiple existing Price documents */
  create?: InputMaybe<Array<PriceCreateInput>>;
};

export type PriceCreateOneInlineInput = {
  /** Create and connect one Price document */
  create?: InputMaybe<PriceCreateInput>;
};

export type PriceCreateWithPositionInput = {
  /** Document to create */
  data: PriceCreateInput;
  /** Position in the list of existing component instances, will default to appending at the end of list */
  position?: InputMaybe<ConnectPositionInput>;
};

/** An edge in a connection. */
export type PriceEdge = {
  __typename?: 'PriceEdge';
  /** A cursor for use in pagination. */
  cursor: Scalars['String'];
  /** The item at the end of the edge. */
  node: Price;
};

/** Identifies documents */
export type PriceManyWhereInput = {
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<PriceWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<PriceWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<PriceWhereInput>>;
  /** Contains search across all appropriate fields. */
  _search?: InputMaybe<Scalars['String']>;
  date?: InputMaybe<Scalars['Date']>;
  /** All values greater than the given value. */
  date_gt?: InputMaybe<Scalars['Date']>;
  /** All values greater than or equal the given value. */
  date_gte?: InputMaybe<Scalars['Date']>;
  /** All values that are contained in given list. */
  date_in?: InputMaybe<Array<InputMaybe<Scalars['Date']>>>;
  /** All values less than the given value. */
  date_lt?: InputMaybe<Scalars['Date']>;
  /** All values less than or equal the given value. */
  date_lte?: InputMaybe<Scalars['Date']>;
  /** Any other value that exists and is not equal to the given value. */
  date_not?: InputMaybe<Scalars['Date']>;
  /** All values that are not contained in given list. */
  date_not_in?: InputMaybe<Array<InputMaybe<Scalars['Date']>>>;
  id?: InputMaybe<Scalars['ID']>;
  /** All values containing the given string. */
  id_contains?: InputMaybe<Scalars['ID']>;
  /** All values ending with the given string. */
  id_ends_with?: InputMaybe<Scalars['ID']>;
  /** All values that are contained in given list. */
  id_in?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  /** Any other value that exists and is not equal to the given value. */
  id_not?: InputMaybe<Scalars['ID']>;
  /** All values not containing the given string. */
  id_not_contains?: InputMaybe<Scalars['ID']>;
  /** All values not ending with the given string */
  id_not_ends_with?: InputMaybe<Scalars['ID']>;
  /** All values that are not contained in given list. */
  id_not_in?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  /** All values not starting with the given string. */
  id_not_starts_with?: InputMaybe<Scalars['ID']>;
  /** All values starting with the given string. */
  id_starts_with?: InputMaybe<Scalars['ID']>;
  price?: InputMaybe<Scalars['Float']>;
  /** All values greater than the given value. */
  price_gt?: InputMaybe<Scalars['Float']>;
  /** All values greater than or equal the given value. */
  price_gte?: InputMaybe<Scalars['Float']>;
  /** All values that are contained in given list. */
  price_in?: InputMaybe<Array<InputMaybe<Scalars['Float']>>>;
  /** All values less than the given value. */
  price_lt?: InputMaybe<Scalars['Float']>;
  /** All values less than or equal the given value. */
  price_lte?: InputMaybe<Scalars['Float']>;
  /** Any other value that exists and is not equal to the given value. */
  price_not?: InputMaybe<Scalars['Float']>;
  /** All values that are not contained in given list. */
  price_not_in?: InputMaybe<Array<InputMaybe<Scalars['Float']>>>;
};

export enum PriceOrderByInput {
  DateAsc = 'date_ASC',
  DateDesc = 'date_DESC',
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC',
  PriceAsc = 'price_ASC',
  PriceDesc = 'price_DESC'
}

export type PriceParent = Product;

export type PriceParentConnectInput = {
  Product?: InputMaybe<ProductConnectInput>;
};

export type PriceParentCreateInput = {
  Product?: InputMaybe<ProductCreateInput>;
};

export type PriceParentCreateManyInlineInput = {
  /** Connect multiple existing PriceParent documents */
  connect?: InputMaybe<Array<PriceParentWhereUniqueInput>>;
  /** Create and connect multiple existing PriceParent documents */
  create?: InputMaybe<Array<PriceParentCreateInput>>;
};

export type PriceParentCreateOneInlineInput = {
  /** Connect one existing PriceParent document */
  connect?: InputMaybe<PriceParentWhereUniqueInput>;
  /** Create and connect one PriceParent document */
  create?: InputMaybe<PriceParentCreateInput>;
};

export type PriceParentUpdateInput = {
  Product?: InputMaybe<ProductUpdateInput>;
};

export type PriceParentUpdateManyInlineInput = {
  /** Connect multiple existing PriceParent documents */
  connect?: InputMaybe<Array<PriceParentConnectInput>>;
  /** Create and connect multiple PriceParent documents */
  create?: InputMaybe<Array<PriceParentCreateInput>>;
  /** Delete multiple PriceParent documents */
  delete?: InputMaybe<Array<PriceParentWhereUniqueInput>>;
  /** Disconnect multiple PriceParent documents */
  disconnect?: InputMaybe<Array<PriceParentWhereUniqueInput>>;
  /** Override currently-connected documents with multiple existing PriceParent documents */
  set?: InputMaybe<Array<PriceParentWhereUniqueInput>>;
  /** Update multiple PriceParent documents */
  update?: InputMaybe<Array<PriceParentUpdateWithNestedWhereUniqueInput>>;
  /** Upsert multiple PriceParent documents */
  upsert?: InputMaybe<Array<PriceParentUpsertWithNestedWhereUniqueInput>>;
};

export type PriceParentUpdateManyWithNestedWhereInput = {
  Product?: InputMaybe<ProductUpdateManyWithNestedWhereInput>;
};

export type PriceParentUpdateOneInlineInput = {
  /** Connect existing PriceParent document */
  connect?: InputMaybe<PriceParentWhereUniqueInput>;
  /** Create and connect one PriceParent document */
  create?: InputMaybe<PriceParentCreateInput>;
  /** Delete currently connected PriceParent document */
  delete?: InputMaybe<Scalars['Boolean']>;
  /** Disconnect currently connected PriceParent document */
  disconnect?: InputMaybe<Scalars['Boolean']>;
  /** Update single PriceParent document */
  update?: InputMaybe<PriceParentUpdateWithNestedWhereUniqueInput>;
  /** Upsert single PriceParent document */
  upsert?: InputMaybe<PriceParentUpsertWithNestedWhereUniqueInput>;
};

export type PriceParentUpdateWithNestedWhereUniqueInput = {
  Product?: InputMaybe<ProductUpdateWithNestedWhereUniqueInput>;
};

export type PriceParentUpsertWithNestedWhereUniqueInput = {
  Product?: InputMaybe<ProductUpsertWithNestedWhereUniqueInput>;
};

export type PriceParentWhereInput = {
  Product?: InputMaybe<ProductWhereInput>;
};

export type PriceParentWhereUniqueInput = {
  Product?: InputMaybe<ProductWhereUniqueInput>;
};

export type PriceUpdateInput = {
  date?: InputMaybe<Scalars['Date']>;
  price?: InputMaybe<Scalars['Float']>;
};

export type PriceUpdateManyInlineInput = {
  /** Create and connect multiple Price component instances */
  create?: InputMaybe<Array<PriceCreateWithPositionInput>>;
  /** Delete multiple Price documents */
  delete?: InputMaybe<Array<PriceWhereUniqueInput>>;
  /** Update multiple Price component instances */
  update?: InputMaybe<Array<PriceUpdateWithNestedWhereUniqueAndPositionInput>>;
  /** Upsert multiple Price component instances */
  upsert?: InputMaybe<Array<PriceUpsertWithNestedWhereUniqueAndPositionInput>>;
};

export type PriceUpdateManyInput = {
  date?: InputMaybe<Scalars['Date']>;
  price?: InputMaybe<Scalars['Float']>;
};

export type PriceUpdateManyWithNestedWhereInput = {
  /** Update many input */
  data: PriceUpdateManyInput;
  /** Document search */
  where: PriceWhereInput;
};

export type PriceUpdateOneInlineInput = {
  /** Create and connect one Price document */
  create?: InputMaybe<PriceCreateInput>;
  /** Delete currently connected Price document */
  delete?: InputMaybe<Scalars['Boolean']>;
  /** Update single Price document */
  update?: InputMaybe<PriceUpdateWithNestedWhereUniqueInput>;
  /** Upsert single Price document */
  upsert?: InputMaybe<PriceUpsertWithNestedWhereUniqueInput>;
};

export type PriceUpdateWithNestedWhereUniqueAndPositionInput = {
  /** Document to update */
  data?: InputMaybe<PriceUpdateInput>;
  /** Position in the list of existing component instances, will default to appending at the end of list */
  position?: InputMaybe<ConnectPositionInput>;
  /** Unique component instance search */
  where: PriceWhereUniqueInput;
};

export type PriceUpdateWithNestedWhereUniqueInput = {
  /** Document to update */
  data: PriceUpdateInput;
  /** Unique document search */
  where: PriceWhereUniqueInput;
};

export type PriceUpsertInput = {
  /** Create document if it didn't exist */
  create: PriceCreateInput;
  /** Update document if it exists */
  update: PriceUpdateInput;
};

export type PriceUpsertWithNestedWhereUniqueAndPositionInput = {
  /** Document to upsert */
  data?: InputMaybe<PriceUpsertInput>;
  /** Position in the list of existing component instances, will default to appending at the end of list */
  position?: InputMaybe<ConnectPositionInput>;
  /** Unique component instance search */
  where: PriceWhereUniqueInput;
};

export type PriceUpsertWithNestedWhereUniqueInput = {
  /** Upsert data */
  data: PriceUpsertInput;
  /** Unique document search */
  where: PriceWhereUniqueInput;
};

/** Identifies documents */
export type PriceWhereInput = {
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<PriceWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<PriceWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<PriceWhereInput>>;
  /** Contains search across all appropriate fields. */
  _search?: InputMaybe<Scalars['String']>;
  date?: InputMaybe<Scalars['Date']>;
  /** All values greater than the given value. */
  date_gt?: InputMaybe<Scalars['Date']>;
  /** All values greater than or equal the given value. */
  date_gte?: InputMaybe<Scalars['Date']>;
  /** All values that are contained in given list. */
  date_in?: InputMaybe<Array<InputMaybe<Scalars['Date']>>>;
  /** All values less than the given value. */
  date_lt?: InputMaybe<Scalars['Date']>;
  /** All values less than or equal the given value. */
  date_lte?: InputMaybe<Scalars['Date']>;
  /** Any other value that exists and is not equal to the given value. */
  date_not?: InputMaybe<Scalars['Date']>;
  /** All values that are not contained in given list. */
  date_not_in?: InputMaybe<Array<InputMaybe<Scalars['Date']>>>;
  id?: InputMaybe<Scalars['ID']>;
  /** All values containing the given string. */
  id_contains?: InputMaybe<Scalars['ID']>;
  /** All values ending with the given string. */
  id_ends_with?: InputMaybe<Scalars['ID']>;
  /** All values that are contained in given list. */
  id_in?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  /** Any other value that exists and is not equal to the given value. */
  id_not?: InputMaybe<Scalars['ID']>;
  /** All values not containing the given string. */
  id_not_contains?: InputMaybe<Scalars['ID']>;
  /** All values not ending with the given string */
  id_not_ends_with?: InputMaybe<Scalars['ID']>;
  /** All values that are not contained in given list. */
  id_not_in?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  /** All values not starting with the given string. */
  id_not_starts_with?: InputMaybe<Scalars['ID']>;
  /** All values starting with the given string. */
  id_starts_with?: InputMaybe<Scalars['ID']>;
  price?: InputMaybe<Scalars['Float']>;
  /** All values greater than the given value. */
  price_gt?: InputMaybe<Scalars['Float']>;
  /** All values greater than or equal the given value. */
  price_gte?: InputMaybe<Scalars['Float']>;
  /** All values that are contained in given list. */
  price_in?: InputMaybe<Array<InputMaybe<Scalars['Float']>>>;
  /** All values less than the given value. */
  price_lt?: InputMaybe<Scalars['Float']>;
  /** All values less than or equal the given value. */
  price_lte?: InputMaybe<Scalars['Float']>;
  /** Any other value that exists and is not equal to the given value. */
  price_not?: InputMaybe<Scalars['Float']>;
  /** All values that are not contained in given list. */
  price_not_in?: InputMaybe<Array<InputMaybe<Scalars['Float']>>>;
};

/** References Price record uniquely */
export type PriceWhereUniqueInput = {
  id?: InputMaybe<Scalars['ID']>;
};

export type Product = Node & {
  __typename?: 'Product';
  /** How many times this product was bought */
  bought: Scalars['Int'];
  category: Category;
  /** The time the document was created */
  createdAt: Scalars['DateTime'];
  /** User that created this document */
  createdBy?: Maybe<User>;
  description: Scalars['String'];
  /** Get the document in other stages */
  documentInStages: Array<Product>;
  /** List of Product versions */
  history: Array<Version>;
  /** The unique identifier */
  id: Scalars['ID'];
  images: Array<Image>;
  prices: Array<Price>;
  /** The time the document was published. Null on documents in draft stage. */
  publishedAt?: Maybe<Scalars['DateTime']>;
  /** User that last published this document */
  publishedBy?: Maybe<User>;
  rating: Array<Scalars['Float']>;
  reviews: Array<Review>;
  sale: Scalars['Boolean'];
  scheduledIn: Array<ScheduledOperation>;
  sizes: Array<Sizes>;
  slug: Scalars['String'];
  sport: Sport;
  /** System stage field */
  stage: Stage;
  /** Tags for product (i.e white, london, shirts, football ) */
  tags: Array<Scalars['String']>;
  title: Scalars['String'];
  /** The time the document was updated */
  updatedAt: Scalars['DateTime'];
  /** User that last updated this document */
  updatedBy?: Maybe<User>;
  /** How many people looks this product right now */
  views: Scalars['Int'];
};


export type ProductCreatedByArgs = {
  forceParentLocale?: InputMaybe<Scalars['Boolean']>;
  locales?: InputMaybe<Array<Locale>>;
};


export type ProductDocumentInStagesArgs = {
  includeCurrent?: Scalars['Boolean'];
  inheritLocale?: Scalars['Boolean'];
  stages?: Array<Stage>;
};


export type ProductHistoryArgs = {
  limit?: Scalars['Int'];
  skip?: Scalars['Int'];
  stageOverride?: InputMaybe<Stage>;
};


export type ProductImagesArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  forceParentLocale?: InputMaybe<Scalars['Boolean']>;
  last?: InputMaybe<Scalars['Int']>;
  locales?: InputMaybe<Array<Locale>>;
  orderBy?: InputMaybe<ImageOrderByInput>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<ImageWhereInput>;
};


export type ProductPricesArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  forceParentLocale?: InputMaybe<Scalars['Boolean']>;
  last?: InputMaybe<Scalars['Int']>;
  locales?: InputMaybe<Array<Locale>>;
  orderBy?: InputMaybe<PriceOrderByInput>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<PriceWhereInput>;
};


export type ProductPublishedByArgs = {
  forceParentLocale?: InputMaybe<Scalars['Boolean']>;
  locales?: InputMaybe<Array<Locale>>;
};


export type ProductReviewsArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  forceParentLocale?: InputMaybe<Scalars['Boolean']>;
  last?: InputMaybe<Scalars['Int']>;
  locales?: InputMaybe<Array<Locale>>;
  orderBy?: InputMaybe<ReviewOrderByInput>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<ReviewWhereInput>;
};


export type ProductScheduledInArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  forceParentLocale?: InputMaybe<Scalars['Boolean']>;
  last?: InputMaybe<Scalars['Int']>;
  locales?: InputMaybe<Array<Locale>>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<ScheduledOperationWhereInput>;
};


export type ProductUpdatedByArgs = {
  forceParentLocale?: InputMaybe<Scalars['Boolean']>;
  locales?: InputMaybe<Array<Locale>>;
};

export type ProductConnectInput = {
  /** Allow to specify document position in list of connected documents, will default to appending at end of list */
  position?: InputMaybe<ConnectPositionInput>;
  /** Document to connect */
  where: ProductWhereUniqueInput;
};

/** A connection to a list of items. */
export type ProductConnection = {
  __typename?: 'ProductConnection';
  aggregate: Aggregate;
  /** A list of edges. */
  edges: Array<ProductEdge>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
};

export type ProductCreateInput = {
  bought: Scalars['Int'];
  category: Category;
  createdAt?: InputMaybe<Scalars['DateTime']>;
  description: Scalars['String'];
  images?: InputMaybe<ImageCreateManyInlineInput>;
  prices?: InputMaybe<PriceCreateManyInlineInput>;
  rating: Array<Scalars['Float']>;
  reviews?: InputMaybe<ReviewCreateManyInlineInput>;
  sale: Scalars['Boolean'];
  sizes?: InputMaybe<Array<Sizes>>;
  slug: Scalars['String'];
  sport: Sport;
  tags?: InputMaybe<Array<Scalars['String']>>;
  title: Scalars['String'];
  updatedAt?: InputMaybe<Scalars['DateTime']>;
  views: Scalars['Int'];
};

export type ProductCreateManyInlineInput = {
  /** Connect multiple existing Product documents */
  connect?: InputMaybe<Array<ProductWhereUniqueInput>>;
  /** Create and connect multiple existing Product documents */
  create?: InputMaybe<Array<ProductCreateInput>>;
};

export type ProductCreateOneInlineInput = {
  /** Connect one existing Product document */
  connect?: InputMaybe<ProductWhereUniqueInput>;
  /** Create and connect one Product document */
  create?: InputMaybe<ProductCreateInput>;
};

/** An edge in a connection. */
export type ProductEdge = {
  __typename?: 'ProductEdge';
  /** A cursor for use in pagination. */
  cursor: Scalars['String'];
  /** The item at the end of the edge. */
  node: Product;
};

/** Identifies documents */
export type ProductManyWhereInput = {
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<ProductWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<ProductWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<ProductWhereInput>>;
  /** Contains search across all appropriate fields. */
  _search?: InputMaybe<Scalars['String']>;
  bought?: InputMaybe<Scalars['Int']>;
  /** All values greater than the given value. */
  bought_gt?: InputMaybe<Scalars['Int']>;
  /** All values greater than or equal the given value. */
  bought_gte?: InputMaybe<Scalars['Int']>;
  /** All values that are contained in given list. */
  bought_in?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  /** All values less than the given value. */
  bought_lt?: InputMaybe<Scalars['Int']>;
  /** All values less than or equal the given value. */
  bought_lte?: InputMaybe<Scalars['Int']>;
  /** Any other value that exists and is not equal to the given value. */
  bought_not?: InputMaybe<Scalars['Int']>;
  /** All values that are not contained in given list. */
  bought_not_in?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  category?: InputMaybe<Category>;
  /** All values that are contained in given list. */
  category_in?: InputMaybe<Array<InputMaybe<Category>>>;
  /** Any other value that exists and is not equal to the given value. */
  category_not?: InputMaybe<Category>;
  /** All values that are not contained in given list. */
  category_not_in?: InputMaybe<Array<InputMaybe<Category>>>;
  createdAt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  createdAt_gt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  createdAt_gte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  createdAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  /** All values less than the given value. */
  createdAt_lt?: InputMaybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  createdAt_lte?: InputMaybe<Scalars['DateTime']>;
  /** Any other value that exists and is not equal to the given value. */
  createdAt_not?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  createdAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  createdBy?: InputMaybe<UserWhereInput>;
  description?: InputMaybe<Scalars['String']>;
  /** All values containing the given string. */
  description_contains?: InputMaybe<Scalars['String']>;
  /** All values ending with the given string. */
  description_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are contained in given list. */
  description_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** Any other value that exists and is not equal to the given value. */
  description_not?: InputMaybe<Scalars['String']>;
  /** All values not containing the given string. */
  description_not_contains?: InputMaybe<Scalars['String']>;
  /** All values not ending with the given string */
  description_not_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  description_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values not starting with the given string. */
  description_not_starts_with?: InputMaybe<Scalars['String']>;
  /** All values starting with the given string. */
  description_starts_with?: InputMaybe<Scalars['String']>;
  documentInStages_every?: InputMaybe<ProductWhereStageInput>;
  documentInStages_none?: InputMaybe<ProductWhereStageInput>;
  documentInStages_some?: InputMaybe<ProductWhereStageInput>;
  id?: InputMaybe<Scalars['ID']>;
  /** All values containing the given string. */
  id_contains?: InputMaybe<Scalars['ID']>;
  /** All values ending with the given string. */
  id_ends_with?: InputMaybe<Scalars['ID']>;
  /** All values that are contained in given list. */
  id_in?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  /** Any other value that exists and is not equal to the given value. */
  id_not?: InputMaybe<Scalars['ID']>;
  /** All values not containing the given string. */
  id_not_contains?: InputMaybe<Scalars['ID']>;
  /** All values not ending with the given string */
  id_not_ends_with?: InputMaybe<Scalars['ID']>;
  /** All values that are not contained in given list. */
  id_not_in?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  /** All values not starting with the given string. */
  id_not_starts_with?: InputMaybe<Scalars['ID']>;
  /** All values starting with the given string. */
  id_starts_with?: InputMaybe<Scalars['ID']>;
  images_every?: InputMaybe<ImageWhereInput>;
  images_none?: InputMaybe<ImageWhereInput>;
  images_some?: InputMaybe<ImageWhereInput>;
  prices_every?: InputMaybe<PriceWhereInput>;
  prices_none?: InputMaybe<PriceWhereInput>;
  prices_some?: InputMaybe<PriceWhereInput>;
  publishedAt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  publishedAt_gt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  publishedAt_gte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  publishedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  /** All values less than the given value. */
  publishedAt_lt?: InputMaybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  publishedAt_lte?: InputMaybe<Scalars['DateTime']>;
  /** Any other value that exists and is not equal to the given value. */
  publishedAt_not?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  publishedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  publishedBy?: InputMaybe<UserWhereInput>;
  /** Matches if the field array contains *all* items provided to the filter and order does match */
  rating?: InputMaybe<Array<Scalars['Float']>>;
  /** Matches if the field array contains *all* items provided to the filter */
  rating_contains_all?: InputMaybe<Array<Scalars['Float']>>;
  /** Matches if the field array does not contain any of the items provided to the filter */
  rating_contains_none?: InputMaybe<Array<Scalars['Float']>>;
  /** Matches if the field array contains at least one item provided to the filter */
  rating_contains_some?: InputMaybe<Array<Scalars['Float']>>;
  /** Matches if the field array does not contains *all* items provided to the filter or order does not match */
  rating_not?: InputMaybe<Array<Scalars['Float']>>;
  reviews_every?: InputMaybe<ReviewWhereInput>;
  reviews_none?: InputMaybe<ReviewWhereInput>;
  reviews_some?: InputMaybe<ReviewWhereInput>;
  sale?: InputMaybe<Scalars['Boolean']>;
  /** Any other value that exists and is not equal to the given value. */
  sale_not?: InputMaybe<Scalars['Boolean']>;
  scheduledIn_every?: InputMaybe<ScheduledOperationWhereInput>;
  scheduledIn_none?: InputMaybe<ScheduledOperationWhereInput>;
  scheduledIn_some?: InputMaybe<ScheduledOperationWhereInput>;
  /** Matches if the field array contains *all* items provided to the filter and order does match */
  sizes?: InputMaybe<Array<Sizes>>;
  /** Matches if the field array contains *all* items provided to the filter */
  sizes_contains_all?: InputMaybe<Array<Sizes>>;
  /** Matches if the field array does not contain any of the items provided to the filter */
  sizes_contains_none?: InputMaybe<Array<Sizes>>;
  /** Matches if the field array contains at least one item provided to the filter */
  sizes_contains_some?: InputMaybe<Array<Sizes>>;
  /** Matches if the field array does not contains *all* items provided to the filter or order does not match */
  sizes_not?: InputMaybe<Array<Sizes>>;
  slug?: InputMaybe<Scalars['String']>;
  /** All values containing the given string. */
  slug_contains?: InputMaybe<Scalars['String']>;
  /** All values ending with the given string. */
  slug_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are contained in given list. */
  slug_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** Any other value that exists and is not equal to the given value. */
  slug_not?: InputMaybe<Scalars['String']>;
  /** All values not containing the given string. */
  slug_not_contains?: InputMaybe<Scalars['String']>;
  /** All values not ending with the given string */
  slug_not_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  slug_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values not starting with the given string. */
  slug_not_starts_with?: InputMaybe<Scalars['String']>;
  /** All values starting with the given string. */
  slug_starts_with?: InputMaybe<Scalars['String']>;
  sport?: InputMaybe<Sport>;
  /** All values that are contained in given list. */
  sport_in?: InputMaybe<Array<InputMaybe<Sport>>>;
  /** Any other value that exists and is not equal to the given value. */
  sport_not?: InputMaybe<Sport>;
  /** All values that are not contained in given list. */
  sport_not_in?: InputMaybe<Array<InputMaybe<Sport>>>;
  /** Matches if the field array contains *all* items provided to the filter and order does match */
  tags?: InputMaybe<Array<Scalars['String']>>;
  /** Matches if the field array contains *all* items provided to the filter */
  tags_contains_all?: InputMaybe<Array<Scalars['String']>>;
  /** Matches if the field array does not contain any of the items provided to the filter */
  tags_contains_none?: InputMaybe<Array<Scalars['String']>>;
  /** Matches if the field array contains at least one item provided to the filter */
  tags_contains_some?: InputMaybe<Array<Scalars['String']>>;
  /** Matches if the field array does not contains *all* items provided to the filter or order does not match */
  tags_not?: InputMaybe<Array<Scalars['String']>>;
  title?: InputMaybe<Scalars['String']>;
  /** All values containing the given string. */
  title_contains?: InputMaybe<Scalars['String']>;
  /** All values ending with the given string. */
  title_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are contained in given list. */
  title_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** Any other value that exists and is not equal to the given value. */
  title_not?: InputMaybe<Scalars['String']>;
  /** All values not containing the given string. */
  title_not_contains?: InputMaybe<Scalars['String']>;
  /** All values not ending with the given string */
  title_not_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  title_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values not starting with the given string. */
  title_not_starts_with?: InputMaybe<Scalars['String']>;
  /** All values starting with the given string. */
  title_starts_with?: InputMaybe<Scalars['String']>;
  updatedAt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  updatedAt_gt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  updatedAt_gte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  updatedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  /** All values less than the given value. */
  updatedAt_lt?: InputMaybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  updatedAt_lte?: InputMaybe<Scalars['DateTime']>;
  /** Any other value that exists and is not equal to the given value. */
  updatedAt_not?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  updatedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  updatedBy?: InputMaybe<UserWhereInput>;
  views?: InputMaybe<Scalars['Int']>;
  /** All values greater than the given value. */
  views_gt?: InputMaybe<Scalars['Int']>;
  /** All values greater than or equal the given value. */
  views_gte?: InputMaybe<Scalars['Int']>;
  /** All values that are contained in given list. */
  views_in?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  /** All values less than the given value. */
  views_lt?: InputMaybe<Scalars['Int']>;
  /** All values less than or equal the given value. */
  views_lte?: InputMaybe<Scalars['Int']>;
  /** Any other value that exists and is not equal to the given value. */
  views_not?: InputMaybe<Scalars['Int']>;
  /** All values that are not contained in given list. */
  views_not_in?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
};

export enum ProductOrderByInput {
  BoughtAsc = 'bought_ASC',
  BoughtDesc = 'bought_DESC',
  CategoryAsc = 'category_ASC',
  CategoryDesc = 'category_DESC',
  CreatedAtAsc = 'createdAt_ASC',
  CreatedAtDesc = 'createdAt_DESC',
  DescriptionAsc = 'description_ASC',
  DescriptionDesc = 'description_DESC',
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC',
  PublishedAtAsc = 'publishedAt_ASC',
  PublishedAtDesc = 'publishedAt_DESC',
  RatingAsc = 'rating_ASC',
  RatingDesc = 'rating_DESC',
  SaleAsc = 'sale_ASC',
  SaleDesc = 'sale_DESC',
  SizesAsc = 'sizes_ASC',
  SizesDesc = 'sizes_DESC',
  SlugAsc = 'slug_ASC',
  SlugDesc = 'slug_DESC',
  SportAsc = 'sport_ASC',
  SportDesc = 'sport_DESC',
  TagsAsc = 'tags_ASC',
  TagsDesc = 'tags_DESC',
  TitleAsc = 'title_ASC',
  TitleDesc = 'title_DESC',
  UpdatedAtAsc = 'updatedAt_ASC',
  UpdatedAtDesc = 'updatedAt_DESC',
  ViewsAsc = 'views_ASC',
  ViewsDesc = 'views_DESC'
}

export type ProductUpdateInput = {
  bought?: InputMaybe<Scalars['Int']>;
  category?: InputMaybe<Category>;
  description?: InputMaybe<Scalars['String']>;
  images?: InputMaybe<ImageUpdateManyInlineInput>;
  prices?: InputMaybe<PriceUpdateManyInlineInput>;
  rating?: InputMaybe<Array<Scalars['Float']>>;
  reviews?: InputMaybe<ReviewUpdateManyInlineInput>;
  sale?: InputMaybe<Scalars['Boolean']>;
  sizes?: InputMaybe<Array<Sizes>>;
  slug?: InputMaybe<Scalars['String']>;
  sport?: InputMaybe<Sport>;
  tags?: InputMaybe<Array<Scalars['String']>>;
  title?: InputMaybe<Scalars['String']>;
  views?: InputMaybe<Scalars['Int']>;
};

export type ProductUpdateManyInlineInput = {
  /** Connect multiple existing Product documents */
  connect?: InputMaybe<Array<ProductConnectInput>>;
  /** Create and connect multiple Product documents */
  create?: InputMaybe<Array<ProductCreateInput>>;
  /** Delete multiple Product documents */
  delete?: InputMaybe<Array<ProductWhereUniqueInput>>;
  /** Disconnect multiple Product documents */
  disconnect?: InputMaybe<Array<ProductWhereUniqueInput>>;
  /** Override currently-connected documents with multiple existing Product documents */
  set?: InputMaybe<Array<ProductWhereUniqueInput>>;
  /** Update multiple Product documents */
  update?: InputMaybe<Array<ProductUpdateWithNestedWhereUniqueInput>>;
  /** Upsert multiple Product documents */
  upsert?: InputMaybe<Array<ProductUpsertWithNestedWhereUniqueInput>>;
};

export type ProductUpdateManyInput = {
  bought?: InputMaybe<Scalars['Int']>;
  category?: InputMaybe<Category>;
  description?: InputMaybe<Scalars['String']>;
  rating?: InputMaybe<Array<Scalars['Float']>>;
  sale?: InputMaybe<Scalars['Boolean']>;
  sizes?: InputMaybe<Array<Sizes>>;
  sport?: InputMaybe<Sport>;
  tags?: InputMaybe<Array<Scalars['String']>>;
  title?: InputMaybe<Scalars['String']>;
  views?: InputMaybe<Scalars['Int']>;
};

export type ProductUpdateManyWithNestedWhereInput = {
  /** Update many input */
  data: ProductUpdateManyInput;
  /** Document search */
  where: ProductWhereInput;
};

export type ProductUpdateOneInlineInput = {
  /** Connect existing Product document */
  connect?: InputMaybe<ProductWhereUniqueInput>;
  /** Create and connect one Product document */
  create?: InputMaybe<ProductCreateInput>;
  /** Delete currently connected Product document */
  delete?: InputMaybe<Scalars['Boolean']>;
  /** Disconnect currently connected Product document */
  disconnect?: InputMaybe<Scalars['Boolean']>;
  /** Update single Product document */
  update?: InputMaybe<ProductUpdateWithNestedWhereUniqueInput>;
  /** Upsert single Product document */
  upsert?: InputMaybe<ProductUpsertWithNestedWhereUniqueInput>;
};

export type ProductUpdateWithNestedWhereUniqueInput = {
  /** Document to update */
  data: ProductUpdateInput;
  /** Unique document search */
  where: ProductWhereUniqueInput;
};

export type ProductUpsertInput = {
  /** Create document if it didn't exist */
  create: ProductCreateInput;
  /** Update document if it exists */
  update: ProductUpdateInput;
};

export type ProductUpsertWithNestedWhereUniqueInput = {
  /** Upsert data */
  data: ProductUpsertInput;
  /** Unique document search */
  where: ProductWhereUniqueInput;
};

/** This contains a set of filters that can be used to compare values internally */
export type ProductWhereComparatorInput = {
  /** This field can be used to request to check if the entry is outdated by internal comparison */
  outdated_to?: InputMaybe<Scalars['Boolean']>;
};

/** Identifies documents */
export type ProductWhereInput = {
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<ProductWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<ProductWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<ProductWhereInput>>;
  /** Contains search across all appropriate fields. */
  _search?: InputMaybe<Scalars['String']>;
  bought?: InputMaybe<Scalars['Int']>;
  /** All values greater than the given value. */
  bought_gt?: InputMaybe<Scalars['Int']>;
  /** All values greater than or equal the given value. */
  bought_gte?: InputMaybe<Scalars['Int']>;
  /** All values that are contained in given list. */
  bought_in?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  /** All values less than the given value. */
  bought_lt?: InputMaybe<Scalars['Int']>;
  /** All values less than or equal the given value. */
  bought_lte?: InputMaybe<Scalars['Int']>;
  /** Any other value that exists and is not equal to the given value. */
  bought_not?: InputMaybe<Scalars['Int']>;
  /** All values that are not contained in given list. */
  bought_not_in?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  category?: InputMaybe<Category>;
  /** All values that are contained in given list. */
  category_in?: InputMaybe<Array<InputMaybe<Category>>>;
  /** Any other value that exists and is not equal to the given value. */
  category_not?: InputMaybe<Category>;
  /** All values that are not contained in given list. */
  category_not_in?: InputMaybe<Array<InputMaybe<Category>>>;
  createdAt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  createdAt_gt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  createdAt_gte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  createdAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  /** All values less than the given value. */
  createdAt_lt?: InputMaybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  createdAt_lte?: InputMaybe<Scalars['DateTime']>;
  /** Any other value that exists and is not equal to the given value. */
  createdAt_not?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  createdAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  createdBy?: InputMaybe<UserWhereInput>;
  description?: InputMaybe<Scalars['String']>;
  /** All values containing the given string. */
  description_contains?: InputMaybe<Scalars['String']>;
  /** All values ending with the given string. */
  description_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are contained in given list. */
  description_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** Any other value that exists and is not equal to the given value. */
  description_not?: InputMaybe<Scalars['String']>;
  /** All values not containing the given string. */
  description_not_contains?: InputMaybe<Scalars['String']>;
  /** All values not ending with the given string */
  description_not_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  description_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values not starting with the given string. */
  description_not_starts_with?: InputMaybe<Scalars['String']>;
  /** All values starting with the given string. */
  description_starts_with?: InputMaybe<Scalars['String']>;
  documentInStages_every?: InputMaybe<ProductWhereStageInput>;
  documentInStages_none?: InputMaybe<ProductWhereStageInput>;
  documentInStages_some?: InputMaybe<ProductWhereStageInput>;
  id?: InputMaybe<Scalars['ID']>;
  /** All values containing the given string. */
  id_contains?: InputMaybe<Scalars['ID']>;
  /** All values ending with the given string. */
  id_ends_with?: InputMaybe<Scalars['ID']>;
  /** All values that are contained in given list. */
  id_in?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  /** Any other value that exists and is not equal to the given value. */
  id_not?: InputMaybe<Scalars['ID']>;
  /** All values not containing the given string. */
  id_not_contains?: InputMaybe<Scalars['ID']>;
  /** All values not ending with the given string */
  id_not_ends_with?: InputMaybe<Scalars['ID']>;
  /** All values that are not contained in given list. */
  id_not_in?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  /** All values not starting with the given string. */
  id_not_starts_with?: InputMaybe<Scalars['ID']>;
  /** All values starting with the given string. */
  id_starts_with?: InputMaybe<Scalars['ID']>;
  images_every?: InputMaybe<ImageWhereInput>;
  images_none?: InputMaybe<ImageWhereInput>;
  images_some?: InputMaybe<ImageWhereInput>;
  prices_every?: InputMaybe<PriceWhereInput>;
  prices_none?: InputMaybe<PriceWhereInput>;
  prices_some?: InputMaybe<PriceWhereInput>;
  publishedAt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  publishedAt_gt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  publishedAt_gte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  publishedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  /** All values less than the given value. */
  publishedAt_lt?: InputMaybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  publishedAt_lte?: InputMaybe<Scalars['DateTime']>;
  /** Any other value that exists and is not equal to the given value. */
  publishedAt_not?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  publishedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  publishedBy?: InputMaybe<UserWhereInput>;
  /** Matches if the field array contains *all* items provided to the filter and order does match */
  rating?: InputMaybe<Array<Scalars['Float']>>;
  /** Matches if the field array contains *all* items provided to the filter */
  rating_contains_all?: InputMaybe<Array<Scalars['Float']>>;
  /** Matches if the field array does not contain any of the items provided to the filter */
  rating_contains_none?: InputMaybe<Array<Scalars['Float']>>;
  /** Matches if the field array contains at least one item provided to the filter */
  rating_contains_some?: InputMaybe<Array<Scalars['Float']>>;
  /** Matches if the field array does not contains *all* items provided to the filter or order does not match */
  rating_not?: InputMaybe<Array<Scalars['Float']>>;
  reviews_every?: InputMaybe<ReviewWhereInput>;
  reviews_none?: InputMaybe<ReviewWhereInput>;
  reviews_some?: InputMaybe<ReviewWhereInput>;
  sale?: InputMaybe<Scalars['Boolean']>;
  /** Any other value that exists and is not equal to the given value. */
  sale_not?: InputMaybe<Scalars['Boolean']>;
  scheduledIn_every?: InputMaybe<ScheduledOperationWhereInput>;
  scheduledIn_none?: InputMaybe<ScheduledOperationWhereInput>;
  scheduledIn_some?: InputMaybe<ScheduledOperationWhereInput>;
  /** Matches if the field array contains *all* items provided to the filter and order does match */
  sizes?: InputMaybe<Array<Sizes>>;
  /** Matches if the field array contains *all* items provided to the filter */
  sizes_contains_all?: InputMaybe<Array<Sizes>>;
  /** Matches if the field array does not contain any of the items provided to the filter */
  sizes_contains_none?: InputMaybe<Array<Sizes>>;
  /** Matches if the field array contains at least one item provided to the filter */
  sizes_contains_some?: InputMaybe<Array<Sizes>>;
  /** Matches if the field array does not contains *all* items provided to the filter or order does not match */
  sizes_not?: InputMaybe<Array<Sizes>>;
  slug?: InputMaybe<Scalars['String']>;
  /** All values containing the given string. */
  slug_contains?: InputMaybe<Scalars['String']>;
  /** All values ending with the given string. */
  slug_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are contained in given list. */
  slug_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** Any other value that exists and is not equal to the given value. */
  slug_not?: InputMaybe<Scalars['String']>;
  /** All values not containing the given string. */
  slug_not_contains?: InputMaybe<Scalars['String']>;
  /** All values not ending with the given string */
  slug_not_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  slug_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values not starting with the given string. */
  slug_not_starts_with?: InputMaybe<Scalars['String']>;
  /** All values starting with the given string. */
  slug_starts_with?: InputMaybe<Scalars['String']>;
  sport?: InputMaybe<Sport>;
  /** All values that are contained in given list. */
  sport_in?: InputMaybe<Array<InputMaybe<Sport>>>;
  /** Any other value that exists and is not equal to the given value. */
  sport_not?: InputMaybe<Sport>;
  /** All values that are not contained in given list. */
  sport_not_in?: InputMaybe<Array<InputMaybe<Sport>>>;
  /** Matches if the field array contains *all* items provided to the filter and order does match */
  tags?: InputMaybe<Array<Scalars['String']>>;
  /** Matches if the field array contains *all* items provided to the filter */
  tags_contains_all?: InputMaybe<Array<Scalars['String']>>;
  /** Matches if the field array does not contain any of the items provided to the filter */
  tags_contains_none?: InputMaybe<Array<Scalars['String']>>;
  /** Matches if the field array contains at least one item provided to the filter */
  tags_contains_some?: InputMaybe<Array<Scalars['String']>>;
  /** Matches if the field array does not contains *all* items provided to the filter or order does not match */
  tags_not?: InputMaybe<Array<Scalars['String']>>;
  title?: InputMaybe<Scalars['String']>;
  /** All values containing the given string. */
  title_contains?: InputMaybe<Scalars['String']>;
  /** All values ending with the given string. */
  title_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are contained in given list. */
  title_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** Any other value that exists and is not equal to the given value. */
  title_not?: InputMaybe<Scalars['String']>;
  /** All values not containing the given string. */
  title_not_contains?: InputMaybe<Scalars['String']>;
  /** All values not ending with the given string */
  title_not_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  title_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values not starting with the given string. */
  title_not_starts_with?: InputMaybe<Scalars['String']>;
  /** All values starting with the given string. */
  title_starts_with?: InputMaybe<Scalars['String']>;
  updatedAt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  updatedAt_gt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  updatedAt_gte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  updatedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  /** All values less than the given value. */
  updatedAt_lt?: InputMaybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  updatedAt_lte?: InputMaybe<Scalars['DateTime']>;
  /** Any other value that exists and is not equal to the given value. */
  updatedAt_not?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  updatedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  updatedBy?: InputMaybe<UserWhereInput>;
  views?: InputMaybe<Scalars['Int']>;
  /** All values greater than the given value. */
  views_gt?: InputMaybe<Scalars['Int']>;
  /** All values greater than or equal the given value. */
  views_gte?: InputMaybe<Scalars['Int']>;
  /** All values that are contained in given list. */
  views_in?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  /** All values less than the given value. */
  views_lt?: InputMaybe<Scalars['Int']>;
  /** All values less than or equal the given value. */
  views_lte?: InputMaybe<Scalars['Int']>;
  /** Any other value that exists and is not equal to the given value. */
  views_not?: InputMaybe<Scalars['Int']>;
  /** All values that are not contained in given list. */
  views_not_in?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
};

/** The document in stages filter allows specifying a stage entry to cross compare the same document between different stages */
export type ProductWhereStageInput = {
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<ProductWhereStageInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<ProductWhereStageInput>>;
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<ProductWhereStageInput>>;
  /** This field contains fields which can be set as true or false to specify an internal comparison */
  compareWithParent?: InputMaybe<ProductWhereComparatorInput>;
  /** Specify the stage to compare with */
  stage?: InputMaybe<Stage>;
};

/** References Product record uniquely */
export type ProductWhereUniqueInput = {
  id?: InputMaybe<Scalars['ID']>;
  slug?: InputMaybe<Scalars['String']>;
};

/** information about products which are in one order */
export type ProductsOrder = {
  __typename?: 'ProductsOrder';
  count?: Maybe<Scalars['Int']>;
  /** The unique identifier */
  id: Scalars['ID'];
  /** url to first product image */
  image?: Maybe<Scalars['String']>;
  price?: Maybe<Scalars['Int']>;
  productId?: Maybe<Scalars['String']>;
  size?: Maybe<Scalars['String']>;
  /** System stage field */
  stage: Stage;
  title?: Maybe<Scalars['String']>;
};

export type ProductsOrderConnectInput = {
  /** Allow to specify document position in list of connected documents, will default to appending at end of list */
  position?: InputMaybe<ConnectPositionInput>;
  /** Document to connect */
  where: ProductsOrderWhereUniqueInput;
};

/** A connection to a list of items. */
export type ProductsOrderConnection = {
  __typename?: 'ProductsOrderConnection';
  aggregate: Aggregate;
  /** A list of edges. */
  edges: Array<ProductsOrderEdge>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
};

export type ProductsOrderCreateInput = {
  count?: InputMaybe<Scalars['Int']>;
  image?: InputMaybe<Scalars['String']>;
  price?: InputMaybe<Scalars['Int']>;
  productId?: InputMaybe<Scalars['String']>;
  size?: InputMaybe<Scalars['String']>;
  title?: InputMaybe<Scalars['String']>;
};

export type ProductsOrderCreateManyInlineInput = {
  /** Create and connect multiple existing ProductsOrder documents */
  create?: InputMaybe<Array<ProductsOrderCreateInput>>;
};

export type ProductsOrderCreateOneInlineInput = {
  /** Create and connect one ProductsOrder document */
  create?: InputMaybe<ProductsOrderCreateInput>;
};

export type ProductsOrderCreateWithPositionInput = {
  /** Document to create */
  data: ProductsOrderCreateInput;
  /** Position in the list of existing component instances, will default to appending at the end of list */
  position?: InputMaybe<ConnectPositionInput>;
};

/** An edge in a connection. */
export type ProductsOrderEdge = {
  __typename?: 'ProductsOrderEdge';
  /** A cursor for use in pagination. */
  cursor: Scalars['String'];
  /** The item at the end of the edge. */
  node: ProductsOrder;
};

/** Identifies documents */
export type ProductsOrderManyWhereInput = {
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<ProductsOrderWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<ProductsOrderWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<ProductsOrderWhereInput>>;
  /** Contains search across all appropriate fields. */
  _search?: InputMaybe<Scalars['String']>;
  count?: InputMaybe<Scalars['Int']>;
  /** All values greater than the given value. */
  count_gt?: InputMaybe<Scalars['Int']>;
  /** All values greater than or equal the given value. */
  count_gte?: InputMaybe<Scalars['Int']>;
  /** All values that are contained in given list. */
  count_in?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  /** All values less than the given value. */
  count_lt?: InputMaybe<Scalars['Int']>;
  /** All values less than or equal the given value. */
  count_lte?: InputMaybe<Scalars['Int']>;
  /** Any other value that exists and is not equal to the given value. */
  count_not?: InputMaybe<Scalars['Int']>;
  /** All values that are not contained in given list. */
  count_not_in?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  id?: InputMaybe<Scalars['ID']>;
  /** All values containing the given string. */
  id_contains?: InputMaybe<Scalars['ID']>;
  /** All values ending with the given string. */
  id_ends_with?: InputMaybe<Scalars['ID']>;
  /** All values that are contained in given list. */
  id_in?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  /** Any other value that exists and is not equal to the given value. */
  id_not?: InputMaybe<Scalars['ID']>;
  /** All values not containing the given string. */
  id_not_contains?: InputMaybe<Scalars['ID']>;
  /** All values not ending with the given string */
  id_not_ends_with?: InputMaybe<Scalars['ID']>;
  /** All values that are not contained in given list. */
  id_not_in?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  /** All values not starting with the given string. */
  id_not_starts_with?: InputMaybe<Scalars['ID']>;
  /** All values starting with the given string. */
  id_starts_with?: InputMaybe<Scalars['ID']>;
  image?: InputMaybe<Scalars['String']>;
  /** All values containing the given string. */
  image_contains?: InputMaybe<Scalars['String']>;
  /** All values ending with the given string. */
  image_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are contained in given list. */
  image_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** Any other value that exists and is not equal to the given value. */
  image_not?: InputMaybe<Scalars['String']>;
  /** All values not containing the given string. */
  image_not_contains?: InputMaybe<Scalars['String']>;
  /** All values not ending with the given string */
  image_not_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  image_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values not starting with the given string. */
  image_not_starts_with?: InputMaybe<Scalars['String']>;
  /** All values starting with the given string. */
  image_starts_with?: InputMaybe<Scalars['String']>;
  price?: InputMaybe<Scalars['Int']>;
  /** All values greater than the given value. */
  price_gt?: InputMaybe<Scalars['Int']>;
  /** All values greater than or equal the given value. */
  price_gte?: InputMaybe<Scalars['Int']>;
  /** All values that are contained in given list. */
  price_in?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  /** All values less than the given value. */
  price_lt?: InputMaybe<Scalars['Int']>;
  /** All values less than or equal the given value. */
  price_lte?: InputMaybe<Scalars['Int']>;
  /** Any other value that exists and is not equal to the given value. */
  price_not?: InputMaybe<Scalars['Int']>;
  /** All values that are not contained in given list. */
  price_not_in?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  productId?: InputMaybe<Scalars['String']>;
  /** All values containing the given string. */
  productId_contains?: InputMaybe<Scalars['String']>;
  /** All values ending with the given string. */
  productId_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are contained in given list. */
  productId_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** Any other value that exists and is not equal to the given value. */
  productId_not?: InputMaybe<Scalars['String']>;
  /** All values not containing the given string. */
  productId_not_contains?: InputMaybe<Scalars['String']>;
  /** All values not ending with the given string */
  productId_not_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  productId_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values not starting with the given string. */
  productId_not_starts_with?: InputMaybe<Scalars['String']>;
  /** All values starting with the given string. */
  productId_starts_with?: InputMaybe<Scalars['String']>;
  size?: InputMaybe<Scalars['String']>;
  /** All values containing the given string. */
  size_contains?: InputMaybe<Scalars['String']>;
  /** All values ending with the given string. */
  size_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are contained in given list. */
  size_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** Any other value that exists and is not equal to the given value. */
  size_not?: InputMaybe<Scalars['String']>;
  /** All values not containing the given string. */
  size_not_contains?: InputMaybe<Scalars['String']>;
  /** All values not ending with the given string */
  size_not_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  size_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values not starting with the given string. */
  size_not_starts_with?: InputMaybe<Scalars['String']>;
  /** All values starting with the given string. */
  size_starts_with?: InputMaybe<Scalars['String']>;
  title?: InputMaybe<Scalars['String']>;
  /** All values containing the given string. */
  title_contains?: InputMaybe<Scalars['String']>;
  /** All values ending with the given string. */
  title_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are contained in given list. */
  title_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** Any other value that exists and is not equal to the given value. */
  title_not?: InputMaybe<Scalars['String']>;
  /** All values not containing the given string. */
  title_not_contains?: InputMaybe<Scalars['String']>;
  /** All values not ending with the given string */
  title_not_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  title_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values not starting with the given string. */
  title_not_starts_with?: InputMaybe<Scalars['String']>;
  /** All values starting with the given string. */
  title_starts_with?: InputMaybe<Scalars['String']>;
};

export enum ProductsOrderOrderByInput {
  CountAsc = 'count_ASC',
  CountDesc = 'count_DESC',
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC',
  ImageAsc = 'image_ASC',
  ImageDesc = 'image_DESC',
  PriceAsc = 'price_ASC',
  PriceDesc = 'price_DESC',
  ProductIdAsc = 'productId_ASC',
  ProductIdDesc = 'productId_DESC',
  SizeAsc = 'size_ASC',
  SizeDesc = 'size_DESC',
  TitleAsc = 'title_ASC',
  TitleDesc = 'title_DESC'
}

export type ProductsOrderParent = Order;

export type ProductsOrderParentConnectInput = {
  Order?: InputMaybe<OrderConnectInput>;
};

export type ProductsOrderParentCreateInput = {
  Order?: InputMaybe<OrderCreateInput>;
};

export type ProductsOrderParentCreateManyInlineInput = {
  /** Connect multiple existing ProductsOrderParent documents */
  connect?: InputMaybe<Array<ProductsOrderParentWhereUniqueInput>>;
  /** Create and connect multiple existing ProductsOrderParent documents */
  create?: InputMaybe<Array<ProductsOrderParentCreateInput>>;
};

export type ProductsOrderParentCreateOneInlineInput = {
  /** Connect one existing ProductsOrderParent document */
  connect?: InputMaybe<ProductsOrderParentWhereUniqueInput>;
  /** Create and connect one ProductsOrderParent document */
  create?: InputMaybe<ProductsOrderParentCreateInput>;
};

export type ProductsOrderParentUpdateInput = {
  Order?: InputMaybe<OrderUpdateInput>;
};

export type ProductsOrderParentUpdateManyInlineInput = {
  /** Connect multiple existing ProductsOrderParent documents */
  connect?: InputMaybe<Array<ProductsOrderParentConnectInput>>;
  /** Create and connect multiple ProductsOrderParent documents */
  create?: InputMaybe<Array<ProductsOrderParentCreateInput>>;
  /** Delete multiple ProductsOrderParent documents */
  delete?: InputMaybe<Array<ProductsOrderParentWhereUniqueInput>>;
  /** Disconnect multiple ProductsOrderParent documents */
  disconnect?: InputMaybe<Array<ProductsOrderParentWhereUniqueInput>>;
  /** Override currently-connected documents with multiple existing ProductsOrderParent documents */
  set?: InputMaybe<Array<ProductsOrderParentWhereUniqueInput>>;
  /** Update multiple ProductsOrderParent documents */
  update?: InputMaybe<Array<ProductsOrderParentUpdateWithNestedWhereUniqueInput>>;
  /** Upsert multiple ProductsOrderParent documents */
  upsert?: InputMaybe<Array<ProductsOrderParentUpsertWithNestedWhereUniqueInput>>;
};

export type ProductsOrderParentUpdateManyWithNestedWhereInput = {
  Order?: InputMaybe<OrderUpdateManyWithNestedWhereInput>;
};

export type ProductsOrderParentUpdateOneInlineInput = {
  /** Connect existing ProductsOrderParent document */
  connect?: InputMaybe<ProductsOrderParentWhereUniqueInput>;
  /** Create and connect one ProductsOrderParent document */
  create?: InputMaybe<ProductsOrderParentCreateInput>;
  /** Delete currently connected ProductsOrderParent document */
  delete?: InputMaybe<Scalars['Boolean']>;
  /** Disconnect currently connected ProductsOrderParent document */
  disconnect?: InputMaybe<Scalars['Boolean']>;
  /** Update single ProductsOrderParent document */
  update?: InputMaybe<ProductsOrderParentUpdateWithNestedWhereUniqueInput>;
  /** Upsert single ProductsOrderParent document */
  upsert?: InputMaybe<ProductsOrderParentUpsertWithNestedWhereUniqueInput>;
};

export type ProductsOrderParentUpdateWithNestedWhereUniqueInput = {
  Order?: InputMaybe<OrderUpdateWithNestedWhereUniqueInput>;
};

export type ProductsOrderParentUpsertWithNestedWhereUniqueInput = {
  Order?: InputMaybe<OrderUpsertWithNestedWhereUniqueInput>;
};

export type ProductsOrderParentWhereInput = {
  Order?: InputMaybe<OrderWhereInput>;
};

export type ProductsOrderParentWhereUniqueInput = {
  Order?: InputMaybe<OrderWhereUniqueInput>;
};

export type ProductsOrderUpdateInput = {
  count?: InputMaybe<Scalars['Int']>;
  image?: InputMaybe<Scalars['String']>;
  price?: InputMaybe<Scalars['Int']>;
  productId?: InputMaybe<Scalars['String']>;
  size?: InputMaybe<Scalars['String']>;
  title?: InputMaybe<Scalars['String']>;
};

export type ProductsOrderUpdateManyInlineInput = {
  /** Create and connect multiple ProductsOrder component instances */
  create?: InputMaybe<Array<ProductsOrderCreateWithPositionInput>>;
  /** Delete multiple ProductsOrder documents */
  delete?: InputMaybe<Array<ProductsOrderWhereUniqueInput>>;
  /** Update multiple ProductsOrder component instances */
  update?: InputMaybe<Array<ProductsOrderUpdateWithNestedWhereUniqueAndPositionInput>>;
  /** Upsert multiple ProductsOrder component instances */
  upsert?: InputMaybe<Array<ProductsOrderUpsertWithNestedWhereUniqueAndPositionInput>>;
};

export type ProductsOrderUpdateManyInput = {
  count?: InputMaybe<Scalars['Int']>;
  image?: InputMaybe<Scalars['String']>;
  price?: InputMaybe<Scalars['Int']>;
  productId?: InputMaybe<Scalars['String']>;
  size?: InputMaybe<Scalars['String']>;
  title?: InputMaybe<Scalars['String']>;
};

export type ProductsOrderUpdateManyWithNestedWhereInput = {
  /** Update many input */
  data: ProductsOrderUpdateManyInput;
  /** Document search */
  where: ProductsOrderWhereInput;
};

export type ProductsOrderUpdateOneInlineInput = {
  /** Create and connect one ProductsOrder document */
  create?: InputMaybe<ProductsOrderCreateInput>;
  /** Delete currently connected ProductsOrder document */
  delete?: InputMaybe<Scalars['Boolean']>;
  /** Update single ProductsOrder document */
  update?: InputMaybe<ProductsOrderUpdateWithNestedWhereUniqueInput>;
  /** Upsert single ProductsOrder document */
  upsert?: InputMaybe<ProductsOrderUpsertWithNestedWhereUniqueInput>;
};

export type ProductsOrderUpdateWithNestedWhereUniqueAndPositionInput = {
  /** Document to update */
  data?: InputMaybe<ProductsOrderUpdateInput>;
  /** Position in the list of existing component instances, will default to appending at the end of list */
  position?: InputMaybe<ConnectPositionInput>;
  /** Unique component instance search */
  where: ProductsOrderWhereUniqueInput;
};

export type ProductsOrderUpdateWithNestedWhereUniqueInput = {
  /** Document to update */
  data: ProductsOrderUpdateInput;
  /** Unique document search */
  where: ProductsOrderWhereUniqueInput;
};

export type ProductsOrderUpsertInput = {
  /** Create document if it didn't exist */
  create: ProductsOrderCreateInput;
  /** Update document if it exists */
  update: ProductsOrderUpdateInput;
};

export type ProductsOrderUpsertWithNestedWhereUniqueAndPositionInput = {
  /** Document to upsert */
  data?: InputMaybe<ProductsOrderUpsertInput>;
  /** Position in the list of existing component instances, will default to appending at the end of list */
  position?: InputMaybe<ConnectPositionInput>;
  /** Unique component instance search */
  where: ProductsOrderWhereUniqueInput;
};

export type ProductsOrderUpsertWithNestedWhereUniqueInput = {
  /** Upsert data */
  data: ProductsOrderUpsertInput;
  /** Unique document search */
  where: ProductsOrderWhereUniqueInput;
};

/** Identifies documents */
export type ProductsOrderWhereInput = {
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<ProductsOrderWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<ProductsOrderWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<ProductsOrderWhereInput>>;
  /** Contains search across all appropriate fields. */
  _search?: InputMaybe<Scalars['String']>;
  count?: InputMaybe<Scalars['Int']>;
  /** All values greater than the given value. */
  count_gt?: InputMaybe<Scalars['Int']>;
  /** All values greater than or equal the given value. */
  count_gte?: InputMaybe<Scalars['Int']>;
  /** All values that are contained in given list. */
  count_in?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  /** All values less than the given value. */
  count_lt?: InputMaybe<Scalars['Int']>;
  /** All values less than or equal the given value. */
  count_lte?: InputMaybe<Scalars['Int']>;
  /** Any other value that exists and is not equal to the given value. */
  count_not?: InputMaybe<Scalars['Int']>;
  /** All values that are not contained in given list. */
  count_not_in?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  id?: InputMaybe<Scalars['ID']>;
  /** All values containing the given string. */
  id_contains?: InputMaybe<Scalars['ID']>;
  /** All values ending with the given string. */
  id_ends_with?: InputMaybe<Scalars['ID']>;
  /** All values that are contained in given list. */
  id_in?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  /** Any other value that exists and is not equal to the given value. */
  id_not?: InputMaybe<Scalars['ID']>;
  /** All values not containing the given string. */
  id_not_contains?: InputMaybe<Scalars['ID']>;
  /** All values not ending with the given string */
  id_not_ends_with?: InputMaybe<Scalars['ID']>;
  /** All values that are not contained in given list. */
  id_not_in?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  /** All values not starting with the given string. */
  id_not_starts_with?: InputMaybe<Scalars['ID']>;
  /** All values starting with the given string. */
  id_starts_with?: InputMaybe<Scalars['ID']>;
  image?: InputMaybe<Scalars['String']>;
  /** All values containing the given string. */
  image_contains?: InputMaybe<Scalars['String']>;
  /** All values ending with the given string. */
  image_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are contained in given list. */
  image_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** Any other value that exists and is not equal to the given value. */
  image_not?: InputMaybe<Scalars['String']>;
  /** All values not containing the given string. */
  image_not_contains?: InputMaybe<Scalars['String']>;
  /** All values not ending with the given string */
  image_not_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  image_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values not starting with the given string. */
  image_not_starts_with?: InputMaybe<Scalars['String']>;
  /** All values starting with the given string. */
  image_starts_with?: InputMaybe<Scalars['String']>;
  price?: InputMaybe<Scalars['Int']>;
  /** All values greater than the given value. */
  price_gt?: InputMaybe<Scalars['Int']>;
  /** All values greater than or equal the given value. */
  price_gte?: InputMaybe<Scalars['Int']>;
  /** All values that are contained in given list. */
  price_in?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  /** All values less than the given value. */
  price_lt?: InputMaybe<Scalars['Int']>;
  /** All values less than or equal the given value. */
  price_lte?: InputMaybe<Scalars['Int']>;
  /** Any other value that exists and is not equal to the given value. */
  price_not?: InputMaybe<Scalars['Int']>;
  /** All values that are not contained in given list. */
  price_not_in?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  productId?: InputMaybe<Scalars['String']>;
  /** All values containing the given string. */
  productId_contains?: InputMaybe<Scalars['String']>;
  /** All values ending with the given string. */
  productId_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are contained in given list. */
  productId_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** Any other value that exists and is not equal to the given value. */
  productId_not?: InputMaybe<Scalars['String']>;
  /** All values not containing the given string. */
  productId_not_contains?: InputMaybe<Scalars['String']>;
  /** All values not ending with the given string */
  productId_not_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  productId_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values not starting with the given string. */
  productId_not_starts_with?: InputMaybe<Scalars['String']>;
  /** All values starting with the given string. */
  productId_starts_with?: InputMaybe<Scalars['String']>;
  size?: InputMaybe<Scalars['String']>;
  /** All values containing the given string. */
  size_contains?: InputMaybe<Scalars['String']>;
  /** All values ending with the given string. */
  size_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are contained in given list. */
  size_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** Any other value that exists and is not equal to the given value. */
  size_not?: InputMaybe<Scalars['String']>;
  /** All values not containing the given string. */
  size_not_contains?: InputMaybe<Scalars['String']>;
  /** All values not ending with the given string */
  size_not_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  size_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values not starting with the given string. */
  size_not_starts_with?: InputMaybe<Scalars['String']>;
  /** All values starting with the given string. */
  size_starts_with?: InputMaybe<Scalars['String']>;
  title?: InputMaybe<Scalars['String']>;
  /** All values containing the given string. */
  title_contains?: InputMaybe<Scalars['String']>;
  /** All values ending with the given string. */
  title_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are contained in given list. */
  title_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** Any other value that exists and is not equal to the given value. */
  title_not?: InputMaybe<Scalars['String']>;
  /** All values not containing the given string. */
  title_not_contains?: InputMaybe<Scalars['String']>;
  /** All values not ending with the given string */
  title_not_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  title_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values not starting with the given string. */
  title_not_starts_with?: InputMaybe<Scalars['String']>;
  /** All values starting with the given string. */
  title_starts_with?: InputMaybe<Scalars['String']>;
};

/** References ProductsOrder record uniquely */
export type ProductsOrderWhereUniqueInput = {
  id?: InputMaybe<Scalars['ID']>;
};

export type PublishLocaleInput = {
  /** Locales to publish */
  locale: Locale;
  /** Stages to publish selected locales to */
  stages: Array<Stage>;
};

export type Query = {
  __typename?: 'Query';
  /** Retrieve a single account */
  account?: Maybe<Account>;
  /** Retrieve document version */
  accountVersion?: Maybe<DocumentVersion>;
  /** Retrieve multiple accounts */
  accounts: Array<Account>;
  /** Retrieve multiple accounts using the Relay connection interface */
  accountsConnection: AccountConnection;
  /** Retrieve a single asset */
  asset?: Maybe<Asset>;
  /** Retrieve document version */
  assetVersion?: Maybe<DocumentVersion>;
  /** Retrieve multiple assets */
  assets: Array<Asset>;
  /** Retrieve multiple assets using the Relay connection interface */
  assetsConnection: AssetConnection;
  /** Retrieve a single comment */
  comment?: Maybe<Comment>;
  /** Retrieve document version */
  commentVersion?: Maybe<DocumentVersion>;
  /** Retrieve multiple comments */
  comments: Array<Comment>;
  /** Retrieve multiple comments using the Relay connection interface */
  commentsConnection: CommentConnection;
  /** Fetches an object given its ID */
  node?: Maybe<Node>;
  /** Retrieve a single order */
  order?: Maybe<Order>;
  /** Retrieve document version */
  orderVersion?: Maybe<DocumentVersion>;
  /** Retrieve multiple orders */
  orders: Array<Order>;
  /** Retrieve multiple orders using the Relay connection interface */
  ordersConnection: OrderConnection;
  /** Retrieve a single product */
  product?: Maybe<Product>;
  /** Retrieve document version */
  productVersion?: Maybe<DocumentVersion>;
  /** Retrieve multiple products */
  products: Array<Product>;
  /** Retrieve multiple products using the Relay connection interface */
  productsConnection: ProductConnection;
  /** Retrieve a single review */
  review?: Maybe<Review>;
  /** Retrieve document version */
  reviewVersion?: Maybe<DocumentVersion>;
  /** Retrieve multiple reviews */
  reviews: Array<Review>;
  /** Retrieve multiple reviews using the Relay connection interface */
  reviewsConnection: ReviewConnection;
  /** Retrieve a single scheduledOperation */
  scheduledOperation?: Maybe<ScheduledOperation>;
  /** Retrieve multiple scheduledOperations */
  scheduledOperations: Array<ScheduledOperation>;
  /** Retrieve multiple scheduledOperations using the Relay connection interface */
  scheduledOperationsConnection: ScheduledOperationConnection;
  /** Retrieve a single scheduledRelease */
  scheduledRelease?: Maybe<ScheduledRelease>;
  /** Retrieve multiple scheduledReleases */
  scheduledReleases: Array<ScheduledRelease>;
  /** Retrieve multiple scheduledReleases using the Relay connection interface */
  scheduledReleasesConnection: ScheduledReleaseConnection;
  /** Retrieve a single user */
  user?: Maybe<User>;
  /** Retrieve multiple users */
  users: Array<User>;
  /** Retrieve multiple users using the Relay connection interface */
  usersConnection: UserConnection;
};


export type QueryAccountArgs = {
  locales?: Array<Locale>;
  stage?: Stage;
  where: AccountWhereUniqueInput;
};


export type QueryAccountVersionArgs = {
  where: VersionWhereInput;
};


export type QueryAccountsArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  locales?: Array<Locale>;
  orderBy?: InputMaybe<AccountOrderByInput>;
  skip?: InputMaybe<Scalars['Int']>;
  stage?: Stage;
  where?: InputMaybe<AccountWhereInput>;
};


export type QueryAccountsConnectionArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  locales?: Array<Locale>;
  orderBy?: InputMaybe<AccountOrderByInput>;
  skip?: InputMaybe<Scalars['Int']>;
  stage?: Stage;
  where?: InputMaybe<AccountWhereInput>;
};


export type QueryAssetArgs = {
  locales?: Array<Locale>;
  stage?: Stage;
  where: AssetWhereUniqueInput;
};


export type QueryAssetVersionArgs = {
  where: VersionWhereInput;
};


export type QueryAssetsArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  locales?: Array<Locale>;
  orderBy?: InputMaybe<AssetOrderByInput>;
  skip?: InputMaybe<Scalars['Int']>;
  stage?: Stage;
  where?: InputMaybe<AssetWhereInput>;
};


export type QueryAssetsConnectionArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  locales?: Array<Locale>;
  orderBy?: InputMaybe<AssetOrderByInput>;
  skip?: InputMaybe<Scalars['Int']>;
  stage?: Stage;
  where?: InputMaybe<AssetWhereInput>;
};


export type QueryCommentArgs = {
  locales?: Array<Locale>;
  stage?: Stage;
  where: CommentWhereUniqueInput;
};


export type QueryCommentVersionArgs = {
  where: VersionWhereInput;
};


export type QueryCommentsArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  locales?: Array<Locale>;
  orderBy?: InputMaybe<CommentOrderByInput>;
  skip?: InputMaybe<Scalars['Int']>;
  stage?: Stage;
  where?: InputMaybe<CommentWhereInput>;
};


export type QueryCommentsConnectionArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  locales?: Array<Locale>;
  orderBy?: InputMaybe<CommentOrderByInput>;
  skip?: InputMaybe<Scalars['Int']>;
  stage?: Stage;
  where?: InputMaybe<CommentWhereInput>;
};


export type QueryNodeArgs = {
  id: Scalars['ID'];
  locales?: Array<Locale>;
  stage?: Stage;
};


export type QueryOrderArgs = {
  locales?: Array<Locale>;
  stage?: Stage;
  where: OrderWhereUniqueInput;
};


export type QueryOrderVersionArgs = {
  where: VersionWhereInput;
};


export type QueryOrdersArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  locales?: Array<Locale>;
  orderBy?: InputMaybe<OrderOrderByInput>;
  skip?: InputMaybe<Scalars['Int']>;
  stage?: Stage;
  where?: InputMaybe<OrderWhereInput>;
};


export type QueryOrdersConnectionArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  locales?: Array<Locale>;
  orderBy?: InputMaybe<OrderOrderByInput>;
  skip?: InputMaybe<Scalars['Int']>;
  stage?: Stage;
  where?: InputMaybe<OrderWhereInput>;
};


export type QueryProductArgs = {
  locales?: Array<Locale>;
  stage?: Stage;
  where: ProductWhereUniqueInput;
};


export type QueryProductVersionArgs = {
  where: VersionWhereInput;
};


export type QueryProductsArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  locales?: Array<Locale>;
  orderBy?: InputMaybe<ProductOrderByInput>;
  skip?: InputMaybe<Scalars['Int']>;
  stage?: Stage;
  where?: InputMaybe<ProductWhereInput>;
};


export type QueryProductsConnectionArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  locales?: Array<Locale>;
  orderBy?: InputMaybe<ProductOrderByInput>;
  skip?: InputMaybe<Scalars['Int']>;
  stage?: Stage;
  where?: InputMaybe<ProductWhereInput>;
};


export type QueryReviewArgs = {
  locales?: Array<Locale>;
  stage?: Stage;
  where: ReviewWhereUniqueInput;
};


export type QueryReviewVersionArgs = {
  where: VersionWhereInput;
};


export type QueryReviewsArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  locales?: Array<Locale>;
  orderBy?: InputMaybe<ReviewOrderByInput>;
  skip?: InputMaybe<Scalars['Int']>;
  stage?: Stage;
  where?: InputMaybe<ReviewWhereInput>;
};


export type QueryReviewsConnectionArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  locales?: Array<Locale>;
  orderBy?: InputMaybe<ReviewOrderByInput>;
  skip?: InputMaybe<Scalars['Int']>;
  stage?: Stage;
  where?: InputMaybe<ReviewWhereInput>;
};


export type QueryScheduledOperationArgs = {
  locales?: Array<Locale>;
  stage?: Stage;
  where: ScheduledOperationWhereUniqueInput;
};


export type QueryScheduledOperationsArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  locales?: Array<Locale>;
  orderBy?: InputMaybe<ScheduledOperationOrderByInput>;
  skip?: InputMaybe<Scalars['Int']>;
  stage?: Stage;
  where?: InputMaybe<ScheduledOperationWhereInput>;
};


export type QueryScheduledOperationsConnectionArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  locales?: Array<Locale>;
  orderBy?: InputMaybe<ScheduledOperationOrderByInput>;
  skip?: InputMaybe<Scalars['Int']>;
  stage?: Stage;
  where?: InputMaybe<ScheduledOperationWhereInput>;
};


export type QueryScheduledReleaseArgs = {
  locales?: Array<Locale>;
  stage?: Stage;
  where: ScheduledReleaseWhereUniqueInput;
};


export type QueryScheduledReleasesArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  locales?: Array<Locale>;
  orderBy?: InputMaybe<ScheduledReleaseOrderByInput>;
  skip?: InputMaybe<Scalars['Int']>;
  stage?: Stage;
  where?: InputMaybe<ScheduledReleaseWhereInput>;
};


export type QueryScheduledReleasesConnectionArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  locales?: Array<Locale>;
  orderBy?: InputMaybe<ScheduledReleaseOrderByInput>;
  skip?: InputMaybe<Scalars['Int']>;
  stage?: Stage;
  where?: InputMaybe<ScheduledReleaseWhereInput>;
};


export type QueryUserArgs = {
  locales?: Array<Locale>;
  stage?: Stage;
  where: UserWhereUniqueInput;
};


export type QueryUsersArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  locales?: Array<Locale>;
  orderBy?: InputMaybe<UserOrderByInput>;
  skip?: InputMaybe<Scalars['Int']>;
  stage?: Stage;
  where?: InputMaybe<UserWhereInput>;
};


export type QueryUsersConnectionArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  locales?: Array<Locale>;
  orderBy?: InputMaybe<UserOrderByInput>;
  skip?: InputMaybe<Scalars['Int']>;
  stage?: Stage;
  where?: InputMaybe<UserWhereInput>;
};

/** Representing a RGBA color value: https://developer.mozilla.org/en-US/docs/Web/CSS/color_value#rgb()_and_rgba() */
export type Rgba = {
  __typename?: 'RGBA';
  a: Scalars['RGBATransparency'];
  b: Scalars['RGBAHue'];
  g: Scalars['RGBAHue'];
  r: Scalars['RGBAHue'];
};

/** Input type representing a RGBA color value: https://developer.mozilla.org/en-US/docs/Web/CSS/color_value#rgb()_and_rgba() */
export type RgbaInput = {
  a: Scalars['RGBATransparency'];
  b: Scalars['RGBAHue'];
  g: Scalars['RGBAHue'];
  r: Scalars['RGBAHue'];
};

export type Review = Node & {
  __typename?: 'Review';
  content: Scalars['String'];
  /** The time the document was created */
  createdAt: Scalars['DateTime'];
  /** User that created this document */
  createdBy?: Maybe<User>;
  /** Get the document in other stages */
  documentInStages: Array<Review>;
  /** List of Review versions */
  history: Array<Version>;
  /** The unique identifier */
  id: Scalars['ID'];
  /** The time the document was published. Null on documents in draft stage. */
  publishedAt?: Maybe<Scalars['DateTime']>;
  /** User that last published this document */
  publishedBy?: Maybe<User>;
  rating: Scalars['Int'];
  scheduledIn: Array<ScheduledOperation>;
  /** System stage field */
  stage: Stage;
  /** The time the document was updated */
  updatedAt: Scalars['DateTime'];
  /** User that last updated this document */
  updatedBy?: Maybe<User>;
  user: Scalars['String'];
};


export type ReviewCreatedByArgs = {
  forceParentLocale?: InputMaybe<Scalars['Boolean']>;
  locales?: InputMaybe<Array<Locale>>;
};


export type ReviewDocumentInStagesArgs = {
  includeCurrent?: Scalars['Boolean'];
  inheritLocale?: Scalars['Boolean'];
  stages?: Array<Stage>;
};


export type ReviewHistoryArgs = {
  limit?: Scalars['Int'];
  skip?: Scalars['Int'];
  stageOverride?: InputMaybe<Stage>;
};


export type ReviewPublishedByArgs = {
  forceParentLocale?: InputMaybe<Scalars['Boolean']>;
  locales?: InputMaybe<Array<Locale>>;
};


export type ReviewScheduledInArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  forceParentLocale?: InputMaybe<Scalars['Boolean']>;
  last?: InputMaybe<Scalars['Int']>;
  locales?: InputMaybe<Array<Locale>>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<ScheduledOperationWhereInput>;
};


export type ReviewUpdatedByArgs = {
  forceParentLocale?: InputMaybe<Scalars['Boolean']>;
  locales?: InputMaybe<Array<Locale>>;
};

export type ReviewConnectInput = {
  /** Allow to specify document position in list of connected documents, will default to appending at end of list */
  position?: InputMaybe<ConnectPositionInput>;
  /** Document to connect */
  where: ReviewWhereUniqueInput;
};

/** A connection to a list of items. */
export type ReviewConnection = {
  __typename?: 'ReviewConnection';
  aggregate: Aggregate;
  /** A list of edges. */
  edges: Array<ReviewEdge>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
};

export type ReviewCreateInput = {
  clhg9a6fo05z201uo5g9xg13i?: InputMaybe<ProductCreateManyInlineInput>;
  content: Scalars['String'];
  createdAt?: InputMaybe<Scalars['DateTime']>;
  rating: Scalars['Int'];
  updatedAt?: InputMaybe<Scalars['DateTime']>;
  user: Scalars['String'];
};

export type ReviewCreateManyInlineInput = {
  /** Connect multiple existing Review documents */
  connect?: InputMaybe<Array<ReviewWhereUniqueInput>>;
  /** Create and connect multiple existing Review documents */
  create?: InputMaybe<Array<ReviewCreateInput>>;
};

export type ReviewCreateOneInlineInput = {
  /** Connect one existing Review document */
  connect?: InputMaybe<ReviewWhereUniqueInput>;
  /** Create and connect one Review document */
  create?: InputMaybe<ReviewCreateInput>;
};

/** An edge in a connection. */
export type ReviewEdge = {
  __typename?: 'ReviewEdge';
  /** A cursor for use in pagination. */
  cursor: Scalars['String'];
  /** The item at the end of the edge. */
  node: Review;
};

/** Identifies documents */
export type ReviewManyWhereInput = {
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<ReviewWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<ReviewWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<ReviewWhereInput>>;
  /** Contains search across all appropriate fields. */
  _search?: InputMaybe<Scalars['String']>;
  content?: InputMaybe<Scalars['String']>;
  /** All values containing the given string. */
  content_contains?: InputMaybe<Scalars['String']>;
  /** All values ending with the given string. */
  content_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are contained in given list. */
  content_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** Any other value that exists and is not equal to the given value. */
  content_not?: InputMaybe<Scalars['String']>;
  /** All values not containing the given string. */
  content_not_contains?: InputMaybe<Scalars['String']>;
  /** All values not ending with the given string */
  content_not_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  content_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values not starting with the given string. */
  content_not_starts_with?: InputMaybe<Scalars['String']>;
  /** All values starting with the given string. */
  content_starts_with?: InputMaybe<Scalars['String']>;
  createdAt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  createdAt_gt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  createdAt_gte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  createdAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  /** All values less than the given value. */
  createdAt_lt?: InputMaybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  createdAt_lte?: InputMaybe<Scalars['DateTime']>;
  /** Any other value that exists and is not equal to the given value. */
  createdAt_not?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  createdAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  createdBy?: InputMaybe<UserWhereInput>;
  documentInStages_every?: InputMaybe<ReviewWhereStageInput>;
  documentInStages_none?: InputMaybe<ReviewWhereStageInput>;
  documentInStages_some?: InputMaybe<ReviewWhereStageInput>;
  id?: InputMaybe<Scalars['ID']>;
  /** All values containing the given string. */
  id_contains?: InputMaybe<Scalars['ID']>;
  /** All values ending with the given string. */
  id_ends_with?: InputMaybe<Scalars['ID']>;
  /** All values that are contained in given list. */
  id_in?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  /** Any other value that exists and is not equal to the given value. */
  id_not?: InputMaybe<Scalars['ID']>;
  /** All values not containing the given string. */
  id_not_contains?: InputMaybe<Scalars['ID']>;
  /** All values not ending with the given string */
  id_not_ends_with?: InputMaybe<Scalars['ID']>;
  /** All values that are not contained in given list. */
  id_not_in?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  /** All values not starting with the given string. */
  id_not_starts_with?: InputMaybe<Scalars['ID']>;
  /** All values starting with the given string. */
  id_starts_with?: InputMaybe<Scalars['ID']>;
  publishedAt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  publishedAt_gt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  publishedAt_gte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  publishedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  /** All values less than the given value. */
  publishedAt_lt?: InputMaybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  publishedAt_lte?: InputMaybe<Scalars['DateTime']>;
  /** Any other value that exists and is not equal to the given value. */
  publishedAt_not?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  publishedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  publishedBy?: InputMaybe<UserWhereInput>;
  rating?: InputMaybe<Scalars['Int']>;
  /** All values greater than the given value. */
  rating_gt?: InputMaybe<Scalars['Int']>;
  /** All values greater than or equal the given value. */
  rating_gte?: InputMaybe<Scalars['Int']>;
  /** All values that are contained in given list. */
  rating_in?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  /** All values less than the given value. */
  rating_lt?: InputMaybe<Scalars['Int']>;
  /** All values less than or equal the given value. */
  rating_lte?: InputMaybe<Scalars['Int']>;
  /** Any other value that exists and is not equal to the given value. */
  rating_not?: InputMaybe<Scalars['Int']>;
  /** All values that are not contained in given list. */
  rating_not_in?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  scheduledIn_every?: InputMaybe<ScheduledOperationWhereInput>;
  scheduledIn_none?: InputMaybe<ScheduledOperationWhereInput>;
  scheduledIn_some?: InputMaybe<ScheduledOperationWhereInput>;
  updatedAt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  updatedAt_gt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  updatedAt_gte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  updatedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  /** All values less than the given value. */
  updatedAt_lt?: InputMaybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  updatedAt_lte?: InputMaybe<Scalars['DateTime']>;
  /** Any other value that exists and is not equal to the given value. */
  updatedAt_not?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  updatedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  updatedBy?: InputMaybe<UserWhereInput>;
  user?: InputMaybe<Scalars['String']>;
  /** All values containing the given string. */
  user_contains?: InputMaybe<Scalars['String']>;
  /** All values ending with the given string. */
  user_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are contained in given list. */
  user_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** Any other value that exists and is not equal to the given value. */
  user_not?: InputMaybe<Scalars['String']>;
  /** All values not containing the given string. */
  user_not_contains?: InputMaybe<Scalars['String']>;
  /** All values not ending with the given string */
  user_not_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  user_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values not starting with the given string. */
  user_not_starts_with?: InputMaybe<Scalars['String']>;
  /** All values starting with the given string. */
  user_starts_with?: InputMaybe<Scalars['String']>;
};

export enum ReviewOrderByInput {
  ContentAsc = 'content_ASC',
  ContentDesc = 'content_DESC',
  CreatedAtAsc = 'createdAt_ASC',
  CreatedAtDesc = 'createdAt_DESC',
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC',
  PublishedAtAsc = 'publishedAt_ASC',
  PublishedAtDesc = 'publishedAt_DESC',
  RatingAsc = 'rating_ASC',
  RatingDesc = 'rating_DESC',
  UpdatedAtAsc = 'updatedAt_ASC',
  UpdatedAtDesc = 'updatedAt_DESC',
  UserAsc = 'user_ASC',
  UserDesc = 'user_DESC'
}

export type ReviewUpdateInput = {
  clhg9a6fo05z201uo5g9xg13i?: InputMaybe<ProductUpdateManyInlineInput>;
  content?: InputMaybe<Scalars['String']>;
  rating?: InputMaybe<Scalars['Int']>;
  user?: InputMaybe<Scalars['String']>;
};

export type ReviewUpdateManyInlineInput = {
  /** Connect multiple existing Review documents */
  connect?: InputMaybe<Array<ReviewConnectInput>>;
  /** Create and connect multiple Review documents */
  create?: InputMaybe<Array<ReviewCreateInput>>;
  /** Delete multiple Review documents */
  delete?: InputMaybe<Array<ReviewWhereUniqueInput>>;
  /** Disconnect multiple Review documents */
  disconnect?: InputMaybe<Array<ReviewWhereUniqueInput>>;
  /** Override currently-connected documents with multiple existing Review documents */
  set?: InputMaybe<Array<ReviewWhereUniqueInput>>;
  /** Update multiple Review documents */
  update?: InputMaybe<Array<ReviewUpdateWithNestedWhereUniqueInput>>;
  /** Upsert multiple Review documents */
  upsert?: InputMaybe<Array<ReviewUpsertWithNestedWhereUniqueInput>>;
};

export type ReviewUpdateManyInput = {
  content?: InputMaybe<Scalars['String']>;
  rating?: InputMaybe<Scalars['Int']>;
  user?: InputMaybe<Scalars['String']>;
};

export type ReviewUpdateManyWithNestedWhereInput = {
  /** Update many input */
  data: ReviewUpdateManyInput;
  /** Document search */
  where: ReviewWhereInput;
};

export type ReviewUpdateOneInlineInput = {
  /** Connect existing Review document */
  connect?: InputMaybe<ReviewWhereUniqueInput>;
  /** Create and connect one Review document */
  create?: InputMaybe<ReviewCreateInput>;
  /** Delete currently connected Review document */
  delete?: InputMaybe<Scalars['Boolean']>;
  /** Disconnect currently connected Review document */
  disconnect?: InputMaybe<Scalars['Boolean']>;
  /** Update single Review document */
  update?: InputMaybe<ReviewUpdateWithNestedWhereUniqueInput>;
  /** Upsert single Review document */
  upsert?: InputMaybe<ReviewUpsertWithNestedWhereUniqueInput>;
};

export type ReviewUpdateWithNestedWhereUniqueInput = {
  /** Document to update */
  data: ReviewUpdateInput;
  /** Unique document search */
  where: ReviewWhereUniqueInput;
};

export type ReviewUpsertInput = {
  /** Create document if it didn't exist */
  create: ReviewCreateInput;
  /** Update document if it exists */
  update: ReviewUpdateInput;
};

export type ReviewUpsertWithNestedWhereUniqueInput = {
  /** Upsert data */
  data: ReviewUpsertInput;
  /** Unique document search */
  where: ReviewWhereUniqueInput;
};

/** This contains a set of filters that can be used to compare values internally */
export type ReviewWhereComparatorInput = {
  /** This field can be used to request to check if the entry is outdated by internal comparison */
  outdated_to?: InputMaybe<Scalars['Boolean']>;
};

/** Identifies documents */
export type ReviewWhereInput = {
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<ReviewWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<ReviewWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<ReviewWhereInput>>;
  /** Contains search across all appropriate fields. */
  _search?: InputMaybe<Scalars['String']>;
  content?: InputMaybe<Scalars['String']>;
  /** All values containing the given string. */
  content_contains?: InputMaybe<Scalars['String']>;
  /** All values ending with the given string. */
  content_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are contained in given list. */
  content_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** Any other value that exists and is not equal to the given value. */
  content_not?: InputMaybe<Scalars['String']>;
  /** All values not containing the given string. */
  content_not_contains?: InputMaybe<Scalars['String']>;
  /** All values not ending with the given string */
  content_not_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  content_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values not starting with the given string. */
  content_not_starts_with?: InputMaybe<Scalars['String']>;
  /** All values starting with the given string. */
  content_starts_with?: InputMaybe<Scalars['String']>;
  createdAt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  createdAt_gt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  createdAt_gte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  createdAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  /** All values less than the given value. */
  createdAt_lt?: InputMaybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  createdAt_lte?: InputMaybe<Scalars['DateTime']>;
  /** Any other value that exists and is not equal to the given value. */
  createdAt_not?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  createdAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  createdBy?: InputMaybe<UserWhereInput>;
  documentInStages_every?: InputMaybe<ReviewWhereStageInput>;
  documentInStages_none?: InputMaybe<ReviewWhereStageInput>;
  documentInStages_some?: InputMaybe<ReviewWhereStageInput>;
  id?: InputMaybe<Scalars['ID']>;
  /** All values containing the given string. */
  id_contains?: InputMaybe<Scalars['ID']>;
  /** All values ending with the given string. */
  id_ends_with?: InputMaybe<Scalars['ID']>;
  /** All values that are contained in given list. */
  id_in?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  /** Any other value that exists and is not equal to the given value. */
  id_not?: InputMaybe<Scalars['ID']>;
  /** All values not containing the given string. */
  id_not_contains?: InputMaybe<Scalars['ID']>;
  /** All values not ending with the given string */
  id_not_ends_with?: InputMaybe<Scalars['ID']>;
  /** All values that are not contained in given list. */
  id_not_in?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  /** All values not starting with the given string. */
  id_not_starts_with?: InputMaybe<Scalars['ID']>;
  /** All values starting with the given string. */
  id_starts_with?: InputMaybe<Scalars['ID']>;
  publishedAt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  publishedAt_gt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  publishedAt_gte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  publishedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  /** All values less than the given value. */
  publishedAt_lt?: InputMaybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  publishedAt_lte?: InputMaybe<Scalars['DateTime']>;
  /** Any other value that exists and is not equal to the given value. */
  publishedAt_not?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  publishedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  publishedBy?: InputMaybe<UserWhereInput>;
  rating?: InputMaybe<Scalars['Int']>;
  /** All values greater than the given value. */
  rating_gt?: InputMaybe<Scalars['Int']>;
  /** All values greater than or equal the given value. */
  rating_gte?: InputMaybe<Scalars['Int']>;
  /** All values that are contained in given list. */
  rating_in?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  /** All values less than the given value. */
  rating_lt?: InputMaybe<Scalars['Int']>;
  /** All values less than or equal the given value. */
  rating_lte?: InputMaybe<Scalars['Int']>;
  /** Any other value that exists and is not equal to the given value. */
  rating_not?: InputMaybe<Scalars['Int']>;
  /** All values that are not contained in given list. */
  rating_not_in?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  scheduledIn_every?: InputMaybe<ScheduledOperationWhereInput>;
  scheduledIn_none?: InputMaybe<ScheduledOperationWhereInput>;
  scheduledIn_some?: InputMaybe<ScheduledOperationWhereInput>;
  updatedAt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  updatedAt_gt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  updatedAt_gte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  updatedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  /** All values less than the given value. */
  updatedAt_lt?: InputMaybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  updatedAt_lte?: InputMaybe<Scalars['DateTime']>;
  /** Any other value that exists and is not equal to the given value. */
  updatedAt_not?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  updatedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  updatedBy?: InputMaybe<UserWhereInput>;
  user?: InputMaybe<Scalars['String']>;
  /** All values containing the given string. */
  user_contains?: InputMaybe<Scalars['String']>;
  /** All values ending with the given string. */
  user_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are contained in given list. */
  user_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** Any other value that exists and is not equal to the given value. */
  user_not?: InputMaybe<Scalars['String']>;
  /** All values not containing the given string. */
  user_not_contains?: InputMaybe<Scalars['String']>;
  /** All values not ending with the given string */
  user_not_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  user_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values not starting with the given string. */
  user_not_starts_with?: InputMaybe<Scalars['String']>;
  /** All values starting with the given string. */
  user_starts_with?: InputMaybe<Scalars['String']>;
};

/** The document in stages filter allows specifying a stage entry to cross compare the same document between different stages */
export type ReviewWhereStageInput = {
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<ReviewWhereStageInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<ReviewWhereStageInput>>;
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<ReviewWhereStageInput>>;
  /** This field contains fields which can be set as true or false to specify an internal comparison */
  compareWithParent?: InputMaybe<ReviewWhereComparatorInput>;
  /** Specify the stage to compare with */
  stage?: InputMaybe<Stage>;
};

/** References Review record uniquely */
export type ReviewWhereUniqueInput = {
  id?: InputMaybe<Scalars['ID']>;
};

/** Custom type representing a rich text value comprising of raw rich text ast, html, markdown and text values */
export type RichText = {
  __typename?: 'RichText';
  /** Returns HTMl representation */
  html: Scalars['String'];
  /** Returns Markdown representation */
  markdown: Scalars['String'];
  /** Returns AST representation */
  raw: Scalars['RichTextAST'];
  /** Returns plain-text contents of RichText */
  text: Scalars['String'];
};

/** Scheduled Operation system model */
export type ScheduledOperation = Node & {
  __typename?: 'ScheduledOperation';
  affectedDocuments: Array<ScheduledOperationAffectedDocument>;
  /** The time the document was created */
  createdAt: Scalars['DateTime'];
  /** User that created this document */
  createdBy?: Maybe<User>;
  /** Operation description */
  description?: Maybe<Scalars['String']>;
  /** Get the document in other stages */
  documentInStages: Array<ScheduledOperation>;
  /** Operation error message */
  errorMessage?: Maybe<Scalars['String']>;
  /** The unique identifier */
  id: Scalars['ID'];
  /** The time the document was published. Null on documents in draft stage. */
  publishedAt?: Maybe<Scalars['DateTime']>;
  /** User that last published this document */
  publishedBy?: Maybe<User>;
  /** Raw operation payload including all details, this field is subject to change */
  rawPayload: Scalars['Json'];
  /** The release this operation is scheduled for */
  release?: Maybe<ScheduledRelease>;
  /** System stage field */
  stage: Stage;
  /** operation Status */
  status: ScheduledOperationStatus;
  /** The time the document was updated */
  updatedAt: Scalars['DateTime'];
  /** User that last updated this document */
  updatedBy?: Maybe<User>;
};


/** Scheduled Operation system model */
export type ScheduledOperationAffectedDocumentsArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  forceParentLocale?: InputMaybe<Scalars['Boolean']>;
  last?: InputMaybe<Scalars['Int']>;
  locales?: InputMaybe<Array<Locale>>;
  skip?: InputMaybe<Scalars['Int']>;
};


/** Scheduled Operation system model */
export type ScheduledOperationCreatedByArgs = {
  forceParentLocale?: InputMaybe<Scalars['Boolean']>;
  locales?: InputMaybe<Array<Locale>>;
};


/** Scheduled Operation system model */
export type ScheduledOperationDocumentInStagesArgs = {
  includeCurrent?: Scalars['Boolean'];
  inheritLocale?: Scalars['Boolean'];
  stages?: Array<Stage>;
};


/** Scheduled Operation system model */
export type ScheduledOperationPublishedByArgs = {
  forceParentLocale?: InputMaybe<Scalars['Boolean']>;
  locales?: InputMaybe<Array<Locale>>;
};


/** Scheduled Operation system model */
export type ScheduledOperationReleaseArgs = {
  forceParentLocale?: InputMaybe<Scalars['Boolean']>;
  locales?: InputMaybe<Array<Locale>>;
};


/** Scheduled Operation system model */
export type ScheduledOperationUpdatedByArgs = {
  forceParentLocale?: InputMaybe<Scalars['Boolean']>;
  locales?: InputMaybe<Array<Locale>>;
};

export type ScheduledOperationAffectedDocument = Account | Asset | Comment | Order | Product | Review;

export type ScheduledOperationConnectInput = {
  /** Allow to specify document position in list of connected documents, will default to appending at end of list */
  position?: InputMaybe<ConnectPositionInput>;
  /** Document to connect */
  where: ScheduledOperationWhereUniqueInput;
};

/** A connection to a list of items. */
export type ScheduledOperationConnection = {
  __typename?: 'ScheduledOperationConnection';
  aggregate: Aggregate;
  /** A list of edges. */
  edges: Array<ScheduledOperationEdge>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
};

export type ScheduledOperationCreateManyInlineInput = {
  /** Connect multiple existing ScheduledOperation documents */
  connect?: InputMaybe<Array<ScheduledOperationWhereUniqueInput>>;
};

export type ScheduledOperationCreateOneInlineInput = {
  /** Connect one existing ScheduledOperation document */
  connect?: InputMaybe<ScheduledOperationWhereUniqueInput>;
};

/** An edge in a connection. */
export type ScheduledOperationEdge = {
  __typename?: 'ScheduledOperationEdge';
  /** A cursor for use in pagination. */
  cursor: Scalars['String'];
  /** The item at the end of the edge. */
  node: ScheduledOperation;
};

/** Identifies documents */
export type ScheduledOperationManyWhereInput = {
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<ScheduledOperationWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<ScheduledOperationWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<ScheduledOperationWhereInput>>;
  /** Contains search across all appropriate fields. */
  _search?: InputMaybe<Scalars['String']>;
  createdAt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  createdAt_gt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  createdAt_gte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  createdAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  /** All values less than the given value. */
  createdAt_lt?: InputMaybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  createdAt_lte?: InputMaybe<Scalars['DateTime']>;
  /** Any other value that exists and is not equal to the given value. */
  createdAt_not?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  createdAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  createdBy?: InputMaybe<UserWhereInput>;
  description?: InputMaybe<Scalars['String']>;
  /** All values containing the given string. */
  description_contains?: InputMaybe<Scalars['String']>;
  /** All values ending with the given string. */
  description_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are contained in given list. */
  description_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** Any other value that exists and is not equal to the given value. */
  description_not?: InputMaybe<Scalars['String']>;
  /** All values not containing the given string. */
  description_not_contains?: InputMaybe<Scalars['String']>;
  /** All values not ending with the given string */
  description_not_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  description_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values not starting with the given string. */
  description_not_starts_with?: InputMaybe<Scalars['String']>;
  /** All values starting with the given string. */
  description_starts_with?: InputMaybe<Scalars['String']>;
  errorMessage?: InputMaybe<Scalars['String']>;
  /** All values containing the given string. */
  errorMessage_contains?: InputMaybe<Scalars['String']>;
  /** All values ending with the given string. */
  errorMessage_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are contained in given list. */
  errorMessage_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** Any other value that exists and is not equal to the given value. */
  errorMessage_not?: InputMaybe<Scalars['String']>;
  /** All values not containing the given string. */
  errorMessage_not_contains?: InputMaybe<Scalars['String']>;
  /** All values not ending with the given string */
  errorMessage_not_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  errorMessage_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values not starting with the given string. */
  errorMessage_not_starts_with?: InputMaybe<Scalars['String']>;
  /** All values starting with the given string. */
  errorMessage_starts_with?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['ID']>;
  /** All values containing the given string. */
  id_contains?: InputMaybe<Scalars['ID']>;
  /** All values ending with the given string. */
  id_ends_with?: InputMaybe<Scalars['ID']>;
  /** All values that are contained in given list. */
  id_in?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  /** Any other value that exists and is not equal to the given value. */
  id_not?: InputMaybe<Scalars['ID']>;
  /** All values not containing the given string. */
  id_not_contains?: InputMaybe<Scalars['ID']>;
  /** All values not ending with the given string */
  id_not_ends_with?: InputMaybe<Scalars['ID']>;
  /** All values that are not contained in given list. */
  id_not_in?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  /** All values not starting with the given string. */
  id_not_starts_with?: InputMaybe<Scalars['ID']>;
  /** All values starting with the given string. */
  id_starts_with?: InputMaybe<Scalars['ID']>;
  publishedAt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  publishedAt_gt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  publishedAt_gte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  publishedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  /** All values less than the given value. */
  publishedAt_lt?: InputMaybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  publishedAt_lte?: InputMaybe<Scalars['DateTime']>;
  /** Any other value that exists and is not equal to the given value. */
  publishedAt_not?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  publishedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  publishedBy?: InputMaybe<UserWhereInput>;
  /** All values containing the given json path. */
  rawPayload_json_path_exists?: InputMaybe<Scalars['String']>;
  /**
   * Recursively tries to find the provided JSON scalar value inside the field.
   * It does use an exact match when comparing values.
   * If you pass `null` as value the filter will be ignored.
   * Note: This filter fails if you try to look for a non scalar JSON value!
   */
  rawPayload_value_recursive?: InputMaybe<Scalars['Json']>;
  release?: InputMaybe<ScheduledReleaseWhereInput>;
  status?: InputMaybe<ScheduledOperationStatus>;
  /** All values that are contained in given list. */
  status_in?: InputMaybe<Array<InputMaybe<ScheduledOperationStatus>>>;
  /** Any other value that exists and is not equal to the given value. */
  status_not?: InputMaybe<ScheduledOperationStatus>;
  /** All values that are not contained in given list. */
  status_not_in?: InputMaybe<Array<InputMaybe<ScheduledOperationStatus>>>;
  updatedAt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  updatedAt_gt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  updatedAt_gte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  updatedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  /** All values less than the given value. */
  updatedAt_lt?: InputMaybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  updatedAt_lte?: InputMaybe<Scalars['DateTime']>;
  /** Any other value that exists and is not equal to the given value. */
  updatedAt_not?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  updatedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  updatedBy?: InputMaybe<UserWhereInput>;
};

export enum ScheduledOperationOrderByInput {
  CreatedAtAsc = 'createdAt_ASC',
  CreatedAtDesc = 'createdAt_DESC',
  DescriptionAsc = 'description_ASC',
  DescriptionDesc = 'description_DESC',
  ErrorMessageAsc = 'errorMessage_ASC',
  ErrorMessageDesc = 'errorMessage_DESC',
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC',
  PublishedAtAsc = 'publishedAt_ASC',
  PublishedAtDesc = 'publishedAt_DESC',
  StatusAsc = 'status_ASC',
  StatusDesc = 'status_DESC',
  UpdatedAtAsc = 'updatedAt_ASC',
  UpdatedAtDesc = 'updatedAt_DESC'
}

/** System Scheduled Operation Status */
export enum ScheduledOperationStatus {
  Canceled = 'CANCELED',
  Completed = 'COMPLETED',
  Failed = 'FAILED',
  InProgress = 'IN_PROGRESS',
  Pending = 'PENDING'
}

export type ScheduledOperationUpdateManyInlineInput = {
  /** Connect multiple existing ScheduledOperation documents */
  connect?: InputMaybe<Array<ScheduledOperationConnectInput>>;
  /** Disconnect multiple ScheduledOperation documents */
  disconnect?: InputMaybe<Array<ScheduledOperationWhereUniqueInput>>;
  /** Override currently-connected documents with multiple existing ScheduledOperation documents */
  set?: InputMaybe<Array<ScheduledOperationWhereUniqueInput>>;
};

export type ScheduledOperationUpdateOneInlineInput = {
  /** Connect existing ScheduledOperation document */
  connect?: InputMaybe<ScheduledOperationWhereUniqueInput>;
  /** Disconnect currently connected ScheduledOperation document */
  disconnect?: InputMaybe<Scalars['Boolean']>;
};

/** Identifies documents */
export type ScheduledOperationWhereInput = {
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<ScheduledOperationWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<ScheduledOperationWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<ScheduledOperationWhereInput>>;
  /** Contains search across all appropriate fields. */
  _search?: InputMaybe<Scalars['String']>;
  createdAt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  createdAt_gt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  createdAt_gte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  createdAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  /** All values less than the given value. */
  createdAt_lt?: InputMaybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  createdAt_lte?: InputMaybe<Scalars['DateTime']>;
  /** Any other value that exists and is not equal to the given value. */
  createdAt_not?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  createdAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  createdBy?: InputMaybe<UserWhereInput>;
  description?: InputMaybe<Scalars['String']>;
  /** All values containing the given string. */
  description_contains?: InputMaybe<Scalars['String']>;
  /** All values ending with the given string. */
  description_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are contained in given list. */
  description_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** Any other value that exists and is not equal to the given value. */
  description_not?: InputMaybe<Scalars['String']>;
  /** All values not containing the given string. */
  description_not_contains?: InputMaybe<Scalars['String']>;
  /** All values not ending with the given string */
  description_not_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  description_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values not starting with the given string. */
  description_not_starts_with?: InputMaybe<Scalars['String']>;
  /** All values starting with the given string. */
  description_starts_with?: InputMaybe<Scalars['String']>;
  errorMessage?: InputMaybe<Scalars['String']>;
  /** All values containing the given string. */
  errorMessage_contains?: InputMaybe<Scalars['String']>;
  /** All values ending with the given string. */
  errorMessage_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are contained in given list. */
  errorMessage_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** Any other value that exists and is not equal to the given value. */
  errorMessage_not?: InputMaybe<Scalars['String']>;
  /** All values not containing the given string. */
  errorMessage_not_contains?: InputMaybe<Scalars['String']>;
  /** All values not ending with the given string */
  errorMessage_not_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  errorMessage_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values not starting with the given string. */
  errorMessage_not_starts_with?: InputMaybe<Scalars['String']>;
  /** All values starting with the given string. */
  errorMessage_starts_with?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['ID']>;
  /** All values containing the given string. */
  id_contains?: InputMaybe<Scalars['ID']>;
  /** All values ending with the given string. */
  id_ends_with?: InputMaybe<Scalars['ID']>;
  /** All values that are contained in given list. */
  id_in?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  /** Any other value that exists and is not equal to the given value. */
  id_not?: InputMaybe<Scalars['ID']>;
  /** All values not containing the given string. */
  id_not_contains?: InputMaybe<Scalars['ID']>;
  /** All values not ending with the given string */
  id_not_ends_with?: InputMaybe<Scalars['ID']>;
  /** All values that are not contained in given list. */
  id_not_in?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  /** All values not starting with the given string. */
  id_not_starts_with?: InputMaybe<Scalars['ID']>;
  /** All values starting with the given string. */
  id_starts_with?: InputMaybe<Scalars['ID']>;
  publishedAt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  publishedAt_gt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  publishedAt_gte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  publishedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  /** All values less than the given value. */
  publishedAt_lt?: InputMaybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  publishedAt_lte?: InputMaybe<Scalars['DateTime']>;
  /** Any other value that exists and is not equal to the given value. */
  publishedAt_not?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  publishedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  publishedBy?: InputMaybe<UserWhereInput>;
  /** All values containing the given json path. */
  rawPayload_json_path_exists?: InputMaybe<Scalars['String']>;
  /**
   * Recursively tries to find the provided JSON scalar value inside the field.
   * It does use an exact match when comparing values.
   * If you pass `null` as value the filter will be ignored.
   * Note: This filter fails if you try to look for a non scalar JSON value!
   */
  rawPayload_value_recursive?: InputMaybe<Scalars['Json']>;
  release?: InputMaybe<ScheduledReleaseWhereInput>;
  status?: InputMaybe<ScheduledOperationStatus>;
  /** All values that are contained in given list. */
  status_in?: InputMaybe<Array<InputMaybe<ScheduledOperationStatus>>>;
  /** Any other value that exists and is not equal to the given value. */
  status_not?: InputMaybe<ScheduledOperationStatus>;
  /** All values that are not contained in given list. */
  status_not_in?: InputMaybe<Array<InputMaybe<ScheduledOperationStatus>>>;
  updatedAt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  updatedAt_gt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  updatedAt_gte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  updatedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  /** All values less than the given value. */
  updatedAt_lt?: InputMaybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  updatedAt_lte?: InputMaybe<Scalars['DateTime']>;
  /** Any other value that exists and is not equal to the given value. */
  updatedAt_not?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  updatedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  updatedBy?: InputMaybe<UserWhereInput>;
};

/** References ScheduledOperation record uniquely */
export type ScheduledOperationWhereUniqueInput = {
  id?: InputMaybe<Scalars['ID']>;
};

/** Scheduled Release system model */
export type ScheduledRelease = Node & {
  __typename?: 'ScheduledRelease';
  /** The time the document was created */
  createdAt: Scalars['DateTime'];
  /** User that created this document */
  createdBy?: Maybe<User>;
  /** Release description */
  description?: Maybe<Scalars['String']>;
  /** Get the document in other stages */
  documentInStages: Array<ScheduledRelease>;
  /** Release error message */
  errorMessage?: Maybe<Scalars['String']>;
  /** The unique identifier */
  id: Scalars['ID'];
  /** Whether scheduled release should be run */
  isActive: Scalars['Boolean'];
  /** Whether scheduled release is implicit */
  isImplicit: Scalars['Boolean'];
  /** Operations to run with this release */
  operations: Array<ScheduledOperation>;
  /** The time the document was published. Null on documents in draft stage. */
  publishedAt?: Maybe<Scalars['DateTime']>;
  /** User that last published this document */
  publishedBy?: Maybe<User>;
  /** Release date and time */
  releaseAt?: Maybe<Scalars['DateTime']>;
  /** System stage field */
  stage: Stage;
  /** Release Status */
  status: ScheduledReleaseStatus;
  /** Release Title */
  title?: Maybe<Scalars['String']>;
  /** The time the document was updated */
  updatedAt: Scalars['DateTime'];
  /** User that last updated this document */
  updatedBy?: Maybe<User>;
};


/** Scheduled Release system model */
export type ScheduledReleaseCreatedByArgs = {
  forceParentLocale?: InputMaybe<Scalars['Boolean']>;
  locales?: InputMaybe<Array<Locale>>;
};


/** Scheduled Release system model */
export type ScheduledReleaseDocumentInStagesArgs = {
  includeCurrent?: Scalars['Boolean'];
  inheritLocale?: Scalars['Boolean'];
  stages?: Array<Stage>;
};


/** Scheduled Release system model */
export type ScheduledReleaseOperationsArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  forceParentLocale?: InputMaybe<Scalars['Boolean']>;
  last?: InputMaybe<Scalars['Int']>;
  locales?: InputMaybe<Array<Locale>>;
  orderBy?: InputMaybe<ScheduledOperationOrderByInput>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<ScheduledOperationWhereInput>;
};


/** Scheduled Release system model */
export type ScheduledReleasePublishedByArgs = {
  forceParentLocale?: InputMaybe<Scalars['Boolean']>;
  locales?: InputMaybe<Array<Locale>>;
};


/** Scheduled Release system model */
export type ScheduledReleaseUpdatedByArgs = {
  forceParentLocale?: InputMaybe<Scalars['Boolean']>;
  locales?: InputMaybe<Array<Locale>>;
};

export type ScheduledReleaseConnectInput = {
  /** Allow to specify document position in list of connected documents, will default to appending at end of list */
  position?: InputMaybe<ConnectPositionInput>;
  /** Document to connect */
  where: ScheduledReleaseWhereUniqueInput;
};

/** A connection to a list of items. */
export type ScheduledReleaseConnection = {
  __typename?: 'ScheduledReleaseConnection';
  aggregate: Aggregate;
  /** A list of edges. */
  edges: Array<ScheduledReleaseEdge>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
};

export type ScheduledReleaseCreateInput = {
  createdAt?: InputMaybe<Scalars['DateTime']>;
  description?: InputMaybe<Scalars['String']>;
  errorMessage?: InputMaybe<Scalars['String']>;
  isActive?: InputMaybe<Scalars['Boolean']>;
  releaseAt?: InputMaybe<Scalars['DateTime']>;
  title?: InputMaybe<Scalars['String']>;
  updatedAt?: InputMaybe<Scalars['DateTime']>;
};

export type ScheduledReleaseCreateManyInlineInput = {
  /** Connect multiple existing ScheduledRelease documents */
  connect?: InputMaybe<Array<ScheduledReleaseWhereUniqueInput>>;
  /** Create and connect multiple existing ScheduledRelease documents */
  create?: InputMaybe<Array<ScheduledReleaseCreateInput>>;
};

export type ScheduledReleaseCreateOneInlineInput = {
  /** Connect one existing ScheduledRelease document */
  connect?: InputMaybe<ScheduledReleaseWhereUniqueInput>;
  /** Create and connect one ScheduledRelease document */
  create?: InputMaybe<ScheduledReleaseCreateInput>;
};

/** An edge in a connection. */
export type ScheduledReleaseEdge = {
  __typename?: 'ScheduledReleaseEdge';
  /** A cursor for use in pagination. */
  cursor: Scalars['String'];
  /** The item at the end of the edge. */
  node: ScheduledRelease;
};

/** Identifies documents */
export type ScheduledReleaseManyWhereInput = {
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<ScheduledReleaseWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<ScheduledReleaseWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<ScheduledReleaseWhereInput>>;
  /** Contains search across all appropriate fields. */
  _search?: InputMaybe<Scalars['String']>;
  createdAt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  createdAt_gt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  createdAt_gte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  createdAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  /** All values less than the given value. */
  createdAt_lt?: InputMaybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  createdAt_lte?: InputMaybe<Scalars['DateTime']>;
  /** Any other value that exists and is not equal to the given value. */
  createdAt_not?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  createdAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  createdBy?: InputMaybe<UserWhereInput>;
  description?: InputMaybe<Scalars['String']>;
  /** All values containing the given string. */
  description_contains?: InputMaybe<Scalars['String']>;
  /** All values ending with the given string. */
  description_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are contained in given list. */
  description_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** Any other value that exists and is not equal to the given value. */
  description_not?: InputMaybe<Scalars['String']>;
  /** All values not containing the given string. */
  description_not_contains?: InputMaybe<Scalars['String']>;
  /** All values not ending with the given string */
  description_not_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  description_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values not starting with the given string. */
  description_not_starts_with?: InputMaybe<Scalars['String']>;
  /** All values starting with the given string. */
  description_starts_with?: InputMaybe<Scalars['String']>;
  errorMessage?: InputMaybe<Scalars['String']>;
  /** All values containing the given string. */
  errorMessage_contains?: InputMaybe<Scalars['String']>;
  /** All values ending with the given string. */
  errorMessage_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are contained in given list. */
  errorMessage_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** Any other value that exists and is not equal to the given value. */
  errorMessage_not?: InputMaybe<Scalars['String']>;
  /** All values not containing the given string. */
  errorMessage_not_contains?: InputMaybe<Scalars['String']>;
  /** All values not ending with the given string */
  errorMessage_not_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  errorMessage_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values not starting with the given string. */
  errorMessage_not_starts_with?: InputMaybe<Scalars['String']>;
  /** All values starting with the given string. */
  errorMessage_starts_with?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['ID']>;
  /** All values containing the given string. */
  id_contains?: InputMaybe<Scalars['ID']>;
  /** All values ending with the given string. */
  id_ends_with?: InputMaybe<Scalars['ID']>;
  /** All values that are contained in given list. */
  id_in?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  /** Any other value that exists and is not equal to the given value. */
  id_not?: InputMaybe<Scalars['ID']>;
  /** All values not containing the given string. */
  id_not_contains?: InputMaybe<Scalars['ID']>;
  /** All values not ending with the given string */
  id_not_ends_with?: InputMaybe<Scalars['ID']>;
  /** All values that are not contained in given list. */
  id_not_in?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  /** All values not starting with the given string. */
  id_not_starts_with?: InputMaybe<Scalars['ID']>;
  /** All values starting with the given string. */
  id_starts_with?: InputMaybe<Scalars['ID']>;
  isActive?: InputMaybe<Scalars['Boolean']>;
  /** Any other value that exists and is not equal to the given value. */
  isActive_not?: InputMaybe<Scalars['Boolean']>;
  isImplicit?: InputMaybe<Scalars['Boolean']>;
  /** Any other value that exists and is not equal to the given value. */
  isImplicit_not?: InputMaybe<Scalars['Boolean']>;
  operations_every?: InputMaybe<ScheduledOperationWhereInput>;
  operations_none?: InputMaybe<ScheduledOperationWhereInput>;
  operations_some?: InputMaybe<ScheduledOperationWhereInput>;
  publishedAt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  publishedAt_gt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  publishedAt_gte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  publishedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  /** All values less than the given value. */
  publishedAt_lt?: InputMaybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  publishedAt_lte?: InputMaybe<Scalars['DateTime']>;
  /** Any other value that exists and is not equal to the given value. */
  publishedAt_not?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  publishedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  publishedBy?: InputMaybe<UserWhereInput>;
  releaseAt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  releaseAt_gt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  releaseAt_gte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  releaseAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  /** All values less than the given value. */
  releaseAt_lt?: InputMaybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  releaseAt_lte?: InputMaybe<Scalars['DateTime']>;
  /** Any other value that exists and is not equal to the given value. */
  releaseAt_not?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  releaseAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  status?: InputMaybe<ScheduledReleaseStatus>;
  /** All values that are contained in given list. */
  status_in?: InputMaybe<Array<InputMaybe<ScheduledReleaseStatus>>>;
  /** Any other value that exists and is not equal to the given value. */
  status_not?: InputMaybe<ScheduledReleaseStatus>;
  /** All values that are not contained in given list. */
  status_not_in?: InputMaybe<Array<InputMaybe<ScheduledReleaseStatus>>>;
  title?: InputMaybe<Scalars['String']>;
  /** All values containing the given string. */
  title_contains?: InputMaybe<Scalars['String']>;
  /** All values ending with the given string. */
  title_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are contained in given list. */
  title_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** Any other value that exists and is not equal to the given value. */
  title_not?: InputMaybe<Scalars['String']>;
  /** All values not containing the given string. */
  title_not_contains?: InputMaybe<Scalars['String']>;
  /** All values not ending with the given string */
  title_not_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  title_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values not starting with the given string. */
  title_not_starts_with?: InputMaybe<Scalars['String']>;
  /** All values starting with the given string. */
  title_starts_with?: InputMaybe<Scalars['String']>;
  updatedAt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  updatedAt_gt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  updatedAt_gte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  updatedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  /** All values less than the given value. */
  updatedAt_lt?: InputMaybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  updatedAt_lte?: InputMaybe<Scalars['DateTime']>;
  /** Any other value that exists and is not equal to the given value. */
  updatedAt_not?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  updatedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  updatedBy?: InputMaybe<UserWhereInput>;
};

export enum ScheduledReleaseOrderByInput {
  CreatedAtAsc = 'createdAt_ASC',
  CreatedAtDesc = 'createdAt_DESC',
  DescriptionAsc = 'description_ASC',
  DescriptionDesc = 'description_DESC',
  ErrorMessageAsc = 'errorMessage_ASC',
  ErrorMessageDesc = 'errorMessage_DESC',
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC',
  IsActiveAsc = 'isActive_ASC',
  IsActiveDesc = 'isActive_DESC',
  IsImplicitAsc = 'isImplicit_ASC',
  IsImplicitDesc = 'isImplicit_DESC',
  PublishedAtAsc = 'publishedAt_ASC',
  PublishedAtDesc = 'publishedAt_DESC',
  ReleaseAtAsc = 'releaseAt_ASC',
  ReleaseAtDesc = 'releaseAt_DESC',
  StatusAsc = 'status_ASC',
  StatusDesc = 'status_DESC',
  TitleAsc = 'title_ASC',
  TitleDesc = 'title_DESC',
  UpdatedAtAsc = 'updatedAt_ASC',
  UpdatedAtDesc = 'updatedAt_DESC'
}

/** System Scheduled Release Status */
export enum ScheduledReleaseStatus {
  Completed = 'COMPLETED',
  Failed = 'FAILED',
  InProgress = 'IN_PROGRESS',
  Pending = 'PENDING'
}

export type ScheduledReleaseUpdateInput = {
  description?: InputMaybe<Scalars['String']>;
  errorMessage?: InputMaybe<Scalars['String']>;
  isActive?: InputMaybe<Scalars['Boolean']>;
  releaseAt?: InputMaybe<Scalars['DateTime']>;
  title?: InputMaybe<Scalars['String']>;
};

export type ScheduledReleaseUpdateManyInlineInput = {
  /** Connect multiple existing ScheduledRelease documents */
  connect?: InputMaybe<Array<ScheduledReleaseConnectInput>>;
  /** Create and connect multiple ScheduledRelease documents */
  create?: InputMaybe<Array<ScheduledReleaseCreateInput>>;
  /** Delete multiple ScheduledRelease documents */
  delete?: InputMaybe<Array<ScheduledReleaseWhereUniqueInput>>;
  /** Disconnect multiple ScheduledRelease documents */
  disconnect?: InputMaybe<Array<ScheduledReleaseWhereUniqueInput>>;
  /** Override currently-connected documents with multiple existing ScheduledRelease documents */
  set?: InputMaybe<Array<ScheduledReleaseWhereUniqueInput>>;
  /** Update multiple ScheduledRelease documents */
  update?: InputMaybe<Array<ScheduledReleaseUpdateWithNestedWhereUniqueInput>>;
  /** Upsert multiple ScheduledRelease documents */
  upsert?: InputMaybe<Array<ScheduledReleaseUpsertWithNestedWhereUniqueInput>>;
};

export type ScheduledReleaseUpdateManyInput = {
  description?: InputMaybe<Scalars['String']>;
  errorMessage?: InputMaybe<Scalars['String']>;
  isActive?: InputMaybe<Scalars['Boolean']>;
  releaseAt?: InputMaybe<Scalars['DateTime']>;
  title?: InputMaybe<Scalars['String']>;
};

export type ScheduledReleaseUpdateManyWithNestedWhereInput = {
  /** Update many input */
  data: ScheduledReleaseUpdateManyInput;
  /** Document search */
  where: ScheduledReleaseWhereInput;
};

export type ScheduledReleaseUpdateOneInlineInput = {
  /** Connect existing ScheduledRelease document */
  connect?: InputMaybe<ScheduledReleaseWhereUniqueInput>;
  /** Create and connect one ScheduledRelease document */
  create?: InputMaybe<ScheduledReleaseCreateInput>;
  /** Delete currently connected ScheduledRelease document */
  delete?: InputMaybe<Scalars['Boolean']>;
  /** Disconnect currently connected ScheduledRelease document */
  disconnect?: InputMaybe<Scalars['Boolean']>;
  /** Update single ScheduledRelease document */
  update?: InputMaybe<ScheduledReleaseUpdateWithNestedWhereUniqueInput>;
  /** Upsert single ScheduledRelease document */
  upsert?: InputMaybe<ScheduledReleaseUpsertWithNestedWhereUniqueInput>;
};

export type ScheduledReleaseUpdateWithNestedWhereUniqueInput = {
  /** Document to update */
  data: ScheduledReleaseUpdateInput;
  /** Unique document search */
  where: ScheduledReleaseWhereUniqueInput;
};

export type ScheduledReleaseUpsertInput = {
  /** Create document if it didn't exist */
  create: ScheduledReleaseCreateInput;
  /** Update document if it exists */
  update: ScheduledReleaseUpdateInput;
};

export type ScheduledReleaseUpsertWithNestedWhereUniqueInput = {
  /** Upsert data */
  data: ScheduledReleaseUpsertInput;
  /** Unique document search */
  where: ScheduledReleaseWhereUniqueInput;
};

/** Identifies documents */
export type ScheduledReleaseWhereInput = {
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<ScheduledReleaseWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<ScheduledReleaseWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<ScheduledReleaseWhereInput>>;
  /** Contains search across all appropriate fields. */
  _search?: InputMaybe<Scalars['String']>;
  createdAt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  createdAt_gt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  createdAt_gte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  createdAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  /** All values less than the given value. */
  createdAt_lt?: InputMaybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  createdAt_lte?: InputMaybe<Scalars['DateTime']>;
  /** Any other value that exists and is not equal to the given value. */
  createdAt_not?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  createdAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  createdBy?: InputMaybe<UserWhereInput>;
  description?: InputMaybe<Scalars['String']>;
  /** All values containing the given string. */
  description_contains?: InputMaybe<Scalars['String']>;
  /** All values ending with the given string. */
  description_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are contained in given list. */
  description_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** Any other value that exists and is not equal to the given value. */
  description_not?: InputMaybe<Scalars['String']>;
  /** All values not containing the given string. */
  description_not_contains?: InputMaybe<Scalars['String']>;
  /** All values not ending with the given string */
  description_not_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  description_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values not starting with the given string. */
  description_not_starts_with?: InputMaybe<Scalars['String']>;
  /** All values starting with the given string. */
  description_starts_with?: InputMaybe<Scalars['String']>;
  errorMessage?: InputMaybe<Scalars['String']>;
  /** All values containing the given string. */
  errorMessage_contains?: InputMaybe<Scalars['String']>;
  /** All values ending with the given string. */
  errorMessage_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are contained in given list. */
  errorMessage_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** Any other value that exists and is not equal to the given value. */
  errorMessage_not?: InputMaybe<Scalars['String']>;
  /** All values not containing the given string. */
  errorMessage_not_contains?: InputMaybe<Scalars['String']>;
  /** All values not ending with the given string */
  errorMessage_not_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  errorMessage_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values not starting with the given string. */
  errorMessage_not_starts_with?: InputMaybe<Scalars['String']>;
  /** All values starting with the given string. */
  errorMessage_starts_with?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['ID']>;
  /** All values containing the given string. */
  id_contains?: InputMaybe<Scalars['ID']>;
  /** All values ending with the given string. */
  id_ends_with?: InputMaybe<Scalars['ID']>;
  /** All values that are contained in given list. */
  id_in?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  /** Any other value that exists and is not equal to the given value. */
  id_not?: InputMaybe<Scalars['ID']>;
  /** All values not containing the given string. */
  id_not_contains?: InputMaybe<Scalars['ID']>;
  /** All values not ending with the given string */
  id_not_ends_with?: InputMaybe<Scalars['ID']>;
  /** All values that are not contained in given list. */
  id_not_in?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  /** All values not starting with the given string. */
  id_not_starts_with?: InputMaybe<Scalars['ID']>;
  /** All values starting with the given string. */
  id_starts_with?: InputMaybe<Scalars['ID']>;
  isActive?: InputMaybe<Scalars['Boolean']>;
  /** Any other value that exists and is not equal to the given value. */
  isActive_not?: InputMaybe<Scalars['Boolean']>;
  isImplicit?: InputMaybe<Scalars['Boolean']>;
  /** Any other value that exists and is not equal to the given value. */
  isImplicit_not?: InputMaybe<Scalars['Boolean']>;
  operations_every?: InputMaybe<ScheduledOperationWhereInput>;
  operations_none?: InputMaybe<ScheduledOperationWhereInput>;
  operations_some?: InputMaybe<ScheduledOperationWhereInput>;
  publishedAt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  publishedAt_gt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  publishedAt_gte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  publishedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  /** All values less than the given value. */
  publishedAt_lt?: InputMaybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  publishedAt_lte?: InputMaybe<Scalars['DateTime']>;
  /** Any other value that exists and is not equal to the given value. */
  publishedAt_not?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  publishedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  publishedBy?: InputMaybe<UserWhereInput>;
  releaseAt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  releaseAt_gt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  releaseAt_gte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  releaseAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  /** All values less than the given value. */
  releaseAt_lt?: InputMaybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  releaseAt_lte?: InputMaybe<Scalars['DateTime']>;
  /** Any other value that exists and is not equal to the given value. */
  releaseAt_not?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  releaseAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  status?: InputMaybe<ScheduledReleaseStatus>;
  /** All values that are contained in given list. */
  status_in?: InputMaybe<Array<InputMaybe<ScheduledReleaseStatus>>>;
  /** Any other value that exists and is not equal to the given value. */
  status_not?: InputMaybe<ScheduledReleaseStatus>;
  /** All values that are not contained in given list. */
  status_not_in?: InputMaybe<Array<InputMaybe<ScheduledReleaseStatus>>>;
  title?: InputMaybe<Scalars['String']>;
  /** All values containing the given string. */
  title_contains?: InputMaybe<Scalars['String']>;
  /** All values ending with the given string. */
  title_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are contained in given list. */
  title_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** Any other value that exists and is not equal to the given value. */
  title_not?: InputMaybe<Scalars['String']>;
  /** All values not containing the given string. */
  title_not_contains?: InputMaybe<Scalars['String']>;
  /** All values not ending with the given string */
  title_not_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  title_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values not starting with the given string. */
  title_not_starts_with?: InputMaybe<Scalars['String']>;
  /** All values starting with the given string. */
  title_starts_with?: InputMaybe<Scalars['String']>;
  updatedAt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  updatedAt_gt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  updatedAt_gte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  updatedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  /** All values less than the given value. */
  updatedAt_lt?: InputMaybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  updatedAt_lte?: InputMaybe<Scalars['DateTime']>;
  /** Any other value that exists and is not equal to the given value. */
  updatedAt_not?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  updatedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  updatedBy?: InputMaybe<UserWhereInput>;
};

/** References ScheduledRelease record uniquely */
export type ScheduledReleaseWhereUniqueInput = {
  id?: InputMaybe<Scalars['ID']>;
};

/** Size of produts */
export enum Sizes {
  L = 'L',
  M = 'M',
  S = 'S',
  Xl = 'XL',
  N38 = 'n38',
  N39 = 'n39',
  N40 = 'n40',
  N41 = 'n41',
  N42 = 'n42',
  N43 = 'n43',
  N44 = 'n44',
  N45 = 'n45'
}

/** kind of sport */
export enum Sport {
  Basketball = 'Basketball',
  Football = 'Football',
  Running = 'Running',
  Tennis = 'Tennis',
  Volleyball = 'Volleyball'
}

/** Stage system enumeration */
export enum Stage {
  /** The Draft is the default stage for all your content. */
  Draft = 'DRAFT',
  /** The Published stage is where you can publish your content to. */
  Published = 'PUBLISHED'
}

export enum SystemDateTimeFieldVariation {
  Base = 'BASE',
  Combined = 'COMBINED',
  Localization = 'LOCALIZATION'
}

export type UnpublishLocaleInput = {
  /** Locales to unpublish */
  locale: Locale;
  /** Stages to unpublish selected locales from */
  stages: Array<Stage>;
};

/** User system model */
export type User = Node & {
  __typename?: 'User';
  /** The time the document was created */
  createdAt: Scalars['DateTime'];
  /** Get the document in other stages */
  documentInStages: Array<User>;
  /** The unique identifier */
  id: Scalars['ID'];
  /** Flag to determine if user is active or not */
  isActive: Scalars['Boolean'];
  /** User Kind. Can be either MEMBER, PAT or PUBLIC */
  kind: UserKind;
  /** The username */
  name: Scalars['String'];
  /** Profile Picture url */
  picture?: Maybe<Scalars['String']>;
  /** The time the document was published. Null on documents in draft stage. */
  publishedAt?: Maybe<Scalars['DateTime']>;
  /** System stage field */
  stage: Stage;
  /** The time the document was updated */
  updatedAt: Scalars['DateTime'];
};


/** User system model */
export type UserDocumentInStagesArgs = {
  includeCurrent?: Scalars['Boolean'];
  inheritLocale?: Scalars['Boolean'];
  stages?: Array<Stage>;
};

export type UserConnectInput = {
  /** Allow to specify document position in list of connected documents, will default to appending at end of list */
  position?: InputMaybe<ConnectPositionInput>;
  /** Document to connect */
  where: UserWhereUniqueInput;
};

/** A connection to a list of items. */
export type UserConnection = {
  __typename?: 'UserConnection';
  aggregate: Aggregate;
  /** A list of edges. */
  edges: Array<UserEdge>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
};

export type UserCreateManyInlineInput = {
  /** Connect multiple existing User documents */
  connect?: InputMaybe<Array<UserWhereUniqueInput>>;
};

export type UserCreateOneInlineInput = {
  /** Connect one existing User document */
  connect?: InputMaybe<UserWhereUniqueInput>;
};

/** An edge in a connection. */
export type UserEdge = {
  __typename?: 'UserEdge';
  /** A cursor for use in pagination. */
  cursor: Scalars['String'];
  /** The item at the end of the edge. */
  node: User;
};

/** System User Kind */
export enum UserKind {
  AppToken = 'APP_TOKEN',
  Member = 'MEMBER',
  Pat = 'PAT',
  Public = 'PUBLIC',
  Webhook = 'WEBHOOK'
}

/** Identifies documents */
export type UserManyWhereInput = {
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<UserWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<UserWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<UserWhereInput>>;
  /** Contains search across all appropriate fields. */
  _search?: InputMaybe<Scalars['String']>;
  createdAt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  createdAt_gt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  createdAt_gte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  createdAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  /** All values less than the given value. */
  createdAt_lt?: InputMaybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  createdAt_lte?: InputMaybe<Scalars['DateTime']>;
  /** Any other value that exists and is not equal to the given value. */
  createdAt_not?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  createdAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  documentInStages_every?: InputMaybe<UserWhereStageInput>;
  documentInStages_none?: InputMaybe<UserWhereStageInput>;
  documentInStages_some?: InputMaybe<UserWhereStageInput>;
  id?: InputMaybe<Scalars['ID']>;
  /** All values containing the given string. */
  id_contains?: InputMaybe<Scalars['ID']>;
  /** All values ending with the given string. */
  id_ends_with?: InputMaybe<Scalars['ID']>;
  /** All values that are contained in given list. */
  id_in?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  /** Any other value that exists and is not equal to the given value. */
  id_not?: InputMaybe<Scalars['ID']>;
  /** All values not containing the given string. */
  id_not_contains?: InputMaybe<Scalars['ID']>;
  /** All values not ending with the given string */
  id_not_ends_with?: InputMaybe<Scalars['ID']>;
  /** All values that are not contained in given list. */
  id_not_in?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  /** All values not starting with the given string. */
  id_not_starts_with?: InputMaybe<Scalars['ID']>;
  /** All values starting with the given string. */
  id_starts_with?: InputMaybe<Scalars['ID']>;
  isActive?: InputMaybe<Scalars['Boolean']>;
  /** Any other value that exists and is not equal to the given value. */
  isActive_not?: InputMaybe<Scalars['Boolean']>;
  kind?: InputMaybe<UserKind>;
  /** All values that are contained in given list. */
  kind_in?: InputMaybe<Array<InputMaybe<UserKind>>>;
  /** Any other value that exists and is not equal to the given value. */
  kind_not?: InputMaybe<UserKind>;
  /** All values that are not contained in given list. */
  kind_not_in?: InputMaybe<Array<InputMaybe<UserKind>>>;
  name?: InputMaybe<Scalars['String']>;
  /** All values containing the given string. */
  name_contains?: InputMaybe<Scalars['String']>;
  /** All values ending with the given string. */
  name_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are contained in given list. */
  name_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** Any other value that exists and is not equal to the given value. */
  name_not?: InputMaybe<Scalars['String']>;
  /** All values not containing the given string. */
  name_not_contains?: InputMaybe<Scalars['String']>;
  /** All values not ending with the given string */
  name_not_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  name_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values not starting with the given string. */
  name_not_starts_with?: InputMaybe<Scalars['String']>;
  /** All values starting with the given string. */
  name_starts_with?: InputMaybe<Scalars['String']>;
  picture?: InputMaybe<Scalars['String']>;
  /** All values containing the given string. */
  picture_contains?: InputMaybe<Scalars['String']>;
  /** All values ending with the given string. */
  picture_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are contained in given list. */
  picture_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** Any other value that exists and is not equal to the given value. */
  picture_not?: InputMaybe<Scalars['String']>;
  /** All values not containing the given string. */
  picture_not_contains?: InputMaybe<Scalars['String']>;
  /** All values not ending with the given string */
  picture_not_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  picture_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values not starting with the given string. */
  picture_not_starts_with?: InputMaybe<Scalars['String']>;
  /** All values starting with the given string. */
  picture_starts_with?: InputMaybe<Scalars['String']>;
  publishedAt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  publishedAt_gt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  publishedAt_gte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  publishedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  /** All values less than the given value. */
  publishedAt_lt?: InputMaybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  publishedAt_lte?: InputMaybe<Scalars['DateTime']>;
  /** Any other value that exists and is not equal to the given value. */
  publishedAt_not?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  publishedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  updatedAt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  updatedAt_gt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  updatedAt_gte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  updatedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  /** All values less than the given value. */
  updatedAt_lt?: InputMaybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  updatedAt_lte?: InputMaybe<Scalars['DateTime']>;
  /** Any other value that exists and is not equal to the given value. */
  updatedAt_not?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  updatedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
};

export enum UserOrderByInput {
  CreatedAtAsc = 'createdAt_ASC',
  CreatedAtDesc = 'createdAt_DESC',
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC',
  IsActiveAsc = 'isActive_ASC',
  IsActiveDesc = 'isActive_DESC',
  KindAsc = 'kind_ASC',
  KindDesc = 'kind_DESC',
  NameAsc = 'name_ASC',
  NameDesc = 'name_DESC',
  PictureAsc = 'picture_ASC',
  PictureDesc = 'picture_DESC',
  PublishedAtAsc = 'publishedAt_ASC',
  PublishedAtDesc = 'publishedAt_DESC',
  UpdatedAtAsc = 'updatedAt_ASC',
  UpdatedAtDesc = 'updatedAt_DESC'
}

export type UserUpdateManyInlineInput = {
  /** Connect multiple existing User documents */
  connect?: InputMaybe<Array<UserConnectInput>>;
  /** Disconnect multiple User documents */
  disconnect?: InputMaybe<Array<UserWhereUniqueInput>>;
  /** Override currently-connected documents with multiple existing User documents */
  set?: InputMaybe<Array<UserWhereUniqueInput>>;
};

export type UserUpdateOneInlineInput = {
  /** Connect existing User document */
  connect?: InputMaybe<UserWhereUniqueInput>;
  /** Disconnect currently connected User document */
  disconnect?: InputMaybe<Scalars['Boolean']>;
};

/** This contains a set of filters that can be used to compare values internally */
export type UserWhereComparatorInput = {
  /** This field can be used to request to check if the entry is outdated by internal comparison */
  outdated_to?: InputMaybe<Scalars['Boolean']>;
};

/** Identifies documents */
export type UserWhereInput = {
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<UserWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<UserWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<UserWhereInput>>;
  /** Contains search across all appropriate fields. */
  _search?: InputMaybe<Scalars['String']>;
  createdAt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  createdAt_gt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  createdAt_gte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  createdAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  /** All values less than the given value. */
  createdAt_lt?: InputMaybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  createdAt_lte?: InputMaybe<Scalars['DateTime']>;
  /** Any other value that exists and is not equal to the given value. */
  createdAt_not?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  createdAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  documentInStages_every?: InputMaybe<UserWhereStageInput>;
  documentInStages_none?: InputMaybe<UserWhereStageInput>;
  documentInStages_some?: InputMaybe<UserWhereStageInput>;
  id?: InputMaybe<Scalars['ID']>;
  /** All values containing the given string. */
  id_contains?: InputMaybe<Scalars['ID']>;
  /** All values ending with the given string. */
  id_ends_with?: InputMaybe<Scalars['ID']>;
  /** All values that are contained in given list. */
  id_in?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  /** Any other value that exists and is not equal to the given value. */
  id_not?: InputMaybe<Scalars['ID']>;
  /** All values not containing the given string. */
  id_not_contains?: InputMaybe<Scalars['ID']>;
  /** All values not ending with the given string */
  id_not_ends_with?: InputMaybe<Scalars['ID']>;
  /** All values that are not contained in given list. */
  id_not_in?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  /** All values not starting with the given string. */
  id_not_starts_with?: InputMaybe<Scalars['ID']>;
  /** All values starting with the given string. */
  id_starts_with?: InputMaybe<Scalars['ID']>;
  isActive?: InputMaybe<Scalars['Boolean']>;
  /** Any other value that exists and is not equal to the given value. */
  isActive_not?: InputMaybe<Scalars['Boolean']>;
  kind?: InputMaybe<UserKind>;
  /** All values that are contained in given list. */
  kind_in?: InputMaybe<Array<InputMaybe<UserKind>>>;
  /** Any other value that exists and is not equal to the given value. */
  kind_not?: InputMaybe<UserKind>;
  /** All values that are not contained in given list. */
  kind_not_in?: InputMaybe<Array<InputMaybe<UserKind>>>;
  name?: InputMaybe<Scalars['String']>;
  /** All values containing the given string. */
  name_contains?: InputMaybe<Scalars['String']>;
  /** All values ending with the given string. */
  name_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are contained in given list. */
  name_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** Any other value that exists and is not equal to the given value. */
  name_not?: InputMaybe<Scalars['String']>;
  /** All values not containing the given string. */
  name_not_contains?: InputMaybe<Scalars['String']>;
  /** All values not ending with the given string */
  name_not_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  name_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values not starting with the given string. */
  name_not_starts_with?: InputMaybe<Scalars['String']>;
  /** All values starting with the given string. */
  name_starts_with?: InputMaybe<Scalars['String']>;
  picture?: InputMaybe<Scalars['String']>;
  /** All values containing the given string. */
  picture_contains?: InputMaybe<Scalars['String']>;
  /** All values ending with the given string. */
  picture_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are contained in given list. */
  picture_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** Any other value that exists and is not equal to the given value. */
  picture_not?: InputMaybe<Scalars['String']>;
  /** All values not containing the given string. */
  picture_not_contains?: InputMaybe<Scalars['String']>;
  /** All values not ending with the given string */
  picture_not_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  picture_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values not starting with the given string. */
  picture_not_starts_with?: InputMaybe<Scalars['String']>;
  /** All values starting with the given string. */
  picture_starts_with?: InputMaybe<Scalars['String']>;
  publishedAt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  publishedAt_gt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  publishedAt_gte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  publishedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  /** All values less than the given value. */
  publishedAt_lt?: InputMaybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  publishedAt_lte?: InputMaybe<Scalars['DateTime']>;
  /** Any other value that exists and is not equal to the given value. */
  publishedAt_not?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  publishedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  updatedAt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  updatedAt_gt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  updatedAt_gte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  updatedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  /** All values less than the given value. */
  updatedAt_lt?: InputMaybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  updatedAt_lte?: InputMaybe<Scalars['DateTime']>;
  /** Any other value that exists and is not equal to the given value. */
  updatedAt_not?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  updatedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
};

/** The document in stages filter allows specifying a stage entry to cross compare the same document between different stages */
export type UserWhereStageInput = {
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<UserWhereStageInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<UserWhereStageInput>>;
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<UserWhereStageInput>>;
  /** This field contains fields which can be set as true or false to specify an internal comparison */
  compareWithParent?: InputMaybe<UserWhereComparatorInput>;
  /** Specify the stage to compare with */
  stage?: InputMaybe<Stage>;
};

/** References User record uniquely */
export type UserWhereUniqueInput = {
  id?: InputMaybe<Scalars['ID']>;
};

export type Version = {
  __typename?: 'Version';
  createdAt: Scalars['DateTime'];
  id: Scalars['ID'];
  revision: Scalars['Int'];
  stage: Stage;
};

export type VersionWhereInput = {
  id: Scalars['ID'];
  revision: Scalars['Int'];
  stage: Stage;
};

export enum _FilterKind {
  And = 'AND',
  Not = 'NOT',
  Or = 'OR',
  Contains = 'contains',
  ContainsAll = 'contains_all',
  ContainsNone = 'contains_none',
  ContainsSome = 'contains_some',
  EndsWith = 'ends_with',
  Eq = 'eq',
  EqNot = 'eq_not',
  Gt = 'gt',
  Gte = 'gte',
  In = 'in',
  JsonPathExists = 'json_path_exists',
  JsonValueRecursive = 'json_value_recursive',
  Lt = 'lt',
  Lte = 'lte',
  NotContains = 'not_contains',
  NotEndsWith = 'not_ends_with',
  NotIn = 'not_in',
  NotStartsWith = 'not_starts_with',
  RelationalEvery = 'relational_every',
  RelationalNone = 'relational_none',
  RelationalSingle = 'relational_single',
  RelationalSome = 'relational_some',
  Search = 'search',
  StartsWith = 'starts_with',
  UnionEmpty = 'union_empty',
  UnionEvery = 'union_every',
  UnionNone = 'union_none',
  UnionSingle = 'union_single',
  UnionSome = 'union_some'
}

export enum _MutationInputFieldKind {
  Enum = 'enum',
  Relation = 'relation',
  RichText = 'richText',
  RichTextWithEmbeds = 'richTextWithEmbeds',
  Scalar = 'scalar',
  Union = 'union',
  Virtual = 'virtual'
}

export enum _MutationKind {
  Create = 'create',
  Delete = 'delete',
  DeleteMany = 'deleteMany',
  Publish = 'publish',
  PublishMany = 'publishMany',
  SchedulePublish = 'schedulePublish',
  ScheduleUnpublish = 'scheduleUnpublish',
  Unpublish = 'unpublish',
  UnpublishMany = 'unpublishMany',
  Update = 'update',
  UpdateMany = 'updateMany',
  Upsert = 'upsert'
}

export enum _OrderDirection {
  Asc = 'asc',
  Desc = 'desc'
}

export enum _RelationInputCardinality {
  Many = 'many',
  One = 'one'
}

export enum _RelationInputKind {
  Create = 'create',
  Update = 'update'
}

export enum _RelationKind {
  Regular = 'regular',
  Union = 'union'
}

export enum _SystemDateTimeFieldVariation {
  Base = 'base',
  Combined = 'combined',
  Localization = 'localization'
}

export type CreateProductReviewMutationVariables = Exact<{
  review: ReviewCreateInput;
}>;


export type CreateProductReviewMutation = { __typename?: 'Mutation', review?: { __typename?: 'Review', id: string, stage: Stage, user: string, rating: number, content: string } | null };

export type CreateReviewMutationVariables = Exact<{
  id?: InputMaybe<Scalars['ID']>;
  reviews?: InputMaybe<ReviewUpdateManyInlineInput>;
}>;


export type CreateReviewMutation = { __typename?: 'Mutation', updateProduct?: { __typename?: 'Product', id: string, reviews: Array<{ __typename?: 'Review', content: string, createdAt: any, user: string }> } | null };

export type CreateOrderMutationVariables = Exact<{
  order: OrderCreateInput;
}>;


export type CreateOrderMutation = { __typename?: 'Mutation', createOrder?: { __typename?: 'Order', id: string, createdAt: any } | null };

export type CreateAddressToOrderMutationVariables = Exact<{
  address?: InputMaybe<AddressOrderUpdateOneInlineInput>;
  id?: InputMaybe<Scalars['ID']>;
}>;


export type CreateAddressToOrderMutation = { __typename?: 'Mutation', updateOrder?: { __typename?: 'Order', id: string } | null };

export type AbandonOrderMutationVariables = Exact<{
  id?: InputMaybe<Scalars['ID']>;
}>;


export type AbandonOrderMutation = { __typename?: 'Mutation', updateOrder?: { __typename?: 'Order', id: string } | null };

export type CreateAccountMutationVariables = Exact<{
  email: Scalars['String'];
  password: Scalars['String'];
}>;


export type CreateAccountMutation = { __typename?: 'Mutation', createAccount?: { __typename?: 'Account', id: string } | null };

export type CreateAccountByGoogleMutationVariables = Exact<{
  email: Scalars['String'];
  fullName: Scalars['String'];
  avatar: Scalars['String'];
}>;


export type CreateAccountByGoogleMutation = { __typename?: 'Mutation', createAccount?: { __typename?: 'Account', id: string } | null };

export type UpdateAccountDataMutationVariables = Exact<{
  newUserName?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['ID']>;
}>;


export type UpdateAccountDataMutation = { __typename?: 'Mutation', updateAccount?: { __typename?: 'Account', id: string } | null };

export type GetProductDetailBySlugQueryVariables = Exact<{
  slug?: InputMaybe<Scalars['String']>;
}>;


export type GetProductDetailBySlugQuery = { __typename?: 'Query', product?: { __typename?: 'Product', id: string, sale: boolean, slug: string, title: string, description: string, sport: Sport, category: Category, tags: Array<string>, sizes: Array<Sizes>, rating: Array<number>, prices: Array<{ __typename?: 'Price', id: string, price?: number | null, date?: any | null }>, images: Array<{ __typename?: 'Image', alt?: string | null, image?: { __typename?: 'Asset', id: string, url: string } | null }>, reviews: Array<{ __typename?: 'Review', user: string, content: string, rating: number, updatedAt: any }> } | null };

export type GetProductsByTagsQueryVariables = Exact<{
  tags?: InputMaybe<Array<Scalars['String']> | Scalars['String']>;
  id?: InputMaybe<Scalars['ID']>;
}>;


export type GetProductsByTagsQuery = { __typename?: 'Query', products: Array<{ __typename?: 'Product', id: string, sizes: Array<Sizes>, slug: string, title: string, tags: Array<string>, prices: Array<{ __typename?: 'Price', id: string, price?: number | null, date?: any | null }>, images: Array<{ __typename?: 'Image', image?: { __typename?: 'Asset', url: string, id: string } | null }> }> };

export type GetAllProductsQueryVariables = Exact<{
  first?: InputMaybe<Scalars['Int']>;
  skip?: InputMaybe<Scalars['Int']>;
  category?: InputMaybe<Array<InputMaybe<Category>> | InputMaybe<Category>>;
  sport?: InputMaybe<Array<InputMaybe<Sport>> | InputMaybe<Sport>>;
}>;


export type GetAllProductsQuery = { __typename?: 'Query', products: Array<{ __typename?: 'Product', createdAt: any, id: string, sale: boolean, slug: string, title: string, description: string, sport: Sport, category: Category, tags: Array<string>, sizes: Array<Sizes>, rating: Array<number>, prices: Array<{ __typename?: 'Price', id: string, price?: number | null, date?: any | null }>, images: Array<{ __typename?: 'Image', alt?: string | null, image?: { __typename?: 'Asset', id: string, url: string } | null }> }>, productsConnection: { __typename?: 'ProductConnection', aggregate: { __typename?: 'Aggregate', count: number } } };

export type GetSalesProductsQueryVariables = Exact<{ [key: string]: never; }>;


export type GetSalesProductsQuery = { __typename?: 'Query', products: Array<{ __typename?: 'Product', createdAt: any, id: string, sale: boolean, slug: string, title: string, description: string, sport: Sport, category: Category, tags: Array<string>, sizes: Array<Sizes>, rating: Array<number>, prices: Array<{ __typename?: 'Price', id: string, price?: number | null, date?: any | null }>, images: Array<{ __typename?: 'Image', alt?: string | null, image?: { __typename?: 'Asset', id: string, url: string } | null }> }> };

export type GetSpecialOffersProductsQueryVariables = Exact<{ [key: string]: never; }>;


export type GetSpecialOffersProductsQuery = { __typename?: 'Query', products: Array<{ __typename?: 'Product', createdAt: any, id: string, sale: boolean, slug: string, title: string, description: string, sport: Sport, category: Category, tags: Array<string>, sizes: Array<Sizes>, rating: Array<number>, prices: Array<{ __typename?: 'Price', id: string, price?: number | null, date?: any | null }>, images: Array<{ __typename?: 'Image', alt?: string | null, image?: { __typename?: 'Asset', id: string, url: string } | null }> }> };

export type GetMostSoldProductsQueryVariables = Exact<{ [key: string]: never; }>;


export type GetMostSoldProductsQuery = { __typename?: 'Query', products: Array<{ __typename?: 'Product', createdAt: any, id: string, sale: boolean, slug: string, title: string, description: string, sport: Sport, category: Category, tags: Array<string>, sizes: Array<Sizes>, bought: number, rating: Array<number>, prices: Array<{ __typename?: 'Price', id: string, price?: number | null, date?: any | null }>, images: Array<{ __typename?: 'Image', alt?: string | null, image?: { __typename?: 'Asset', id: string, url: string } | null }> }> };

export type GetOrdersQueryVariables = Exact<{ [key: string]: never; }>;


export type GetOrdersQuery = { __typename?: 'Query', orders: Array<{ __typename?: 'Order', id: string, createdAt: any, itemsQty?: number | null, orderStatus?: OrderStatus | null, totalPrice?: number | null, products: Array<{ __typename?: 'ProductsOrder', id: string, image?: string | null, title?: string | null, size?: string | null, productId?: string | null, price?: number | null, count?: number | null }> }> };

export type GetAccountByEmailQueryVariables = Exact<{
  email: Scalars['String'];
}>;


export type GetAccountByEmailQuery = { __typename?: 'Query', account?: { __typename?: 'Account', id: string, email: string, password?: string | null } | null };

export type GetUserDataQueryVariables = Exact<{
  email?: InputMaybe<Scalars['String']>;
}>;


export type GetUserDataQuery = { __typename?: 'Query', account?: { __typename?: 'Account', avatar?: string | null, createdAt: any, email: string, fullName?: string | null, id: string, updatedAt: any } | null };


export const CreateProductReviewDocument = gql`
    mutation CreateProductReview($review: ReviewCreateInput!) {
  review: createReview(data: $review) {
    id
    stage
    user
    rating
    content
  }
}
    `;
export type CreateProductReviewMutationFn = Apollo.MutationFunction<CreateProductReviewMutation, CreateProductReviewMutationVariables>;

/**
 * __useCreateProductReviewMutation__
 *
 * To run a mutation, you first call `useCreateProductReviewMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateProductReviewMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createProductReviewMutation, { data, loading, error }] = useCreateProductReviewMutation({
 *   variables: {
 *      review: // value for 'review'
 *   },
 * });
 */
export function useCreateProductReviewMutation(baseOptions?: Apollo.MutationHookOptions<CreateProductReviewMutation, CreateProductReviewMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<CreateProductReviewMutation, CreateProductReviewMutationVariables>(CreateProductReviewDocument, options);
      }
export type CreateProductReviewMutationHookResult = ReturnType<typeof useCreateProductReviewMutation>;
export type CreateProductReviewMutationResult = Apollo.MutationResult<CreateProductReviewMutation>;
export type CreateProductReviewMutationOptions = Apollo.BaseMutationOptions<CreateProductReviewMutation, CreateProductReviewMutationVariables>;
export const CreateReviewDocument = gql`
    mutation CreateReview($id: ID, $reviews: ReviewUpdateManyInlineInput) {
  updateProduct(data: {reviews: $reviews}, where: {id: $id}) {
    id
    reviews {
      content
      createdAt
      user
    }
  }
}
    `;
export type CreateReviewMutationFn = Apollo.MutationFunction<CreateReviewMutation, CreateReviewMutationVariables>;

/**
 * __useCreateReviewMutation__
 *
 * To run a mutation, you first call `useCreateReviewMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateReviewMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createReviewMutation, { data, loading, error }] = useCreateReviewMutation({
 *   variables: {
 *      id: // value for 'id'
 *      reviews: // value for 'reviews'
 *   },
 * });
 */
export function useCreateReviewMutation(baseOptions?: Apollo.MutationHookOptions<CreateReviewMutation, CreateReviewMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<CreateReviewMutation, CreateReviewMutationVariables>(CreateReviewDocument, options);
      }
export type CreateReviewMutationHookResult = ReturnType<typeof useCreateReviewMutation>;
export type CreateReviewMutationResult = Apollo.MutationResult<CreateReviewMutation>;
export type CreateReviewMutationOptions = Apollo.BaseMutationOptions<CreateReviewMutation, CreateReviewMutationVariables>;
export const CreateOrderDocument = gql`
    mutation CreateOrder($order: OrderCreateInput!) {
  createOrder(data: $order) {
    id
    createdAt
  }
}
    `;
export type CreateOrderMutationFn = Apollo.MutationFunction<CreateOrderMutation, CreateOrderMutationVariables>;

/**
 * __useCreateOrderMutation__
 *
 * To run a mutation, you first call `useCreateOrderMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateOrderMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createOrderMutation, { data, loading, error }] = useCreateOrderMutation({
 *   variables: {
 *      order: // value for 'order'
 *   },
 * });
 */
export function useCreateOrderMutation(baseOptions?: Apollo.MutationHookOptions<CreateOrderMutation, CreateOrderMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<CreateOrderMutation, CreateOrderMutationVariables>(CreateOrderDocument, options);
      }
export type CreateOrderMutationHookResult = ReturnType<typeof useCreateOrderMutation>;
export type CreateOrderMutationResult = Apollo.MutationResult<CreateOrderMutation>;
export type CreateOrderMutationOptions = Apollo.BaseMutationOptions<CreateOrderMutation, CreateOrderMutationVariables>;
export const CreateAddressToOrderDocument = gql`
    mutation CreateAddressToOrder($address: AddressOrderUpdateOneInlineInput, $id: ID) {
  updateOrder(data: {orderStatus: Shipped, address: $address}, where: {id: $id}) {
    id
  }
}
    `;
export type CreateAddressToOrderMutationFn = Apollo.MutationFunction<CreateAddressToOrderMutation, CreateAddressToOrderMutationVariables>;

/**
 * __useCreateAddressToOrderMutation__
 *
 * To run a mutation, you first call `useCreateAddressToOrderMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateAddressToOrderMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createAddressToOrderMutation, { data, loading, error }] = useCreateAddressToOrderMutation({
 *   variables: {
 *      address: // value for 'address'
 *      id: // value for 'id'
 *   },
 * });
 */
export function useCreateAddressToOrderMutation(baseOptions?: Apollo.MutationHookOptions<CreateAddressToOrderMutation, CreateAddressToOrderMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<CreateAddressToOrderMutation, CreateAddressToOrderMutationVariables>(CreateAddressToOrderDocument, options);
      }
export type CreateAddressToOrderMutationHookResult = ReturnType<typeof useCreateAddressToOrderMutation>;
export type CreateAddressToOrderMutationResult = Apollo.MutationResult<CreateAddressToOrderMutation>;
export type CreateAddressToOrderMutationOptions = Apollo.BaseMutationOptions<CreateAddressToOrderMutation, CreateAddressToOrderMutationVariables>;
export const AbandonOrderDocument = gql`
    mutation AbandonOrder($id: ID) {
  updateOrder(data: {orderStatus: Abandon}, where: {id: $id}) {
    id
  }
}
    `;
export type AbandonOrderMutationFn = Apollo.MutationFunction<AbandonOrderMutation, AbandonOrderMutationVariables>;

/**
 * __useAbandonOrderMutation__
 *
 * To run a mutation, you first call `useAbandonOrderMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useAbandonOrderMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [abandonOrderMutation, { data, loading, error }] = useAbandonOrderMutation({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useAbandonOrderMutation(baseOptions?: Apollo.MutationHookOptions<AbandonOrderMutation, AbandonOrderMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<AbandonOrderMutation, AbandonOrderMutationVariables>(AbandonOrderDocument, options);
      }
export type AbandonOrderMutationHookResult = ReturnType<typeof useAbandonOrderMutation>;
export type AbandonOrderMutationResult = Apollo.MutationResult<AbandonOrderMutation>;
export type AbandonOrderMutationOptions = Apollo.BaseMutationOptions<AbandonOrderMutation, AbandonOrderMutationVariables>;
export const CreateAccountDocument = gql`
    mutation CreateAccount($email: String!, $password: String!) {
  createAccount(data: {email: $email, password: $password}) {
    id
  }
}
    `;
export type CreateAccountMutationFn = Apollo.MutationFunction<CreateAccountMutation, CreateAccountMutationVariables>;

/**
 * __useCreateAccountMutation__
 *
 * To run a mutation, you first call `useCreateAccountMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateAccountMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createAccountMutation, { data, loading, error }] = useCreateAccountMutation({
 *   variables: {
 *      email: // value for 'email'
 *      password: // value for 'password'
 *   },
 * });
 */
export function useCreateAccountMutation(baseOptions?: Apollo.MutationHookOptions<CreateAccountMutation, CreateAccountMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<CreateAccountMutation, CreateAccountMutationVariables>(CreateAccountDocument, options);
      }
export type CreateAccountMutationHookResult = ReturnType<typeof useCreateAccountMutation>;
export type CreateAccountMutationResult = Apollo.MutationResult<CreateAccountMutation>;
export type CreateAccountMutationOptions = Apollo.BaseMutationOptions<CreateAccountMutation, CreateAccountMutationVariables>;
export const CreateAccountByGoogleDocument = gql`
    mutation CreateAccountByGoogle($email: String!, $fullName: String!, $avatar: String!) {
  createAccount(data: {email: $email, fullName: $fullName, avatar: $avatar}) {
    id
  }
}
    `;
export type CreateAccountByGoogleMutationFn = Apollo.MutationFunction<CreateAccountByGoogleMutation, CreateAccountByGoogleMutationVariables>;

/**
 * __useCreateAccountByGoogleMutation__
 *
 * To run a mutation, you first call `useCreateAccountByGoogleMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateAccountByGoogleMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createAccountByGoogleMutation, { data, loading, error }] = useCreateAccountByGoogleMutation({
 *   variables: {
 *      email: // value for 'email'
 *      fullName: // value for 'fullName'
 *      avatar: // value for 'avatar'
 *   },
 * });
 */
export function useCreateAccountByGoogleMutation(baseOptions?: Apollo.MutationHookOptions<CreateAccountByGoogleMutation, CreateAccountByGoogleMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<CreateAccountByGoogleMutation, CreateAccountByGoogleMutationVariables>(CreateAccountByGoogleDocument, options);
      }
export type CreateAccountByGoogleMutationHookResult = ReturnType<typeof useCreateAccountByGoogleMutation>;
export type CreateAccountByGoogleMutationResult = Apollo.MutationResult<CreateAccountByGoogleMutation>;
export type CreateAccountByGoogleMutationOptions = Apollo.BaseMutationOptions<CreateAccountByGoogleMutation, CreateAccountByGoogleMutationVariables>;
export const UpdateAccountDataDocument = gql`
    mutation UpdateAccountData($newUserName: String, $id: ID) {
  updateAccount(data: {fullName: $newUserName}, where: {id: $id}) {
    id
  }
}
    `;
export type UpdateAccountDataMutationFn = Apollo.MutationFunction<UpdateAccountDataMutation, UpdateAccountDataMutationVariables>;

/**
 * __useUpdateAccountDataMutation__
 *
 * To run a mutation, you first call `useUpdateAccountDataMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateAccountDataMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateAccountDataMutation, { data, loading, error }] = useUpdateAccountDataMutation({
 *   variables: {
 *      newUserName: // value for 'newUserName'
 *      id: // value for 'id'
 *   },
 * });
 */
export function useUpdateAccountDataMutation(baseOptions?: Apollo.MutationHookOptions<UpdateAccountDataMutation, UpdateAccountDataMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<UpdateAccountDataMutation, UpdateAccountDataMutationVariables>(UpdateAccountDataDocument, options);
      }
export type UpdateAccountDataMutationHookResult = ReturnType<typeof useUpdateAccountDataMutation>;
export type UpdateAccountDataMutationResult = Apollo.MutationResult<UpdateAccountDataMutation>;
export type UpdateAccountDataMutationOptions = Apollo.BaseMutationOptions<UpdateAccountDataMutation, UpdateAccountDataMutationVariables>;
export const GetProductDetailBySlugDocument = gql`
    query GetProductDetailBySlug($slug: String) {
  product(where: {slug: $slug}) {
    id
    sale
    slug
    title
    description
    sport
    category
    tags
    sizes
    prices {
      id
      price
      date
    }
    rating
    images {
      image {
        id
        url
      }
      alt
    }
    reviews {
      user
      content
      rating
      updatedAt
    }
  }
}
    `;

/**
 * __useGetProductDetailBySlugQuery__
 *
 * To run a query within a React component, call `useGetProductDetailBySlugQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetProductDetailBySlugQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetProductDetailBySlugQuery({
 *   variables: {
 *      slug: // value for 'slug'
 *   },
 * });
 */
export function useGetProductDetailBySlugQuery(baseOptions?: Apollo.QueryHookOptions<GetProductDetailBySlugQuery, GetProductDetailBySlugQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetProductDetailBySlugQuery, GetProductDetailBySlugQueryVariables>(GetProductDetailBySlugDocument, options);
      }
export function useGetProductDetailBySlugLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetProductDetailBySlugQuery, GetProductDetailBySlugQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetProductDetailBySlugQuery, GetProductDetailBySlugQueryVariables>(GetProductDetailBySlugDocument, options);
        }
export type GetProductDetailBySlugQueryHookResult = ReturnType<typeof useGetProductDetailBySlugQuery>;
export type GetProductDetailBySlugLazyQueryHookResult = ReturnType<typeof useGetProductDetailBySlugLazyQuery>;
export type GetProductDetailBySlugQueryResult = Apollo.QueryResult<GetProductDetailBySlugQuery, GetProductDetailBySlugQueryVariables>;
export const GetProductsByTagsDocument = gql`
    query getProductsByTags($tags: [String!], $id: ID) {
  products(where: {tags_contains_some: $tags, id_not: $id}) {
    id
    sizes
    slug
    title
    prices {
      id
      price
      date
    }
    tags
    images {
      image {
        url
        id
      }
    }
  }
}
    `;

/**
 * __useGetProductsByTagsQuery__
 *
 * To run a query within a React component, call `useGetProductsByTagsQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetProductsByTagsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetProductsByTagsQuery({
 *   variables: {
 *      tags: // value for 'tags'
 *      id: // value for 'id'
 *   },
 * });
 */
export function useGetProductsByTagsQuery(baseOptions?: Apollo.QueryHookOptions<GetProductsByTagsQuery, GetProductsByTagsQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetProductsByTagsQuery, GetProductsByTagsQueryVariables>(GetProductsByTagsDocument, options);
      }
export function useGetProductsByTagsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetProductsByTagsQuery, GetProductsByTagsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetProductsByTagsQuery, GetProductsByTagsQueryVariables>(GetProductsByTagsDocument, options);
        }
export type GetProductsByTagsQueryHookResult = ReturnType<typeof useGetProductsByTagsQuery>;
export type GetProductsByTagsLazyQueryHookResult = ReturnType<typeof useGetProductsByTagsLazyQuery>;
export type GetProductsByTagsQueryResult = Apollo.QueryResult<GetProductsByTagsQuery, GetProductsByTagsQueryVariables>;
export const GetAllProductsDocument = gql`
    query GetAllProducts($first: Int, $skip: Int, $category: [Category], $sport: [Sport]) {
  products(
    first: $first
    skip: $skip
    where: {category_in: $category, sport_in: $sport}
  ) {
    createdAt
    id
    sale
    slug
    title
    description
    sport
    category
    tags
    sizes
    prices {
      id
      price
      date
    }
    images {
      image {
        id
        url
      }
      alt
    }
    rating
  }
  productsConnection(where: {category_in: $category, sport_in: $sport}) {
    aggregate {
      count
    }
  }
}
    `;

/**
 * __useGetAllProductsQuery__
 *
 * To run a query within a React component, call `useGetAllProductsQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetAllProductsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetAllProductsQuery({
 *   variables: {
 *      first: // value for 'first'
 *      skip: // value for 'skip'
 *      category: // value for 'category'
 *      sport: // value for 'sport'
 *   },
 * });
 */
export function useGetAllProductsQuery(baseOptions?: Apollo.QueryHookOptions<GetAllProductsQuery, GetAllProductsQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetAllProductsQuery, GetAllProductsQueryVariables>(GetAllProductsDocument, options);
      }
export function useGetAllProductsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetAllProductsQuery, GetAllProductsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetAllProductsQuery, GetAllProductsQueryVariables>(GetAllProductsDocument, options);
        }
export type GetAllProductsQueryHookResult = ReturnType<typeof useGetAllProductsQuery>;
export type GetAllProductsLazyQueryHookResult = ReturnType<typeof useGetAllProductsLazyQuery>;
export type GetAllProductsQueryResult = Apollo.QueryResult<GetAllProductsQuery, GetAllProductsQueryVariables>;
export const GetSalesProductsDocument = gql`
    query GetSalesProducts {
  products(first: 24, where: {sale: true}) {
    createdAt
    id
    sale
    slug
    title
    description
    sport
    category
    tags
    sizes
    prices {
      id
      price
      date
    }
    images {
      image {
        id
        url
      }
      alt
    }
    rating
  }
}
    `;

/**
 * __useGetSalesProductsQuery__
 *
 * To run a query within a React component, call `useGetSalesProductsQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetSalesProductsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetSalesProductsQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetSalesProductsQuery(baseOptions?: Apollo.QueryHookOptions<GetSalesProductsQuery, GetSalesProductsQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetSalesProductsQuery, GetSalesProductsQueryVariables>(GetSalesProductsDocument, options);
      }
export function useGetSalesProductsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetSalesProductsQuery, GetSalesProductsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetSalesProductsQuery, GetSalesProductsQueryVariables>(GetSalesProductsDocument, options);
        }
export type GetSalesProductsQueryHookResult = ReturnType<typeof useGetSalesProductsQuery>;
export type GetSalesProductsLazyQueryHookResult = ReturnType<typeof useGetSalesProductsLazyQuery>;
export type GetSalesProductsQueryResult = Apollo.QueryResult<GetSalesProductsQuery, GetSalesProductsQueryVariables>;
export const GetSpecialOffersProductsDocument = gql`
    query GetSpecialOffersProducts {
  products(first: 8, where: {sale: true}) {
    createdAt
    id
    sale
    slug
    title
    description
    sport
    category
    tags
    sizes
    prices {
      id
      price
      date
    }
    images {
      image {
        id
        url
      }
      alt
    }
    rating
  }
}
    `;

/**
 * __useGetSpecialOffersProductsQuery__
 *
 * To run a query within a React component, call `useGetSpecialOffersProductsQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetSpecialOffersProductsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetSpecialOffersProductsQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetSpecialOffersProductsQuery(baseOptions?: Apollo.QueryHookOptions<GetSpecialOffersProductsQuery, GetSpecialOffersProductsQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetSpecialOffersProductsQuery, GetSpecialOffersProductsQueryVariables>(GetSpecialOffersProductsDocument, options);
      }
export function useGetSpecialOffersProductsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetSpecialOffersProductsQuery, GetSpecialOffersProductsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetSpecialOffersProductsQuery, GetSpecialOffersProductsQueryVariables>(GetSpecialOffersProductsDocument, options);
        }
export type GetSpecialOffersProductsQueryHookResult = ReturnType<typeof useGetSpecialOffersProductsQuery>;
export type GetSpecialOffersProductsLazyQueryHookResult = ReturnType<typeof useGetSpecialOffersProductsLazyQuery>;
export type GetSpecialOffersProductsQueryResult = Apollo.QueryResult<GetSpecialOffersProductsQuery, GetSpecialOffersProductsQueryVariables>;
export const GetMostSoldProductsDocument = gql`
    query GetMostSoldProducts {
  products(orderBy: bought_DESC, where: {bought_gt: 0}) {
    createdAt
    id
    sale
    slug
    title
    description
    sport
    category
    tags
    sizes
    prices {
      id
      price
      date
    }
    images {
      image {
        id
        url
      }
      alt
    }
    bought
    rating
  }
}
    `;

/**
 * __useGetMostSoldProductsQuery__
 *
 * To run a query within a React component, call `useGetMostSoldProductsQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetMostSoldProductsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetMostSoldProductsQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetMostSoldProductsQuery(baseOptions?: Apollo.QueryHookOptions<GetMostSoldProductsQuery, GetMostSoldProductsQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetMostSoldProductsQuery, GetMostSoldProductsQueryVariables>(GetMostSoldProductsDocument, options);
      }
export function useGetMostSoldProductsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetMostSoldProductsQuery, GetMostSoldProductsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetMostSoldProductsQuery, GetMostSoldProductsQueryVariables>(GetMostSoldProductsDocument, options);
        }
export type GetMostSoldProductsQueryHookResult = ReturnType<typeof useGetMostSoldProductsQuery>;
export type GetMostSoldProductsLazyQueryHookResult = ReturnType<typeof useGetMostSoldProductsLazyQuery>;
export type GetMostSoldProductsQueryResult = Apollo.QueryResult<GetMostSoldProductsQuery, GetMostSoldProductsQueryVariables>;
export const GetOrdersDocument = gql`
    query GetOrders {
  orders {
    id
    createdAt
    itemsQty
    orderStatus
    totalPrice
    products {
      id
      image
      title
      size
      productId
      price
      count
    }
  }
}
    `;

/**
 * __useGetOrdersQuery__
 *
 * To run a query within a React component, call `useGetOrdersQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetOrdersQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetOrdersQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetOrdersQuery(baseOptions?: Apollo.QueryHookOptions<GetOrdersQuery, GetOrdersQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetOrdersQuery, GetOrdersQueryVariables>(GetOrdersDocument, options);
      }
export function useGetOrdersLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetOrdersQuery, GetOrdersQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetOrdersQuery, GetOrdersQueryVariables>(GetOrdersDocument, options);
        }
export type GetOrdersQueryHookResult = ReturnType<typeof useGetOrdersQuery>;
export type GetOrdersLazyQueryHookResult = ReturnType<typeof useGetOrdersLazyQuery>;
export type GetOrdersQueryResult = Apollo.QueryResult<GetOrdersQuery, GetOrdersQueryVariables>;
export const GetAccountByEmailDocument = gql`
    query GetAccountByEmail($email: String!) {
  account(where: {email: $email}, stage: DRAFT) {
    id
    email
    password
  }
}
    `;

/**
 * __useGetAccountByEmailQuery__
 *
 * To run a query within a React component, call `useGetAccountByEmailQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetAccountByEmailQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetAccountByEmailQuery({
 *   variables: {
 *      email: // value for 'email'
 *   },
 * });
 */
export function useGetAccountByEmailQuery(baseOptions: Apollo.QueryHookOptions<GetAccountByEmailQuery, GetAccountByEmailQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetAccountByEmailQuery, GetAccountByEmailQueryVariables>(GetAccountByEmailDocument, options);
      }
export function useGetAccountByEmailLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetAccountByEmailQuery, GetAccountByEmailQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetAccountByEmailQuery, GetAccountByEmailQueryVariables>(GetAccountByEmailDocument, options);
        }
export type GetAccountByEmailQueryHookResult = ReturnType<typeof useGetAccountByEmailQuery>;
export type GetAccountByEmailLazyQueryHookResult = ReturnType<typeof useGetAccountByEmailLazyQuery>;
export type GetAccountByEmailQueryResult = Apollo.QueryResult<GetAccountByEmailQuery, GetAccountByEmailQueryVariables>;
export const GetUserDataDocument = gql`
    query GetUserData($email: String) {
  account(where: {email: $email}, stage: DRAFT) {
    avatar
    createdAt
    email
    fullName
    id
    updatedAt
  }
}
    `;

/**
 * __useGetUserDataQuery__
 *
 * To run a query within a React component, call `useGetUserDataQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetUserDataQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetUserDataQuery({
 *   variables: {
 *      email: // value for 'email'
 *   },
 * });
 */
export function useGetUserDataQuery(baseOptions?: Apollo.QueryHookOptions<GetUserDataQuery, GetUserDataQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetUserDataQuery, GetUserDataQueryVariables>(GetUserDataDocument, options);
      }
export function useGetUserDataLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetUserDataQuery, GetUserDataQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetUserDataQuery, GetUserDataQueryVariables>(GetUserDataDocument, options);
        }
export type GetUserDataQueryHookResult = ReturnType<typeof useGetUserDataQuery>;
export type GetUserDataLazyQueryHookResult = ReturnType<typeof useGetUserDataLazyQuery>;
export type GetUserDataQueryResult = Apollo.QueryResult<GetUserDataQuery, GetUserDataQueryVariables>;