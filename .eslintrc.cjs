module.exports = {
	// https://eslint.org/docs/user-guide/configuring#configuration-cascading-and-hierarchy
	// This option interrupts the configuration hierarchy at this file
	// Remove this if you have an higher level ESLint config file (it usually happens into a monorepos)
	root: true,

	// https://eslint.vuejs.org/user-guide/#how-to-use-a-custom-parser
	// Must use parserOptions instead of "parser" to allow vue-eslint-parser to keep working
	// `parser: 'vue-eslint-parser'` is already included with any 'plugin:vue/**' config and should be omitted
	parserOptions: {
		parser: require.resolve("@typescript-eslint/parser"),
		extraFileExtensions: [".vue"],
	},

	env: {
		browser: true,
		es2021: true,
		node: true,
		"vue/setup-compiler-macros": true,
	},

	// Rules order is important, please avoid shuffling them
	extends: [
		// Base ESLint recommended rules
		// 'eslint:recommended',

		// https://github.com/typescript-eslint/typescript-eslint/tree/master/packages/eslint-plugin#usage
		// ESLint typescript rules
		"plugin:@typescript-eslint/recommended",

		// Uncomment any of the lines below to choose desired strictness,
		// but leave only one uncommented!
		// See https://eslint.vuejs.org/rules/#available-rules
		// 'plugin:vue/vue3-essential', // Priority A: Essential (Error Prevention)
		// 'plugin:vue/vue3-strongly-recommended', // Priority B: Strongly Recommended (Improving Readability)
		"plugin:vue/vue3-recommended", // Priority C: Recommended (Minimizing Arbitrary Choices and Cognitive Overhead)
		"plugin:vue-pug/vue3-recommended",

		// https://github.com/prettier/eslint-config-prettier#installation
		// usage with Prettier, provided by 'eslint-config-prettier'.
		"prettier",
	],

	plugins: [
		// required to apply rules which need type information
		"@typescript-eslint",

		// https://eslint.vuejs.org/user-guide/#why-doesn-t-it-work-on-vue-files
		// required to lint *.vue files
		"vue",

		// https://github.com/typescript-eslint/typescript-eslint/issues/389#issuecomment-509292674
		// Prettier has not been included as plugin to avoid performance impact
		// add it as an extension for your IDE
	],

	globals: {
		ga: "readonly", // Google Analytics
		cordova: "readonly",
		__statics: "readonly",
		__QUASAR_SSR__: "readonly",
		__QUASAR_SSR_SERVER__: "readonly",
		__QUASAR_SSR_CLIENT__: "readonly",
		__QUASAR_SSR_PWA__: "readonly",
		process: "readonly",
		Capacitor: "readonly",
		chrome: "readonly",
	},

	// add your custom rules here
	rules: {
		// Disabled until the table refactor is done
		"vue/order-in-components": "off",

		"@typescript-eslint/no-non-null-assertion": "off", // Allow non-null assertions using `!`
		"vue/no-unused-components": "warn", // Don't block compilation while developing
		"vue/multi-word-component-names": "off", // We have a lot of single word component names like `Contacts`.
		"vue/no-v-html": "off", // Required to render rich HTML. All data is (should be) sanitized on the backend.
		"vue/attribute-hyphenation": ["warn", "never"], // Preserve the original attribute names/casing.
		"vue/v-on-event-hyphenation": ["warn", "never"], // Preserve the original event names/casing.
		"vue/no-this-in-before-route-enter": "error", // Prevents using `this` in `beforeRouteEnter` hooks.
		// Order attributes the default way except slots go first
		"vue/attributes-order": [
			"warn",
			{
				order: [
					"SLOT",
					"DEFINITION",
					"LIST_RENDERING",
					"CONDITIONALS",
					"RENDER_MODIFIERS",
					"GLOBAL",
					"UNIQUE",
					"TWO_WAY_BINDING",
					"OTHER_DIRECTIVES",
					"OTHER_ATTR",
					"EVENTS",
					"CONTENT",
				],
			},
		],
		"vue-pug/component-name-in-template-casing": [
			"warn",
			"PascalCase",
			{ registeredComponentsOnly: false },
		],
		"vue/no-restricted-html-elements": [
			"warn",
			{
				element: "button",
				message: "Prefer Quasar's QBtn",
			},
			{
				element: "br",
				message:
					"Use CSS instead (such as Quasar's css helpers like 'q-mb-md')",
			},
			{
				element: "textarea",
				message: "Prefer CreateFormText with type='area'",
			},
			{
				element: "option",
				message: "Prefer QSelect or FormOptions/FormRelation",
			},
			{
				element: "select",
				message: "Prefer QSelect or FormOptions/FormRelation",
			},
			{
				element: "hr",
				message: "Prefer Quasar's QSeparator",
			},
			{
				element: "b",
				message: "Prefer CSS (such as Quasar's class 'text-bold')",
			},
			{
				element: "strong",
				message:
					"Prefer CSS (such as Quasar's class 'text-bold' or 'text-weight-bolder')",
			},
			{
				element: "i",
				message: "Prefer CSS (such as Quasar's class 'text-italic')",
			},
			{
				element: "em",
				message: "Prefer CSS (such as Quasar's class 'text-italic')",
			},
		],
		"vue/no-restricted-component-names": [
			"error",
			{
				name: "/.*/",
				message:
					"When Using Single File Components, a component's name is derived from the filename. Please do not overwrite this.",
			},
		],

		// The eslint vue plugin does not support pug templates
		// There is a plugin that should add support, but it doesn't seem to support vue3 yet
		// https://github.com/rashfael/eslint-plugin-vue-pug
		"vue/comment-directive": "off",

		"prefer-promise-reject-errors": "off",

		quotes: [
			"warn",
			"double",
			{ avoidEscape: true, allowTemplateLiterals: true },
		],

		// this rule, if on, would require explicit return type on the `render` function
		"@typescript-eslint/explicit-function-return-type": "off",

		// in plain CommonJS modules, you can't use `import foo = require('foo')` to pass this rule, so it has to be disabled
		"@typescript-eslint/no-var-requires": "off",

		// The core 'no-unused-vars' rules (in the eslint:recommended ruleset)
		// does not work with type definitions
		"no-unused-vars": "off",
		"@typescript-eslint/no-unused-vars": "off",

		// allow console.log during development only
		"no-console": process.env.NODE_ENV === "production" ? "off" : "off",
		// allow debugger during development only
		"no-debugger": process.env.NODE_ENV === "production" ? "error" : "off",
		"no-param-reassign": 0,
		"max-len": "off",
	},
}
