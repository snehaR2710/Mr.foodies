# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

# Redux toolkit 
 - Install @reduxjs/toolkit and react-redux
 - Build our store
 - Connect our store to our app
 - Slices (cartSlice)
 - dispatch (action)
 - Selector


 
# Types of testing {developer}
 - Unit testing
 - Intigration testing
 - End to End testing (e2e testing)

 # Setting up Testing in our app 
  - Install React Testing Library (npm install --save-dev @testing-library/react)
  - Install jest (npm init jest@latest)
  - configure babel -> make a file in the root directory (babel.config.js)  
     and configure (export default {
    presets: [['@babel/preset-env', {targets: {node: 'current'}}]],
  };)
  - create a jest.config.js file in the root of your project (export default {
    preset: 'vite-jest',
})
