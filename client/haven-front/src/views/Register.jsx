import React from "react";
import { motion } from "framer-motion";

function Register() {
  return (
    <div className="bg-blue-300">
      <div className="flex h-screen items-center justify-center">
        <div>
          <motion.h1
            animate={{ x: -50 }}
            className="text-center text-5xl font-semibold text-white mx-20"
          >
            Oi! primeira vez por aqui?
          </motion.h1>
        </div>
        <div className="w-full max-w-sm bg-white rounded-lg shadow-md p-5">
          <h1 className="text-center text-5xl font-bold my-4 text-slate-700">
            Registre-se
          </h1>
          <form className="text-center">
            <input
              type="text"
              className="w-64 h-12 bg-slate-200 caret-slate-300 rounded-lg text-center outline-none font-semibold mb-5"
              placeholder="Seu usuário"
            />
            <input
              type="text"
              className="w-64 h-12 bg-slate-200 caret-slate-300 rounded-lg text-center outline-none font-semibold mb-5"
              placeholder="Seu email"
            />
            <input
              type="password"
              className="w-64 h-12 bg-slate-200 caret-slate-300 rounded-lg text-center outline-none font-semibold mb-5"
              placeholder="Sua senha"
            />
            <br />
            <button className="w-24 h-10 bg-pink-500 transition-all hover:bg-pink-400 text-pink-100 rounded-lg">
              Registrar!
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Register;
