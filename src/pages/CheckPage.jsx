import React, { useState } from 'react'
import { useParams , useLoaderData, Navigate, useNavigate} from 'react-router-dom';
import SchadeForm from '../components/SchadeForm';
import OnderhoudForm from '../components/OnderhoudForm';
import InspectieForm from '../components/InspectieForm';
import InventarisatieForm from '../components/InventarisatieForm';
import {toast} from 'react-toastify'



const CheckPage = ({addEditCheck}) => {
  const { id, adres } = useParams();
  const check = useLoaderData();
  const [schadeLocatie, setSchadeLocatie] = useState('');
  const [schadeNieuw, setSchadeNieuw] = useState('False');
  const [schadeAcuut, setSchadeAcuut] = useState('False');
  const [schadeSoort, setSchadeSoort] = useState('normaal gebruik');
  const [schadeDatum, setSchadeDatum] = useState('');
  const [schadeOmschrijving, setSchadeOmschrijving] = useState('');
  const [schadeFotos, setSchadeFotos] = useState([]);

  const navigate = useNavigate();

  
  // Schade Set States
  const [schadeGemeld, setSchadeGemeld] = useState(check.Schade.schadeGemeld === true)
  const schadeCheckHandler = () => {
    setSchadeGemeld(!schadeGemeld)
  }
  const handleSchadeLocatie = (e) => {setSchadeLocatie(e.target.value);}
  const handleSchadeNieuw = (e) => {setSchadeNieuw(e.target.value);}
  const handleSchadeAcuut = (e) => {setSchadeAcuut(e.target.value);}
  const handleSchadeSoort = (e) => {setSchadeSoort(e.target.value);}
  const handleSchadeDatum = (e) => {setSchadeDatum(e.target.value);}
  const handleSchadeOmschrijving = (e) => {setSchadeOmschrijving(e.target.value);}
  
  
  const [onderhoudLocatie, setOnderhoudLocatie] = useState('');
  const [onderhoudAcuut, setOnderhoudAcuut] = useState('False');
  const [onderhoudSoort, setOnderhoudSoort] = useState('anders');
  const [onderhoudPrijs, setOnderhoudPrijs] = useState('0-500');
  const [onderhoudFotos, setOnderhoudFotos] = useState([]);

  const [onderhoudGemeld, setOnderhoudGemeld] = useState(check.Onderhoud.onderhoudGemeld === true)

  const handleOnderhoudLocatie = (e) => {setOnderhoudLocatie(e.target.value);}
  const handleOnderhoudAcuut = (e) => {setOnderhoudAcuut(e.target.value);}
  const handleOnderhoudSoort = (e) => {setOnderhoudSoort(e.target.value);}
  const handleOnderhoudPrijs = (e) => {setOnderhoudPrijs(e.target.value);}

  const onderhoudCheckHandler = () => {
    setOnderhoudGemeld(!onderhoudGemeld)
  }

  const [inspectieGemeld, setInspectieGemeld] = useState(check.Inspectie.inspectieGemeld === true)
  const inspectieCheckHandler = () => {
    setInspectieGemeld(!inspectieGemeld)
  }
  
  const [inspectieLocatie, setInspectieLocatie] = useState('');
  const [inspectieSoort, setInspectieSoort] = useState('anders');
  const [inspectieStoring, setInspectieStoring] = useState('');
  const [inspectieProcedure, setInspectieProcedure] = useState('');
  const [inspectieGoedgekeurd, setInspectieGoedgekeurd] = useState('True');
  const [inspectieOpmerking, setInspectieOpmerking] = useState('');
  const [inspectieFotos, setInspectieFotos] = useState([]);

  const handleInspectieLocatie = (e) => {setInspectieLocatie(e.target.value);}
  const handleInspectieSoort = (e) => {setInspectieSoort(e.target.value);}
  const handleInspectieStoring = (e) => {setInspectieStoring(e.target.value);}
  const handleInspectieProcedure = (e) => {setInspectieProcedure(e.target.value);}
  const handleInspectieGoedgekeurd = (e) => {setInspectieGoedgekeurd(e.target.value);}
  const handleInspectieOpmerking = (e) => {setInspectieOpmerking(e.target.value);}


  const [inventarisatieGemeld, setInventarisatieGemeld] = useState(check.Inventarisatie.inventarisatieGemeld === true)
  const inventarisatieCheckHandler = () => {
    setInventarisatieGemeld(!inventarisatieGemeld)
  }

  const [invSituatie, setInvSituatie] = useState('');
  const [invLocatie, setInvLocatie] = useState('');
  const [invUitvoerder, setInvUitvoerder] = useState('');
  const [invBeschrijving, setInvBeschrijving] = useState('');
  const [invActie, setInvActie] = useState('');
  const [invOpmerking, setInvOpmerking] = useState('');
  const [invFotos, setInvFotos] = useState([]);

  const handleInvSituatie = (e) => {setInvSituatie(e.target.value);}
  const handleInvLocatie = (e) => {setInvLocatie(e.target.value);}
  const handleInvUitvoerder = (e) => {setInvUitvoerder(e.target.value);}
  const handleInvBeschrijving = (e) => {setInvBeschrijving(e.target.value);}
  const handleInvActie = (e) => {setInvActie(e.target.value);}
  const handleInvOpmerking = (e) => {setInvOpmerking(e.target.value);}


  
  const imageSchadeHandler = (e) => {

      const imageArray = Array.from(e.target.files).map((file) =>
      URL.createObjectURL(file))
      
      setSchadeFotos((prevImages) =>
        prevImages.concat(imageArray)
    );
}
  const imageOnderhoudHandler = (e) => {

      const imageArray = Array.from(e.target.files).map((file) =>
      URL.createObjectURL(file))
      
      setOnderhoudFotos((prevImages) =>
        prevImages.concat(imageArray)
    );
}
  const imageInspectieHandler = (e) => {

      const imageArray = Array.from(e.target.files).map((file) =>
      URL.createObjectURL(file))
      
      setInspectieFotos((prevImages) =>
        prevImages.concat(imageArray)
    );
}
  const imageInvHandler = (e) => {

      const imageArray = Array.from(e.target.files).map((file) =>
      URL.createObjectURL(file))
      
      setInvFotos((prevImages) =>
        prevImages.concat(imageArray)
    );
}
const submitForm = (e) => {
  e.preventDefault();
  const editCheck = {
      id,
      adres : check.adres ,
      nieuw: false,
      Schade: {
        schadeGemeld,
        schadeNieuw,
        schadeLocatie,
        schadeSoort,
        schadeDatum,
        schadeAcuut,
        schadeOmschrijving,
        schadeFotos
      },
      Onderhoud: {
        onderhoudGemeld,
        onderhoudLocatie,
        onderhoudSoort,
        onderhoudAcuut,
        onderhoudPrijs,
        onderhoudFotos,
      },
      Inspectie: {
        inspectieGemeld,
        inspectieLocatie,
        inspectieSoort,
        inspectieStoring,
        inspectieProcedure,
        inspectieGoedgekeurd, 
        inspectieOpmerking, 
        inspectieFotos
      },
      Inventarisatie: {
        inventarisatieGemeld,
        invSituatie,
        invLocatie,
        invUitvoerder,
        invBeschrijving,
        invActie,
        invOpmerking,
        invFotos
      }
  };

  addEditCheck(editCheck);
  toast.success('Check verstuurd!')
  return navigate('/checkspage')
}

  return (
  <div>
    <h2 className="text-rec-blue text-xl font-semibold ">Check: {check.id}</h2>
    <div className='text-start mt-4 border-b-2 '>
      <p>Check ID:<span className='font-semibold'>{check.id}</span></p>
      <p >Datum aangemeld: <span className='font-semibold'>{check.datum}</span></p>
      <p className='mb-3'>Adres: <span className='font-semibold'>{check.adres}</span></p>
    </div>
    <form className="flex flex-col gap-y-5 mt-4 mb-4 " onSubmit={submitForm}>
      <fieldset className='text-start mb-4'>
        <legend>Check-in Redenen</legend>
        <div className='mt-2'>
          <input type="checkbox" id="schadeGemeld" name="schadeGemeld" className='mr-2'
          checked={schadeGemeld}
          onChange={schadeCheckHandler}
          />
          <label htmlFor="Gemeld">Schade</label>
        </div>
        <div>
          <input type="checkbox" id="onderhoud" name="onderhoud" className='mr-2'
          checked={onderhoudGemeld}
          onChange={onderhoudCheckHandler} />
          <label htmlFor="onderhoud">Onderhoud</label>
        </div>
        <div>
          <input type="checkbox" id="inspectie" name="inspectie" className='mr-2'
          checked={inspectieGemeld}
          onChange={inspectieCheckHandler} />
          <label htmlFor="inspectie">Inspectie</label>
        </div>
        <div>
          <input type="checkbox" id="inventarisatie" name="inventarisatie" className='mr-2'
           checked={inventarisatieGemeld}
           onChange={inventarisatieCheckHandler} />
          
          <label htmlFor="inventarisatie">Inventarisatie</label>
        </div>
      </fieldset>


      {/* Schade Formulier */}
      {schadeGemeld ? <SchadeForm
        schadeNieuw = {schadeNieuw} handleSchadeNieuw = {handleSchadeNieuw}
        schadeLocatie = {schadeLocatie} handleSchadeLocatie = {handleSchadeLocatie}
        schadeAcuut = {schadeAcuut} handleSchadeAcuut = {handleSchadeAcuut}
        schadeSoort = {schadeSoort} handleSchadeSoort = {handleSchadeSoort}
        schadeOmschrijving = {schadeOmschrijving} handleSchadeOmschrijving = {handleSchadeOmschrijving}
        schadeFotos = {schadeFotos}
        schadeDatum = {schadeDatum} handleSchadeDatum = {handleSchadeDatum}
        imageSchadeHandler = {imageSchadeHandler}
      />
        
        : <></>}
        {onderhoudGemeld ? <OnderhoudForm 
        onderhoudLocatie = {onderhoudLocatie} handleOnderhoudLocatie = {handleOnderhoudLocatie}
        onderhoudSoort = {onderhoudSoort} handleOnderhoudSoort = {handleOnderhoudSoort}
        onderhoudAcuut = {onderhoudAcuut} handleOnderhoudAcuut = {handleOnderhoudAcuut}
        onderhoudPrijs = {onderhoudPrijs} handleOnderhoudPrijs = {handleOnderhoudPrijs}
        onderhoudFotos = {onderhoudFotos}
        imageOnderhoudHandler = {imageOnderhoudHandler}
        /> : <></>}

        {inspectieGemeld ? <InspectieForm 
        inspectieLocatie = {inspectieLocatie} handleInspectieLocatie = {handleInspectieLocatie}
        inspectieSoort = {inspectieSoort} handleInspectieSoort = {handleInspectieSoort}
        inspectieStoring = {inspectieStoring} handleInspectieStoring = {handleInspectieStoring}
        inspectieProcedure = {inspectieProcedure} handleInspectieProcedure = {handleInspectieProcedure}
        inspectieGoedgekeurd = {inspectieGoedgekeurd} handleInspectieGoedgekeurd = {handleInspectieGoedgekeurd}
        inspectieOpmerking = {inspectieOpmerking} handleInspectieOpmerking = {handleInspectieOpmerking}
        inspectieFotos = {inspectieFotos}
        imageInspectieHandler = {imageInspectieHandler}
        /> : <></>}

        {inventarisatieGemeld ? <InventarisatieForm 
        invSituatie = {invSituatie} handleInvSituatie = {handleInvSituatie}
        invLocatie = {invLocatie} handleInvLocatie = {handleInvLocatie}
        invUitvoerder = {invUitvoerder} handleInvUitvoerder = {handleInvUitvoerder}
        invBeschrijving = {invBeschrijving} handleInvBeschrijving = {handleInvBeschrijving}
        invActie = {invActie} handleInvActie = {handleInvActie}
        invOpmerking = {invOpmerking} handleInvOpmerking = {handleInvOpmerking}
        invFotos = {invFotos}
        imageInvHandler = {imageInvHandler}

        /> : <></>}


        {/* Inspectie Formulier */}
        <button type="submit" className="border-[1px]  border-rec-blue h-10 w-2/3 m-auto rounded-lg mt-4 font-medium"  >Versturen</button>
    </form>   
  </div>

)
}

const checkLoader = async ({params}) => {
  const res = await fetch(`https://my-json-server.typicode.com/DavidvdBent/realestatedatabase/checks/${params.id}`);
  const data = await res.json();
  return data;
}

export {CheckPage as default, checkLoader };
