'use client'
import Link from 'next/link';
import { useRouter } from 'next/navigation'
import { lusitana } from '../ui/fonts';
import { useState } from 'react';
import { ILogin } from '../lib/definitions';



export default function Login() {
    const router = useRouter();
    const [formData, setFormData] = useState<ILogin>({
      email: '',
      password: '',
    });

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        try
        {
            await enviarDatosAlServidor(formData)
        }catch(error)
        {
            console.error('Error al enviar datos:', error);
        }
        
    };

    const enviarDatosAlServidor = async (data: ILogin) => {
        const response = await fetch("https://aerlonieapi.shop/api/login",{
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify(data),
          });
    
        if (!response.ok) {
          throw new Error('Error al enviar datos al servidor');
        }else{
            const res:any = await response.json();
            if(!res.error){
                console.log("exitoso")
                router.push('/dashboard');
            }else{
                console.log(res)
            }
        }
      };
  return (
    <>
      <form className="mx-auto grid w-[300px] max-w-md gap-6 rounded-md bg-gray-100 p-6 md:w-[450px]" onSubmit={handleSubmit}>
        <h3 className={`${lusitana.className} pb-7 text-4xl text-gray-800`}>
          Iniciar Sesión
        </h3>
        <div className="group relative z-0 mb-5 w-full">
          <input
            type="email"
            name="email"
            id="floating_email"
            className="peer block w-full appearance-none border-0 border-b-2 border-gray-300 bg-transparent px-0 py-2.5 text-sm text-gray-900 focus:border-blue-600 focus:outline-none focus:ring-0 dark:border-gray-600 dark:text-white dark:focus:border-blue-500"
            placeholder=" "
            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
            autoComplete='off'
            required
          />
          <label
            htmlFor="floating_email"
            className="absolute top-3 -z-10 origin-[0] -translate-y-6 scale-75 transform text-sm text-gray-500 duration-300 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:start-0 peer-focus:-translate-y-6 peer-focus:scale-75 peer-focus:font-medium peer-focus:text-blue-600 rtl:peer-focus:left-auto rtl:peer-focus:translate-x-1/4 dark:text-gray-400 peer-focus:dark:text-blue-500"
          >
            Email
          </label>
        </div>
        <div className="group relative z-0 mb-5 w-full">
          <input
            type="password"
            name="password"
            autoComplete='off'
            id="floating_password"
            className="peer block w-full appearance-none border-0 border-b-2 border-gray-300 bg-transparent px-0 py-2.5 text-sm text-gray-900 focus:border-blue-600 focus:outline-none focus:ring-0 dark:border-gray-600 dark:text-white dark:focus:border-blue-500"
            placeholder=" "
            onChange={(e) => setFormData({ ...formData, password: e.target.value })}
            required
          />
          <label
            htmlFor="floating_password"
            className="absolute top-3 -z-10 origin-[0] -translate-y-6 scale-75 transform text-sm text-gray-500 duration-300 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:start-0 peer-focus:-translate-y-6 peer-focus:scale-75 peer-focus:font-medium peer-focus:text-blue-600 rtl:peer-focus:translate-x-1/4 dark:text-gray-400 peer-focus:dark:text-blue-500"
          >
            Password
          </label>
        </div>
        <div className="flex items-center justify-between">
          <Link
            href={'/'}
            className="w-full rounded-lg bg-red-700 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-red-800 focus:outline-none focus:ring-4 focus:ring-blue-300 dark:bg-red-600 dark:hover:bg-blue-700 dark:focus:ring-red-800 sm:w-auto"
          >
            Atrás
          </Link>
          <button
            type="submit"
            className="w-full rounded-lg bg-blue-700 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 sm:w-auto"
          >
            Entrar
          </button>
        </div>
      </form>
    </>
  );
}
