module.exports = (ctx) => ({
  plugins: {
    ...(ctx.env === "responsive"
      ? {
          "postcss-wrap": {
            selector: "@media (max-width: 1200px)",
          },
        }
      : {}),
  },
});
