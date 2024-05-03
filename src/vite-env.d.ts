/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_DUG_SEARCH_API: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
