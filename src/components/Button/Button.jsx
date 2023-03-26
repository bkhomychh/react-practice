
export function Button({textContent,heandleButton}) {
    return <button type="button" onClick={heandleButton}>{textContent}</button>
}