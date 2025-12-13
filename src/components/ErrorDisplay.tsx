import "../styles/ErrorDisplay.css"
import type { ErrorDisplayProps } from "../types/ErrorDisplay";

export function ErrorDisplay({ message, onRetry }: ErrorDisplayProps) {
    return (
        <div className="errorDisplay">
            <div className="errorIcon">⚠️</div>
            <h2>Something went wrong...</h2>
            <p>{message}</p>
            {onRetry && (
                <button className="error-retry-btn" onClick={onRetry}>Try Again</button>
            )}
        </div>
    )
}