import createMDX from '@next/mdx'
import type {NextConfig} from 'next'
// 1️⃣ 包装 MDX 插件
const withMDX = createMDX({
    options: {
        remarkPlugins: [],
        rehypePlugins: [],
    },
    extension: /\.(md|mdx)$/,
})

// 2️⃣ 主配置
const nextConfig: NextConfig = {
    pageExtensions: ['js', 'jsx', 'ts', 'tsx', 'md', 'mdx'],
    outputFileTracingIncludes: {
        registry: ['./registry/**/*'],
    },
}

// 3️⃣ 导出
export default withMDX(nextConfig)
