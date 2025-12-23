// Custom markdownlint rule: no-numbered-headings
// Prohibits numbering in headings (e.g., "## 1. Introduction")

module.exports = {
  names: ["no-numbered-headings"],
  description: "Headings should not contain numbering",
  tags: ["headings", "style"],
  function: function rule(params, onError) {
    // Pattern to detect headings starting with numbers
    // Examples: "## 1. Title", "### 2.1 Section", "# 3) Chapter"
    const numberedHeadingRegex = /^(#+)\s+\d+[\.)]/;

    params.tokens.forEach(token => {
      if (token.type === "heading_open") {
        const nextToken = params.tokens[params.tokens.indexOf(token) + 1];
        if (nextToken && nextToken.type === "inline") {
          const match = nextToken.content.match(numberedHeadingRegex);
          if (match) {
            onError({
              lineNumber: token.lineNumber,
              detail: `Numbered heading found: ${nextToken.content}`,
              context: token.line
            });
          }
        }
      }
    });
  }
};
