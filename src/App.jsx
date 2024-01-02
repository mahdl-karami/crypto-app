import { useState } from "react";
import Layout from "./assets/components/template/layout";
import CoinTable from "./assets/components/modules/CoinTable";

export default function App() {
  const [filter, setFilter] = useState({
    search: "",
    currency: "usd",
  });
  return (
    <div>
      <Layout filter={filter} setFilter={setFilter}>
        <CoinTable />
      </Layout>
    </div>
  );
}
