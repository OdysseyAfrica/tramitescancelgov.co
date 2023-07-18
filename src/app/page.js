"use client"

import React, { useState } from 'react';
import ReCAPTCHA from "react-google-recaptcha";
import Image from 'next/image';

import { useRouter } from 'next/navigation';

import SearchIcon from '@mui/icons-material/Search';
import ErrorOutlineIcon from '@mui/icons-material/ErrorOutline';

import net from '../../public/internet.png';
import chrome from '../../public/chrome.png';
import mozilla from '../../public/mozilla.png';

const key = "6LfAdDQnAAAAAOIEbj7JY21dyGqw_gfDvZBXLlq9";

export default function Page(){
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
    } else {
      router.push('/verify')
    }
  }

  const [verified, setVerified] = useState(false);

  function onChange(value) {
    setVerified(true)
  }

  return (
    <div className='p-2'>
      {/* Top */}
      <div className='text-right font-black text-m pt-3 pb-6 font-Lato pr-10'>
        SITAC
      </div>

      {/* Body */}
      <div className='flex flex-col justify-center align-middle items-center'>
        {/* Heading */}
        <div className='flex flex-col justify-center pb-5 w-full'>
          {/* Title */}
          <div className='text-left text-s font-Lato pb-3'>
            Consultar Documento Trámite
          </div>

          {/* Required */}
          <div className='text-left text-xs font-Lato pb-2'>
            *Required Fields
          </div>

          {/* Line */}
          <div className='h-0.5 bg-gray w-full'/>
        </div>

        {/* Body */}
        <div className='flex flex-col justify-center pb-5 w-full'>
          {/* Title */}
          <div className='text-sm font-Lato pb-5'>
            Datos de Identificación
          </div>

          {/* Cautions */}
          <div className='flex flex-col'>
            {/* Top */}
            <div className='flex flex-row align-top py-3 bg-lightgray my-1 rounded-md'>
              {/* Icon */}
              <div>
                <ErrorOutlineIcon
                  className='text-buttonhover text-mxl mr-5'
                />
              </div>

              {/* Text */}
              <div className='text-dark text-ms'>
                Para realizar la consulta del documento expedido por el Ministerio de Relaciones Exteriores, diligencie la identificación del titular tal como aparece en el documento físico
              </div>
            </div>

            {/* Bottom */}
            <div className='flex flex-row align-top py-2 bg-lightgray my-0.5 rounded-md'>
              {/* Icon */}
              <div>
                <ErrorOutlineIcon
                  className='text-buttonhover text-mxl mr-5'
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
          className='flex flex-col justify-start w-full'
        >
          <label 
            htmlFor="number"
            className='text-ms pb-2'
          >
            Núm. Pasaporte *
          </label>

          <input 
            id='number'
            className='mb-4 text-sm py-1 border border-1 rounded-md border-buttonhover active:border-buttonhover after:border-buttonhover'
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
            className='mb-4 text-sm py-1 border border-1 rounded-md border-buttonhover'
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

          {/* Recapture */}
          <div className='flex justify-center p-3'>
            <ReCAPTCHA
              sitekey="6LeIxAcTAAAAAJcZVRqyHh71UMIEGNQ_MXjiZKhI"
              onChange={onChange}
            />
          </div>

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
      <div className='inline bottom-0 font-Lato text-ms text-center text-dark'>
        This application works best in Internet Explorer 8<Image 
          src={net}
          className='inline'
        />
         (or higher), Mozilla Firefox<Image 
          src={mozilla}
          className='inline'
         />
          or Google Chrome<Image
            src={chrome}
            className='inline'
          />
        @Versión 6.2.5
      </div>
    </div>
  )
}