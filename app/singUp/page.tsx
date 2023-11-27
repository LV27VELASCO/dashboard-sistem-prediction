'use client'
import Link from 'next/link';
import { lusitana } from '../ui/fonts';
import { useState } from 'react';
import { ISingUp } from '../lib/definitions';
import { useRouter } from 'next/navigation';
export default function SingUp() {

  const [isAdmin, setIsAdmin] = useState(true)
  const [info, setInfo] = useState("")
  const [formData,setFormData] = useState<ISingUp>({
    userName: '',
    email: '',
    password: '',
    admin: false,
  })

  const router = useRouter();

  const handleSubmit = async (e:React.FormEvent<HTMLFormElement>)=>{
    e.preventDefault();
    try
    {
      await enviarDatosServidor(formData)
    }catch(err){

    }
  }

  const enviarDatosServidor= async (data:ISingUp)=>{
    let url:string = data.admin?"https://aerlonieapi.shop/api/useradmin":"https://aerlonieapi.shop/api/users";
    const response = await fetch(url,{
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
            console.log(res)
            if(res.error !=="User already registered"){
                router.push('/login');
            }else{
              setInfo(res.error)
              setTimeout(() => {
                setInfo("")
              }, 3000);
            }
        }
  }

  return (
    <>
      <form className="mx-auto w-[300px] max-w-md rounded-md bg-gray-100 p-6 md:w-[450px]" onSubmit={handleSubmit}>
        <h3 className={`${lusitana.className} pb-7 text-4xl text-gray-800`}>
          Regístrate
        </h3>
        <div className="group relative z-0 mb-5 w-full">
          <input
            type="text"
            name="userName"
            autoComplete='off'
            id="floating_userName"
            className="peer block w-full appearance-none border-0 border-b-2 border-gray-300 bg-transparent px-0 py-2.5 text-sm text-gray-900 focus:border-blue-600 focus:outline-none focus:ring-0 dark:border-gray-600 dark:text-white dark:focus:border-blue-500"
            placeholder=" "
            onChange={(e)=>setFormData({...formData,userName:e.target.value})}
            required
          />
          <label
            htmlFor="floating_userName"
            className="absolute top-3 -z-10 origin-[0] -translate-y-6 scale-75 transform text-sm text-gray-500 duration-300 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:start-0 peer-focus:-translate-y-6 peer-focus:scale-75 peer-focus:font-medium peer-focus:text-blue-600 rtl:peer-focus:translate-x-1/4 dark:text-gray-400 peer-focus:dark:text-blue-500"
          >
            Nombre
          </label>
        </div>
        <div className="group relative z-0 mb-5 w-full">
          <input
            type="email"
            name="floating_email"
            id="floating_email"
            autoComplete='off'
            className="peer block w-full appearance-none border-0 border-b-2 border-gray-300 bg-transparent px-0 py-2.5 text-sm text-gray-900 focus:border-blue-600 focus:outline-none focus:ring-0 dark:border-gray-600 dark:text-white dark:focus:border-blue-500"
            placeholder=" "
            onChange={(e)=>setFormData({...formData,email:e.target.value})}
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
            name="floating_password"
            autoComplete='off'
            id="floating_password"
            className="peer block w-full appearance-none border-0 border-b-2 border-gray-300 bg-transparent px-0 py-2.5 text-sm text-gray-900 focus:border-blue-600 focus:outline-none focus:ring-0 dark:border-gray-600 dark:text-white dark:focus:border-blue-500"
            placeholder=" "
            onChange={(e)=>setFormData({...formData,password:e.target.value})}
            required
          />
          <label
            htmlFor="floating_password"
            className="absolute top-3 -z-10 origin-[0] -translate-y-6 scale-75 transform text-sm text-gray-500 duration-300 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:start-0 peer-focus:-translate-y-6 peer-focus:scale-75 peer-focus:font-medium peer-focus:text-blue-600 rtl:peer-focus:translate-x-1/4 dark:text-gray-400 peer-focus:dark:text-blue-500"
          >
            Password
          </label>
        </div>
        <div>
          <label className="relative inline-flex items-center mb-5 cursor-pointer">
            <input type="checkbox" value={`${isAdmin}`} onClick={()=>setIsAdmin(!isAdmin)} onChange={(e)=>setFormData({...formData,admin:e.target.value =="true"})} className="sr-only peer"/>
            <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:w-5 after:h-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
            <span className="ms-3 text-sm font-medium text-gray-900 dark:text-gray-300">Admin</span>
          </label>
        </div>
        <div className='pb-3'>
          <p className="overflow-hidden text-sm text-red-600">{info}</p>
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
            Crear
          </button>
        </div>
      </form>
    </>
  );
}
