import { Outlet } from "react-router-dom";

export default function Root({children}) {
    return (
      <>
        <div id="sidebar">
          <h1>SPA Template</h1>
          <nav>
            <ul>
              <li>
                <a href={`/example`}>Example</a>
              </li>
              <li>
                <a href={`/another-example`}>Another Example</a>
              </li>
            </ul>
          </nav>
        </div>
        <div id="detail">
            <Outlet />
        </div>
      </>
    );
  }