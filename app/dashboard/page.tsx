'use client'
import { useState } from "react";
import { lusitana } from "../ui/fonts";

export default function Dashboard() {
  
  const [dayWeek, setDayWeek] =useState(1);
  const [age, setAge] =useState(18);

  let DiasSemana=["Lunes","Martes","Miércoles","Jueves","Viernes","Sábado","Domingo"]

  const addDayWeek =()=>{
    if(dayWeek>=1 && dayWeek < 7){
      setDayWeek(dayWeek + 1)
    }
  }

  const resDayWeek =()=>{
    if(dayWeek <= 7 && dayWeek > 1){
      setDayWeek(dayWeek - 1)
    }
  }

  const addAge =()=>{
    if(age>=12 && age < 99){
      setAge(age + 1)
    }
  }

  const resAge =()=>{
    if(age <= 99 && age > 12){
      setAge(age - 1)
    }
  }




return (
<div className="h-full grid justify-center items-center">
<form className="max-w-md mx-auto p-10 rounded-lg">
  <h3 className={`${lusitana.className} pb-7 text-4xl text-gray-800`}>Formulario</h3>
  <div className="relative z-0 w-full mb-5 group">
      <input type="text" name="floating_screemList" id="floating_screemList" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
      <label htmlFor="floating_screemList" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-1 md:top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Paginas Visitadas (Home, Profile, Settings)</label>
  </div>
  
  <div className="relative z-0 w-full mb-5 group">
    <label htmlFor="fecha-inicio" className="block mb-2 text-sm font-base text-gray-500 dark:text-whit">
      Primer Inicio de Sesión:
    </label>
    <div className="relative max-w-sm">
      <input id="fecha-inicio" datepicker-format="mm/dd/yyyy" type="date" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full ps-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 outline-none" placeholder="Select date"/>
    </div>
  </div>
  <div className="relative z-0 w-full mb-5 group">
    <label htmlFor="fecha-inscripcion" className="block mb-2 text-sm font-base text-gray-500 dark:text-whit">
      Fecha Inscripcion:
    </label>
    <div className="relative max-w-sm">
      <input id="fecha-inscripcion" datepicker-format="mm/dd/yyyy" type="date" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full ps-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 outline-none" placeholder="Select date"/>
    </div>
  </div>
  <div className="relative z-0 w-full mb-5 group">
  <label htmlFor="hora-inscripcion" className="block mb-2 text-sm font-base text-gray-500 dark:text-whit">
      Hora:
    </label>
    <div className="relative max-w-sm">
      <input id="hora-inscripcion" type="time" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full ps-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 outline-none" placeholder="Select date"/>
    </div>
  </div>
  <div className="grid md:grid-cols-2 md:gap-6">
  <div className="w-full text-center pb-3">
    <label htmlFor="week-input" className="block mb-2 text-sm font-base text-gray-500 dark:text-white">Dia de la semana:</label>
    <div className="relative flex items-center w-full">
        <button onClick={()=>resDayWeek()} type="button" id="decrement-week" data-input-counter-decrement="quantity-input" className="bg-gray-100 dark:bg-gray-700 dark:hover:bg-gray-600 dark:border-gray-600 hover:bg-gray-200 border border-gray-300 rounded-s-lg p-3 h-11 focus:ring-gray-100 dark:focus:ring-gray-700 focus:ring-2 focus:outline-none">
            <svg className="w-3 h-3 text-gray-900 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 2">
                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h16"/>
            </svg>
        </button>
        <input type="text" id="week-input" data-input-counter aria-describedby="helper-text-explanation" className="bg-gray-50 border-x-0 border-gray-300 h-11 text-center text-gray-900 text-sm focus:ring-blue-500 focus:border-blue-500 block w-full py-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" value={DiasSemana[dayWeek - 1]} readOnly
        onChange={(e) => setAge(parseInt(e.target.value, 10))}  placeholder="99" required/>
        <button onClick={()=>addDayWeek()} type="button" id="increment-week" data-input-counter-increment="quantity-input" className="bg-gray-100 dark:bg-gray-700 dark:hover:bg-gray-600 dark:border-gray-600 hover:bg-gray-200 border border-gray-300 rounded-e-lg p-3 h-11 focus:ring-gray-100 dark:focus:ring-gray-700 focus:ring-2 focus:outline-none">
            <svg className="w-3 h-3 text-gray-900 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 18">
                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 1v16M1 9h16"/>
            </svg>
        </button>
    </div>
    </div>
    <div className="w-full text-center pb-3">
      <label htmlFor="age-input" className="block mb-2 text-sm font-base text-gray-500 dark:text-white">Edad:</label>
      <div className="relative flex items-center w-full">
          <button onClick={()=>resAge()} type="button" id="decrement-age" data-input-counter-decrement="quantity-input" className="bg-gray-100 dark:bg-gray-700 dark:hover:bg-gray-600 dark:border-gray-600 hover:bg-gray-200 border border-gray-300 rounded-s-lg p-3 h-11 focus:ring-gray-100 dark:focus:ring-gray-700 focus:ring-2 focus:outline-none">
              <svg className="w-3 h-3 text-gray-900 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 2">
                  <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h16"/>
              </svg>
          </button>
          <input type="number" id="age-input" data-input-counter aria-describedby="helper-text-explanation" className="bg-gray-50 border-x-0 border-gray-300 h-11 text-center text-gray-900 text-sm focus:ring-blue-500 focus:border-blue-500 block w-full py-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" value={age} readOnly
          onChange={(e) => setAge(parseInt(e.target.value, 100))}  placeholder="99" required/>
          <button onClick={()=>addAge()} type="button" id="increment-age" data-input-counter-increment="quantity-input" className="bg-gray-100 dark:bg-gray-700 dark:hover:bg-gray-600 dark:border-gray-600 hover:bg-gray-200 border border-gray-300 rounded-e-lg p-3 h-11 focus:ring-gray-100 dark:focus:ring-gray-700 focus:ring-2 focus:outline-none">
              <svg className="w-3 h-3 text-gray-900 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 18">
                  <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 1v16M1 9h16"/>
              </svg>
          </button>
      </div>
    </div>
  </div>
  <div className="grid md:grid-cols-2 md:gap-6">
    <div className="grid p-2 md:p-6 md:grid-row-2 md:gap-1">
    <div>
        <label className="relative inline-flex items-center mb-5 cursor-pointer">
            <input type="checkbox" value={``} className="sr-only peer"/>
            <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:w-5 after:h-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
            <span className="ms-3 text-sm font-medium text-gray-900 dark:text-gray-300">Likes</span>
          </label>
      </div>
    <div>
        <label className="relative inline-flex items-center mb-5 cursor-pointer">
            <input type="checkbox" value={``} className="sr-only peer"/>
            <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:w-5 after:h-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
            <span className="ms-3 text-sm font-medium text-gray-900 dark:text-gray-300">MiniJuegos</span>
          </label>
    </div>
    </div>
    <div className="grid p-2 md:p-6 md:grid-row-2 md:gap-1">
      <div>
        <label className="relative inline-flex items-center mb-5 cursor-pointer">
            <input type="checkbox" value={``} className="sr-only peer"/>
            <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:w-5 after:h-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
            <span className="ms-3 text-sm font-medium text-gray-900 dark:text-gray-300">Premium</span>
          </label>
      </div>
      <div>
        <label className="relative inline-flex items-center mb-5 cursor-pointer">
            <input type="checkbox" value={``} className="sr-only peer"/>
            <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:w-5 after:h-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
            <span className="ms-3 text-sm font-medium text-gray-900 dark:text-gray-300">Inscrito</span>
          </label>
      </div>
    </div>
  </div>
  <button type="submit" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Enviar</button>
</form>

    </div>
      );
  }