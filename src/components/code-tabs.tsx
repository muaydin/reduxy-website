"use client"

import { useState } from "react"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Button } from "@/components/ui/button"
import { Copy, Check } from "lucide-react"
import { cn } from "@/lib/utils"

interface CodeExample {
    language: string
    label: string
    code: string
}

interface CodeTabsProps {
    examples: CodeExample[]
    className?: string
}

export function CodeTabs({ examples, className }: CodeTabsProps) {
    const [copiedIndex, setCopiedIndex] = useState<number | null>(null)

    const copyToClipboard = async (code: string, index: number) => {
        try {
            await navigator.clipboard.writeText(code)
            setCopiedIndex(index)
            setTimeout(() => setCopiedIndex(null), 2000)
        } catch (err) {
            console.error('Failed to copy text: ', err)
        }
    }

    return (
        <div className={cn("w-full", className)}>
            <Tabs defaultValue={examples[0]?.language} className="w-full">
                <TabsList className="grid w-full grid-cols-2 sm:grid-cols-4 gap-1">
                    {examples.map((example) => (
                        <TabsTrigger key={example.language} value={example.language}>
                            {example.label}
                        </TabsTrigger>
                    ))}
                </TabsList>

                {examples.map((example, index) => (
                    <TabsContent key={example.language} value={example.language} className="mt-4">
                        <div className="relative">
                            <pre className="overflow-x-auto rounded-lg bg-muted p-4 text-sm">
                                <code className="text-muted-foreground">{example.code}</code>
                            </pre>
                            <Button
                                variant="ghost"
                                size="sm"
                                className="absolute top-2 right-2 h-8 w-8 p-0"
                                onClick={() => copyToClipboard(example.code, index)}
                            >
                                {copiedIndex === index ? (
                                    <Check className="h-4 w-4" />
                                ) : (
                                    <Copy className="h-4 w-4" />
                                )}
                                <span className="sr-only">Copy code</span>
                            </Button>
                        </div>
                    </TabsContent>
                ))}
            </Tabs>
        </div>
    )
}

// Pre-defined code examples for common use cases
export const chatCompletionExamples: CodeExample[] = [
    {
        language: "python-sdk",
        label: "Reduxy SDK",
        code: `from reduxy import Client

# Initialize client (connects to https://api.reduxy.ai by default)
client = Client(api_key="your_reduxy_api_key")

# Make a chat completion request with automatic PII detection
response = client.chat.completions.create(
    messages=[
        {"role": "user", "content": "Hello! How are you today?"}
    ],
    model="gpt-4o"
)

print(response)`
    },
    {
        language: "curl",
        label: "cURL",
        code: `curl https://api.reduxy.ai/v1/chat/completions \\
  -H "Authorization: Bearer $REDUXY_API_KEY" \\
  -H "Content-Type: application/json" \\
  -d '{
    "model": "gpt-4o",
    "messages": [{"role":"user","content":"Summarize this text"}],
    "stream": false
  }'`
    },
    {
        language: "javascript",
        label: "JavaScript",
        code: `const res = await fetch("https://api.reduxy.ai/v1/chat/completions", {
  method: "POST",
  headers: {
    "Authorization": \`Bearer \${process.env.REDUXY_API_KEY}\`,
    "Content-Type": "application/json"
  },
  body: JSON.stringify({
    model: "gpt-4o",
    messages: [{ role: "user", content: "Hello" }]
  })
});
const data = await res.json();`
    },
    {
        language: "python-requests",
        label: "Python",
        code: `import os, requests
r = requests.post(
  "https://api.reduxy.ai/v1/chat/completions",
  headers={
    "Authorization": f"Bearer {os.getenv('REDUXY_API_KEY')}",
    "Content-Type": "application/json"
  },
  json={
    "model": "gpt-4o",
    "messages": [{"role":"user","content":"Hello"}],
  },
  timeout=30
)
print(r.json())`
    }
] 