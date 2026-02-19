export default function Logo({ className = "h-8 w-8" }: { className?: string }) {
    return (
        <svg
            viewBox="0 0 100 100"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className={className}
        >
            <defs>
                <linearGradient id="logoGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#3b82f6" />
                    <stop offset="100%" stopColor="#8b5cf6" />
                </linearGradient>
            </defs>

            {/* Outer hexagon */}
            <path
                d="M50 5 L85 27.5 L85 72.5 L50 95 L15 72.5 L15 27.5 Z"
                stroke="url(#logoGradient)"
                strokeWidth="3"
                fill="none"
            />

            {/* Inner "SS" monogram */}
            <text
                x="50"
                y="62"
                fontFamily="system-ui, -apple-system, sans-serif"
                fontSize="42"
                fontWeight="800"
                textAnchor="middle"
                fill="url(#logoGradient)"
                letterSpacing="-2"
            >
                SS
            </text>
        </svg>
    );
}
