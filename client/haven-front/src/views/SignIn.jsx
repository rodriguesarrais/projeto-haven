import React from "react";
import {motion } from 'framer-motion'

function SignIn() {
  return (
    <div className="bg-blue-300">
      <div>
        <h1></h1>
      </div>
      <div className="flex h-screen items-center justify-center">
        <div>
          <motion.h1
            animate={{ x: -50 }}
            className="text-center text-5xl font-semibold text-white mx-20"
          >
            Bem vinde de volta!
          </motion.h1>
        </div>
        <div className="w-full max-w-sm bg-white rounded-lg shadow-md p-5">
          <h1 className="text-center text-5xl font-bold my-4">Entrar</h1>
          <form className="text-center">
            <input
              type="text"
              className="w-64 h-12 bg-slate-200 caret-gray-300 rounded-lg text-center outline-none font-semibold mb-5"
              placeholder="Usuário"
            />
            <input
              type="password"
              className="w-64 h-12 bg-slate-200 caret-gray-300   rounded-lg text-center outline-none font-semibold mb-5"
              placeholder="Senha"
            />
            <br />
            <button className="w-16 h-10 bg-pink-500 hover:bg-pink-400 text-pink-100 rounded-lg">
              Entrar
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default SignIn;
