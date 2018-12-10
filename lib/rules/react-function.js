
module.exports =  function(context) {
  return {
    JSXOpeningElement(node){
     	const ReactClickFunction =
        node.type === "JSXOpeningElement"
        && node.attributes
        && haveIt(node.attributes)

      	if(!ReactClickFunction) return
      	else{
        context.report({
         node,
         message:"Please use onAttribute={this.function} pattern"
        })
       }
    }
  };
};

function haveIt(attributes){
 return attributes.some(value => {
 	const result = value.type === "JSXAttribute"
   	&& value.value.expression.type === "ArrowFunctionExpression"
    if(result) return true;
 })
}
