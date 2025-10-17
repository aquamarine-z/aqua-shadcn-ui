import fs from "fs";
import path from "path";
import {notFound} from "next/navigation";
import dynamic from "next/dynamic";

const docsDir = path.join(process.cwd(), "app/docs");

// 动态导入 MDX 文件
export default async function DocPage({params}: { params: { slug?: string[] } }) {
    const slugArray = params.slug || [];
    const slugPath = slugArray.join("/");

    // 拼接路径，比如 docs/welcome/xxx.mdx
    const filePath = path.join(docsDir, `${slugPath}.mdx`);

    if (!fs.existsSync(filePath)) return notFound();

    // 动态导入 MDX 文件作为 React 组件
    const Content = dynamic(() => import(`../${slugPath}.mdx`));

    return (
        <div className="prose dark:prose-invert mx-auto p-8">
            <Content/>
        </div>
    );
}
