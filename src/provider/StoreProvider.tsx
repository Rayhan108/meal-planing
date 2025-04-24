"use client";

import { ReactNode} from "react";


import { PersistGate } from "redux-persist/integration/react";
import { persistor, store } from "@/redux/store";
import { Provider } from "react-redux";
import { Toaster } from "react-hot-toast";


export default function StoreProvider({ children }: { children: ReactNode }) {





  return (
    <Provider store={store}>
          <PersistGate loading={null} persistor={persistor}>
      <Toaster/>
      {children}
      </PersistGate>
    </Provider>


  );
}