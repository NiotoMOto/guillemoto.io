module.exports = {
    content: [
        "./app/**/*.{js,ts,jsx,tsx,mdx}",
        "./pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./components/**/*.{js,ts,jsx,tsx,mdx}",
    ], theme: {
        extend: {
            colors: {
                'deep-sea': {
                    '50': '#eefbf6',
                    '100': '#d7f4e7',
                    '200': '#b2e8d3',
                    '300': '#80d5ba',
                    '400': '#4bbc9c',
                    '500': '#28a182',
                    '600': '#197c65',
                    '700': '#156756',
                    '800': '#135245',
                    '900': '#10443a',
                    '950': '#082621',
                },
                code: '#161616'
            }
        },
    },
    plugins: [],
}
