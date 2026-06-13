import { motion } from "framer-motion";
import Home from "./pages/Home";

function App() {
   return  (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8}}
      className="bg-slate-950"
    >
   
  <Home />

    </motion.div>
  );
}

export default App;