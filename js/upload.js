import { supabase } from "./supabase.js";

document.getElementById("btnEnviar").onclick = async () => {
  const archivo = document.getElementById("archivo").files[0];
  const tipo = document.getElementById("tipo").value.trim();

  if (!archivo) return alert("Selecciona un archivo");
  if (!tipo) return alert("Selecciona un tipo válido");

  // Verificar usuario autenticado
  const { data: sessionData } = await supabase.auth.getUser();

  if (!sessionData.user) {
    alert("Debe iniciar sesión nuevamente.");
    return;
  }

  const user = sessionData.user;

  console.log("USER:", user);

  const archivoLimpio = archivo.name
    .replace(/\s+/g, "_")
    .replace(/[^\w.-]/g, "");

  const nombre = `${user.id}/${tipo.toLowerCase()}-${archivoLimpio}`;

  console.log("Subiendo como:", nombre);

  // SUBIR ARCHIVO
  const { data, error } = await supabase.storage
    .from("documentos")
    .upload(nombre, archivo, {
      upsert: true
    });

  if (error) {
    console.error("Error real:", error);
    alert("Error: " + error.message);
    return;
  }

  alert("Archivo enviado correctamente");
};
