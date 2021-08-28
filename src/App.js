import "./styles.css";
import axios from "axios";
import { useQuery, QueryClient, QueryClientProvider } from "react-query";
import { ReactQueryDevtools } from "react-query/devtools";

async function Fecth(url) {
  return await axios.get("https://swapi.dev/api/people/?format=json");
}

function GetData() {
  const { status, data } = useQuery("responseData", Fecth);
  /* console.log(data) */
  if (status === "loading") return "Loading...";
  if (status === "error") return "Hata...";
  return (
    <div>
      {data.data.results.map((data) => (
        <p>{data.name}</p>
      ))}
      <ReactQueryDevtools initialIsOpen />
    </div>
  );
}

const queryClient = new QueryClient();

export default function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <GetData />
    </QueryClientProvider>
  );
}
