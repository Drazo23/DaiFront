package com.porfolio.Dai.Interface;

import com.porfolio.Dai.Entity.Persona;
import java.util.List;


public interface IPersonaService {
    //Traer una lista de personas
    public List<Persona> getPersona();
    
    //Guardar un objeto de tipo Persaona
    public void savePersona(Persona persona);
    
    //Eliminar un objeto pero buscado por ID
    public void deletePersona(Long id);
    
    //Buscar una persona por ID
    public Persona findPersona(Long id);
    
}
