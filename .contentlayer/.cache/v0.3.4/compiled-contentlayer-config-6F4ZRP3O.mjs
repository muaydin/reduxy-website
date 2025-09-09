// contentlayer.config.js
import { defineDocumentType, makeSource } from "contentlayer/source-files";
import rehypeSlug from "rehype-slug";
import rehypeAutolinkHeadings from "rehype-autolink-headings";
var Doc = defineDocumentType(() => ({
  name: "Doc",
  filePathPattern: `docs/**/*.mdx`,
  contentType: "mdx",
  fields: {
    title: {
      type: "string",
      description: "The title of the document",
      required: true
    },
    description: {
      type: "string",
      description: "The description of the document"
    },
    published: {
      type: "boolean",
      default: true
    },
    order: {
      type: "number",
      description: "Order for navigation",
      default: 0
    }
  },
  computedFields: {
    url: {
      type: "string",
      resolve: (doc) => `/docs/${doc._raw.flattenedPath.replace("docs/", "")}`
    },
    slug: {
      type: "string",
      resolve: (doc) => doc._raw.flattenedPath.replace("docs/", "")
    }
  }
}));
var BlogPost = defineDocumentType(() => ({
  name: "BlogPost",
  filePathPattern: `blog/**/*.mdx`,
  contentType: "mdx",
  fields: {
    title: {
      type: "string",
      description: "The title of the blog post",
      required: true
    },
    description: {
      type: "string",
      description: "The description of the blog post"
    },
    date: {
      type: "date",
      description: "The date of the blog post",
      required: true
    },
    published: {
      type: "boolean",
      default: true
    },
    author: {
      type: "string",
      description: "The author of the blog post",
      default: "Reduxy Team"
    },
    tags: {
      type: "list",
      of: { type: "string" },
      default: []
    }
  },
  computedFields: {
    url: {
      type: "string",
      resolve: (post) => `/blog/${post._raw.flattenedPath.replace("blog/", "")}`
    },
    slug: {
      type: "string",
      resolve: (post) => post._raw.flattenedPath.replace("blog/", "")
    }
  }
}));
var ChangelogEntry = defineDocumentType(() => ({
  name: "ChangelogEntry",
  filePathPattern: `changelog/**/*.mdx`,
  contentType: "mdx",
  fields: {
    title: {
      type: "string",
      description: "The title of the changelog entry",
      required: true
    },
    date: {
      type: "date",
      description: "The date of the changelog entry",
      required: true
    },
    version: {
      type: "string",
      description: "The version number"
    },
    published: {
      type: "boolean",
      default: true
    }
  },
  computedFields: {
    url: {
      type: "string",
      resolve: (entry) => `/changelog#${entry._raw.flattenedPath.replace("changelog/", "")}`
    },
    slug: {
      type: "string",
      resolve: (entry) => entry._raw.flattenedPath.replace("changelog/", "")
    }
  }
}));
var LegalDoc = defineDocumentType(() => ({
  name: "LegalDoc",
  filePathPattern: `legal/**/*.mdx`,
  contentType: "mdx",
  fields: {
    title: {
      type: "string",
      description: "The title of the legal document",
      required: true
    },
    description: {
      type: "string",
      description: "The description of the legal document"
    },
    lastUpdated: {
      type: "date",
      description: "When the document was last updated",
      required: true
    },
    published: {
      type: "boolean",
      default: true
    }
  },
  computedFields: {
    url: {
      type: "string",
      resolve: (doc) => `/legal/${doc._raw.flattenedPath.replace("legal/", "")}`
    },
    slug: {
      type: "string",
      resolve: (doc) => doc._raw.flattenedPath.replace("legal/", "")
    }
  }
}));
var contentlayer_config_default = makeSource({
  contentDirPath: "./content",
  documentTypes: [Doc, BlogPost, ChangelogEntry, LegalDoc],
  disableImportAliasWarning: true,
  mdx: {
    remarkPlugins: [],
    rehypePlugins: [
      rehypeSlug,
      [
        rehypeAutolinkHeadings,
        {
          behavior: "wrap",
          properties: {
            className: ["anchor"]
          }
        }
      ]
    ]
  }
});
export {
  BlogPost,
  ChangelogEntry,
  Doc,
  LegalDoc,
  contentlayer_config_default as default
};
//# sourceMappingURL=compiled-contentlayer-config-6F4ZRP3O.mjs.map
