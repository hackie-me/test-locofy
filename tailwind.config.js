/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.{html,js}", "./!(build|dist|.*)/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        "neutral-gray-gray-25": "#f9f9fc",
        "neutral-black-black-500": "#667085",
        "primary-primary-500": "#5c59e8",
        "neutral-black-black-600": "#4d5464",
        "neutral-white": "#fff",
        "neutral-black-black-700": "#333843",
        "primary-primary-100": "#dedefa",
        "neutral-gray-gray-50": "#f0f1f3",
        "secondary-green-green-50": "#e7f4ee",
        "secondary-green-green-500": "#0d894f",
        "secondary-blue-blue-50": "#e8f8fd",
        "secondary-blue-blue-500": "#13b2e4",
        "secondary-red-red-50": "#feedec",
        "secondary-red-red-500": "#f04438",
        "secondary-yellow-yellow-50": "#fdf1e8",
        "secondary-yellow-yellow-500": "#e46a11",
        "neutral-gray-gray-400": "#858d9d",
        "neutral-black-black-800": "#1a1c21",
        "primary-primary-50": "#efeffd",
        "secondary-yellow-yellow-100": "#fae1cf",
        "secondary-red-red-100": "#fcdad7",
        "secondary-green-green-100": "#cfe7dc",
        "primary-primary-600": "#4543ae",
        "neutral-gray-gray-100": "#e0e2e7",
        "secondary-blue-blue-100": "#d0f0fa",
      },
      fontFamily: {
        "text-m-regular": "Inter",
      },
      borderRadius: {
        "81xl": "100px",
      },
    },
    fontSize: {
      sm: "14px",
      "5xl": "24px",
      xl: "20px",
      xs: "12px",
      lg: "18px",
      base: "16px",
      "3xs": "10px",
      "101xl": "120px",
    },
  },
  corePlugins: {
    preflight: false,
  },
};
