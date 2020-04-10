import React from "react";

import SubMenu from "components/subMenu";
import Link from "components/Link";

import "./styles.scss";

export default function sidebar() {
  return (
    <div className="sidebar">
      <div className="logo">
        <Link to="">
          <img alt="logo" src={require("assets/image/logo.png")} />
        </Link>
      </div>
      <div className="menu">
        <SubMenu
          title="Inventory"
          icon="inventory"
          items={[
            { title: "Add New Product", link: "/product/create" },
            { title: "Update Product", link: "/product/update" },
            { title: "Set Margin", link: "/product/margin" }
          ]}
        />
        <SubMenu
          title="Return Stocks"
          icon="money"
          items={[
            { title: "Create Stock Return", link: "/return/create" },
            { title: "View Returns", link: "/returns" }
          ]}
        />
      </div>
    </div>
  );
}
