import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Favorites from "./pages/Favorites";
import Nav from "./components/Nav";
import Search from "./pages/Search";

// import Books from "./pages/Books";
// import Detail from "./pages/Detail";
// import NoMatch from "./pages/NoMatch";
// import Nav from "./components/Nav";

// function App() {
//   return (
//     <Router>
//       <div>
//         <Nav />
//         <Switch>
//           <Route exact path={["/", "/books"]}>
//             <Books />
//           </Route>
//           <Route exact path="/books/:id">
//             <Detail />
//           </Route>
//           <Route>
//             <NoMatch />
//           </Route>
//         </Switch>
//       </div>
//     </Router>
//   );
// }

function App() {
  return (
    <Router>
      <div>
        <Nav />
        <Switch>
          <Route exact path="/" component={Search} />{" "}
          <Route exact path="/favorites" component={Favorites} />{" "}
        </Switch>{" "}
      </div>{" "}
    </Router>
  );
}

export default App;
