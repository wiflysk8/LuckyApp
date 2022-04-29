import React, { useState } from 'react'
import './FormPage.scss'
import { useForm } from 'react-hook-form'
import flechaatras from "../../assets/Buscador/flechaatras.png";
import Enviado from '../../shared/components/Enviado/Enviado';
import CustomPopup from '../../shared/components/CustomPopup/CustomPopup';





export default function FormPage() {
  
    const [visibility, setVisibility] = useState(false);

  const popupCloseHandler = (e) => {
    setVisibility(e);
  };
        const {register, handleSubmit, watch} = useForm();
       
        const submit = (data) => {
        console.log(data)
       
      }
      
  
  return (
      <form className='c-form'>

      <section className='c-form-section' id="firstForm">
    <div>
    <h3 className='c-form-section__mainTitle'>Formulario de adopción</h3>
    <section className='c-progress'>
    <div class="container">    
  <div class="progress2 progress-moved">
    <div class="progress-bar2" >
    </div>                       
  </div> 
</div>
</section>
    </div>
    <div>
        <h1 className='c-form-section__title'>Tus datos</h1>
    </div>
    <div className='c-form-section__block'>
        <input className="c-form-section__input" type="text" placeholder='Nombre y apellidos' {...register("nombre", {required:true})}/>

        <input className="c-form-section__input" type="text" placeholder='Email' {...register("email", {required:true})}/>

        <input className="c-form-section__input" type="text" placeholder='Teléfono' {...register("telefono", {required:true})}/>
   
        <input className="c-form-section__input" type="text" placeholder='DNI' {...register("dni", {required:true})}/>
    </div>
    <div>
    <div>
        <h1 className='c-form-section__title'>Dirección</h1>
    </div>
    <div className='c-form-section__block'>
        <input className="c-form-section__input" type="text" placeholder='Calle, número, piso' {...register("direccion", {required:true})}/>
 
        <input className="c-form-section__input" type="text" placeholder='Código postal' {...register("postal", {required:true})}/>
 
        <input className="c-form-section__input" type="text" placeholder='Ciudad' {...register("ciudad", {required:true})}/>
        </div>
    </div>
    <div className='c-form-section__input__condiciones'>
    <input type="checkbox" {...register("acepta", {required:true})}/> 
    <p className='c-form-section__p'>Acepto los términos y condiciones de la adopción</p>
    </div>
    <div className='c-form-section__boxBtn'>
        <a className="c-form-section__btn" href="#secondForm">Continuar</a>
    </div>
</section>


<section className='c-form-section' id="secondForm">
    <div>
    <div className='c-form-section__top'>
    
    <a href='#firstForm'><img className="c-form-section__arrow" src={flechaatras} alt="icon" href="#firstForm"/></a>
    <h3 className='c-form-section__mainTitle'>Formulario de adopción</h3>
    </div>
    <section className='c-progress'>
    <div class="container">    
  <div class="progress2 progress-moved">
    <div class="progress-bar2 progress-bar2--2" >
    </div>                       
  </div> 
</div>
</section>
    </div>
    <div>
        <h1 className='c-form-section__title'>Sobre las mascotas</h1>
    </div>
    <div className='c-form-section__block'>
    <label className='c-form-section__block__label c-form-section__block__label--mod'>
<div>
        <p className='c-form-section__block__label__p'>¿Tienes otros animales?</p></div>
        <div className='c-radius-right'>
        <div className='c-radius-right__1'>
        <input className="c-form-section__input c-form-section__input--mod" type="radio" name="alright" {...register("otros", {required:true})}/>
        <label className='c-form-section__option' for="si">Si</label></div>
        <div className='c-radius-right__2'>
        <input className="c-form-section__input c-form-section__input--mod" type="radio" name="alright" {...register("otros", {required:true})}/>
        <label className='c-form-section__option' for="no">No</label></div></div>
</label>
        <input className="c-form-section__input" type="text" placeholder='¿Cuáles?' {...register("cuales", {required:true})}/>

        <input className="c-form-section__input" type="text" placeholder='¿Se lleva bien con otros animales?' {...register("sociable", {required:true})}/>
    <label className='c-form-section__block__label'>
        <p className='c-form-section__block__label__p'>¿Por qué has elegido adoptar?</p>
        <input className="c-form-section__input" type="text" {...register("causa", {required:true})}/>
    </label>
    <label className='c-form-section__block__label'>
        <p className='c-form-section__block__label__p'>¿Conoces las necesidades del animal?</p>
        <input className="c-form-section__input" type="text" {...register("necesidades", {required:true})}/>
    </label>
    <label className='c-form-section__block__label'>
        <p className='c-form-section__block__label__p'>¿Conoces sus gustos?</p>
        <input className="c-form-section__input" type="text" {...register("gustos", {required:true})}/>
    </label>
   
    <label className='c-form-section__block__label'>
        <p className='c-form-section__block__label__p'>¿Conoces su alimentación?</p>
        <input className="c-form-section__input" type="text" {...register("alimentación", {required:true})}/>
    </label>
    </div>
    <div className='c-form-section__boxBtn'>
        <a className="c-form-section__btn" href="#thirdForm">Continuar</a>
    </div>
    </section>




    <section className='c-form-section' id="thirdForm">
    <div>
    <div className='c-form-section__top'>
    <a href='#secondForm'><img className="c-form-section__arrow" src={flechaatras} alt="icon" href="#secondForm"/></a>
    <h3 className='c-form-section__mainTitle'>Formulario de adopción</h3>
    </div>
    <section className='c-progress'>
    <div class="container">    
  <div class="progress2 progress-moved">
    <div class="progress-bar2 progress-bar2--3" >
    </div>                       
  </div> 
</div>
</section>
    </div>
    <div>
        <h1 className='c-form-section__title'>Familia y hogar</h1>
    </div>
    <div className='c-form-section__block'>
    <label className='c-form-section__block__label'>
        <p className='c-form-section__block__label__p'>¿Dónde vives?</p>
        <input className="c-form-section__input" type="text" placeholder='Piso, casa, chalet...' {...register("donde", {required:true})}/>
    </label>
    <label className='c-form-section__block__label c-form-section__block__label--mod'>
        <div>
        <p className='c-form-section__block__label__p'>¿Vives de alquiler?</p> 
        </div>
        <div className='c-radius-right'>
        <div className='c-radius-right__1'>
        <input className="c-form-section__input c-form-section__input--mod" type="radio" name="alquiler" {...register("alquiler", {required:true})}/>
        <label className='c-form-section__option'>Si</label>
        </div>
        <div className='c-radius-right__2'>
        <input className="c-form-section__input c-form-section__input--mod" type="radio" name="alquiler" {...register("alquiler", {required:true})}/>
        <label className='c-form-section__option'>No</label>
        </div>
        </div>
</label>
    <label className='c-form-section__block__label c-form-section__block__label--mod'>
    <div>
        <p className='c-form-section__block__label__p'>¿Tu casero permite animales?</p>
        </div>
        <div className='c-radius-right'>
        <div className='c-radius-right__1'>
        <input className="c-form-section__input c-form-section__input--mod" type="radio" name="casero" {...register("casero", {required:true})}/>
        <label className='c-form-section__option'>Si</label>
        </div>
        <div className='c-radius-right__2'>
        <input className="c-form-section__input c-form-section__input--mod" type="radio" name="casero" {...register("casero", {required:true})}/>
        <label className='c-form-section__option'>No</label>
        </div>
        </div>
</label>
<label className='c-form-section__block__label c-form-section__block__label--mod'>
<div>
        <p className='c-form-section__block__label__p'>¿Crees que podrías mudarte pronto?</p>
        </div>
        <div className='c-radius-right'> 
        <div className='c-radius-right__1'>
        <input className="c-form-section__input c-form-section__input--mod" type="radio" name="mudar" {...register("mudar", {required:true})}/>
        <label className='c-form-section__option' for="si">Si</label>
        </div>
        <div className='c-radius-right__2'>
        <input className="c-form-section__input c-form-section__input--mod" type="radio" name="mudar" {...register("mudar", {required:true})}/>
        <label className='c-form-section__option' for="no">No</label>
        </div>
        </div>
</label>
<label className='c-form-section__block__label c-form-section__block__label--mod'>
<div> 
        <p className='c-form-section__block__label__p'>¿Tiene jardín?</p>
        </div>
        <div className='c-radius-right'>
        
        <div className='c-radius-right__1'> 
        <input className="c-form-section__input c-form-section__input--mod" type="radio" name="jardin" {...register("jardin", {required:true})}/>
        <label className='c-form-section__option' for="si">Si</label>
        </div>
        <div className='c-radius-right__2'> 
        <input className="c-form-section__input c-form-section__input--mod" type="radio" name="jardin" {...register("jardin", {required:true})}/>
        <label className='c-form-section__option' for="no">No</label>
        </div>
        </div>
</label>
<label className='c-form-section__block__label c-form-section__block__label--mod'>
<div>
        <p className='c-form-section__block__label__p'>¿Vives con otras personas?</p>
        </div>
        <div className='c-radius-right'>
        <div className='c-radius-right__1'>
        <input className="c-form-section__input c-form-section__input--mod" type="radio" name="compis" {...register("compis", {required:true})}/>
        <label className='c-form-section__option' for="si">Si</label>
        </div>
        <div className='c-radius-right__2'>
        <input className="c-form-section__input c-form-section__input--mod" type="radio" name="compis" {...register("compis", {required:true})}/>
        <label className='c-form-section__option' for="no">No</label>
        </div>
        </div>
</label>
<label className='c-form-section__block__label c-form-section__block__label--mod'>
<div>
        <p className='c-form-section__block__label__p'>¿Están todos de acuerdo con la adopción?</p></div>
        <div className='c-radius-right'>
        <div className='c-radius-right__1'>
        <input className="c-form-section__input c-form-section__input--mod" type="radio" name="alright" {...register("alright", {required:true})}/>
        <label className='c-form-section__option' for="si">Si</label></div>
        <div className='c-radius-right__2'>
        <input className="c-form-section__input c-form-section__input--mod" type="radio" name="alright" {...register("alright", {required:true})}/>
        <label className='c-form-section__option' for="no">No</label></div></div>
</label>
{/* <label className='c-form-section__block__label c-form-section__block__label--mod'>
<div>
        <p className='c-form-section__block__label__p'>¿Estás de acuerdo con que visitemos tu casa?</p></div>
        <div className='c-radius-right'>
        <div className='c-radius-right__1'>
        <input className="c-form-section__input c-form-section__input--mod" type="radio" name="acuerdo" {...register("acuerdo", {required:true})}/>
        <label className='c-form-section__option' for="si">Si</label></div>
        <div className='c-radius-right__2'>
        <input className="c-form-section__input c-form-section__input--mod" type="radio" name="acuerdo" {...register("acuerdo", {required:true})}/>
        <label className='c-form-section__option' for="no">No</label>
        </div>
        </div>
</label> */}
    </div>
    <div className='c-form-section__boxBtn'>
        <button onClick={(e) => setVisibility(!visibility)} className="c-form-section__btn c-form-section__btn--mod">Enviar</button>
    <CustomPopup onClose={popupCloseHandler} show={visibility} title="">
          <Enviado />
        </CustomPopup>
        </div>
    </section>
    </form>

     

    
   
  )
}



{/* <form onSubmit={handleSubmit(submit)}>
<div>
    <label>
        Name
        <input type="text" {...register("name", {required:true})}/>
    </label>
    <FormError error={errors.name}/> 
</div>

<div>
    <label>
        Surname
        <input type="text" {...register("surname", {required:true})}/>
    </label>
    <FormError error={errors.surname}/>
</div> */}