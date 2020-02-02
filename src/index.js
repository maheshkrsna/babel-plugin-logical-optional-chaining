export default function(babel) {
  const { types: t , api} = babel;

  api.assertVersion(7);

  return {
    name: "babel-plugin-logical-optional-chaining",
    visitor: {
      OptionalMemberExpression(path) {
        // Flag to preserve Computed Property Name Format
        const isPropertyComputed = path.node.computed;

        // Logically Chain the Object with an Empty Object using OR operation
        let chainExpression = t.logicalExpression(
          "||",
          path.node.object,
          t.objectExpression([])
        );

        // If the Object is an Array, then logically chain it with an empty array
        if (path.node.property.type === "NumericLiteral") {
          chainExpression = t.logicalExpression(
            "||",
            path.node.object,
            t.arrayExpression([])
          );
        }

        // Replace the original Object with Logically ORed Chain Expression in a Parenthesis
        path.replaceWith(
          t.memberExpression(
            t.parenthesizedExpression(chainExpression),
            path.node.property,
            isPropertyComputed
          )
        );
      },

      OptionalCallExpression(path) {
        path.replaceWith(
          t.logicalExpression(
            "&&",
            path.node.callee,
            t.callExpression(path.node.callee, path.node.arguments)
          )
        );
      }
    }
  };
}