"use client"

import React, { useState } from 'react';

import { Button } from '@nextui-org/react';
import { useRouter } from 'next/navigation';

import SearchIcon from '@mui/icons-material/Search';
import ErrorOutlineIcon from '@mui/icons-material/ErrorOutline';

export default function page(){
  const [passport, setPassport] = useState('')
  const [verification, setVerification] = useState('')
  const [error, setError] = useState('')
  const [buttonColor, setButtonColor] = useState('#594FC4')

  const router = useRouter();

  const handleButtonClick = async (e) => {
    e.preventDefault();

    if (passport === '' && verification === '') {
      console.log('empty')
      setError("*Required")
      setButtonColor('#ff3333')
    }
  }

  return (
    <div className='p-2'>
      {/* Top */}
      <div className='text-center font-black text-m pt-3 pb-6 font-Lato'>
        SITAC
      </div>

      {/* Body */}
      <div className='flex flex-col justify-center align-middle items-center'>
        {/* Heading */}
        <div className='flex flex-col justify-center align-middle items-center pb-5'>
          {/* Title */}
          <div className='text-center text-s font-Lato pb-3'>
            Consultar Documento Trámite
          </div>

          {/* Required */}
          <div className='text-left text-xs font-Lato pb-2'>
            *Required Fields
          </div>

          {/* Line */}
          <div className='h-0.5 bg-gray w-11/12'/>
        </div>

        {/* Body */}
        <div>
          {/* Title */}
          <div className='text-sm font-Lato pb-5'>
            Datos de Identificación
          </div>

          {/* Cautions */}
          <div className='flex flex-col'>
            {/* Top */}
            <div className='flex flex-row justify-center align-top px-5 py-3 bg-lightgray mx-2 my-1 rounded-md'>
              {/* Icon */}
              <div>
                <ErrorOutlineIcon
                  className='text-buttonhover text-ml pr-2'
                />
              </div>

              {/* Text */}
              <div className='text-dark text-ms'>
                Para realizar la consulta del documento expedido por el Ministerio de Relaciones Exteriores, diligencie la identificación del titular tal como aparece en el documento físico
              </div>
            </div>

            {/* Bottom */}
            <div className='flex flex-row justify-center align-top px-5 py-3 bg-lightgray mx-2 my-1 rounded-md'>
              {/* Icon */}
              <div>
                <ErrorOutlineIcon
                  className='text-buttonhover text-ml pr-2'
                />
              </div>

              {/* Text */}
              <div className='text-dark text-ms'>
                Ingrese el código de verificación
              </div>
            </div>
          </div>
        </div>

        {/* Form */}
        <form 
          onSubmit={handleButtonClick}
          className='flex flex-col'
        >
          <label 
            htmlFor="number"
            className='text-ms pb-2'
          >
            Núm. Pasaporte *
          </label>

          <input 
            id='number'
            className='mb-4'
            value={passport}
            onChange= {(e) => setPassport(e.target.value)}
          />
          {
            error && (
              <p className='text-error text-xs font-Lato'>
                {error}
              </p>
            )
          }

          <label 
            htmlFor="verification"
            className='text-ms pb-2'
          >
            Código de Verificación *
          </label>

          <input 
            id='verification'
            className='mb-4'
            value={verification}
            onChange= {(e) => setVerification(e.target.value)}
          />

          {
            error && (
              <p className='text-error text-xs font-Lato'>
                {error}
              </p>
            )
          }

          <button
            type='submit'
            style = {{backgroundColor: `${buttonColor}`}}
            className='w-24 h-9 text-gray font-Lato text-ms rounded-md hover:bg-buttonhover'
          >
            <SearchIcon 
              className='pr-2'
            />
            Buscar
          </button>
        </form>

        {/* Line */}
        <div className='h-0.5 bg-gray w-11/12 mt-5'/>
      </div>

      {/* Bottom */}
      <div className='bottom-0 font-Lato text-ms text-center text-dark'>
        This application works best in Internet Explorer 8 (or higher), Mozilla Firefox or Google Chrome <br />
        @Versión 6.2.5
      </div>
    </div>
  )
}