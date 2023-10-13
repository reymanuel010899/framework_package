import scss from "rollup-plugin-scss";
export default [{
    input: './index.js',
    output: {
        file: './core/main/bundle.js',
        format: 'cjs',
    },
    plugins: [
        scss({
          include: ["/**/*.css", "/**/*.scss", "/**/*.sass"],
          output: "./public/bundle.css",
          failOnError: true,
        }),
      ],
},
]