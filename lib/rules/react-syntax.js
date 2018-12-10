const shouldbeRefactored = ["lazy",'Fragment', 'Component',"createContext", "PureComponent"]

module.exports = function(context) {
  return {
     JSXOpeningElement(node){
      const oneOfReact =
      node.name.object
      && node.name.object.name === 'React'
     	&& shouldbeRefactored.includes(node.name.property.name)

         if(!oneOfReact)return
      		context.report({
           	node,
             	message:"Please use destructing for React. Remove React. Shoulde be import React, {whatever} from 'react'"
         })
     }
   };
};
