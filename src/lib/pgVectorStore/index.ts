import {
  DistanceStrategy,
  PGVectorStore,
} from "@langchain/community/vectorstores/pgvector";
import { DocumentInterface } from "@langchain/core/documents";
import { OpenAIEmbeddings } from "@langchain/openai";
import { PoolConfig } from "pg";

const config = {
  postgresConnectionOptions: {
    type: "postgres",
    host: process.env.VECTOR_DATABASE_HOST,
    port: parseInt(process.env.VECTOR_DATABASE_PORT!, 10),
    user: process.env.VECTOR_DATABASE_USER,
    password: process.env.VECTOR_DATABASE_PASSWORD,
    database: process.env.VECTOR_DATABASE_NAME,
  } as PoolConfig,
  tableName: "testlangchain",
  columns: {
    idColumnName: "id",
    vectorColumnName: "vector",
    contentColumnName: "content",
    metadataColumnName: "metadata",
  },
  distanceStrategy: "cosine" as DistanceStrategy,
};

class VectorStoreSingleton {
  private static instance: PGVectorStore | null = null;
  private constructor() {}

  public static async getInstance(): Promise<PGVectorStore> {
    if (!VectorStoreSingleton.instance) {
      VectorStoreSingleton.instance = await PGVectorStore.initialize(
        new OpenAIEmbeddings(),
        config,
      );
    }
    return VectorStoreSingleton.instance;
  }
}

export async function addUserDocuments(
  userId: string,
  documents: DocumentInterface[],
) {
  const vectorstore = await VectorStoreSingleton.getInstance();
  for (const doc of documents) {
    doc.metadata.userIdentifier = userId;
  }
  await vectorstore.addDocuments(documents);
}

export async function similaritySearch(userId: string, query: string) {
  if (!userId || !query) {
    return;
  }
  const vectorstore = await VectorStoreSingleton.getInstance();
  const docs = await vectorstore.similaritySearch(query, 3, {
    userIdentifier: userId,
  });
  return docs;
}
