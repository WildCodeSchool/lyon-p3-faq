import React from "react";


const Toaster = React.lazy(() =>
  import("../views/notifications/toaster/Toaster")
);
const Tables = React.lazy(() => import("../views/base/tables/Tables"));

const Breadcrumbs = React.lazy(() =>
  import("../views/base/breadcrumbs/Breadcrumbs")
);
const Cards = React.lazy(() => import("../views/base/cards/Cards"));
const Carousels = React.lazy(() => import("../views/base/carousels/Carousels"));
const Collapses = React.lazy(() => import("../views/base/collapses/Collapses"));
const BasicForms = React.lazy(() => import("../views/base/forms/BasicForms"));

const Jumbotrons = React.lazy(() =>
  import("../views/base/jumbotrons/Jumbotrons")
);
const ListGroups = React.lazy(() =>
  import("../views/base/list-groups/ListGroups")
);
const Navbars = React.lazy(() => import("../views/base/navbars/Navbars"));
const Navs = React.lazy(() => import("../views/base/navs/Navs"));
const Paginations = React.lazy(() =>
  import("../views/base/paginations/Pagnations")
);
const Popovers = React.lazy(() => import("../views/base/popovers/Popovers"));
const ProgressBar = React.lazy(() =>
  import("../views/base/progress-bar/ProgressBar")
);
const Switches = React.lazy(() => import("../views/base/switches/Switches"));

const Tabs = React.lazy(() => import("../views/base/tabs/Tabs"));
const Tooltips = React.lazy(() => import("../views/base/tooltips/Tooltips"));
const BrandButtons = React.lazy(() =>
  import("../views/buttons/brand-buttons/BrandButtons")
);
const ButtonDropdowns = React.lazy(() =>
  import("../views/buttons/button-dropdowns/ButtonDropdowns")
);
const ButtonGroups = React.lazy(() =>
  import("../views/buttons/button-groups/ButtonGroups")
);
const Buttons = React.lazy(() => import("../views/buttons/buttons/Buttons"));
const Charts = React.lazy(() => import("../views/charts/Charts"));
const Dashboard = React.lazy(() => import("../views/dashboard/Dashboard"));
const CoreUIIcons = React.lazy(() =>
  import("../views/icons/coreui-icons/CoreUIIcons")
);
const Flags = React.lazy(() => import("../views/icons/flags/Flags"));
const Brands = React.lazy(() => import("../views/icons/brands/Brands"));
const Alerts = React.lazy(() => import("../views/notifications/alerts/Alerts"));
const Badges = React.lazy(() => import("../views/notifications/badges/Badges"));
const Modals = React.lazy(() => import("../views/notifications/modals/Modals"));
const Colors = React.lazy(() => import("../views/theme/colors/Colors"));

const Typography = React.lazy(() =>
  import("../views/theme/typography/Typography")
);
const Widgets = React.lazy(() => import("../views/widgets/Widgets"));
const Users = React.lazy(() => import("../views/users/Users"));
const User = React.lazy(() => import("../views/users/User"));

const Tags = React.lazy(() => import("../views/pages/tags/Tags"));  
const UsersList = React.lazy(() => import("../views/pages/users/Userlist"));
const Posts = React.lazy(() => import("../views/pages/posts/Posts"));
const FormTag = React.lazy(() => import("../views/pages/tags/AddTags"));
const TagSelect = React.lazy(() => import("../views/pages/tags/TagSelect"));
const TagModify = React.lazy(() => import("../views/pages/tags/TagModify"));
const AddUser = React.lazy(() => import("../views/pages/users/AddUser"));
const UserSelect = React.lazy(() => import("../views/pages/users/UserSelect"));
const UserModify = React.lazy(() => import("../views/pages/users/UserModify"));
const PostSelect = React.lazy(() => import("../views/pages/posts/PostSelect"));
const AddPost = React.lazy(() => import("../views/pages/posts/AddPost"));
const PostModify = React.lazy(() => import("../views/pages/posts/PostModify"));
const Login = React.lazy(() => import("../views/pages/login/Login"));
const RenewPassword = React.lazy(() =>
  import("../views/pages/renewpassword/renewpassword.js")
);
const Testpage = React.lazy(() => import("../views/pages/testpage"));

const routes = [
  // { path: '/', exact: true, name: 'Home' , component: Dashboard},
  { path: "/dashboard", name: "Dashboard", component: Dashboard, exact: true },
  { path: "/theme", name: "Theme", component: Colors, exact: true },
  { path: "/theme/colors", name: "Colors", component: Colors },
  { path: "/theme/typography", name: "Typography", component: Typography },
  { path: "/base", name: "Base", component: Cards, exact: true },
  // { path: "/", name: "Login", component: Login, exact: true },
  // {
  //   path: "/pages/renewpassword",
  //   name: "RenewPassword",
  //   component: RenewPassword,
  //   exact: true,
  // },
  {
    path: "/pages/testpage",
    name: "TestPage",
    component: Testpage,
    exact: true,
  },
  // { path: '/pages', name: 'Pages', component: Tags, exact: true },
  { path: "/pages/tags", name: "Tags", component: Tags, exact: true },
  {
    path: "/pages/tags/addtags",
    name: "AddTags",
    component: FormTag,
    exact: true,
  },
  {
    path: "/pages/tags/TagSelect/:nomtag",
    name: "SelectTags",
    component: TagSelect,
    exact: true,
  },
  {
    path: "/pages/tags/TagModify/:nomtag",
    name: "ModifyTags",
    component: TagModify,
    exact: true,
  },
  { path: "/pages/posts", name: "Posts", component: Posts, exact: true },
  {
    path: "/pages/posts/postselect/:idpost",
    name: "Select Posts",
    component: PostSelect,
    exact: true,
  },
  {
    path: "/pages/posts/addpost",
    name: "Add Posts",
    component: AddPost,
    exact: true,
  },
  {
    path: "/pages/posts/modifypost/:idpost",
    name: "Modify Posts",
    component: PostModify,
    exact: true,
  },
  { path: "/pages/users", name: "userList", component: UsersList, exact: true },
  {
    path: "/pages/users/adduser",
    name: "AddUser",
    component: AddUser,
    exact: true,
  },
  {
    path: "/pages/users/userselect/:iduser",
    name: "SelectUser",
    component: UserSelect,
    exact: true,
  },
  {
    path: "/pages/users/usermodify/:iduser",
    name: "Modify User",
    component: UserModify,
    exact: true,
  },
  { path: "/base/breadcrumbs", name: "Breadcrumbs", component: Breadcrumbs },
  { path: "/base/cards", name: "Cards", component: Cards },
  { path: "/base/carousels", name: "Carousel", component: Carousels },
  { path: "/base/collapses", name: "Collapse", component: Collapses },
  { path: "/base/forms", name: "Forms", component: BasicForms },
  { path: "/base/jumbotrons", name: "Jumbotrons", component: Jumbotrons },
  { path: "/base/list-groups", name: "List Groups", component: ListGroups },
  { path: "/base/navbars", name: "Navbars", component: Navbars },
  { path: "/base/navs", name: "Navs", component: Navs },
  { path: "/base/paginations", name: "Paginations", component: Paginations },
  { path: "/base/popovers", name: "Popovers", component: Popovers },
  { path: "/base/progress-bar", name: "Progress Bar", component: ProgressBar },
  { path: "/base/switches", name: "Switches", component: Switches },
  { path: "/base/tables", name: "Tables", component: Tables },
  { path: "/base/tabs", name: "Tabs", component: Tabs },
  { path: "/base/tooltips", name: "Tooltips", component: Tooltips },
  { path: "/buttons", name: "Buttons", component: Buttons, exact: true },
  { path: "/buttons/buttons", name: "Buttons", component: Buttons },
  {
    path: "/buttons/button-dropdowns",
    name: "Dropdowns",
    component: ButtonDropdowns,
  },
  {
    path: "/buttons/button-groups",
    name: "Button Groups",
    component: ButtonGroups,
  },
  {
    path: "/buttons/brand-buttons",
    name: "Brand Buttons",
    component: BrandButtons,
  },
  { path: "/charts", name: "Charts", component: Charts },
  { path: "/icons", exact: true, name: "Icons", component: CoreUIIcons },
  { path: "/icons/coreui-icons", name: "CoreUI Icons", component: CoreUIIcons },
  { path: "/icons/flags", name: "Flags", component: Flags },
  { path: "/icons/brands", name: "Brands", component: Brands },
  {
    path: "/notifications",
    name: "Notifications",
    component: Alerts,
    exact: true,
  },
  { path: "/notifications/alerts", name: "Alerts", component: Alerts },
  { path: "/notifications/badges", name: "Badges", component: Badges },
  { path: "/notifications/modals", name: "Modals", component: Modals },
  { path: "/notifications/toaster", name: "Toaster", component: Toaster },
  { path: "/widgets", name: "Widgets", component: Widgets },
  { path: "/users", exact: true, name: "Users", component: Users },
  { path: "/users/:id", exact: true, name: "User Details", component: User },
];

export default routes;
