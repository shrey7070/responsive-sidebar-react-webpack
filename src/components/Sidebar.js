import React, { useEffect } from "react";
import { Link, withRouter } from "react-router-dom";
import Logo from "../../public/assets/img/shrey.jpg";
const Sidebar = ({ history }) => {
  useEffect(() => {
    let arrow = document.querySelectorAll(".arrow");
    for (let index = 0; index < arrow.length; index++) {
      const element = arrow[index];
      element.addEventListener("click", (e) => {
        let arrowParent = e.target.parentElement.parentNode;
        arrowParent.classList.toggle("showMenu");
      });
    }
    let sidebar = document.querySelector(".sidebar");
    let sidebarBtn = document.querySelector(".bx-menu");
    sidebarBtn.addEventListener("click", () => {
      sidebar.classList.toggle("close");
    });
  }, []);
  return (
    <>
      <div className="sidebar">
        <div className="logo-details">
          <i className="bx bxl-c-plus-plus"></i>
          <span className="logo_name">Company Name</span>
        </div>
        <ul className="nav-links">
          <li>
            <a href="#">
              <i className="bx bx-grid-alt"></i>
              <span className="link_name">Dashboard</span>
            </a>
            <ul className="sub-menu blank">
              <li>
                <a className="link_name" href="#">
                  Category
                </a>
              </li>
            </ul>
          </li>
          <li>
            <div className="icon-link">
              <a href="#">
                <i className="bx bx-collection"></i>
                <span className="link_name">Category</span>
              </a>
              <i className="bx bxs-chevron-down arrow"></i>
            </div>
            <ul className="sub-menu">
              <li>
                <a className="link_name" href="#">
                  Category
                </a>
              </li>
              <li>
                <a href="#">HTML & CSS</a>
              </li>
              <li>
                <a href="#">Javascript</a>
              </li>
              <li>
                <a href="#">React</a>
              </li>
            </ul>
          </li>
          <li>
            <div className="icon-link">
              <a href="#">
                <i className="bx bx-book"></i>
                <span className="link_name">Posts</span>
              </a>
              <i className="bx bxs-chevron-down arrow"></i>
            </div>
            <ul className="sub-menu">
              <li>
                <a className="link_name" href="#">
                  Posts
                </a>
              </li>
              <li>
                <a href="#">Web Design</a>
              </li>
              <li>
                <a href="#">Login Form</a>
              </li>
              <li>
                <a href="#">Card Design</a>
              </li>
            </ul>
          </li>
          <li>
            <a href="#">
              <i className="bx bx-pie-chart-alt-2"></i>
              <span className="link_name">Analytics</span>
            </a>
            <ul className="sub-menu blank">
              <li>
                <a className="link_name" href="#">
                  Analytics
                </a>
              </li>
            </ul>
          </li>
          <li>
            <a href="#">
              <i className="bx bx-line-chart"></i>
              <span className="link_name">Chart</span>
            </a>
            <ul className="sub-menu blank">
              <li>
                <a className="link_name" href="#">
                  Chart
                </a>
              </li>
            </ul>
          </li>
          <li>
            <div className="icon-link">
              <a href="#">
                <i className="bx bx-plug"></i>
                <span className="link_name">Plugins</span>
              </a>
              <i className="bx bxs-chevron-down arrow"></i>
            </div>
            <ul className="sub-menu">
              <li>
                <a className="link_name" href="#">
                  Plugins
                </a>
              </li>
              <li>
                <a href="#">Devops</a>
              </li>
              <li>
                <a href="#">Git</a>
              </li>
              <li>
                <a href="#">Node js</a>
              </li>
            </ul>
          </li>
          <li>
            <div className="icon-link">
              <a href="#">
                <i className="bx bx-compass"></i>
                <span className="link_name">Explore</span>
              </a>
            </div>
            <ul className="sub-menu blank">
              <li>
                <a className="link_name" href="#">
                  Explore
                </a>
              </li>
            </ul>
          </li>
          <li>
            <div className="icon-link">
              <a href="#">
                <i className="bx bx-history"></i>
                <span className="link_name">History</span>
              </a>
            </div>
            <ul className="sub-menu blank">
              <li>
                <a className="link_name" href="#">
                  History
                </a>
              </li>
            </ul>
          </li>
          <li>
            <div className="icon-link">
              <a href="#">
                <i className="bx bx-cog"></i>
                <span className="link_name">Setting</span>
              </a>
            </div>
            <ul className="sub-menu blank">
              <li>
                <a className="link_name" href="#">
                  Setting
                </a>
              </li>
            </ul>
          </li>
          <li>
            <div className="profile-details">
              <div className="profile-content">
                <img src={Logo} alt="profile_logo" />
              </div>
              <div className="name-job">
                <div className="profile_name">Shrey Soni</div>
                <div className="job">Web developer</div>
              </div>
              <i className="bx bx-log-out"></i>
            </div>
          </li>
        </ul>
      </div>
      <section className="home-section">
        <div className="home-content">
          <i className="bx bx-menu"></i>
          {/* <span className="text">Dropdown Sidebar</span> */}
        </div>
      </section>
    </>
  );
};

export default withRouter(Sidebar);
