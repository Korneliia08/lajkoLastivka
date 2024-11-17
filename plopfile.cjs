module.exports = (plop) => {
    plop.setGenerator("component", {
        description: "Create a component",
        // User input prompts provided as arguments to the template
        prompts: [
            {
                // Raw text input
                type: "input",
                // Variable name for this input
                name: "name",
                // Prompt to display on command line
                message: "What is your component name?",
            },
        ],
        actions: [
            {
                type: "add",
                path: "src/{{camelCase  name}}/{{pascalCase name}}.jsx",
                templateFile: "plop-templates/Component.jsx.hbs",
            },
            {
                type: "add",
                path: "src/{{camelCase  name}}/{{pascalCase name}}.module.scss",
                templateFile: "plop-templates/Component.module.scss.hbs",
            },
        ],
    });
};
