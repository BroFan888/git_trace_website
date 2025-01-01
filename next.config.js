/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',  // 启用静态导出
  images: {
    unoptimized: true,  // GitHub Pages 不支持 Next.js 的图片优化
  },
  basePath: process.env.NEXT_PUBLIC_BASE_PATH || '',  // 设置基础路径
}

module.exports = nextConfig 