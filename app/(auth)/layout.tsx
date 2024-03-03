export default function ({ children }: { children: React.ReactNode }) {
    return (
        <div className="border-b text-center">
            Get 20% off today!
            {children}
        </div>
    )
}