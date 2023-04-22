
import { useCallback, useEffect, useMemo, useState } from 'react';
import './Switcher.scss'

type Switcher = {
    handler: Function,
    initial?: boolean
}
export const Switcher = ({handler, initial}: Switcher) => {
    const [isChecked, setIsChecked] = useState(initial);

    useEffect(() => {
        handler(isChecked)
    }, [isChecked])

    const handlerChange = () => {
        setIsChecked(state => !state)
    }
    
    return (
        <div className="switcher">
            <input
                type="checkbox"
                id="themeSwitch"
                name="theme-switch"
                className="theme-switch__input"
                checked={isChecked}
                onChange={handlerChange} />
            <label htmlFor="themeSwitch" className="theme-switch__label">
                <span></span>
            </label>
        </div>
    )
}

