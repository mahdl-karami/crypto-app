import { useState } from "react";
import Layout from "./assets/components/template/layout";
import CoinTable from "./assets/components/modules/CoinTable";
import Pagination from "./assets/components/modules/Pagination";

export default function App() {
  const [filter, setFilter] = useState({
    search: "",
    currency: "usd",
  });
  const [page, setPage] = useState(1);
  return (
    <div>
      <Layout filter={filter} setFilter={setFilter}>
        <CoinTable page={page} />
        <Pagination page={page} setPage={setPage} />
      </Layout>
    </div>
  );
}
