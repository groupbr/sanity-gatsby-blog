export default {
  widgets: [
    { name: "structure-menu" },
    {
      name: "project-info",
      options: {
        __experimental_before: [
          {
            name: "netlify",
            options: {
              description:
                "NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.",
              sites: [
                {
                  buildHookId:
                    "620a6a4ff2724620b1cdf2b9",
                  title: "Sanity Studio",
                  name: "sanity-gatsby-blog-studio-vyjvx22x",
                  apiId: "dff9af17-7f72-4c33-9be6-88121ab682a7",
                },
                {
                  buildHookId: "620a6a4f73f4f216eb6e7d0a",
                  title: "Blog Website",
                  name: "sanity-gatsby-blog-web-2ja3uzkg",
                  apiId: "a3691a98-2b66-419e-902b-6570c3c0f22e",
                },
              ],
            },
          },
        ],
        data: [
          {
            title: "GitHub repo",
            value:
              "https://github.com/groupbr/sanity-gatsby-blog",
            category: "Code",
          },
          {
            title: "Frontend",
            value: "https://sanity-gatsby-blog-web-2ja3uzkg.netlify.app",
            category: "apps",
          },
        ],
      },
    },
    { name: "project-users", layout: { height: "auto" } },
    {
      name: "document-list",
      options: {
        title: "Recent blog posts",
        order: "_createdAt desc",
        types: ["post"],
      },
      layout: { width: "medium" },
    },
  ],
};
