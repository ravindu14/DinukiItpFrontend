// @flow
import { lazy } from "react";
import { USER_ROLES } from "constants/user";
import authRoutes from "modules/auth/routes";

export default [
  {
    path: "/",
    exact: true,
    auth: true,
    roles: [USER_ROLES.ADMIN],
    component: lazy(() => import("modules/dashboard/home"))
  },
  {
    path: "/product/create",
    exact: true,
    auth: true,
    roles: [USER_ROLES.ADMIN],
    component: lazy(() =>
      import("modules/stockManagement/inventory/addNewProduct")
    )
  },
  {
    path: "/product/update",
    exact: true,
    auth: true,
    roles: [USER_ROLES.ADMIN],
    component: lazy(() =>
      import("modules/stockManagement/inventory/updateProducts")
    )
  },
  {
    path: "/product/margin",
    exact: true,
    auth: true,
    roles: [USER_ROLES.ADMIN],
    component: lazy(() =>
      import("modules/stockManagement/inventory/setProductMargin")
    )
  },
  {
    path: "/return/create",
    exact: true,
    auth: true,
    roles: [USER_ROLES.ADMIN],
    component: lazy(() =>
      import("modules/stockManagement/stockReturn/createStockReturn")
    )
  },
  {
    path: "/returns",
    exact: true,
    auth: true,
    roles: [USER_ROLES.ADMIN],
    component: lazy(() =>
      import("modules/stockManagement/stockReturn/viewStockReturns")
    )
  },
  {
    path: "/admin/product/create",
    exact: true,
    auth: true,
    roles: [USER_ROLES.ADMIN],
    component: lazy(() =>
      import("modules/adminManagement/inventory/addProduct")
    )
  },
  {
    path: "/admin/products",
    exact: true,
    auth: true,
    roles: [USER_ROLES.ADMIN],
    component: lazy(() =>
      import("modules/adminManagement/inventory/viewProducts")
    )
  },
  {
    path: "/admin/stockCounts",
    exact: true,
    auth: true,
    roles: [USER_ROLES.ADMIN],
    component: lazy(() =>
      import("modules/adminManagement/inventory/stockCounts")
    )
  },
  {
    path: "/admin/employee/create",
    exact: true,
    auth: true,
    roles: [USER_ROLES.ADMIN],
    component: lazy(() =>
      import("modules/adminManagement/employee/addEmployee")
    )
  },
  {
    path: "/admin/employees",
    exact: true,
    auth: true,
    roles: [USER_ROLES.ADMIN],
    component: lazy(() =>
      import("modules/adminManagement/employee/viewEmployees")
    )
  },
  {
    path: "/admin/leaves/add",
    exact: true,
    auth: true,
    roles: [USER_ROLES.ADMIN],
    component: lazy(() => import("modules/adminManagement/leaves/addLeaves"))
  },
  {
    path: "/admin/leaves",
    exact: true,
    auth: true,
    roles: [USER_ROLES.ADMIN],
    component: lazy(() => import("modules/adminManagement/leaves/viewLeaves"))
  },
  {
    path: "/admin/supplier/create",
    exact: true,
    auth: true,
    roles: [USER_ROLES.ADMIN],
    component: lazy(() =>
      import("modules/adminManagement/suppliers/addSupplier")
    )
  },
  {
    path: "/admin/suppliers",
    exact: true,
    auth: true,
    roles: [USER_ROLES.ADMIN],
    component: lazy(() =>
      import("modules/adminManagement/suppliers/viewSuppliers")
    )
  },
  {
    path: "/admin/salary",
    exact: true,
    auth: true,
    roles: [USER_ROLES.ADMIN],
    component: lazy(() =>
      import("modules/adminManagement/salary/salaryPayment")
    )
  },
  {
    path: "/cashier",
    exact: true,
    auth: true,
    roles: [USER_ROLES.ADMIN],
    component: lazy(() => import("modules/cashierManagement/cashier"))
  },
  ...authRoutes
];
