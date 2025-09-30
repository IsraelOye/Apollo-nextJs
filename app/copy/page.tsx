"use client";
const CopyToClipboard = () => {
    return (
        <div>
           <button onClick={() => {navigator.clipboard.writeText("Hello, I am copied!"); alert("Copied!");}}
            className="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600 m-5"
            >Copy Text</button>

        </div>
    );
};

export default CopyToClipboard