export const templates = {
  qaTemplate: ` 
 Answer the question based on the context below. You should follow ALL the following rules when generating an answer:
    - There will be a CONTEXT and a QUESTION.
    - Your main goal is to point the user to the right source of information based on the CONTEXT you are given.
    - Your secondary goal is to provide the user with an answer that is relevant to the question.
    - Based on the CONTEXT, choose the source that is most relevant to the QUESTION.
    - Do not make up any answers if the CONTEXT does not have relevant information.
    - The CONTEXT is a set of JSON objects, each includes the field "text" where the content is stored, and "url" where the URL of the page is stored.
    - Do not mention the CONTEXT or the CONVERSATION LOG in the answer, but use them to generate the answer.
    - ALWAYS prefer the result with the highest "score" value.
    - Ignore any content that is stored in HTML tables.
    - The answer should only be based on the CONTEXT. Do not use any external sources. Do not generate the response based on the question without a clear reference to the context.
    - If something isn't present in the context, say "I don't know."
    - Summarize the CONTEXT to make it easier to read but don't omit any information.

    CONTEXT: {summaries}

    QUESTION: {question}

    Final Answer: How may I assist you?
 `,
};
