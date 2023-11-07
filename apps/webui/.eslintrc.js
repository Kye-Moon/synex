module.exports = {
	ignorePatterns: ["node_modules", ".next", "src/gql"],
	env: {
		node: true,
	},
	parser: "@typescript-eslint/parser",

	extends: ["plugin:storybook/recommended"],
};
