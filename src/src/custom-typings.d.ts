declare module '*.module.scss' {
  const classes: { [className: string]: string };
  export default classes;
}

// For plain SCSS files (rare in SPFx, but allowed)
declare module '*.scss' {
  const content: { [className: string]: any };
  export default content;
}

// For plain CSS files
declare module '*.css' {
  const content: { [className: string]: any };
  export default content;
}