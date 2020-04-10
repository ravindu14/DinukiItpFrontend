import React, { Component } from "react";

import Layout from "components/mainLayout";
import Link from "components/Link";

import "./styles.scss";

class HomePage extends Component {
  render() {
    return (
      <Layout>
        <div className="main-page">
          <div className="main-page-links">
            <Link to={"cashier"}>
              <div className="main-page-links-item">Cashier Management</div>
            </Link>
            <Link to={"product/create"}>
              <div className="main-page-links-item">Stock Management</div>
            </Link>
            <Link to={"admin/product/create"}>
              <div className="main-page-links-item">Admin Management</div>
            </Link>
          </div>
        </div>
      </Layout>
    );
  }
}
export default HomePage;
