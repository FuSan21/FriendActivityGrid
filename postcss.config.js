module.exports = (ctx) => ({
  plugins: {
    "postcss-wrap":
      ctx.file.basename === "responsive.css" ? { selector: "@media (max-width: 1200px)" } : false,
  },
});
