// Custom markdownlint rule: no-strong
// Prohibits the use of bold/strong emphasis in Markdown

module.exports = {
  names: ["no-strong"],
  description: "Bold text (strong emphasis) is not allowed",
  tags: ["emphasis", "style"],
  function: function rule(params, onError) {
    // Check for both ** and __ style bold text
    const strongRegex = /(\*\*|__).+?\1/g;

    params.tokens.forEach(token => {
      if (token.type === "inline") {
        const matches = token.content.matchAll(strongRegex);
        for (const match of matches) {
          onError({
            lineNumber: token.lineNumber,
            detail: `Bold text found: ${match[0]}`,
            context: token.line,
            range: [match.index + 1, match[0].length]
          });
        }
      }
    });
  }
};
