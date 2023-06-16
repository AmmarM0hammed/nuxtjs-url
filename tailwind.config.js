/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
      "./components/**/*.{js,vue,ts}",
      "./layouts/**/*.vue",
      "./pages/**/*.vue",
      "./plugins/**/*.{js,ts}",
      "./nuxt.config.{js,ts}",
      "./app.vue",
    ],
    theme: {
      
      extend: {},
    },
    plugins: [require("daisyui")],
    daisyui: {
      styled: true,
      themes: [
        {
          'light': {
             'primary' : '#7D5FDE',
             'primary-focus' : '#7D5FDE',
             'primary-content' : '#ffffff',
  
             'secondary' : '#7D5FDE',
             'secondary-focus' : '#7D5FDE',
             'secondary-content' : '#7D5FDE',
  
             'accent' : '#37cdbe',
             'accent-focus' : '#2ba69a',
             'accent-content' : '#ffffff',
  
             'neutral' : '#3b424e',
             'neutral-focus' : '#2a2e37',
             'neutral-content' : '#ffffff',
  
             'base-100' : '#202327',
             'base-200' : '#262A2E',
             'base-300' : '#ced3d9',
             'base-content' : '#1e2734',
  
             'info' : '#1c92f2',
             'success' : '#009485',
             'warning' : '#ff9900',
             'error' : '#ff5724',
  
            '--rounded-box': '1rem',          
            '--rounded-btn': '0.5rem',        
            '--rounded-badge': '1.9rem',      
  
            '--animation-btn': '0.25s',       
            '--animation-input': '0.2s',       
  
            '--btn-text-case': 'normall',   
            '--navbar-padding': '0.5rem',      
            '--border-btn': '1px',            
          },
        },
      ],
      base: true,
      utils: true,
      logs: true,
      rtl: false,
      darkTheme: "dark",
    },
  }