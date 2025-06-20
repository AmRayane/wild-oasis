import supabase, { supabaseUrl } from "./supabase";

export async function login({ email, password }) {
  let { data, error } = await supabase.auth.signInWithPassword({
    email,
    password,
  });
  if (error) {
    console.log(error.message);
  }
  return data;
}

export async function logout() {
  const { error } = await supabase.auth.signOut();
  if (error) {
    console.log(error.message);
  }
}

export async function singUp({ fullName, email, password }) {
  const { data, error } = await supabase.auth.signUp({
    email,
    password,
    options: {
      data: {
        fullName,
        avatar: "",
      },
    },
  });

  if (error) throw new Error(error.message);

  return data;
}

export async function getUser() {
  const { data, error } = await supabase.auth.getUser();
  if (error) throw new Error(error.message);
  return data?.user;
}

export async function updateUser({ fullName, avatar, newPassword }) {
  let newData;
  if (newPassword) newData = { newPassword };
  if (fullName) newData = { data: { fullName } };
  const { error } = await supabase.auth.updateUser(newData);
  if (error) throw new Error(error.message);

  const avatarName = `avatar-${Math.random()}`;
  const { error: storageError } = await supabase.storage
    .from("avatars")
    .upload(avatarName, avatar);
  if (storageError) throw new Error(storageError.message);
  const { error: errorAvatarLoading } = supabase.auth.updateUser({
    data: {
      avatar: `${supabaseUrl}/storage/v1/object/public/avatars/${avatarName}`,
    },
  });
  if (errorAvatarLoading) throw new Error(errorAvatarLoading.message);
}
