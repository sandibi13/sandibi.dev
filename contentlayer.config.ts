import { defineDocumentType, makeSource } from "contentlayer/source-files";

export const Blog = defineDocumentType(() => ({
  name: "Blog",
  filePathPattern: `blogs/**/*.mdx`,
  fields: {
    title: { type: "string", required: true },
    description: { type: "string", required: true },
    date: { type: "date" },
  },
  computedFields: {},
}));

export const Project = defineDocumentType(() => ({
  name: "Project",
  filePathPattern: `projects/**/*.mdx`,
  fields: {
    title: { type: "string", required: true },
    description: { type: "string", required: true },
    date: { type: "date" },
    url: { type: "string" },
    repository: { type: "string" },
  },
  computedFields: {},
}));

export const Review = defineDocumentType(() => ({
  name: "Review",
  filePathPattern: `reviews/**/*.mdx`,
  fields: {
    name: { type: "string", required: true },
    text: { type: "string", required: true },
    rating: { type: "number", required: true },
    company: { type: "string", required: true },
  },
  computedFields: {},
}));

export default makeSource({
  contentDirPath: "contents",
  documentTypes: [Blog, Project, Review],
});
