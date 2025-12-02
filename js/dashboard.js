import { supabase } from "./supabase.js";

// Verificar sesión
supabase.auth.getSession().then(({ data }) => {
  if (!data.session) window.location.href = "index.html";
});

// Botones
document.getElementById("btnUpload").onclick = () => {
  window.location.href = "upload.html";
};

document.getElementById("btnEstado").onclick = () => {
  window.location.href = "estado.html";
};

document.getElementById("btnLogout").onclick = async () => {
  await supabase.auth.signOut();
  window.location.href = "index.html";
};
