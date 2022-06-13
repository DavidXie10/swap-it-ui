import { useState } from "react";
import { CheckboxGroup } from "@createnl/grouped-checkboxes";

export default function Showcase({
    fileList
}) {
    const [onChange, setOnChange] = useState({});
    const [showOnChange, setShowOnChange] = useState(false);
    return (
        <ol>
            <CheckboxGroup onChange={setOnChange} defaultChecked>
                { fileList }
            </CheckboxGroup>
            <button onClick={() => setShowOnChange(!showOnChange)}>
                {!showOnChange ? "Show" : "Hide"} values
            </button>
            {showOnChange && (
                <li>
                <pre>{JSON.stringify(onChange, null, 2)}</pre>
                </li>
            )}
        </ol>
    )
}