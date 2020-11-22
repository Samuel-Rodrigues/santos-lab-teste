export const retornaNomeDoEmail = (email: string) => {
  var res = email.split('@', 1)
  return  res[0];
}