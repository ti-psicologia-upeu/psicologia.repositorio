import { supabase } from "./supabase.js";

async function cargar() {
  const { data: session } = await supabase.auth.getUser();
  const user = session.user;

  const { data, error } = await supabase
    .from("users_docs")
    .select("*")
    .eq("user_id", user.id);

  let tabla = document.getElementById("tabla");

  data.forEach((doc) => {
    let tr = document.createElement("tr");

    tr.innerHTML = `
      <td>${doc.tipo}</td>
      <td>${doc.estado}</td>
      <td>${doc.observacion}</td>
    `;

    tabla.appendChild(tr);
  });
}

cargar();
