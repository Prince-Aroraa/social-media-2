import React from "react";

function Sidebar({setNewChange,newChange}) {

  const handeOnClick1 = ()=>{
    setNewChange("Home");
  }
  const handeOnClick2 = ()=>{
    setNewChange("CreatePost");
  }
  return (
    <div
  className="d-flex flex-column flex-shrink-0 p-3 bg-body-tertiary"
  style={{ maxWidth: 220 }}
>
  <a
    href="/"
    className="d-flex align-items-center mb-3 mb-md-0 me-md-auto link-body-emphasis text-decoration-none"
  >
    <svg className="bi pe-none me-2" width={40} height={32}>
      <use xlinkHref="#bootstrap" />
    </svg>
    <span className="fs-4">Sidebar</span>
  </a>
  <hr />
  <ul className="nav nav-pills flex-column mb-auto">
    <li className="nav-item" onClick={handeOnClick1}>
      <a href="#" className={`nav-link ${newChange==="Home" && "active"}`} aria-current="page">
        <svg className="bi pe-none me-2" width={16} height={16}>
          <use xlinkHref="#home" />
        </svg>
        Home
      </a>
    </li>
    <li onClick={handeOnClick2}>
      <a href="#" className={`nav-link ${newChange==="CreatePost" && "active"}`}>
        <svg className="bi pe-none me-2" width={16} height={16}>
          <use xlinkHref="#speedometer2" />
        </svg>
        Create Post
      </a>
    </li>
  </ul>
  <hr />
  <div className="dropdown">
    <a
      href="#"
      className="d-flex align-items-center link-body-emphasis text-decoration-none dropdown-toggle"
      data-bs-toggle="dropdown"
      aria-expanded="false"
    >
      <img
        src="https://github.com/mdo.png"
        alt=""
        width={32}
        height={32}
        className="rounded-circle me-2"
      />
      <strong>mdo</strong>
    </a>
    <ul className="dropdown-menu text-small shadow">
      <li>
        <a className="dropdown-item" href="#">
          New project...
        </a>
      </li>
      <li>
        <a className="dropdown-item" href="#">
          Settings
        </a>
      </li>
      <li>
        <a className="dropdown-item" href="#">
          Profile
        </a>
      </li>
      <li>
        <hr className="dropdown-divider" />
      </li>
      <li>
        <a className="dropdown-item" href="#">
          Sign out
        </a>
      </li>
    </ul>
  </div>
</div>

  );
}

export default Sidebar;
