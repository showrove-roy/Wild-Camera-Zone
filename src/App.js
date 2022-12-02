import { Toaster } from "react-hot-toast";
import { RouterProvider } from "react-router-dom";
import router from "./Routes/Route/Route";

function App() {
  return (
    <div className='max-w-[1400px] mx-auto'>
      <RouterProvider router={router}></RouterProvider>
      <Toaster
        toastOptions={{
          duration: 5000,
        }}
      />
    </div>
  );
}

export default App;
