import React from 'react'

const ConditionalRender = (Component) => {
    return function EnhancedComponent({ toLoad  }) {
      if (toLoad) {
        return <Component />;
      }
      return null;
    };
}

export default ConditionalRender