
import React, { useState } from "react";
import { GoogleGenerativeAI } from "@google/generative-ai";

const GoogleAIComponent = () => {
  const [userPrompt, setUserPrompt] = useState("");
  const [responseText, setResponseText] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleGenerateContent = async () => {
    const genAI = new GoogleGenerativeAI("AIzaSyDY7K4H5-LWJ6SUPWebQL2tViwv5cQybA0");
    const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });
    try {
      setLoading(true);
      setError("");
      const result = await model.generateContent(userPrompt);
      const txt = result.response.text();
      setResponseText(txt);
    } catch (err) {
      setError("Failed to fetch response. Please try again.");
    } finally {
      setLoading(false);
    }
  };
  return (
    // <div className='m-10 flex'>
    //       <input type="text" id="user-prompt" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Enter the prompt" required />
    //       <button onClick={handleGenerateContent} disabled={loading || !userPrompt.trim()}
    //       style={{padding: "10px",backgroundColor: "#007bff",color: "#fff",border: "none",borderRadius: "8px",cursor: "pointer",}}>
    //       {loading ? "Loading..." : "Submit"}
    //     </button>
    // </div>


    <div style={{ padding: "20px", fontFamily: "Arial, sans-serif" }}>
      <div style={{ marginBottom: "20px" }}>
        <label htmlFor="user-prompt" className="mt-3 text-white">
          Enter your prompt:
        </label>
        <input id="user-prompt" type="text" value={userPrompt}
          onChange={(e) => setUserPrompt(e.target.value)}
          style={{width: "100%",padding: "10px",marginBottom: "10px",border: "1px solid #ccc",borderRadius: "5px",
          }}
        />
        <button onClick={handleGenerateContent} disabled={loading || !userPrompt.trim()}
          style={{padding: "10px 20px",backgroundColor: "#007bff",color: "#fff",border: "none",borderRadius: "5px",cursor: "pointer"}}>
          {loading ? "Loading..." : "Submit"}
        </button>
      </div>
      {userPrompt && (
        <div style={{ marginBottom: "20px", color:"white" ,background:"blue", padding: "20px", borderRadius:"10px" }}>
          <h3>Chea</h3>
          <p className="font-semibold">{userPrompt}</p>
        </div>
      )}
      {responseText && (
        <div style={{ marginBottom: "20px", color: "white", background:"red", padding: "20px", borderRadius:"10px" }}>
          <h3 className="font-bold">DEBUG</h3>
          <p className="font-bold">{responseText}</p>
        </div>
      )}
      {error && (
        <p style={{ color: "red" }}>
          <strong>Error:</strong> {error}
        </p>
      )}
    </div>
  );
};

export default GoogleAIComponent;

