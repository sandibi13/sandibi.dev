import { defineDocumentType, makeSource } from "contentlayer/source-files";

export const Project = defineDocumentType(() => ({
  name: "Project",
  filePathPattern: `**/*.md`,
  fields: {},
  computedFields: {},
}));

export const Blog = defineDocumentType(() => ({
  name: "Blog",
  filePathPattern: `**/*.md`,
  fields: {},
  computedFields: {},
}));

export default makeSource({
  contentDirPath: "contents",
  documentTypes: [Project, Blog],
});
