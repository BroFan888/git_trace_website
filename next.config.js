/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',  // 启用静态导出
  images: {
    unoptimized: true,  // GitHub Pages 不支持 Next.js 的图片优化
  },
  basePath: '/git_trace_website',  // 设置基础路径
  assetPrefix: '/git_trace_website/',  // 添加这行
}

module.exports = nextConfig 