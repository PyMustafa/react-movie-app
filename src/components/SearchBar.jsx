import { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "@fortawesome/fontawesome-free/css/all.css";

const SearchBar = ({ onSearch }) => {
  const [query, setQuery] = useState("");

  const handleSearch = () => {
    if (query.trim() !== "") {
      onSearch(query);
    }
  };

  return (
    <div className="text-left py-5 mt-4 mx-5" style={{ background: "#F3F1F1" }}>
      <div className="container-fluid mt-4 px-0">
        <div className="px-5">
          <h1 className="fw-bold text-dark mt-3">Welcome to our movie app</h1>
          <p className="text-black mt-4">
            Millions of movies, TV shows and people to discover. Explore now.
          </p>
          <div className="mt-4">
            <div className="d-flex align-items-center">
              <input
                type="text"
                className="form-control border-0 px-3 me-3"
                placeholder="Search and explore...."
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                onKeyDown={(e) => e.key === "Enter" && handleSearch()}
                style={{
                  height: "46px",
                  borderRadius: "10px",
                  boxShadow: "none",
                  fontSize: "1rem",
                  flex: 1  
                }}
              />
              <button 
                className="btn  d-flex align-items-center justify-content-center " 
                onClick={handleSearch}
                style={{
                  width: "120px",
                  height: "46px",
                  borderRadius: "10px",
                  padding: "0",
                  flexShrink: 0,  
                  background: "#FFE353"
                }}
              >
                
                <span>Search</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SearchBar;