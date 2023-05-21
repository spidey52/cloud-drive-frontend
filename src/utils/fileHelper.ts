import iconsMapping from "./iconsMapping";

type fileType = "image" | "video" | "audio" | "document" | "other";

export const getFileType = (extname: string) => {
 const imageExtensions = [".jpg", ".jpeg", ".png", ".gif", ".svg", ".webp"];
 const videoExtensions = [".mp4", ".webm", ".ogg"];
 const textExtensions = [
  ".txt",
  ".md",
  ".ts",
  ".js",
  ".jsx",
  ".tsx",
  ".json",
  ".html",
  ".css",
  ".scss",
  ".sass",
  ".less",
  ".graphql",
  ".mdx",
  ".vue",
  ".php",
  ".py",
  ".rb",
  ".java",
  ".go",
  ".swift",
  ".c",
  ".cpp",
  ".h",
  ".hpp",
  ".cs",
  ".edn",
  ".scala",
  ".groovy",
  ".kt",
  ".kts",
  ".rs",
 ];
 const pdf = [".pdf"];

 console.log(extname);
 if (imageExtensions.includes(extname)) return "image";
 if (textExtensions.includes(extname)) return "text";
 if (pdf.includes(extname)) return "pdf";
};

export const getFileIcon = (extname: string) => {
 return iconsMapping[extname as keyof typeof iconsMapping];
};

const programmingLanguages = {
 ".ts": "typescript",
 ".tsx": "typescript",
 ".js": "javascript",
 ".jsx": "javascript",
 ".json": "json",
 ".html": "html",
 ".css": "css",
 ".scss": "sass",
 ".sass": "sass",
 ".less": "less",
 ".graphql": "graphql",
 ".md": "markdown",
 ".mdx": "markdown",
 ".vue": "vue",
 ".php": "php",
 ".py": "python",
 ".rb": "ruby",
 ".java": "java",
 ".go": "go",
 ".swift": "swift",
 ".c": "c",
 ".cpp": "cpp",
 ".h": "h",
 ".hpp": "hpp",
 ".cs": "csharp",
 ".edn": "clojure",
 ".scala": "scala",
 ".groovy": "groovy",
 ".kt": "kotlin",
 ".kts": "kotlin",
 ".rs": "rust",
};

export const getProgrammingLanguage = (extname: string) => {
	console.log(extname);
 return programmingLanguages[extname as keyof typeof programmingLanguages];
};
