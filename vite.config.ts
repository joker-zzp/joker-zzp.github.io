import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'
import { viteStaticCopy } from 'vite-plugin-static-copy';

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    viteStaticCopy({
      targets: [
        {
          src: path.resolve(__dirname, 'doc'),
          dest: '.',
        },
      ],
    }),
  ],
  build: {
    sourcemap: true,
    outDir: 'dist',
    rollupOptions: {
      input: {
        main: path.resolve(__dirname, 'index.html'),
      },
      output: {
        manualChunks: undefined,
      }
    },
    emptyOutDir: true,
  },
  css: {
    // 启用 CSS 源映射（开发环境）
    devSourcemap: true,
  },
  // 修复模块解析路径
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src'),
      '@doc': path.resolve(__dirname, 'doc'),
      '@mantine/core': path.resolve(__dirname, 'node_modules/@mantine/core'),
    },
  },
})
