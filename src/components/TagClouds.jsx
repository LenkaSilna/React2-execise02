import React, { useState } from "react";
import TagInput from "./TagInput";

const TagClouds = () => {
const [tags, setTags] = useState([
    {label: 'Workout Gears'},
    {label:'Digital Art'},
    {label:'Replacement'},
    {label:'Aria'},
]);

const handleAdd = (newValue) => {
    const newTag = {
    label: newValue,
    };
    setTags((prevTags) => [...prevTags, newTag]);
};

const handleRemoveFirst = () => {
    setTags((prevTags) => prevTags.slice(1));
};

return (
    <div className="cloud-wrapper">
        <TagInput onAdd={handleAdd} />
        <button className="btn-renove" onClick={handleRemoveFirst} disabled={tags.length === 0}>
        Smazat první
        </button>

    <div className="tags">
        {tags.map((tag) => (
        <div key={tag.label} className="tag">
            {tag.label}
        </div>
        ))}
    </div>
    </div>
);
};

export default TagClouds;
