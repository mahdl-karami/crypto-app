import { useState } from "react";
import Layout from "./assets/components/template/layout";

export default function App() {
  const [filter, setFilter] = useState({
    search: "",
    currency: "usd",
  });
  return (
    <div>
      <Layout filter={filter} setFilter={setFilter}>
        <h1>Layout Complated</h1>
      </Layout>
    </div>
  );
}
