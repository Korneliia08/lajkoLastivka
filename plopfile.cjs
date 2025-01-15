const path = require("path");

module.exports = (plop) => {
  plop.setGenerator("component", {
    description: "Create a component",
    prompts: [
      {
        type: "input",
        name: "directory",
        message:
          "Where do you want to create the component? (default: current directory)",
        default: process.cwd() + "/src",
      },
      {
        type: "input",
        name: "name",
        message: "What is your component name?",
      },
    ],
    actions: (data) => {
      const targetDir = data.directory || process.cwd();
      return [
        {
          type: "add",
          path: path.join(
            targetDir,
            "{{camelCase name}}",
            "{{pascalCase name}}.jsx",
          ),
          templateFile: "plop-templates/Component.jsx.hbs",
        },
        {
          type: "add",
          path: path.join(
            targetDir,
            "{{camelCase name}}",
            "{{pascalCase name}}.module.scss",
          ),
          templateFile: "plop-templates/Component.module.scss.hbs",
        },
      ];
    },
  });
};
//c:\Program Files\nodejs\npm.cmd
//run plop $FileRelativeDir$/ $Prompt$
//$ProjectFileDir$
